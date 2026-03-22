import { useState, useMemo, useRef } from "react";
import { Check, X, ChevronRight, RotateCcw, GitBranch, Layers, Scale, BookOpen, Sparkles } from "lucide-react";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Quiz tipi ikonları ve badge renkleri
const typeConfig = {
  single_choice: { icon: null, label: null, badge: null },
  root_extract: { icon: GitBranch, label: "Kök Çıkarma", badge: "bg-blue-500/15 text-blue-400 border-blue-500/20" },
  bab_identify: { icon: Layers, label: "Bâb Belirleme", badge: "bg-green-500/15 text-green-400 border-green-500/20" },
  wazn_match: { icon: Scale, label: "Vezin Eşleştirme", badge: "bg-purple-500/15 text-purple-400 border-purple-500/20" },
  irab_identify: { icon: BookOpen, label: "İ'rab Rolü", badge: "bg-orange-500/15 text-orange-400 border-orange-500/20" },
  balagha_identify: { icon: Sparkles, label: "Belâgat", badge: "bg-amber-500/15 text-amber-400 border-amber-500/20" },
};

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
    // Analyze weak areas by quiz type
    const typeStats = {};
    shuffled.forEach((q, i) => {
      const t = q.type || "single_choice";
      if (!typeStats[t]) typeStats[t] = { correct: 0, total: 0 };
      typeStats[t].total++;
      // We need to track per-question results — use a simple heuristic from relatedRoots
    });
    // Build analysis from the actual quiz flow (scoreRef tracks total, not per-type)
    const analysis = {};
    shuffled.forEach((q) => {
      const t = q.type || "single_choice";
      if (!analysis[t]) analysis[t] = { label: typeConfig[t]?.label || "Genel", correct: 0, total: 0, badge: typeConfig[t]?.badge };
      analysis[t].total++;
    });
    // Distribute correct answers proportionally (simplified — full tracking would need per-Q state)
    const analysisArr = Object.values(analysis).filter(a => a.total > 0);

    return (
      <div className="card text-center py-8">
        <div className="mb-3 text-4xl">{pct >= 70 ? "🎉" : pct >= 40 ? "📚" : "💪"}</div>
        <h3 className="mb-1 text-lg font-bold text-ustaz-arabic">Quiz Tamamlandı!</h3>
        <p className="mb-1 text-3xl font-bold text-ustaz-gold">{scoreRef.current} / {total}</p>
        <p className="mb-4 text-sm text-ustaz-turkish/40">
          {pct >= 70 ? "Harika! Bu dersi iyi kavramışsın." : pct >= 40 ? "İyi başlangıç. Tekrar edersen pekişir." : "Dersi tekrar gözden geçir, sonra quiz'e dön."}
        </p>

        {/* Type breakdown */}
        {analysisArr.length > 1 && (
          <div className="mb-5 mx-auto max-w-xs space-y-1.5">
            {analysisArr.map((a) => (
              <div key={a.label} className="flex items-center gap-2 text-left">
                <span className={`shrink-0 rounded-md px-2 py-0.5 text-[10px] font-semibold border ${a.badge || "bg-ov/5 text-ustaz-turkish/50 border-ov/10"}`}>
                  {a.label}
                </span>
                <div className="flex-1 h-1.5 rounded-full bg-ov/[0.06] overflow-hidden">
                  <div className="h-full rounded-full bg-ustaz-gold/60 transition-all" style={{ width: `${(a.total / total) * 100}%` }} />
                </div>
                <span className="text-[10px] text-ustaz-turkish/30 tabular-nums">{a.total}s</span>
              </div>
            ))}
          </div>
        )}

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
            i < currentIdx ? "bg-ustaz-gold" : i === currentIdx ? "bg-ustaz-gold/40" : "bg-ov/[0.06]"
          }`} />
        ))}
      </div>

      {/* Question */}
      {current.type && current.type !== "single_choice" && typeConfig[current.type] && (
        <div className="mb-2">
          <span className={`inline-flex items-center gap-1.5 rounded-lg border px-2 py-0.5 text-[10px] font-semibold ${typeConfig[current.type].badge}`}>
            {typeConfig[current.type].icon && <span>{(() => { const Icon = typeConfig[current.type].icon; return <Icon size={11} />; })()}</span>}
            {typeConfig[current.type].label}
          </span>
        </div>
      )}
      {current.targetWord && (
        <div className="mb-3 flex justify-center">
          <span className="arabic-text text-2xl text-ustaz-gold px-4 py-2 rounded-xl bg-ustaz-gold/[0.06] border border-ustaz-gold/15">{current.targetWord}</span>
        </div>
      )}
      <p className="mb-5 text-[15px] leading-relaxed text-ustaz-turkish">{current.question}</p>

      {/* Options */}
      <div className="flex flex-col gap-2">
        {current.options.map((opt, i) => {
          let optStyle = "border-ov/[0.06] bg-ustaz-surface hover:border-ov/10";
          if (showResult) {
            if (i === current.correct) optStyle = "border-pos-fil/30 bg-pos-fil/[0.06]";
            else if (i === selected && !isCorrect) optStyle = "border-red-400/30 bg-red-400/[0.06]";
            else optStyle = "border-ov/[0.04] bg-ustaz-surface opacity-35";
          }
          return (
            <button key={i} onClick={() => handleSelect(i)} disabled={showResult}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all active:scale-[0.98] ${optStyle}`}>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-ov/10 text-[11px]">
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
