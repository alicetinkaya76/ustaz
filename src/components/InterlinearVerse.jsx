import { useState, useRef } from "react";
import { Volume2 } from "lucide-react";
import WordPopup from "./WordPopup";

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

const posColorMap = {
  ism: { text: "text-pos-ism", dot: "bg-pos-ism", label: "İsim" },
  fil: { text: "text-pos-fil", dot: "bg-pos-fil", label: "Fiil" },
  harf: { text: "text-pos-harf", dot: "bg-pos-harf", label: "Harf" },
  zamir: { text: "text-pos-zamir", dot: "bg-pos-zamir", label: "Zamîr" },
};

function getPosStyle(pos) {
  const key = pos?.toLowerCase() || "ism";
  if (posColorMap[key]) return posColorMap[key];
  if (key.includes("fil")) return posColorMap.fil;
  if (key.includes("zamir")) return posColorMap.zamir;
  if (key.includes("harf")) return posColorMap.harf;
  return posColorMap.ism;
}

function getAudioUrl(surah, ayah) {
  const s = String(surah).padStart(3, "0");
  const a = String(ayah).padStart(3, "0");
  return `https://everyayah.com/data/Alafasy_128kbps/${s}${a}.mp3`;
}

export default function InterlinearVerse({ verse, showIrab = true, showRoot = true, onGrammarClick, onAskUstaz, onConjugation }) {
  const [selectedWordId, setSelectedWordId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const makeWordId = (v, i) => `${v.surah}-${v.ayah}-${i}`;

  function handleKeyDown(e, wordIndex) {
    if (e.key === "ArrowLeft" && wordIndex < verse.words.length - 1) {
      e.preventDefault();
      const nextId = makeWordId(verse, wordIndex + 1);
      setSelectedWordId(nextId);
      document.getElementById(`word-${nextId}`)?.focus();
    } else if (e.key === "ArrowRight" && wordIndex > 0) {
      e.preventDefault();
      const prevId = makeWordId(verse, wordIndex - 1);
      setSelectedWordId(prevId);
      document.getElementById(`word-${prevId}`)?.focus();
    } else if (e.key === "Escape") {
      setSelectedWordId(null);
    }
  }

  function playAudio() {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
      return;
    }
    setIsPlaying(true);
    const audio = new Audio(getAudioUrl(verse.surah, verse.ayah));
    audioRef.current = audio;
    audio.onended = () => setIsPlaying(false);
    audio.onerror = () => setIsPlaying(false);
    audio.play().catch(() => setIsPlaying(false));
  }

  const selectedIdx = selectedWordId ? parseInt(selectedWordId.split("-")[2]) : -1;
  const selectedWord = selectedIdx >= 0 ? verse.words[selectedIdx] : null;

  return (
    <div>
      {/* Verse header: number + arabic + play */}
      <div className="mb-3 flex items-start gap-3">
        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-ustaz-gold/20 bg-ustaz-gold/5 font-body text-xs font-semibold text-ustaz-gold">
          {verse.isBesmele ? "﷽" : verse.ayah}
        </span>
        <p className="arabic-text flex-1 text-right text-[22px] leading-[2.2] text-ustaz-arabic sm:text-[28px]" dir="rtl">
          {verse.arabic}
        </p>
        <button onClick={playAudio}
          className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border transition-all active:scale-90 ${
            isPlaying
              ? "border-ustaz-gold/40 bg-ustaz-gold/15 text-ustaz-gold"
              : "border-ov/10 text-ustaz-turkish/30 hover:border-ustaz-gold/30 hover:text-ustaz-gold"
          }`} title={isPlaying ? "Durdur" : "Dinle"}>
          <span className="text-sm">{isPlaying ? "◼" : "▶"}</span>
        </button>
      </div>

      {/* Translation */}
      <p className="mb-4 text-sm leading-relaxed text-ustaz-turkish/50 italic">{verse.translation}</p>

      {/* Word cards — horizontal scroll on mobile */}
      <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2" dir="rtl">
        {verse.words.map((word, i) => {
          const pos = getPosStyle(word.pos);
          const wordId = makeWordId(verse, i);
          const isActive = selectedWordId === wordId;
          return (
            <button key={wordId} id={`word-${wordId}`} tabIndex={0}
              onClick={() => setSelectedWordId(isActive ? null : wordId)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className={`word-card group flex flex-col items-center gap-1 text-center outline-none focus-visible:ring-1 focus-visible:ring-ustaz-gold/40 ${isActive ? "active" : ""}`}
              style={{ minWidth: "76px", maxWidth: "110px" }}>
              <span className="arabic-text text-lg text-ustaz-arabic sm:text-xl leading-tight">{word.arabic}</span>
              <span className="text-[10px] text-ustaz-turkish/35 font-light">{word.transliteration}</span>
              {showRoot && word.root && <span className="arabic-text text-[11px] text-ustaz-gold/50">{word.root}</span>}
              <span className="text-[11px] font-medium text-ustaz-turkish/70 leading-tight">{word.meaning_tr}</span>
              {showIrab && (
                <span className={`mt-0.5 rounded-lg px-1.5 py-0.5 text-[9px] font-medium ${pos.text} bg-ov/[0.04]`}>
                  {word.irab_short}
                </span>
              )}
              <span className={`mt-0.5 h-1 w-1 rounded-full ${pos.dot} opacity-50`} />
            </button>
          );
        })}
      </div>

      {/* POS Legend */}
      <div className="mt-2.5 flex flex-wrap justify-center gap-3 text-[9px] text-ustaz-turkish/30">
        {Object.entries(posColorMap).map(([k, v]) => (
          <span key={k} className="flex items-center gap-1"><span className={`h-1.5 w-1.5 rounded-full ${v.dot}`} /> {v.label}</span>
        ))}
      </div>

      {/* Word Popup as Bottom Sheet on mobile */}
      {selectedWord && (
        <>
          {/* Mobile: bottom sheet */}
          <div className="sm:hidden">
            <div className="bottom-sheet-overlay" onClick={() => setSelectedWordId(null)} />
            <div className="bottom-sheet">
              <div className="bottom-sheet-handle" />
              <div className="max-h-[75vh] max-h-[75dvh] overflow-y-auto px-5 pb-5">
                <WordPopup word={selectedWord} onClose={() => setSelectedWordId(null)}
                  onGrammarClick={onGrammarClick} onAskUstaz={onAskUstaz} onConjugation={onConjugation} isMobile={true} />
              </div>
            </div>
          </div>
          {/* Desktop: inline */}
          <div className="hidden sm:block">
            <WordPopup word={selectedWord} onClose={() => setSelectedWordId(null)}
              onGrammarClick={onGrammarClick} onAskUstaz={onAskUstaz} onConjugation={onConjugation} />
          </div>
        </>
      )}
    </div>
  );
}
