import { useState, useMemo, useRef, useEffect } from "react";
import { TreePine, ChevronDown, ChevronUp, Info } from "lucide-react";

const roleColors = {
  mübtedâ:        { bg: "bg-blue-500/15", text: "text-blue-400", border: "border-blue-500/25", hex: "#60a5fa" },
  haber:          { bg: "bg-green-500/15", text: "text-green-400", border: "border-green-500/25", hex: "#4ade80" },
  fâil:           { bg: "bg-emerald-500/15", text: "text-emerald-400", border: "border-emerald-500/25", hex: "#34d399" },
  "mef'ûl bih":   { bg: "bg-yellow-500/15", text: "text-yellow-400", border: "border-yellow-500/25", hex: "#facc15" },
  fiil:           { bg: "bg-purple-500/15", text: "text-purple-400", border: "border-purple-500/25", hex: "#c084fc" },
  sıfat:          { bg: "bg-orange-500/15", text: "text-orange-400", border: "border-orange-500/25", hex: "#fb923c" },
  "muzâfun ileyh": { bg: "bg-cyan-500/15", text: "text-cyan-400", border: "border-cyan-500/25", hex: "#22d3ee" },
  muzâf:          { bg: "bg-teal-500/15", text: "text-teal-400", border: "border-teal-500/25", hex: "#2dd4bf" },
  "câr-mecrûr":   { bg: "bg-pink-500/15", text: "text-pink-400", border: "border-pink-500/25", hex: "#f472b6" },
  "harf-i cer":   { bg: "bg-pink-500/15", text: "text-pink-400", border: "border-pink-500/25", hex: "#f472b6" },
  "harf-i atıf":  { bg: "bg-slate-500/15", text: "text-slate-400", border: "border-slate-500/25", hex: "#94a3b8" },
  zarf:           { bg: "bg-amber-500/15", text: "text-amber-400", border: "border-amber-500/25", hex: "#fbbf24" },
  şart:           { bg: "bg-red-500/15", text: "text-red-400", border: "border-red-500/25", hex: "#f87171" },
  kasem:          { bg: "bg-violet-500/15", text: "text-violet-400", border: "border-violet-500/25", hex: "#a78bfa" },
  cevâb:          { bg: "bg-lime-500/15", text: "text-lime-400", border: "border-lime-500/25", hex: "#a3e635" },
};

function getRoleStyle(role) {
  const key = role?.toLowerCase() || "";
  for (const [k, v] of Object.entries(roleColors)) {
    if (key.includes(k)) return v;
  }
  return { bg: "bg-ov/5", text: "text-ustaz-turkish/60", border: "border-ov/10", hex: "#9ca3af" };
}

const irabSymbols = {
  merfû: { symbol: "\u064F", label: "مرفوع", tr: "merfû (ötre)" },
  mensûb: { symbol: "\u064E", label: "منصوب", tr: "mensûb (üstün)" },
  mecrûr: { symbol: "\u0650", label: "مجرور", tr: "mecrûr (esre)" },
  meczûm: { symbol: "\u0652", label: "مجزوم", tr: "meczûm (cezim)" },
};

function buildTreeData(words) {
  return words.map((w, i) => {
    const role = w.irab_short || "—";
    let hareke = null;
    const irabLower = (w.irab || "").toLowerCase();
    if (irabLower.includes("merfû") || irabLower.includes("مرفوع")) hareke = "merfû";
    else if (irabLower.includes("mensûb") || irabLower.includes("منصوب")) hareke = "mensûb";
    else if (irabLower.includes("mecrûr") || irabLower.includes("مجرور")) hareke = "mecrûr";
    else if (irabLower.includes("meczûm") || irabLower.includes("مجزوم")) hareke = "meczûm";
    return { id: i, arabic: w.arabic, role, pos: w.pos, hareke, fullIrab: w.irab, meaning: w.meaning_tr };
  });
}

function TreeNode({ node, isSelected, onSelect, nodeRef }) {
  const style = getRoleStyle(node.role);
  const hSym = node.hareke ? irabSymbols[node.hareke] : null;
  return (
    <button ref={nodeRef} onClick={() => onSelect(node.id)}
      className={`flex flex-col items-center gap-1 rounded-2xl border px-3 py-2.5 transition-all active:scale-95 min-w-[72px] ${
        isSelected ? `${style.bg} ${style.border} ring-1 ring-ov/10` : `bg-ov/[0.03] border-ov/[0.06] hover:${style.bg}`
      }`}>
      <span className="arabic-text text-base text-ustaz-arabic leading-tight">{node.arabic}</span>
      <span className={`text-[10px] font-semibold ${style.text}`}>{node.role}</span>
      {hSym && <span className="text-[9px] text-ustaz-turkish/30">{hSym.tr}</span>}
    </button>
  );
}

