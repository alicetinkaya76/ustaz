import { useState, useMemo } from "react";
import { Sparkles, ChevronDown, ChevronUp, X, TreePine } from "lucide-react";
import balaghaDB, { getBalaghaKeys, getBalagha } from "../data/balagha";

const branchMeta = {
  meani: { label: "المعاني", labelTr: "Me'ânî", desc: "Sözdizimi & anlam", color: "#60a5fa", bgClass: "bg-blue-500/10", textClass: "text-blue-400", borderClass: "border-blue-500/20" },
  beyan: { label: "البيان", labelTr: "Beyân", desc: "Açıklama & betimleme", color: "#34d399", bgClass: "bg-emerald-500/10", textClass: "text-emerald-400", borderClass: "border-emerald-500/20" },
  bedi: { label: "البديع", labelTr: "Bedî'", desc: "Söz güzelliği", color: "#c084fc", bgClass: "bg-purple-500/10", textClass: "text-purple-400", borderClass: "border-purple-500/20" },
};

// Group arts by branch
function groupByBranch() {
  const groups = { meani: [], beyan: [], bedi: [] };
  for (const key of getBalaghaKeys()) {
    const art = getBalagha(key);
    if (art) {
      const b = art.branch || "meani";
      if (groups[b]) groups[b].push({ key, ...art });
    }
  }
  return groups;
}

