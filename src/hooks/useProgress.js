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
};

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
      const next = { ...prev, vocabulary: vocab, totalRootsLearned, lastSessionDate: new Date().toISOString() };
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

  // Get words needing review (wrong > correct OR not seen in 3+ days)
  const reviewWords = useMemo(() => {
    const now = Date.now();
    return Object.values(progress.vocabulary)
      .filter((v) => {
        if (!v.seen) return false;
        const daysSince = (now - new Date(v.lastSeen).getTime()) / 86400000;
        return v.wrong > v.correct || daysSince > 3;
      })
      .sort((a, b) => (b.wrong - b.correct) - (a.wrong - a.correct))
      .slice(0, 10);
  }, [progress.vocabulary]);

  const exportProgress = useCallback(() => {
    const data = JSON.stringify(progress, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ustaz-progress-${new Date().toISOString().slice(0, 10)}.json`;
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

  return { progress, update, markLessonComplete, updateVocab, saveQuizResult, reviewWords, exportProgress, importProgress, resetProgress };
}
