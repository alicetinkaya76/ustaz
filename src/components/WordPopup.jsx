import { useState, useMemo } from "react";
import { X, Sparkles, Link, MessageCircle, Table2, Scale, Volume2, Tag } from "lucide-react";
import { parseGrammarLinks } from "./GrammarCard";
import { analyzeWord } from "../data/wazn";
import { getWordCrossLinks, irabToGrammar, balaghaToKey } from "../data/crossLinks";
import { verbTypeRules } from "../data/fiilTypes";
import { getRoot } from "../data/rootDB";

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

// verbType renk ve etiketleri
const verbTypeColors = {
  sahih:  { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400", label: "Sahîh" },
  mutel:  { bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-400", label: "Mu'tel" },
  mehmuz: { bg: "bg-rose-500/10", border: "border-rose-500/20", text: "text-rose-400", label: "Mehmûz" },
  rubai:  { bg: "bg-teal-500/10", border: "border-teal-500/20", text: "text-teal-400", label: "Rubâ'î" },
};

const subtypeLabels = {
  "sâlim": "Sâlim", "muzâ'af": "Muzâ'af",
  "misâl": "Misâl", "ecvef": "Ecvef", "nâkıs": "Nâkıs",
  "lefîf-mefrûk": "Lefîf Mefrûk", "lefîf-makrûn": "Lefîf Makrûn",
  "mehmûzü'l-fâ": "Fâ", "mehmûzü'l-ayn": "Ayn", "mehmûzü'l-lâm": "Lâm",
  "rubâ'î": "Rubâ'î",
};

export default function WordPopup({ word, onClose, onGrammarClick, onAskUstaz, onConjugation, onBalaghaClick, isMobile = false }) {
  const [waznResult, setWaznResult] = useState(null);
  if (!word) return null;

  // crossLinks hesapla
  const crossLinks = useMemo(() => getWordCrossLinks(word), [word]);
  const vt = crossLinks.verbType;
  const vtStyle = vt ? verbTypeColors[vt.type] : null;

  // mufradat_note
  const rootData = useMemo(() => word.root ? getRoot(word.root) : null, [word.root]);
  const mufNote = rootData?.mufradat_note;

  const handleWaznAnalyze = () => {
    const result = analyzeWord(word.arabic);
    setWaznResult(result);
  };

  // irab_short'u tıklanabilir grammar linklere dönüştür
  function renderIrabShort() {
    if (!word.irab_short || !onGrammarClick) return <span>{word.irab_short}</span>;
    const grammarKeys = irabToGrammar(word.irab_short);
    if (grammarKeys.length === 0) return <span>{word.irab_short}</span>;
    // Split irab_short by commas, try to match each segment
    const segments = word.irab_short.split(/,\s*/);
    return segments.map((seg, i) => {
      const segKeys = irabToGrammar(seg);
      const key = segKeys[0];
      return (
        <span key={i}>
          {i > 0 && <span className="text-ustaz-turkish/20">, </span>}
          {key ? (
            <button onClick={(e) => { e.stopPropagation(); onGrammarClick(key); }}
              className="underline decoration-dotted underline-offset-2 transition hover:text-ustaz-gold/90">
              {seg}
            </button>
          ) : <span>{seg}</span>}
        </span>
      );
    });
  }

  // balagha_note'taki sanat terimlerini tıklanabilir yap
  function renderBalaghaNote() {
    if (!word.balagha_note) return null;
    if (!onGrammarClick) return <span>{word.balagha_note}</span>;
    // Önce normal parseGrammarLinks (süslü parantezli), sonra crossLinks'ten otomatik link
    return parseGrammarLinks(word.balagha_note, onGrammarClick);
  }

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

        {/* VerbType Badge — fiil kelimeler için */}
        {vt && vtStyle && (
          <div className={`col-span-2 flex items-center gap-2.5 rounded-xl ${vtStyle.bg} border ${vtStyle.border} px-3 py-2`}>
            <Tag size={13} className={`shrink-0 ${vtStyle.text} opacity-60`} />
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`text-xs font-semibold ${vtStyle.text}`}>{vtStyle.label}</span>
              <span className="text-ustaz-turkish/20">›</span>
              <span className={`text-xs ${vtStyle.text} opacity-80`}>{subtypeLabels[vt.subtype] || vt.subtype}</span>
              {vt.weak && vt.weak !== "ء" && (
                <>
                  <span className="text-ustaz-turkish/20">·</span>
                  <span className="arabic-text text-xs text-ustaz-turkish/50">İllet: {vt.weak}</span>
                </>
              )}
            </div>
          </div>
        )}

        {/* I'rab — full width */}
        <div className="col-span-2 rounded-xl bg-ov/[0.04] px-3 py-2.5">
          <p className="mb-0.5 text-[9px] font-semibold uppercase tracking-wider text-ustaz-turkish/35">İ'rab</p>
          <p className="text-sm leading-relaxed text-ustaz-turkish/70">
            {onGrammarClick ? parseGrammarLinks(word.irab, onGrammarClick) : word.irab}
          </p>
        </div>

        {/* İ'rab Kısa — tıklanabilir etiketler */}
        {word.irab_short && (
          <div className="col-span-2 flex items-center gap-2 rounded-xl bg-ov/[0.02] px-3 py-2">
            <span className="text-[9px] font-semibold uppercase tracking-wider text-ustaz-turkish/25 shrink-0">Kısa</span>
            <p className="text-xs text-ustaz-turkish/50">{renderIrabShort()}</p>
          </div>
        )}

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
              <p className="text-sm text-purple-300/70">{renderBalaghaNote()}</p>
              {/* Belâgat crossLink etiketleri */}
              {crossLinks.balagha.length > 0 && onGrammarClick && (
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {crossLinks.balagha.map(key => (
                    <button key={key} onClick={(e) => { e.stopPropagation(); onGrammarClick(key); }}
                      className="rounded-full px-2 py-0.5 text-[9px] font-medium bg-purple-500/10 text-purple-400/70 border border-purple-500/15 transition hover:bg-purple-500/20 hover:text-purple-400">
                      {key.replace(/_/g, " ")}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Müfredât notu */}
        {mufNote && (
          <div className="col-span-2 flex items-start gap-2.5 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/10 px-3 py-2.5">
            <span className="mt-0.5 shrink-0 text-sm">📖</span>
            <div>
              <p className="mb-0.5 text-[9px] font-semibold uppercase tracking-wider text-emerald-400/50">Müfredât — Râğıb</p>
              <p className="text-xs leading-relaxed text-emerald-300/70">{mufNote}</p>
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
