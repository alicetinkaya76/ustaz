import { useState } from "react";
import { X, ChevronLeft, BookOpen, Layers } from "lucide-react";
import grammarDB from "../data/grammar";
import vezinDB from "../data/vezin";

export function parseGrammarLinks(text, onTermClick) {
  if (!text || !onTermClick) return text;
  const parts = text.split(/(\{[^}]+\})/g);
  return parts.map((part, i) => {
    const match = part.match(/^\{(.+)\}$/);
    if (match) {
      const term = match[1].toLowerCase();
      const entry = grammarDB[term];
      if (entry) {
        return (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); onTermClick(term); }}
            className="inline rounded px-1 font-semibold transition-colors hover:opacity-80"
            style={{ color: entry.color, background: `${entry.color}15`, border: `1px solid ${entry.color}30` }}
          >
            {match[1]}
          </button>
        );
      }
    }
    return <span key={i}>{part}</span>;
  });
}

// Detect Arabic pattern keys mentioned in a grammar entry
function findRelatedPatterns(entry) {
  const patterns = [];
  const allText = [entry.definition, entry.rule, entry.tip, ...(entry.examples || []).map(e => e.explanation)].join(" ");
  for (const key of Object.keys(vezinDB)) {
    if (allText.includes(key)) patterns.push(key);
  }
  return [...new Set(patterns)];
}

export default function GrammarCard({ termKey, onClose, onTermClick, onVezinClick }) {
  const entry = grammarDB[termKey];
  if (!entry) return null;
  const catIcon = entry.category === "sarf" ? "⚙️" : "📐";
  const relatedPatterns = entry.category === "sarf" ? findRelatedPatterns(entry) : [];

  return (
    <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center sm:p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative w-full sm:max-w-lg max-h-[90vh] max-h-[90dvh] overflow-auto rounded-t-3xl sm:rounded-2xl border bg-ustaz-card p-5 sm:p-6 shadow-2xl"
        style={{ borderColor: `${entry.color}30`, paddingBottom: 'calc(1.25rem + env(safe-area-inset-bottom, 0px))' }}
      >
        {/* Mobile handle */}
        <div className="bottom-sheet-handle sm:hidden" />
        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <div>
            <span className="mb-1 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-semibold"
              style={{ color: `${entry.color}cc`, background: `${entry.color}15` }}>
              {catIcon} {entry.categoryLabel}
            </span>
            <h2 className="mt-1 text-lg font-bold text-ustaz-arabic">{entry.title}</h2>
          </div>
          <button onClick={onClose} className="rounded-lg p-1.5 text-ustaz-turkish/30 hover:bg-ov/10 hover:text-ustaz-turkish">
            <X size={16} />
          </button>
        </div>

        {/* Definition */}
        <div className="mb-3 rounded-xl bg-ov/[0.03] p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-ustaz-turkish/30">Tanım</p>
          <p className="mt-1 text-sm leading-relaxed text-ustaz-turkish/80">{entry.definition}</p>
        </div>

        {/* Rule */}
        <div className="mb-3 rounded-xl p-3" style={{ background: `${entry.color}08`, border: `1px solid ${entry.color}15` }}>
          <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: `${entry.color}80` }}>Kural</p>
          <p className="mt-1 whitespace-pre-line text-sm leading-relaxed" style={{ color: `${entry.color}cc` }}>{entry.rule}</p>
        </div>

        {/* Signs */}
        {entry.signs && (
          <div className="mb-3 rounded-xl bg-ov/[0.02] p-3" style={{ borderLeft: `3px solid ${entry.color}40` }}>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-ustaz-turkish/30">Alametler</p>
            <p className="mt-1 text-sm text-ustaz-turkish/70">{entry.signs}</p>
          </div>
        )}

        {/* Examples */}
        <div className="mb-3">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-ustaz-turkish/30">Örnekler</p>
          <div className="space-y-1.5">
            {entry.examples.map((ex, i) => (
              <div key={i} className="rounded-lg bg-ov/[0.02] px-3 py-2">
                <p className="arabic-text text-lg text-ustaz-arabic" dir="rtl">{ex.arabic}</p>
                <p className="mt-0.5 text-xs text-ustaz-turkish/50">{ex.explanation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Patterns (Vezin link for sarf entries) */}
        {relatedPatterns.length > 0 && onVezinClick && (
          <div className="mb-3">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-ustaz-turkish/30">İlgili Kalıplar</p>
            <div className="flex flex-wrap gap-1.5">
              {relatedPatterns.map((p) => (
                <button key={p} onClick={() => onVezinClick(p)}
                  className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors hover:opacity-80"
                  style={{ color: "#d4a64acc", background: "#d4a64a10", border: "1px solid #d4a64a20" }}>
                  <Layers size={10} />
                  <span className="arabic-text">{p}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Tip */}
        {entry.tip && (
          <div className="mb-3 flex gap-2 rounded-xl bg-ustaz-gold/5 border border-ustaz-gold/10 p-3">
            <span className="shrink-0">💡</span>
            <p className="text-sm text-ustaz-gold/80">{entry.tip}</p>
          </div>
        )}

        {/* Related */}
        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-ustaz-turkish/30">İlgili Konular</p>
          <div className="flex flex-wrap gap-1.5">
            {entry.related.map((rel) => {
              // "vezin" opens VezinCard
              if (rel === "vezin" && onVezinClick) {
                return (
                  <button key={rel} onClick={() => onVezinClick(null)}
                    className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors hover:opacity-80"
                    style={{ color: "#d4a64acc", background: "#d4a64a10", border: "1px solid #d4a64a20" }}>
                    <Layers size={10} />
                    Vezin Rehberi
                  </button>
                );
              }
              const r = grammarDB[rel];
              if (!r) return null;
              return (
                <button key={rel} onClick={() => onTermClick(rel)}
                  className="rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors hover:opacity-80"
                  style={{ color: r.color, background: `${r.color}10`, border: `1px solid ${r.color}20` }}>
                  {r.title.split(" (")[0]}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
