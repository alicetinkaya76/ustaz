import { useState, useMemo } from "react";
import { Sparkles, ChevronDown, ChevronUp, Check, Volume2 } from "lucide-react";
import { getRootKeys, getRoot } from "../data/rootDB";

// Deterministic daily seed from date
function getDailySeed() {
  const d = new Date();
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

function speakArabic(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "ar-SA";
  u.rate = 0.75;
  u.pitch = 1;
  const voices = window.speechSynthesis.getVoices();
  const arVoice = voices.find(v => v.lang.startsWith("ar"));
  if (arVoice) u.voice = arVoice;
  window.speechSynthesis.speak(u);
}

export default function DailyRoot({ onRootResult }) {
  const [expanded, setExpanded] = useState(false);
  const [quizState, setQuizState] = useState("idle"); // idle | active | answered
  const [answer, setAnswer] = useState(null);
  const [options, setOptions] = useState([]);

  const { rootKey, rootData } = useMemo(() => {
    const keys = getRootKeys();
    const seed = getDailySeed();
    const idx = seed % keys.length;
    const key = keys[idx];
    return { rootKey: key, rootData: getRoot(key) };
  }, []);

  if (!rootData) return null;

  function startQuiz() {
    const keys = getRootKeys();
    const distractors = keys
      .filter(k => k !== rootKey)
      .map(k => getRoot(k)?.core)
      .filter(Boolean)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    const opts = [...distractors, rootData.core].sort(() => Math.random() - 0.5);
    setOptions(opts);
    setQuizState("active");
    setAnswer(null);
  }

  function handleAnswer(idx) {
    setAnswer(idx);
    setQuizState("answered");
    const isCorrect = options[idx] === rootData.core;
    onRootResult?.(rootKey, isCorrect);
  }

  return (
    <div className="mb-4 rounded-2xl border border-ustaz-gold/10 bg-gradient-to-br from-ustaz-gold/[0.04] to-transparent p-4">
      <button onClick={() => setExpanded(!expanded)} className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-ustaz-gold/10">
            <Sparkles size={16} className="text-ustaz-gold" />
          </div>
          <div className="text-left">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-ustaz-gold/50">Günün Kökü</p>
            <div className="flex items-baseline gap-2">
              <span className="arabic-text text-lg text-ustaz-gold">{rootKey}</span>
              <span className="text-xs text-ustaz-turkish/50">{rootData.core}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={(e) => { e.stopPropagation(); speakArabic(rootKey.replace(/-/g, " ")); }}
            className="rounded-lg p-1.5 text-ustaz-turkish/20 hover:text-ustaz-gold transition">
            <Volume2 size={13} />
          </button>
          {expanded ? <ChevronUp size={14} className="text-ustaz-turkish/30" /> : <ChevronDown size={14} className="text-ustaz-turkish/30" />}
        </div>
      </button>

      {expanded && (
        <div className="mt-3 space-y-3 border-t border-ustaz-gold/10 pt-3">
          {/* Quick info */}
          <p className="text-[10px] text-ustaz-turkish/30">Kur'an'da ~{rootData.quran_count} kez</p>

          {/* Top derivatives */}
          {rootData.derivatives?.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {rootData.derivatives.slice(0, 4).map((d, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 rounded-lg bg-ov/[0.04] px-2 py-1 text-[11px]">
                  <span className="arabic-text text-ustaz-arabic">{d.form}</span>
                  <span className="text-ustaz-turkish/40">{d.meaning}</span>
                </span>
              ))}
            </div>
          )}

          {/* Turkish traces */}
          {rootData.turkish_traces?.length > 0 && (
            <p className="text-[11px] text-ustaz-gold/50">
              Türkçe izler: {rootData.turkish_traces.join(", ")}
            </p>
          )}

          {/* Mini quiz */}
          {quizState === "idle" && (
            <button onClick={startQuiz}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-ustaz-gold/15 bg-ustaz-gold/[0.03] py-2.5 text-[11px] text-ustaz-gold/60 transition hover:bg-ustaz-gold/[0.06] active:scale-[0.98]">
              <Sparkles size={12} /> Günün quiz'i
            </button>
          )}

          {quizState !== "idle" && (
            <div className="space-y-2">
              <p className="text-xs text-ustaz-turkish/60">
                <span className="arabic-text text-sm text-ustaz-gold">{rootKey}</span> kökünün temel anlamı?
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {options.map((opt, i) => {
                  const isCorrect = opt === rootData.core;
                  const isSelected = answer === i;
                  let style = "border-ov/[0.06] bg-ov/[0.02] hover:border-ov/10";
                  if (quizState === "answered") {
                    if (isCorrect) style = "border-pos-fil/30 bg-pos-fil/[0.06]";
                    else if (isSelected && !isCorrect) style = "border-red-400/30 bg-red-400/[0.06]";
                    else style = "border-ov/[0.04] opacity-40";
                  }
                  return (
                    <button key={i} disabled={quizState === "answered"}
                      onClick={() => handleAnswer(i)}
                      className={`rounded-lg border px-2 py-2 text-[11px] text-ustaz-turkish/60 text-left transition ${style}`}>
                      {quizState === "answered" && isCorrect && <Check size={10} className="inline mr-1 text-pos-fil" />}
                      {opt}
                    </button>
                  );
                })}
              </div>
              {quizState === "answered" && (
                <p className="text-[10px] text-ustaz-turkish/30 text-center">
                  {answer !== null && options[answer] === rootData.core ? "✓ Harika!" : "✗ Doğru cevap işaretli."}
                  {" "}Yarın yeni bir kök gelecek.
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
