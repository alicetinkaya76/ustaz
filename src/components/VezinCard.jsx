import { useState } from "react";
import { X, Search, ChevronRight } from "lucide-react";
import vezinDB from "../data/vezin";

const TYPE_COLORS = {
  "masdar/ism": "#60a5fa",
  "sıfat": "#34d399",
  "ism-i fâil": "#a78bfa",
  "ism-i mef'ûl": "#fbbf24",
  "mübalağa": "#f87171",
  "cem (çoğul)": "#fb923c",
  "fiil": "#d4a64a",
};

function PatternRow({ patternKey, entry, isSelected, onSelect }) {
  const color = TYPE_COLORS[entry.type] || "#94a3b8";
  return (
    <button
      onClick={() => onSelect(patternKey)}
      className={`w-full text-left rounded-xl px-3 py-2.5 transition-all ${
        isSelected
          ? "ring-1 bg-ov/[0.06]"
          : "hover:bg-ov/[0.03]"
      }`}
      style={isSelected ? { ringColor: `${color}50`, borderColor: `${color}30` } : {}}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="arabic-text text-xl font-bold text-ustaz-arabic" dir="rtl">{entry.title}</span>
          <span
            className="rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider"
            style={{ color: `${color}cc`, background: `${color}15` }}
          >
            {entry.type}
          </span>
        </div>
        <ChevronRight size={14} className={`text-ustaz-turkish/20 transition-transform ${isSelected ? "rotate-90" : ""}`} />
      </div>
      <p className="mt-0.5 text-xs text-ustaz-turkish/50">{entry.meaning}</p>
    </button>
  );
}

function PatternDetail({ entry }) {
  const color = TYPE_COLORS[entry.type] || "#94a3b8";
  return (
    <div className="mt-2 space-y-1.5 pl-1">
      {entry.examples.map((ex, i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-lg bg-ov/[0.03] px-3 py-2"
          style={{ borderLeft: `3px solid ${color}40` }}
        >
          <span className="arabic-text text-lg font-semibold text-ustaz-arabic shrink-0" dir="rtl">{ex.arabic}</span>
          <div className="min-w-0">
            <span className="text-[10px] font-mono text-ustaz-turkish/30">{ex.root}</span>
            <p className="text-xs text-ustaz-turkish/70">{ex.meaning}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function VezinCard({ onClose, initialPattern }) {
  const [selected, setSelected] = useState(initialPattern || null);
  const [search, setSearch] = useState("");

  const patterns = Object.entries(vezinDB);
  const filtered = search.trim()
    ? patterns.filter(([key, entry]) => {
        const q = search.trim().toLowerCase();
        return (
          key.includes(q) ||
          entry.title.includes(search.trim()) ||
          entry.meaning.toLowerCase().includes(q) ||
          entry.type.toLowerCase().includes(q) ||
          entry.examples.some(
            (ex) =>
              ex.arabic.includes(search.trim()) ||
              ex.root.includes(search.trim()) ||
              ex.meaning.toLowerCase().includes(q)
          )
        );
      })
    : patterns;

  return (
    <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center sm:p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full sm:max-w-lg max-h-[90vh] max-h-[90dvh] flex flex-col overflow-hidden rounded-t-3xl sm:rounded-2xl border border-[#d4a64a30] bg-ustaz-card shadow-2xl">
        {/* Mobile handle */}
        <div className="mx-auto mt-3 mb-1 h-1 w-10 rounded-full bg-ov/20 sm:hidden" />
        {/* Header */}
        <div className="flex items-center justify-between border-b border-ov/5 px-5 py-4">
          <div>
            <span className="mb-1 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-semibold" style={{ color: "#d4a64acc", background: "#d4a64a15" }}>
              ⚙️ Sarf — Kalıp Sistemi
            </span>
            <h2 className="mt-1 text-lg font-bold text-ustaz-arabic">Vezin Rehberi — الأوزان</h2>
          </div>
          <button onClick={onClose} className="rounded-lg p-1.5 text-ustaz-turkish/30 hover:bg-ov/10 hover:text-ustaz-turkish">
            <X size={16} />
          </button>
        </div>

        {/* Intro */}
        <div className="border-b border-ov/5 px-5 py-3">
          <p className="text-xs leading-relaxed text-ustaz-turkish/60">
            Arapça'da üçlü kök (ف-ع-ل) kalıplara girer ve farklı anlamlar üretir.
            Aşağıda Kur'an'da sık karşılaşılan kalıplar var. Bir kalıba tıklayın.
          </p>
        </div>

        {/* Search */}
        <div className="border-b border-ov/5 px-5 py-2">
          <div className="flex items-center gap-2 rounded-lg bg-ov/[0.04] px-3 py-1.5">
            <Search size={14} className="shrink-0 text-ustaz-turkish/30" />
            <input
              type="text"
              placeholder="Kalıp, kök veya anlam ara..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-sm text-ustaz-turkish outline-none placeholder:text-ustaz-turkish/20"
            />
          </div>
        </div>

        {/* Pattern list */}
        <div className="flex-1 overflow-auto px-4 py-3 space-y-1">
          {filtered.length === 0 && (
            <p className="py-8 text-center text-sm text-ustaz-turkish/30">Sonuç bulunamadı</p>
          )}
          {filtered.map(([key, entry]) => (
            <div key={key}>
              <PatternRow
                patternKey={key}
                entry={entry}
                isSelected={selected === key}
                onSelect={(k) => setSelected(selected === k ? null : k)}
              />
              {selected === key && <PatternDetail entry={entry} />}
            </div>
          ))}
        </div>

        {/* Footer tip */}
        <div className="border-t border-ov/5 px-5 py-3">
          <div className="flex gap-2 text-xs text-ustaz-gold/60">
            <span className="shrink-0">💡</span>
            <span>Aynı kök farklı kalıplara girince anlam değişir: ك-ت-ب → كِتَاب (kitap), كَاتِب (yazan), مَكْتُوب (yazılmış), مَكْتَبَة (kütüphane)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
