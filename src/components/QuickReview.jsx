import { useState, useMemo } from "react";
import { Check, X, ArrowRight, RotateCcw } from "lucide-react";

export default function QuickReview({ vocabulary, onUpdateVocab, onFinish }) {
  const words = useMemo(() => {
    const now = Date.now();
    return Object.values(vocabulary || {})
      .filter((v) => {
        if (!v.seen) return false;
        const daysSince = (now - new Date(v.lastSeen).getTime()) / 86400000;
        return v.wrong > v.correct || daysSince > 3;
      })
      .sort((a, b) => (b.wrong - b.correct) - (a.wrong - a.correct))
      .slice(0, 10);
  }, [vocabulary]);

  const [idx, setIdx] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [results, setResults] = useState([]);

  const current = words[idx];
  const isDone = idx >= words.length || words.length === 0;

  function handleAnswer(correct) {
    if (current) {
      onUpdateVocab?.(current.root, correct);
      setResults((r) => [...r, { root: current.root, correct }]);
    }
    setShowAnswer(false);
    setIdx((i) => i + 1);
  }

  if (words.length === 0) {
    return (
      <div className="card text-center py-10">
        <div className="mb-3 text-4xl">✅</div>
        <h3 className="mb-2 text-lg font-bold text-ustaz-arabic">Tekrar edilecek kök yok!</h3>
        <p className="mb-6 text-sm text-ustaz-turkish/40">Tüm kökler güncel. Yeni derse geçebilirsin.</p>
        <button onClick={onFinish} className="btn-primary w-full">Derse Dön</button>
      </div>
    );
  }

  if (isDone) {
    const correct = results.filter((r) => r.correct).length;
    const pct = Math.round((correct / results.length) * 100);
    return (
      <div className="card text-center py-8">
        <div className="mb-3 text-4xl">{pct >= 70 ? "🎉" : "📚"}</div>
        <h3 className="mb-1 text-lg font-bold text-ustaz-arabic">Tekrar Tamamlandı!</h3>
        <p className="mb-1 text-3xl font-bold text-ustaz-gold">{correct} / {results.length}</p>
        <p className="mb-6 text-sm text-ustaz-turkish/40">
          {pct >= 70 ? "Kökleri iyi hatırlıyorsun!" : "Biraz daha pratik faydalı olacak."}
        </p>
        <button onClick={onFinish} className="btn-primary w-full">Derse Geç</button>
      </div>
    );
  }

  return (
    <div className="card">
      {/* Progress dots */}
      <div className="mb-5 flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-ustaz-gold/40">
          {idx + 1} / {words.length}
        </span>
        <div className="flex gap-1">
          {words.map((_, i) => (
            <div key={i} className={`h-1.5 w-3 rounded-full transition-all ${
              i < idx ? (results[i]?.correct ? "bg-pos-fil" : "bg-red-400/60") : i === idx ? "bg-ustaz-gold/50" : "bg-ov/[0.06]"
            }`} />
          ))}
        </div>
      </div>

      {/* Flashcard */}
      <div className="mb-6 rounded-2xl border border-ov/[0.06] bg-gradient-to-br from-ustaz-surface to-ustaz-card py-10 text-center">
        <p className="arabic-text text-4xl text-ustaz-gold mb-3" dir="rtl">{current.root}</p>
        <p className="text-xs text-ustaz-turkish/25">Bu kökü hatırlıyor musun?</p>
        {showAnswer && (
          <div className="mt-4 mx-6 rounded-xl bg-ov/[0.04] p-3">
            <p className="text-xs text-ustaz-turkish/50">
              Doğru: <strong className="text-pos-fil">{current.correct}</strong> · Yanlış: <strong className="text-red-400">{current.wrong}</strong>
            </p>
          </div>
        )}
      </div>

      {/* Actions */}
      {!showAnswer ? (
        <button onClick={() => setShowAnswer(true)}
          className="btn-secondary flex w-full items-center justify-center gap-2 text-sm">
          Cevabı Göster <ArrowRight size={15} />
        </button>
      ) : (
        <div className="flex gap-2">
          <button onClick={() => handleAnswer(false)}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-red-400/15 bg-red-400/[0.04] py-3.5 text-sm font-semibold text-red-400 transition active:scale-[0.97]">
            <X size={16} /> Bilmiyorum
          </button>
          <button onClick={() => handleAnswer(true)}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-pos-fil/15 bg-pos-fil/[0.04] py-3.5 text-sm font-semibold text-pos-fil transition active:scale-[0.97]">
            <Check size={16} /> Biliyorum
          </button>
        </div>
      )}
    </div>
  );
}
