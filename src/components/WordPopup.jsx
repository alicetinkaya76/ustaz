import { useState } from "react";
import { X, Sparkles, Link, MessageCircle, Table2, Scale, Volume2 } from "lucide-react";
import { parseGrammarLinks } from "./GrammarCard";
import { analyzeWord } from "../data/wazn";

function speakArabic(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "ar-SA";
  u.rate = 0.7;
  u.pitch = 1;
  const voices = window.speechSynthesis.getVoices();
  const arVoice = voices.find(v => v.lang.startsWith("ar"));
  if (arVoice) u.voice = arVoice;
  window.speechSynthesis.speak(u);
}

const posLabels = {
  ism: "İsim (اسم)", fil: "Fiil (فعل)", harf: "Harf (حرف)", zamir: "Zamîr (ضمير)",
  "harf+ism": "Harf + İsim", "harf+fil": "Harf + Fiil", "harf+zamir": "Harf + Zamîr",
};

export default function WordPopup({ word, onClose, onGrammarClick, onAskUstaz, onConjugation, isMobile = false }) {
  const [waznResult, setWaznResult] = useState(null);
  if (!word) return null;

  const handleWaznAnalyze = () => {
    const result = analyzeWord(word.arabic);
    setWaznResult(result);
  };

  const Wrapper = isMobile ? "div" : "div";
  const wrapperClass = isMobile
    ? ""
    : "mt-4 rounded-2xl border border-ov/10 bg-ustaz-card/95 p-5 backdrop-blur-md shadow-2xl shadow-black/40";

  return (
    <div className={wrapperClass}>
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ustaz-gold/10">
            <span className="arabic-text text-2xl text-ustaz-arabic">{word.arabic}</span>
          </div>
          <div>
            <p className="text-xs text-ustaz-turkish/40">{word.transliteration}</p>
            <p className="text-base font-semibold text-ustaz-turkish">{word.meaning_tr}</p>
          </div>
          <button onClick={() => speakArabic(word.arabic)}
            className="rounded-lg p-1.5 text-ustaz-turkish/20 transition hover:text-ustaz-gold active:scale-90" title="Sesli oku">
            <Volume2 size={14} />
          </button>
        </div>
        {!isMobile && (
          <button onClick={onClose} className="rounded-xl p-2 text-ustaz-turkish/40 transition hover:bg-ov/10 hover:text-ustaz-turkish">
            <X size={16} />
          </button>
        )}
      </div>

      {/* Info Grid */}
      <div className="grid gap-2 grid-cols-2">
        {word.root && (
          <div className="rounded-xl bg-ov/[0.04] px-3 py-2.5">
            <p className="mb-0.5 text-[9px] font-semibold uppercase tracking-wider text-ustaz-gold/50">Kök</p>
            <p className="arabic-text text-lg text-ustaz-gold">{word.root}</p>
          </div>
        )}
        {word.pattern && (
          <div className="rounded-xl bg-ov/[0.04] px-3 py-2.5">
            <p className="mb-0.5 text-[9px] font-semibold uppercase tracking-wider text-ustaz-turkish/35">
              {onGrammarClick ? (
                <button onClick={() => onGrammarClick("vezin")} className="underline decoration-dotted underline-offset-2 text-ustaz-gold/50 hover:text-ustaz-gold/80">
                  Vezin
                </button>
              ) : "Vezin"}
            </p>
            <p className="arabic-text text-lg text-ustaz-turkish/80">{word.pattern}</p>
          </div>
        )}
        {!word.pattern && (
          <div className="rounded-xl bg-ov/[0.04] px-3 py-2.5">
            <p className="mb-0.5 text-[9px] font-semibold uppercase tracking-wider text-ustaz-turkish/35">Tür</p>
            <p className="text-sm text-ustaz-turkish/70">{posLabels[word.pos] || word.pos}</p>
          </div>
        )}

        {/* I'rab — full width */}
        <div className="col-span-2 rounded-xl bg-ov/[0.04] px-3 py-2.5">
          <p className="mb-0.5 text-[9px] font-semibold uppercase tracking-wider text-ustaz-turkish/35">İ'rab</p>
          <p className="text-sm leading-relaxed text-ustaz-turkish/70">
            {onGrammarClick ? parseGrammarLinks(word.irab, onGrammarClick) : word.irab}
          </p>
        </div>

        {word.turkish_bridge && (
          <div className="col-span-2 flex items-start gap-2.5 rounded-xl bg-ustaz-gold/[0.04] border border-ustaz-gold/10 px-3 py-2.5">
            <Link size={14} className="mt-0.5 shrink-0 text-ustaz-gold/50" />
            <div>
              <p className="mb-0.5 text-[9px] font-semibold uppercase tracking-wider text-ustaz-gold/50">Türkçe Köprü</p>
              <p className="text-sm text-ustaz-gold/70">{word.turkish_bridge}</p>
            </div>
          </div>
        )}

        {word.balagha_note && (
          <div className="col-span-2 flex items-start gap-2.5 rounded-xl bg-purple-500/[0.04] border border-purple-500/10 px-3 py-2.5">
            <Sparkles size={14} className="mt-0.5 shrink-0 text-purple-400/50" />
            <div>
              <p className="mb-0.5 text-[9px] font-semibold uppercase tracking-wider text-purple-400/50">Belâgat</p>
              <p className="text-sm text-purple-300/70">
                {onGrammarClick ? parseGrammarLinks(word.balagha_note, onGrammarClick) : word.balagha_note}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div className="mt-3 flex flex-col gap-2">
        {/* Conjugation button — only for verbs */}
        {onConjugation && word.root && (word.pos === "fil" || (word.pos && word.pos.includes("fil"))) && (
          <button onClick={() => onConjugation(word.root, word.arabic)}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-purple-500/15 bg-purple-500/[0.04] py-3 text-xs font-medium text-purple-400/70 transition active:scale-[0.97] hover:border-purple-500/30 hover:text-purple-400">
            <Table2 size={13} /> Çekim Tablosu
          </button>
        )}

        {/* Wazn Analyze button — for words with root */}
        {word.root && word.pos !== "harf" && (
          <button onClick={handleWaznAnalyze}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500/15 bg-cyan-500/[0.04] py-3 text-xs font-medium text-cyan-400/70 transition active:scale-[0.97] hover:border-cyan-500/30 hover:text-cyan-400">
            <Scale size={13} /> Vezin Analizi
          </button>
        )}

        {/* Wazn result display */}
        {waznResult && (
          <div className="rounded-xl border border-cyan-500/15 bg-cyan-500/[0.04] px-3 py-2.5">
            <div className="flex items-center gap-2 mb-1.5">
              <Scale size={11} className="text-cyan-400/50" />
              <span className="text-[9px] font-semibold uppercase tracking-wider text-cyan-400/50">Vezin Analizi</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400/60">{waznResult.source === "known" ? "Sözlük" : "Regex"}</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 text-xs">
              {waznResult.pattern && (
                <div><span className="text-ustaz-turkish/35">Kalıp: </span><span className="arabic-text text-cyan-300/80">{waznResult.pattern}</span></div>
              )}
              {waznResult.bab && (
                <div><span className="text-ustaz-turkish/35">Bâb: </span><span className="text-cyan-300/80">{waznResult.bab}</span></div>
              )}
              {waznResult.type && (
                <div><span className="text-ustaz-turkish/35">Tür: </span><span className="text-cyan-300/80">{waznResult.type}</span></div>
              )}
              {waznResult.root && (
                <div><span className="text-ustaz-turkish/35">Kök: </span><span className="arabic-text text-cyan-300/80">{waznResult.root}</span></div>
              )}
              {waznResult.meaning && (
                <div className="col-span-2"><span className="text-ustaz-turkish/35">Anlam: </span><span className="text-cyan-300/80">{waznResult.meaning}</span></div>
              )}
            </div>
          </div>
        )}

        {/* Ask Ustaz */}
        {onAskUstaz && (
          <button onClick={() => onAskUstaz(`${word.arabic} (${word.root || ""}) kelimesi hakkında detaylı bilgi ver.`)}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-ov/[0.06] bg-ov/[0.02] py-3 text-xs font-medium text-ustaz-turkish/40 transition active:scale-[0.97] hover:border-ustaz-gold/20 hover:text-ustaz-gold">
            <MessageCircle size={13} /> Bu kelimeyi Ustaz'a sor
          </button>
        )}
      </div>
    </div>
  );
}
