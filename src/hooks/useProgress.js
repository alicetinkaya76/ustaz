import { useState, useCallback, useMemo, useEffect } from "react";
import { idbSave, idbLoad } from "../utils/idb";

const STORAGE_KEY = "ustaz-progress";
const IDB_KEY = "progress-main";

const defaultProgress = {
  profile: null,
  currentLessonId: "L01-fatiha",
  completedLessons: [],
  vocabulary: {},
  totalRootsLearned: 0,
  lastSessionDate: null,
  assessmentDone: false,
  quizResults: {},
  activeTab: "verses",
  // SM-2 spaced repetition state per root
  rootSR: {},
  // XP & Gamification
  xp: 0,
  streak: 0,
  lastStreakDate: null,
  achievements: [],
};

// ── SM-2 Algorithm ──
function sm2(prev, quality) {
  let { interval, repetition, easeFactor } = prev || { interval: 0, repetition: 0, easeFactor: 2.5 };

  if (quality < 3) {
    repetition = 0;
    interval = 0;
  } else {
    if (repetition === 0) interval = 1;
    else if (repetition === 1) interval = 3;
    else interval = Math.round(interval * easeFactor);
    repetition++;
  }

  easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (easeFactor < 1.3) easeFactor = 1.3;

  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + (interval || 1));

  return {
    interval,
    repetition,
    easeFactor: Math.round(easeFactor * 100) / 100,
    nextReview: nextReview.toISOString(),
    lastReview: new Date().toISOString(),
    quality,
  };
}

// ── XP Constants ──
const XP_QUIZ_CORRECT = 10;
const XP_LESSON_COMPLETE = 50;
const XP_STREAK_BONUS = 20;
const XP_ROOT_MASTERY = 15;

// ── Achievement Definitions ──
const ACHIEVEMENT_DEFS = [
  { id: "first_lesson", title: "İlk Adım", desc: "İlk dersini tamamla", icon: "🌱", check: (p) => p.completedLessons.length >= 1 },
  { id: "five_lessons", title: "Beş Ders", desc: "5 ders tamamla", icon: "📚", check: (p) => p.completedLessons.length >= 5 },
  { id: "ten_lessons", title: "On Ders", desc: "10 ders tamamla", icon: "🎓", check: (p) => p.completedLessons.length >= 10 },
  { id: "twenty_lessons", title: "Yirmi Ders", desc: "20 ders tamamla", icon: "⭐", check: (p) => p.completedLessons.length >= 20 },
  { id: "fifty_lessons", title: "Yarım Yüz", desc: "50 ders tamamla", icon: "🏆", check: (p) => p.completedLessons.length >= 50 },
  { id: "ten_roots", title: "Kök Avcısı", desc: "10 kök öğren", icon: "🌿", check: (p) => p.totalRootsLearned >= 10 },
  { id: "fifty_roots", title: "Kök Ustası", desc: "50 kök öğren", icon: "🌳", check: (p) => p.totalRootsLearned >= 50 },
  { id: "hundred_roots", title: "Sarf Âlimi", desc: "100 kök öğren", icon: "🏛️", check: (p) => p.totalRootsLearned >= 100 },
  { id: "streak_3", title: "Üç Gün", desc: "3 günlük seri", icon: "🔥", check: (p) => p.streak >= 3 },
  { id: "streak_7", title: "Haftalık", desc: "7 günlük seri", icon: "💎", check: (p) => p.streak >= 7 },
  { id: "streak_30", title: "Ay Yıldız", desc: "30 günlük seri", icon: "🌙", check: (p) => p.streak >= 30 },
  { id: "xp_500", title: "500 XP", desc: "500 XP topla", icon: "✨", check: (p) => p.xp >= 500 },
  { id: "xp_2000", title: "2000 XP", desc: "2000 XP topla", icon: "💫", check: (p) => p.xp >= 2000 },
];

function checkAchievements(progress) {
  const current = new Set(progress.achievements || []);
  const newOnes = [];
  for (const def of ACHIEVEMENT_DEFS) {
    if (!current.has(def.id) && def.check(progress)) {
      newOnes.push(def.id);
    }
  }
  return newOnes;
}

function updateStreak(progress) {
  const today = new Date().toISOString().slice(0, 10);
  const last = progress.lastStreakDate;
  if (last === today) return { streak: progress.streak, lastStreakDate: today };
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (last === yesterday) return { streak: (progress.streak || 0) + 1, lastStreakDate: today };
  return { streak: 1, lastStreakDate: today };
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultProgress };
    return { ...defaultProgress, ...JSON.parse(raw) };
  } catch { return { ...defaultProgress }; }
}

function saveProgress(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) { console.warn("localStorage save failed:", e); }
  // Async IndexedDB backup
  idbSave(IDB_KEY, data).catch(() => {});
}

