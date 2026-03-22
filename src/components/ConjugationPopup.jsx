import { useState } from "react";
import { X, ChevronDown, ChevronUp, Table2, BookOpen, Volume2 } from "lucide-react";
import { getConjugation, getConjugationsForRoot, PRONOUNS, PRONOUNS_SIMPLE, BAB_INFO } from "../data/conjugation";
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

const babColorMap = {
  I: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  II: "bg-green-500/15 text-green-400 border-green-500/20",
  III: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
  IV: "bg-purple-500/15 text-purple-400 border-purple-500/20",
  V: "bg-orange-500/15 text-orange-400 border-orange-500/20",
  VI: "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
  VII: "bg-pink-500/15 text-pink-400 border-pink-500/20",
  VIII: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  IX: "bg-red-500/15 text-red-400 border-red-500/20",
  X: "bg-indigo-500/15 text-indigo-400 border-indigo-500/20",
};

const tenseLabels = {
  madi: { ar: "الماضي", tr: "Mâzî (geçmiş)", color: "text-blue-400" },
  mudari: { ar: "المضارع", tr: "Muzâri (şimdiki/gelecek)", color: "text-green-400" },
  amr: { ar: "الأمر", tr: "Emir", color: "text-yellow-400" },
};

// Emir sadece 5 form: ente, enti, entuma, entum, entunne → PRONOUNS indices 6,7,8,9,10
const AMR_PRONOUN_INDICES = [6, 7, 8, 9, 10];

