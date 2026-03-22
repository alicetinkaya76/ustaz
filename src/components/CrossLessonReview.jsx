import { useState, useMemo } from "react";
import { Shuffle, ArrowLeft } from "lucide-react";
import ExerciseCard from "./ExerciseCard";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function CrossLessonReview({ lessons, completedLessons, onRootResult, onClose }) {
  const [started, setStarted] = useState(false);
  const [quizCount, setQuizCount] = useState(10);

  // Collect exercises from completed lessons
  const pool = useMemo(() => {
    const allExercises = [];
    for (const lesson of lessons) {
      if (completedLessons.includes(lesson.id) && lesson.exercises) {
        for (const ex of lesson.exercises) {
          allExercises.push({ ...ex, _lessonTitle: lesson.title });
        }
      }
    }
    return allExercises;
  }, [lessons, completedLessons]);

  const selected = useMemo(() => {
    return shuffle(pool).slice(0, Math.min(quizCount, pool.length));
  }, [pool, quizCount, started]); // re-shuffle on start

  if (pool.length < 3) {
    return (
      <div className="card text-center py-8">
        <Shuffle size={28} className="mx-auto mb-3 text-ustaz-turkish/15" />
        <p className="text-sm text-ustaz-turkish/40 mb-2">Karma quiz için en az 3 tamamlanmış ders gerekli.</p>
        <p className="text-xs text-ustaz-turkish/25">Tamamlanan: {completedLessons.length} ders</p>
        <button onClick={onClose} className="btn-secondary mt-4 inline-flex items-center gap-2 text-sm">
          <ArrowLeft size={14} /> Geri
        </button>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="card text-center py-6">
        <Shuffle size={28} className="mx-auto mb-3 text-ustaz-gold/60" />
        <h3 className="text-sm font-semibold text-ustaz-arabic mb-1">Karma Tekrar Quiz</h3>
        <p className="text-xs text-ustaz-turkish/40 mb-4">
          {completedLessons.length} dersten {pool.length} soru havuzu
        </p>

        <div className="flex justify-center gap-2 mb-5" role="radiogroup" aria-label="Soru sayısı">
          {[5, 10, 15, 20].map(n => (
            <button
              key={n}
              onClick={() => setQuizCount(n)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                quizCount === n
                  ? "bg-ustaz-gold/10 border-ustaz-gold/20 text-ustaz-gold"
                  : "border-ov/[0.08] text-ustaz-turkish/40 hover:border-ov/[0.15]"
              }`}
              role="radio"
              aria-checked={quizCount === n}
            >
              {n} soru
            </button>
          ))}
        </div>

        <div className="flex justify-center gap-2">
          <button onClick={onClose} className="btn-secondary inline-flex items-center gap-2 text-sm">
            <ArrowLeft size={14} /> Geri
          </button>
          <button onClick={() => setStarted(true)} className="btn-primary inline-flex items-center gap-2 text-sm">
            <Shuffle size={14} /> Başla
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <button onClick={onClose} className="text-xs text-ustaz-turkish/30 flex items-center gap-1 hover:text-ustaz-turkish/50">
          <ArrowLeft size={12} /> Geri
        </button>
        <span className="text-[10px] text-ustaz-gold/40 flex items-center gap-1">
          <Shuffle size={10} /> Karma Tekrar
        </span>
      </div>
      <ExerciseCard
        exercises={selected}
        lessonId="cross-review"
        onComplete={() => setStarted(false)}
        onRootResult={onRootResult}
      />
    </div>
  );
}
