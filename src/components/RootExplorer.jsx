import { useState } from "react";
import { X, GitBranch, BookOpen, Languages, ChevronDown, ChevronUp } from "lucide-react";
import { getRoot, getRootsForLesson } from "../data/rootDB";

const branchColors = {
  masdar: "text-blue-400",
  "ism-i fâil": "text-green-400",
  "ism-i mef'ûl": "text-yellow-400",
  mübalağa: "text-purple-400",
  "ism-i fâil (II)": "text-green-300",
  "ism-i fâil (IV)": "text-green-300",
  "ism-i fâil (VIII)": "text-green-300",
  "ism-i fâil (X)": "text-green-300",
  "ism-i mef'ûl (II)": "text-yellow-300",
  "ism-i tafdîl": "text-orange-400",
  "ism-i mekân": "text-cyan-400",
  "ism-i zaman": "text-cyan-400",
  isim: "text-ustaz-turkish/70",
  sıfat: "text-amber-400",
  cem: "text-teal-400",
  nisbet: "text-indigo-400",
  "özel isim": "text-ustaz-gold",
  "fiil (IV)": "text-emerald-400",
  "masdar (II)": "text-blue-300",
  "masdar (IV)": "text-blue-300",
  "masdar (X)": "text-blue-300",
  zarf: "text-slate-400",
  "meçhul fiil": "text-red-300",
};

function getTypeColor(type) {
  return branchColors[type] || "text-ustaz-turkish/60";
}

// Bâb renkleri
const babColors = {
  "I": "bg-blue-500/15 text-blue-400 border-blue-500/20",
  "II": "bg-green-500/15 text-green-400 border-green-500/20",
  "III": "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
  "IV": "bg-purple-500/15 text-purple-400 border-purple-500/20",
  "V": "bg-orange-500/15 text-orange-400 border-orange-500/20",
  "VI": "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
  "VII": "bg-pink-500/15 text-pink-400 border-pink-500/20",
  "VIII": "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  "IX": "bg-red-500/15 text-red-400 border-red-500/20",
  "X": "bg-indigo-500/15 text-indigo-400 border-indigo-500/20",
  "rubâî": "bg-amber-500/15 text-amber-400 border-amber-500/20",
};

// Bâb anlam etiketleri
const babSemanticLabels = {
  "temel eylem": "أصل",
  "teksîr": "تكثير",
  "ta'diye": "تعدية",
  "mutâva'at": "مطاوعة",
  "tedrîc": "تدريج",
  "tekellüf": "تكلّف",
  "talep": "طلب",
  "kendine dönüş": "افتعال",
  "nâkıs/tam fiil": "ناقص",
  "tekrar — şiddet": "تكرار",
};