export default function ConjugationPopup({ root, bab, highlightForm, onClose }) {
  const [activeBab, setActiveBab] = useState(bab || "I");
  const [activeTense, setActiveTense] = useState("madi");
  const [showAll, setShowAll] = useState(false);

  const available = getConjugationsForRoot(root);
  const conj = getConjugation(root, activeBab);

  if (!conj && available.length === 0) {
    return (
      <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center">
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
        <div className="relative z-10 w-full max-w-md rounded-t-3xl sm:rounded-2xl border border-ov/10 bg-ustaz-card p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-ustaz-arabic">Çekim Tablosu</h2>
            <button onClick={onClose} className="rounded-xl p-2 text-ustaz-turkish/40 hover:bg-ov/10"><X size={16} /></button>
          </div>
          <p className="text-sm text-ustaz-turkish/50 text-center py-8">
            <span className="arabic-text text-lg text-ustaz-gold">{root}</span> kökü için henüz çekim tablosu eklenmedi.
          </p>
        </div>
      </div>
    );
  }

  const current = conj || available[0];
  const babInfo = BAB_INFO[current.bab];

  const pronounIndices = activeTense === "amr"
    ? AMR_PRONOUN_INDICES
    : showAll ? PRONOUNS.map((_, i) => i) : PRONOUNS_SIMPLE;

  const forms = activeTense === "amr" ? current.amr : current[activeTense];

  function getFormForIndex(idx) {
    if (activeTense === "amr") {
      const amrIdx = AMR_PRONOUN_INDICES.indexOf(idx);
      return amrIdx >= 0 ? forms[amrIdx] : "—";
    }
    return forms[idx] || "—";
  }

  function isHighlighted(form) {
    return highlightForm && form === highlightForm;
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-lg max-h-[85vh] max-h-[85dvh] overflow-hidden rounded-t-3xl sm:rounded-2xl border border-ov/10 bg-ustaz-card shadow-2xl flex flex-col">
        {/* Header */}
        <div className="shrink-0 border-b border-ov/[0.06] px-5 pt-5 pb-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ustaz-gold/10">
                <Table2 size={20} className="text-ustaz-gold" />
              </div>
              <div>
                <p className="arabic-text text-xl text-ustaz-gold">{root}</p>
                <p className="text-xs text-ustaz-turkish/40">{current.meaning}</p>
              </div>
            </div>
            <button onClick={onClose} className="rounded-xl p-2 text-ustaz-turkish/40 transition hover:bg-ov/10 hover:text-ustaz-turkish">
              <X size={16} />
            </button>
          </div>

          {/* Bâb selector */}
          {available.length > 1 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {available.map(c => (
                <button key={c.bab} onClick={() => { setActiveBab(c.bab); setActiveTense("madi"); }}
                  className={`rounded-lg border px-2.5 py-1 text-[11px] font-semibold transition ${
                    c.bab === activeBab ? babColorMap[c.bab] : "border-ov/[0.06] text-ustaz-turkish/30 hover:border-ov/10"
                  }`}>
                  {c.bab}. bâb
                </button>
              ))}
            </div>
          )}

          {/* Bab info pill */}
          <div className={`inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs ${babColorMap[current.bab]}`}>
            <span className="arabic-text text-sm">{babInfo.ar}</span>
            <span className="opacity-60">·</span>
            <span>{babInfo.name}</span>
            <span className="opacity-60">·</span>
            <span className="opacity-70">{babInfo.meaning}</span>
          </div>

          {/* Tense tabs */}
          <div className="mt-3 flex gap-1">
            {Object.entries(tenseLabels).map(([key, { ar, tr, color }]) => (
              <button key={key} onClick={() => setActiveTense(key)}
                className={`flex-1 rounded-xl px-2 py-2 text-center transition ${
                  activeTense === key
                    ? `bg-ov/[0.06] ${color}`
                    : "text-ustaz-turkish/30 hover:text-ustaz-turkish/50"
                }`}>
                <span className="arabic-text block text-sm">{ar}</span>
                <span className="block text-[10px] mt-0.5">{tr}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {/* Base forms */}
          <div className="mb-4 flex items-center gap-3 rounded-xl bg-ov/[0.03] px-4 py-3">
            <div className="text-center">
              <p className="text-[9px] uppercase tracking-wider text-ustaz-turkish/30">Mâzî</p>
              <p className="arabic-text text-base text-blue-400">{current.base_madi}</p>
            </div>
            <div className="h-6 w-px bg-ov/[0.08]" />
            <div className="text-center">
              <p className="text-[9px] uppercase tracking-wider text-ustaz-turkish/30">Muzâri</p>
              <p className="arabic-text text-base text-green-400">{current.base_mudari}</p>
            </div>
          </div>

          {/* Conjugation rows */}
          <div className="space-y-1">
            {pronounIndices.map((pIdx) => {
              const pronoun = PRONOUNS[pIdx];
              const form = getFormForIndex(pIdx);
              if (form === "—") return null;
              const highlighted = isHighlighted(form);
              return (
                <div key={`${pIdx}-${activeTense}`}
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 transition ${
                    highlighted
                      ? "bg-ustaz-gold/10 border border-ustaz-gold/20"
                      : "bg-ov/[0.02] hover:bg-ov/[0.04]"
                  }`}>
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="arabic-text text-sm text-ustaz-turkish/50 w-12 text-right shrink-0">{pronoun.ar}</span>
                    <span className="text-[10px] text-ustaz-turkish/25 w-16 shrink-0">{pronoun.tr}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className={`arabic-text text-base ${highlighted ? "text-ustaz-gold font-semibold" : tenseLabels[activeTense].color}`}>
                      {form}
                    </span>
                    {form !== "—" && (
                      <button onClick={() => speakArabic(form)}
                        className="rounded p-1 text-ustaz-turkish/15 transition hover:text-ustaz-gold active:scale-90">
                        <Volume2 size={11} />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Toggle all/simple */}
          {activeTense !== "amr" && (
            <button onClick={() => setShowAll(!showAll)}
              className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl border border-ov/[0.06] py-2 text-[11px] text-ustaz-turkish/30 transition hover:text-ustaz-turkish/50">
              {showAll ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
              {showAll ? "Basit göster (7 form)" : "Tümünü göster (13 form)"}
            </button>
          )}

          {/* Kur'an cross-references */}
          {(() => {
            const rootData = getRoot(root);
            if (!rootData?.cross_refs?.length) return null;
            return (
              <div className="mt-5 border-t border-ov/[0.06] pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen size={13} className="text-ustaz-gold/50" />
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-ustaz-turkish/30">
                    Kur'an'da {root} ({rootData.cross_refs.length})
                  </p>
                </div>
                <div className="space-y-1">
                  {rootData.cross_refs.slice(0, 6).map((ref, i) => (
                    <div key={i} className="flex items-start gap-2 rounded-lg bg-ov/[0.02] px-3 py-2">
                      <span className="text-[10px] text-ustaz-gold/50 mt-0.5 whitespace-nowrap">{ref.verse}</span>
                      <span className="arabic-text text-sm text-ustaz-arabic">{ref.form}</span>
                      <span className="text-[11px] text-ustaz-turkish/50 flex-1">{ref.note}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
}
