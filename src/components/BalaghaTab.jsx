import { useState } from "react";
import { Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { getBalaghaForLesson } from "../data/balagha";

const branchStyles = {
  meani: {
    label: "المعاني",
    labelTr: "Me'ânî",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/15",
    dot: "bg-blue-400",
  },
  beyan: {
    label: "البيان",
    labelTr: "Beyân",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/15",
    dot: "bg-emerald-400",
  },
  bedi: {
    label: "البديع",
    labelTr: "Bedî'",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/15",
    dot: "bg-purple-400",
  },
};

function ExampleCard({ example }) {
  return (
    <div className="rounded-xl bg-ov/[0.03] border border-ov/[0.05] px-3 py-2.5">
      <div className="flex items-baseline gap-2 mb-1.5">
        <span className="text-[10px] text-ustaz-gold/50 whitespace-nowrap">{example.verse}</span>
        <span className="arabic-text text-base text-ustaz-arabic leading-relaxed">{example.text}</span>
      </div>
      <p className="text-[11px] leading-relaxed text-ustaz-turkish/50">{example.analysis}</p>
    </div>
  );
}

function BalaghaCard({ art }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const style = branchStyles[art.branch] || branchStyles.meani;

  const allExamples = [
    ...(art.lessonExamples || []),
    ...(art.lessonSubtypes || []).flatMap(st => st.examples),
  ];

  return (
    <div className="card">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between text-left"
      >
        <div className="flex items-center gap-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${style.bg}`}>
            <Sparkles size={16} className={style.color} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-ustaz-arabic">{art.titleTr}</h3>
              <span className={`arabic-text text-[11px] ${style.color} opacity-70`}>{art.title}</span>
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <span className={`inline-flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded-md ${style.bg} ${style.color} ${style.border} border`}>
                <span className={`h-1 w-1 rounded-full ${style.dot}`} />
                {style.labelTr}
              </span>
              <span className="text-[10px] text-ustaz-turkish/25">
                {allExamples.length} örnek
              </span>
            </div>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp size={16} className="text-ustaz-turkish/30" />
        ) : (
          <ChevronDown size={16} className="text-ustaz-turkish/30" />
        )}
      </button>

      {isExpanded && (
        <div className="mt-4 space-y-3 border-t border-ov/[0.06] pt-4">
          {/* Definition */}
          <p className="text-sm leading-relaxed text-ustaz-turkish/60">{art.definition}</p>

          {/* Rules (if tikrar) */}
          {art.rules && art.rules.length > 0 && (
            <div className="rounded-xl bg-ustaz-gold/5 border border-ustaz-gold/10 px-3 py-2.5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-ustaz-gold/50 mb-1.5">Kural</p>
              {art.rules.map((rule, i) => (
                <p key={i} className="text-xs text-ustaz-gold/70 leading-relaxed">{rule}</p>
              ))}
            </div>
          )}

          {/* Direct examples */}
          {art.lessonExamples && art.lessonExamples.length > 0 && (
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-ustaz-turkish/30">
                Bu Dersteki Örnekler
              </p>
              {art.lessonExamples.map((ex, i) => (
                <ExampleCard key={i} example={ex} />
              ))}
            </div>
          )}

          {/* Subtype examples */}
          {art.lessonSubtypes && art.lessonSubtypes.map((st, i) => (
            <div key={i} className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-ustaz-turkish/30">
                {st.subtype}
              </p>
              {st.examples.map((ex, j) => (
                <ExampleCard key={j} example={ex} />
              ))}
            </div>
          ))}

          {/* Cross-reference: where else does this art appear */}
          {(() => {
            const allOtherExamples = [
              ...(art.examples || []),
              ...(art.subtypes || []).flatMap(st => st.examples || []),
            ].filter(ex => !allExamples.find(le => le.verse === ex.verse));

            if (allOtherExamples.length === 0) return null;

            return (
              <div className="mt-2 pt-2 border-t border-ov/[0.04]">
                <p className="text-[9px] font-semibold uppercase tracking-wider text-ustaz-turkish/20 mb-1.5">
                  Başka Derslerde Bu Sanat
                </p>
                <div className="flex flex-wrap gap-1">
                  {allOtherExamples.slice(0, 4).map((ex, i) => (
                    <span key={i} className="text-[9px] px-2 py-1 rounded-lg bg-ov/[0.03] text-ustaz-turkish/30">
                      {ex.verse} ({ex.lesson})
                    </span>
                  ))}
                  {allOtherExamples.length > 4 && (
                    <span className="text-[9px] px-2 py-1 text-ustaz-turkish/20">
                      +{allOtherExamples.length - 4}
                    </span>
                  )}
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}

export default function BalaghaTab({ lessonId }) {
  const arts = getBalaghaForLesson(lessonId);

  if (arts.length === 0) {
    return (
      <div className="text-center py-8">
        <Sparkles size={28} className="mx-auto mb-3 text-ustaz-turkish/15" />
        <p className="text-sm text-ustaz-turkish/30">Bu ders için belâgat analizi henüz eklenmemiş.</p>
      </div>
    );
  }

  // Group by branch
  const grouped = { meani: [], beyan: [], bedi: [] };
  for (const art of arts) {
    const b = art.branch || "meani";
    if (grouped[b]) grouped[b].push(art);
    else grouped.meani.push(art);
  }

  return (
    <div className="space-y-4">
      {/* Branch legend */}
      <div className="flex flex-wrap gap-2 mb-2">
        {Object.entries(branchStyles).map(([key, style]) => {
          const count = (grouped[key] || []).length;
          if (count === 0) return null;
          return (
            <span key={key} className={`inline-flex items-center gap-1.5 text-[10px] px-2 py-1 rounded-lg ${style.bg} ${style.color} ${style.border} border`}>
              <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
              {style.labelTr}
              <span className="opacity-50">({count})</span>
            </span>
          );
        })}
      </div>

      {/* All arts, sorted by branch */}
      {["meani", "beyan", "bedi"].map(branch => (
        (grouped[branch] || []).map((art, i) => (
          <BalaghaCard key={`${branch}-${i}`} art={art} />
        ))
      ))}
    </div>
  );
}