export default function IrabTree({ verse }) {
  const [selectedNode, setSelectedNode] = useState(null);
  const [showLegend, setShowLegend] = useState(false);
  const [connectors, setConnectors] = useState([]);
  const wrapRef = useRef(null);
  const nodeRefs = useRef({});
  const labelRefs = useRef({});

  const nodes = useMemo(() => buildTreeData(verse.words), [verse]);
  const selected = selectedNode !== null ? nodes[selectedNode] : null;

  // Measure & draw SVG connectors between node bottoms and label tops
  useEffect(() => {
    function measure() {
      if (!wrapRef.current) return;
      const box = wrapRef.current.getBoundingClientRect();
      const next = [];
      nodes.forEach((n) => {
        const nEl = nodeRefs.current[n.id];
        const lEl = labelRefs.current[n.id];
        if (!nEl || !lEl) return;
        const nR = nEl.getBoundingClientRect();
        const lR = lEl.getBoundingClientRect();
        next.push({
          id: n.id,
          x1: nR.left + nR.width / 2 - box.left,
          y1: nR.bottom - box.top,
          x2: lR.left + lR.width / 2 - box.left,
          y2: lR.top - box.top,
          hex: getRoleStyle(n.role).hex,
        });
      });
      setConnectors(next);
    }
    const t = setTimeout(measure, 80);
    window.addEventListener("resize", measure);
    return () => { clearTimeout(t); window.removeEventListener("resize", measure); };
  }, [nodes, selectedNode, showLegend]);

  return (
    <div className="space-y-4 relative" ref={wrapRef}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TreePine size={15} className="text-ustaz-gold/50" />
          <span className="text-[10px] font-semibold uppercase tracking-wider text-ustaz-turkish/30">
            İ'rab Ağacı — {verse.surah}:{verse.ayah}
          </span>
        </div>
        <button onClick={() => setShowLegend(!showLegend)}
          className="flex items-center gap-1 rounded-lg px-2 py-1 text-[10px] text-ustaz-turkish/30 hover:text-ustaz-turkish/50 transition">
          <Info size={12} />
          {showLegend ? <ChevronUp size={11} /> : <ChevronDown size={11} />}
        </button>
      </div>

      {showLegend && (
        <div className="rounded-xl bg-ov/[0.03] border border-ov/[0.06] px-4 py-3">
          <p className="text-[9px] font-semibold uppercase tracking-wider text-ustaz-turkish/30 mb-2">İ'rab Rolleri</p>
          <div className="flex flex-wrap gap-1.5">
            {Object.entries(roleColors).slice(0, 10).map(([role, style]) => (
              <span key={role} className={`inline-flex items-center gap-1 rounded-lg border px-2 py-0.5 text-[10px] ${style.bg} ${style.text} ${style.border}`}>
                {role}
              </span>
            ))}
          </div>
          <div className="mt-2 flex gap-3 text-[10px] text-ustaz-turkish/30">
            {Object.entries(irabSymbols).map(([key, val]) => (
              <span key={key} className="flex items-center gap-1">
                <span className="arabic-text text-sm">{val.symbol}</span> {val.tr}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="rounded-xl bg-ov/[0.02] px-4 py-3 text-center">
        <p className="arabic-text text-lg text-ustaz-arabic leading-[2]" dir="rtl">{verse.arabic}</p>
      </div>

      {/* Tree nodes */}
      <div className="overflow-x-auto scrollbar-hide -mx-1 px-1">
        <div className="flex gap-2 justify-center flex-wrap" dir="rtl">
          {nodes.map((node) => (
            <TreeNode key={node.id} node={node} isSelected={selectedNode === node.id}
              onSelect={setSelectedNode} nodeRef={(el) => { nodeRefs.current[node.id] = el; }} />
          ))}
        </div>
      </div>

      {/* SVG connector lines (absolute overlay) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: "visible", zIndex: 1 }}>
        {connectors.map((c) => {
          const active = selectedNode === c.id;
          const midY = (c.y1 + c.y2) / 2;
          return (
            <path key={c.id}
              d={`M ${c.x1} ${c.y1} C ${c.x1} ${midY}, ${c.x2} ${midY}, ${c.x2} ${c.y2}`}
              fill="none"
              stroke={active ? c.hex : c.hex + "30"}
              strokeWidth={active ? 2 : 1}
              strokeDasharray={active ? "none" : "4 3"}
            />
          );
        })}
      </svg>

      {/* Meaning labels */}
      <div className="flex justify-center gap-2 flex-wrap relative" dir="rtl" style={{ zIndex: 2 }}>
        {nodes.map((node) => {
          const style = getRoleStyle(node.role);
          return (
            <div key={node.id} className="flex flex-col items-center" style={{ minWidth: 72 }}
              ref={(el) => { labelRefs.current[node.id] = el; }}>
              <span className={`text-[9px] ${style.text} opacity-60`}>{node.meaning}</span>
            </div>
          );
        })}
      </div>

      {/* Detail panel */}
      {selected && (
        <div className="rounded-xl border border-ustaz-gold/15 bg-ustaz-gold/[0.03] px-4 py-3 space-y-2 relative" style={{ zIndex: 2 }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="arabic-text text-lg text-ustaz-gold">{selected.arabic}</span>
              <span className={`rounded-lg border px-2 py-0.5 text-[10px] font-semibold ${getRoleStyle(selected.role).bg} ${getRoleStyle(selected.role).text} ${getRoleStyle(selected.role).border}`}>
                {selected.role}
              </span>
            </div>
            <button onClick={() => setSelectedNode(null)} className="text-ustaz-turkish/30 hover:text-ustaz-turkish/50">
              <ChevronUp size={14} />
            </button>
          </div>
          <p className="text-sm leading-relaxed text-ustaz-turkish/60">{selected.fullIrab}</p>
          {selected.hareke && (
            <p className="text-xs text-ustaz-turkish/40">
              Hareke: <span className="arabic-text text-sm">{irabSymbols[selected.hareke].symbol}</span> — {irabSymbols[selected.hareke].tr}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