function DerivativeTree({ root }) {
  if (!root.derivatives || root.derivatives.length === 0) return null;

  return (
    <div className="space-y-1.5">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-ustaz-turkish/30 mb-2">
        Türevler (الاشتقاق)
      </p>
      <div className="grid gap-1.5">
        {root.derivatives.map((d, i) => (
          <div key={i} className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-3 py-2 border border-white/[0.04]">
            <span className="arabic-text text-base text-ustaz-arabic min-w-[60px] text-right">{d.form}</span>
            <span className="arabic-text text-xs text-ustaz-gold/40">{d.pattern}</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-md bg-white/[0.04] ${getTypeColor(d.type)}`}>
              {d.type}
            </span>
            <span className="text-xs text-ustaz-turkish/60 flex-1">{d.meaning}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BabChain({ root }) {
  if (!root.bab_chain || root.bab_chain.length === 0) return null;

  return (
    <div className="space-y-1.5">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-ustaz-turkish/30 mb-2">
        Bâb Zinciri (سلسلة الأبواب)
      </p>
      <div className="space-y-2">
        {root.bab_chain.map((b, i) => (
          <div key={i} className="relative">
            {/* Connector line */}
            {i > 0 && (
              <div className="absolute -top-2 left-5 h-2 w-px bg-white/10" />
            )}
            <div className={`rounded-xl border px-3 py-2.5 ${babColors[b.bab] || "bg-white/[0.04] text-ustaz-turkish/60 border-white/[0.06]"}`}>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold">{b.bab}. bâb</span>
                {babSemanticLabels[b.semantic] && (
                  <span className="arabic-text text-[10px] opacity-60">{babSemanticLabels[b.semantic]}</span>
                )}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="arabic-text text-sm">{b.form}</span>
                <span className="text-xs opacity-70">{b.meaning}</span>
              </div>
              {b.semantic && (
                <p className="mt-1 text-[10px] opacity-50">{b.semantic}</p>
              )}
              {b.lessons.length > 0 && (
                <div className="mt-1.5 flex gap-1">
                  {b.lessons.map(l => (
                    <span key={l} className="text-[9px] px-1.5 py-0.5 rounded bg-white/[0.08]">{l}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CrossRefs({ root }) {
  if (!root.cross_refs || root.cross_refs.length === 0) return null;

  return (
    <div className="space-y-1.5">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-ustaz-turkish/30 mb-2">
        Kur'an Referansları (المراجع)
      </p>
      <div className="space-y-1">
        {root.cross_refs.map((ref, i) => (
          <div key={i} className="flex items-start gap-2 rounded-lg bg-white/[0.02] px-3 py-2">
            <span className="text-[10px] text-ustaz-gold/50 mt-0.5 whitespace-nowrap">{ref.verse}</span>
            <span className="arabic-text text-sm text-ustaz-arabic">{ref.form}</span>
            <span className="text-[11px] text-ustaz-turkish/50 flex-1">{ref.note}</span>
            <span className="text-[9px] text-ustaz-turkish/25">{ref.lesson}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TurkishTraces({ root }) {
  if (!root.turkish_traces || root.turkish_traces.length === 0) return null;

  return (
    <div className="flex items-start gap-2.5 rounded-xl bg-ustaz-gold/[0.04] border border-ustaz-gold/10 px-3 py-2.5">
      <Languages size={13} className="mt-0.5 shrink-0 text-ustaz-gold/50" />
      <div>
        <p className="mb-0.5 text-[9px] font-semibold uppercase tracking-wider text-ustaz-gold/50">Türkçe İzler</p>
        <p className="text-xs text-ustaz-gold/70">{root.turkish_traces.join(", ")}</p>
      </div>
    </div>
  );
}

// Full Root Detail (used in modal or inline)
export function RootDetail({ rootKey, onClose }) {
  const root = getRoot(rootKey);
  if (!root) return null;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="arabic-text text-2xl text-ustaz-gold mb-1">{rootKey}</div>
          <p className="text-sm text-ustaz-turkish/60">{root.core}</p>
          <p className="mt-1 text-[10px] text-ustaz-turkish/30">
            Kur'an'da ~{root.quran_count} kez
          </p>
        </div>
        {onClose && (
          <button onClick={onClose} className="rounded-xl p-2 text-ustaz-turkish/40 transition hover:bg-white/10">
            <X size={16} />
          </button>
        )}
      </div>

      <DerivativeTree root={root} />
      <BabChain root={root} />
      <CrossRefs root={root} />
      <TurkishTraces root={root} />
    </div>
  );
}

// Lesson Roots Tab — shows roots relevant to current lesson
export default function RootExplorer({ lessonId }) {
  const [expandedRoot, setExpandedRoot] = useState(null);
  const roots = getRootsForLesson(lessonId);

  if (roots.length === 0) {
    return (
      <div className="text-center py-8">
        <GitBranch size={28} className="mx-auto mb-3 text-ustaz-turkish/15" />
        <p className="text-sm text-ustaz-turkish/30">Bu ders için kök verisi henüz eklenmemiş.</p>
      </div>
    );
  }

  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-2 mb-3">
        <GitBranch size={14} className="text-ustaz-gold/50" />
        <p className="text-[10px] font-semibold uppercase tracking-wider text-ustaz-turkish/40">
          Bu Dersteki Kökler ({roots.length})
        </p>
      </div>

      {roots.map(({ key, ...rootData }) => {
        const isExpanded = expandedRoot === key;
        return (
          <div key={key} className="card">
            <button
              onClick={() => setExpandedRoot(isExpanded ? null : key)}
              className="flex w-full items-center justify-between text-left"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ustaz-gold/10">
                  <span className="arabic-text text-sm text-ustaz-gold">{key}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-ustaz-turkish/80">{rootData.core}</p>
                  <p className="text-[10px] text-ustaz-turkish/30">
                    {rootData.derivatives?.length || 0} türev · {rootData.bab_chain?.length || 0} bâb · ~{rootData.quran_count}×
                  </p>
                </div>
              </div>
              {isExpanded ? (
                <ChevronUp size={16} className="text-ustaz-turkish/30" />
              ) : (
                <ChevronDown size={16} className="text-ustaz-turkish/30" />
              )}
            </button>

            {isExpanded && (
              <div className="mt-4 space-y-4 border-t border-white/[0.06] pt-4">
                <DerivativeTree root={rootData} />
                <BabChain root={rootData} />

                {/* Lesson-specific refs */}
                {rootData.lessonRefs && rootData.lessonRefs.length > 0 && (
                  <div className="space-y-1.5">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-ustaz-turkish/30 mb-2">
                      Bu Dersteki Kullanımlar
                    </p>
                    {rootData.lessonRefs.map((ref, i) => (
                      <div key={i} className="flex items-start gap-2 rounded-lg bg-ustaz-gold/[0.03] border border-ustaz-gold/10 px-3 py-2">
                        <span className="text-[10px] text-ustaz-gold/60 mt-0.5 whitespace-nowrap">{ref.verse}</span>
                        <span className="arabic-text text-sm text-ustaz-arabic">{ref.form}</span>
                        <span className="text-[11px] text-ustaz-turkish/50 flex-1">{ref.note}</span>
                      </div>
                    ))}
                  </div>
                )}

                <TurkishTraces root={rootData} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
