import { useState, useMemo, useRef } from "react";
import { Check, X, ChevronRight, RotateCcw } from "lucide-react";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function ExerciseCard({ exercises, lessonId, onComplete, onRootResult }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [finished, setFinished] = useState(false);
  const [shuffled, setShuffled] = useState(() => shuffle(exercises));
  const scoreRef = useRef(0);

  const current = shuffled[currentIdx];
  const total = shuffled.length;
  const isCorrect = selected === current?.correct;

  function handleSelect(optionIndex) {
    if (showResult) return;
    setSelected(optionIndex);
    setShowResult(true);
    const correct = optionIndex === current.correct;
    if (correct) scoreRef.current += 1;
    if (current.relatedRoots && onRootResult) {
      current.relatedRoots.forEach((root) => onRootResult(root, correct));
    }
  }

  function handleNext() {
    if (currentIdx < total - 1) {
      setCurrentIdx((i) => i + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setFinished(true);
      onComplete?.(scoreRef.current, total);
    }
  }

  function handleRestart() {
    setShuffled(shuffle(exercises));
    setCurrentIdx(0);
    setSelected(null);
    setShowResult(false);
    setFinished(false);
    scoreRef.current = 0;
  }

  if (finished) {
    const pct = Math.round((scoreRef.current / total) * 100);
    return (
      <div className="card text-center py-8">
        <div className="mb-3 text-4xl">{pct >= 70 ? "🎉" : pct >= 40 ? "📚" : "💪"}</div>
        <h3 className="mb-1 text-lg font-bold text-ustaz-arabic">Quiz Tamamlandı!</h3>
        <p className="mb-1 text-3xl font-bold text-ustaz-gold">{scoreRef.current} / {total}</p>
        <p className="mb-6 text-sm text-ustaz-turkish/40">
          {pct >= 70 ? "Harika! Bu dersi iyi kavramışsın." : pct >= 40 ? "İyi başlangıç. Tekrar edersen pekişir." : "Dersi tekrar gözden geçir, sonra quiz'e dön."}
        </p>
        <button onClick={handleRestart} className="btn-secondary inline-flex items-center gap-2">
          <RotateCcw size={14} /> Tekrar Çöz
        </button>
      </div>
    );
  }

  return (
    <div className="card">
      {/* Progress */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-ustaz-gold/40">Soru {currentIdx + 1}/{total}</span>
        <span className="rounded-lg bg-pos-fil/10 px-2 py-0.5 text-[10px] font-semibold text-pos-fil">{scoreRef.current} doğru</span>
      </div>

      {/* Progress bar */}
      <div className="mb-5 flex gap-0.5">
        {shuffled.map((_, i) => (
          <div key={i} className={`h-1 flex-1 rounded-full transition-all ${
            i < currentIdx ? "bg-ustaz-gold" : i === currentIdx ? "bg-ustaz-gold/40" : "bg-white/[0.06]"
          }`} />
        ))}
      </div>

      {/* Question */}
      <p className="mb-5 text-[15px] leading-relaxed text-ustaz-turkish">{current.question}</p>

      {/* Options */}
      <div className="flex flex-col gap-2">
        {current.options.map((opt, i) => {
          let optStyle = "border-white/[0.06] bg-ustaz-surface hover:border-white/10";
          if (showResult) {
            if (i === current.correct) optStyle = "border-pos-fil/30 bg-pos-fil/[0.06]";
            else if (i === selected && !isCorrect) optStyle = "border-red-400/30 bg-red-400/[0.06]";
            else optStyle = "border-white/[0.04] bg-ustaz-surface opacity-35";
          }
          return (
            <button key={i} onClick={() => handleSelect(i)} disabled={showResult}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all active:scale-[0.98] ${optStyle}`}>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 text-[11px]">
                {showResult && i === current.correct ? <Check size={14} className="text-pos-fil" /> :
                 showResult && i === selected && !isCorrect ? <X size={14} className="text-red-400" /> :
                 <span className="text-ustaz-turkish/30 font-medium">{String.fromCharCode(65 + i)}</span>}
              </span>
              <span className="text-sm text-ustaz-turkish/70 leading-snug">{opt}</span>
            </button>
          );
        })}
      </div>

      {/* Explanation + Next */}
      {showResult && (
        <div className="mt-4">
          <div className={`mb-3 rounded-xl px-4 py-3 text-sm leading-relaxed ${
            isCorrect ? "bg-pos-fil/[0.04] text-pos-fil/80" : "bg-red-400/[0.04] text-red-300/80"
          }`}>
            {isCorrect ? "✓ Doğru! " : "✗ Yanlış. "}{current.explanation}
          </div>
          <button onClick={handleNext} className="btn-primary flex w-full items-center justify-center gap-2 text-sm">
            {currentIdx < total - 1 ? "Sonraki Soru" : "Sonuçları Gör"} <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