function DetailPanel({ art, onClose }) {
  if (!art) return null;
  const meta = branchMeta[art.branch] || branchMeta.meani;
  const allExamples = [
    ...(art.examples || []),
    ...(art.subtypes || []).flatMap(st => st.examples || []),
  ];

  return (
    <div className="mt-3 rounded-2xl border border-ov/[0.08] bg-ustaz-bg/95 backdrop-blur-sm p-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className={meta.textClass} />
          <div>
            <h3 className="text-sm font-semibold text-ustaz-arabic">{art.titleTr}</h3>
            <span className={`arabic-text text-xs ${meta.textClass} opacity-70`}>{art.title}</span>
          </div>
        </div>
        <button onClick={onClose} className="p-1 rounded-lg hover:bg-ov/[0.06]" aria-label="Kapat">
          <X size={16} className="text-ustaz-turkish/30" />
        </button>
      </div>

      <p className="text-xs leading-relaxed text-ustaz-turkish/60 mb-3">{art.definition}</p>

      {art.rules && art.rules.length > 0 && (
        <div className="rounded-xl bg-ustaz-gold/5 border border-ustaz-gold/10 px-3 py-2 mb-3">
          {art.rules.map((rule, i) => (
            <p key={i} className="text-[11px] text-ustaz-gold/70 leading-relaxed">{rule}</p>
          ))}
        </div>
      )}

      {/* Subtypes */}
      {art.subtypes && art.subtypes.length > 0 && (
        <div className="space-y-2 mb-3">
          {art.subtypes.map((st, i) => (
            <div key={i}>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-ustaz-turkish/30 mb-1">{st.name}</p>
              {st.examples.slice(0, 2).map((ex, j) => (
                <div key={j} className="rounded-lg bg-ov/[0.03] border border-ov/[0.05] px-2.5 py-1.5 mb-1">
                  <span className="arabic-text text-sm text-ustaz-arabic">{ex.text}</span>
                  <span className="text-[9px] text-ustaz-gold/40 ml-2">{ex.verse}</span>
                  <p className="text-[10px] text-ustaz-turkish/40 mt-0.5">{ex.analysis}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Direct examples */}
      {allExamples.length > 0 && !art.subtypes && (
        <div className="space-y-1">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-ustaz-turkish/30">Örnekler</p>
          {allExamples.slice(0, 3).map((ex, i) => (
            <div key={i} className="rounded-lg bg-ov/[0.03] border border-ov/[0.05] px-2.5 py-1.5">
              <span className="arabic-text text-sm text-ustaz-arabic">{ex.text}</span>
              <span className="text-[9px] text-ustaz-gold/40 ml-2">{ex.verse} ({ex.lesson})</span>
              <p className="text-[10px] text-ustaz-turkish/40 mt-0.5">{ex.analysis}</p>
            </div>
          ))}
          {allExamples.length > 3 && (
            <p className="text-[9px] text-ustaz-turkish/20 text-center">+{allExamples.length - 3} örnek daha</p>
          )}
        </div>
      )}
    </div>
  );
}

export default function BalaghaTree() {
  const [selectedArt, setSelectedArt] = useState(null);
  const groups = useMemo(groupByBranch, []);

  const branches = ["meani", "beyan", "bedi"];

  // Calculate total examples per art
  function getExCount(art) {
    const direct = (art.examples || []).length;
    const sub = (art.subtypes || []).reduce((sum, st) => sum + (st.examples || []).length, 0);
    return direct + sub;
  }

  return (
    <div className="space-y-4">
      {/* Title */}
      <div className="flex items-center gap-2 mb-2">
        <TreePine size={18} className="text-ustaz-gold/60" />
        <h2 className="text-sm font-semibold text-ustaz-turkish/80">Belâgat Ağacı</h2>
        <span className="text-[10px] text-ustaz-turkish/30">شَجَرَةُ البَلَاغَة</span>
      </div>

      {/* SVG Tree */}
      <svg
        viewBox="0 0 360 220"
        className="w-full"
        role="img"
        aria-label="Belâgat ilim dalları ağacı"
        style={{ maxHeight: 240 }}
      >
        {/* Root trunk */}
        <line x1="180" y1="210" x2="180" y2="170" stroke="var(--color-ustaz-gold)" strokeWidth="3" opacity="0.3" />
        <text x="180" y="220" textAnchor="middle" fontSize="8" fill="var(--color-ustaz-turkish)" opacity="0.4" fontFamily="serif">البَلَاغَة</text>

        {/* Three branches */}
        {branches.map((brKey, bi) => {
          const meta = branchMeta[brKey];
          const arts = groups[brKey] || [];
          const cx = 60 + bi * 140; // 60, 200, 340
          const rootY = 170;
          const branchY = 130;

          return (
            <g key={brKey}>
              {/* Branch line from trunk */}
              <line x1="180" y1={rootY} x2={cx} y2={branchY} stroke={meta.color} strokeWidth="2" opacity="0.25" />

              {/* Branch label */}
              <text x={cx} y={branchY - 5} textAnchor="middle" fontSize="9" fill={meta.color} fontWeight="600" fontFamily="serif">
                {meta.label}
              </text>
              <text x={cx} y={branchY + 8} textAnchor="middle" fontSize="7" fill={meta.color} opacity="0.5">
                {meta.labelTr}
              </text>

              {/* Art nodes */}
              {arts.map((art, ai) => {
                const nodeCount = arts.length;
                const spread = Math.min(120, nodeCount * 32);
                const startX = cx - spread / 2;
                const nodeX = nodeCount === 1 ? cx : startX + (ai / (nodeCount - 1)) * spread;
                const nodeY = branchY - 40 - (ai % 2) * 18;
                const isSelected = selectedArt?.key === art.key;
                const exCount = getExCount(art);

                return (
                  <g key={art.key}>
                    {/* Stem line */}
                    <line x1={cx} y1={branchY - 12} x2={nodeX} y2={nodeY + 10} stroke={meta.color} strokeWidth="1" opacity="0.15" />

                    {/* Node circle */}
                    <circle
                      cx={nodeX}
                      cy={nodeY}
                      r={isSelected ? 11 : 9}
                      fill={isSelected ? meta.color : "transparent"}
                      stroke={meta.color}
                      strokeWidth={isSelected ? 2 : 1.5}
                      opacity={isSelected ? 1 : 0.5}
                      style={{ cursor: "pointer", transition: "all 0.2s" }}
                      onClick={() => setSelectedArt(isSelected ? null : art)}
                      role="button"
                      tabIndex={0}
                      aria-label={`${art.titleTr} — ${exCount} örnek`}
                      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSelectedArt(isSelected ? null : art); } }}
                    />

                    {/* Node label */}
                    <text
                      x={nodeX}
                      y={nodeY - 14}
                      textAnchor="middle"
                      fontSize="6.5"
                      fill={isSelected ? meta.color : "var(--color-ustaz-turkish)"}
                      opacity={isSelected ? 1 : 0.45}
                      style={{ cursor: "pointer", fontWeight: isSelected ? 600 : 400 }}
                      onClick={() => setSelectedArt(isSelected ? null : art)}
                    >
                      {art.titleTr.length > 12 ? art.titleTr.slice(0, 11) + "…" : art.titleTr}
                    </text>

                    {/* Count badge */}
                    <text x={nodeX} y={nodeY + 3.5} textAnchor="middle" fontSize="6" fill={isSelected ? "#fff" : meta.color} opacity={isSelected ? 1 : 0.6}>
                      {exCount}
                    </text>
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>

      {/* Branch legend cards */}
      <div className="grid grid-cols-3 gap-2">
        {branches.map(brKey => {
          const meta = branchMeta[brKey];
          const count = (groups[brKey] || []).length;
          return (
            <div key={brKey} className={`rounded-xl ${meta.bgClass} border ${meta.borderClass} px-2.5 py-2 text-center`}>
              <p className={`arabic-text text-sm font-semibold ${meta.textClass}`}>{meta.label}</p>
              <p className={`text-[10px] ${meta.textClass} opacity-60`}>{meta.labelTr}</p>
              <p className="text-[9px] text-ustaz-turkish/30 mt-0.5">{count} sanat</p>
            </div>
          );
        })}
      </div>

      {/* List of all arts */}
      <div className="space-y-1.5">
        {branches.map(brKey => {
          const meta = branchMeta[brKey];
          return (groups[brKey] || []).map(art => {
            const isSelected = selectedArt?.key === art.key;
            const exCount = getExCount(art);
            return (
              <button
                key={art.key}
                onClick={() => setSelectedArt(isSelected ? null : art)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? `${meta.bgClass} ${meta.borderClass} border`
                    : "border-ov/[0.05] hover:border-ov/[0.1]"
                }`}
                aria-expanded={isSelected}
                aria-label={`${art.titleTr} (${meta.labelTr}) — ${exCount} örnek`}
              >
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${meta.bgClass}`}>
                  <Sparkles size={14} className={meta.textClass} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-ustaz-arabic truncate">{art.titleTr}</span>
                    <span className={`arabic-text text-[10px] ${meta.textClass} opacity-60`}>{art.title}</span>
                  </div>
                  <span className="text-[9px] text-ustaz-turkish/25">{meta.labelTr} · {exCount} örnek</span>
                </div>
                {isSelected ? <ChevronUp size={14} className="text-ustaz-turkish/30" /> : <ChevronDown size={14} className="text-ustaz-turkish/30" />}
              </button>
            );
          });
        })}
      </div>

      {/* Detail panel */}
      {selectedArt && (
        <DetailPanel art={selectedArt} onClose={() => setSelectedArt(null)} />
      )}
    </div>
  );
}