export default function useProgress() {
  const [progress, setProgress] = useState(loadProgress);
  const [idbChecked, setIdbChecked] = useState(false);

  // On mount: try IndexedDB recovery if localStorage was empty
  useEffect(() => {
    if (idbChecked) return;
    const lsRaw = localStorage.getItem(STORAGE_KEY);
    if (!lsRaw) {
      idbLoad(IDB_KEY).then(data => {
        if (data && data.assessmentDone) {
          const merged = { ...defaultProgress, ...data };
          setProgress(merged);
          saveProgress(merged);
        }
      }).catch(() => {}).finally(() => setIdbChecked(true));
    } else {
      setIdbChecked(true);
    }
  }, [idbChecked]);

  const update = useCallback((patch) => {
    setProgress((prev) => {
      const next = { ...prev, ...patch, lastSessionDate: new Date().toISOString() };
      saveProgress(next);
      return next;
    });
  }, []);

  const markLessonComplete = useCallback((lessonId) => {
    setProgress((prev) => {
      const alreadyDone = prev.completedLessons.includes(lessonId);
      const completed = alreadyDone ? prev.completedLessons : [...prev.completedLessons, lessonId];
      const xpGain = alreadyDone ? 0 : XP_LESSON_COMPLETE;
      const streakData = updateStreak(prev);
      const streakXP = streakData.streak > prev.streak ? XP_STREAK_BONUS : 0;
      const next = {
        ...prev,
        completedLessons: completed,
        xp: (prev.xp || 0) + xpGain + streakXP,
        ...streakData,
        lastSessionDate: new Date().toISOString(),
      };
      const newAch = checkAchievements(next);
      if (newAch.length > 0) next.achievements = [...(next.achievements || []), ...newAch];
      saveProgress(next);
      return next;
    });
  }, []);

  const updateVocab = useCallback((root, isCorrect) => {
    setProgress((prev) => {
      const entry = prev.vocabulary[root] || { root, seen: true, correct: 0, wrong: 0, lastSeen: "" };
      const updated = { ...entry, seen: true, correct: entry.correct + (isCorrect ? 1 : 0), wrong: entry.wrong + (isCorrect ? 0 : 1), lastSeen: new Date().toISOString() };
      const vocab = { ...prev.vocabulary, [root]: updated };
      const totalRootsLearned = Object.values(vocab).filter((v) => v.correct > 0).length;

      // SM-2 update: isCorrect → quality 4, incorrect → quality 1
      const quality = isCorrect ? 4 : 1;
      const prevSR = prev.rootSR?.[root] || null;
      const newSR = sm2(prevSR, quality);
      const rootSR = { ...prev.rootSR, [root]: newSR };

      // XP: root mastery bonus when reaching exactly 3 correct
      const masteryXP = (isCorrect && entry.correct === 2) ? XP_ROOT_MASTERY : 0;

      const next = { ...prev, vocabulary: vocab, totalRootsLearned, rootSR, xp: (prev.xp || 0) + masteryXP, lastSessionDate: new Date().toISOString() };
      if (masteryXP > 0) {
        const newAch = checkAchievements(next);
        if (newAch.length > 0) next.achievements = [...(next.achievements || []), ...newAch];
      }
      saveProgress(next);
      return next;
    });
  }, []);

  const updateRootSR = useCallback((root, quality) => {
    setProgress((prev) => {
      const prevSR = prev.rootSR?.[root] || null;
      const newSR = sm2(prevSR, quality);
      const rootSR = { ...prev.rootSR, [root]: newSR };
      const next = { ...prev, rootSR, lastSessionDate: new Date().toISOString() };
      saveProgress(next);
      return next;
    });
  }, []);

  const saveQuizResult = useCallback((lessonId, score, total) => {
    setProgress((prev) => {
      const xpGain = score * XP_QUIZ_CORRECT;
      const streakData = updateStreak(prev);
      const streakXP = streakData.streak > prev.streak ? XP_STREAK_BONUS : 0;
      const next = {
        ...prev,
        quizResults: { ...prev.quizResults, [lessonId]: { score, total, date: new Date().toISOString() } },
        xp: (prev.xp || 0) + xpGain + streakXP,
        ...streakData,
        lastSessionDate: new Date().toISOString(),
      };
      const newAch = checkAchievements(next);
      if (newAch.length > 0) next.achievements = [...(next.achievements || []), ...newAch];
      saveProgress(next);
      return next;
    });
  }, []);

  // Review words: SM-2 based (due today) + legacy fallback
  const reviewWords = useMemo(() => {
    const now = Date.now();
    const srRoots = progress.rootSR || {};
    const dueRoots = [];

    for (const [root, sr] of Object.entries(srRoots)) {
      if (sr.nextReview && new Date(sr.nextReview).getTime() <= now) {
        dueRoots.push({ root, priority: sr.easeFactor < 2 ? 2 : 1, source: "sr" });
      }
    }

    for (const v of Object.values(progress.vocabulary)) {
      if (!v.seen) continue;
      if (dueRoots.find(d => d.root === v.root)) continue;
      const daysSince = (now - new Date(v.lastSeen).getTime()) / 86400000;
      if (v.wrong > v.correct || daysSince > 3) {
        dueRoots.push({ root: v.root, priority: v.wrong - v.correct, source: "legacy" });
      }
    }

    return dueRoots
      .sort((a, b) => b.priority - a.priority)
      .slice(0, 10)
      .map(d => {
        const vocabEntry = progress.vocabulary[d.root];
        return vocabEntry || { root: d.root, seen: true, correct: 0, wrong: 0, lastSeen: "" };
      });
  }, [progress.vocabulary, progress.rootSR]);

  const exportProgress = useCallback(() => {
    const data = JSON.stringify(progress, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ustaz-progress-${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [progress]);

  const importProgress = useCallback((jsonString) => {
    try {
      const data = JSON.parse(jsonString);
      const merged = { ...defaultProgress, ...data };
      saveProgress(merged);
      setProgress(merged);
      return true;
    } catch { return false; }
  }, []);

  const resetProgress = useCallback(() => {
    const fresh = { ...defaultProgress };
    saveProgress(fresh);
    setProgress(fresh);
  }, []);

  return { progress, update, markLessonComplete, updateVocab, updateRootSR, saveQuizResult, reviewWords, exportProgress, importProgress, resetProgress };
}

export { ACHIEVEMENT_DEFS };
