import { useState, useCallback, useMemo } from "react";

const STORAGE_KEY = "ustaz-progress";

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

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultProgress };
    return { ...defaultProgress, ...JSON.parse(raw) };
  } catch { return { ...defaultProgress }; }
}

function saveProgress(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) { console.warn("localStorage save failed:", e); }
}

export default function useProgress() {
  const [progress, setProgress] = useState(loadProgress);

  const update = useCallback((patch) => {
    setProgress((prev) => {
      const next = { ...prev, ...patch, lastSessionDate: new Date().toISOString() };
      saveProgress(next);
      return next;
    });
  }, []);

  const markLessonComplete = useCallback((lessonId) => {
    setProgress((prev) => {
      const completed = prev.completedLessons.includes(lessonId) ? prev.completedLessons : [...prev.completedLessons, lessonId];
      const next = { ...prev, completedLessons: completed, lastSessionDate: new Date().toISOString() };
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

      const next = { ...prev, vocabulary: vocab, totalRootsLearned, rootSR, lastSessionDate: new Date().toISOString() };
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
      const next = { ...prev, quizResults: { ...prev.quizResults, [lessonId]: { score, total, date: new Date().toISOString() } }, lastSessionDate: new Date().toISOString() };
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
