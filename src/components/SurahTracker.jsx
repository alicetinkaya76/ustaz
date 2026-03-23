import { useState, useMemo } from "react";
import { BookOpenCheck, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import surahRegistry, { getStats, getUncoveredAyahs, getSurahsByCuz } from "../data/surahs/registry";

// ── Ayet ızgarası: her ayet bir hücre ──
function AyahGrid({ entry }) {
  const covered = new Set(entry.coveredAyahs);
  return (
    <div className="flex flex-wrap gap-[2px]">
      {Array.from({ length: entry.ayatCount }, (_, i) => i + 1).map((a) => (
        <div
          key={a}
          title={`${entry.name} ${a}. ayet${covered.has(a) ? " ✓" : ""}`}
          className={`h-[6px] w-[6px] rounded-[1px] transition-colors ${
            covered.has(a)
              ? "bg-ustaz-gold/80"
              : "bg-ov/[0.08]"
          }`}
        />
      ))}
    </div>
  );
}

// ── Tek sure kartı ──
function SurahCard({ entry, onSelectLesson }) {
  const [open, setOpen] = useState(false);
  const pct = Math.round((entry.coveredAyahs.length / entry.ayatCount) * 100);
  const isComplete = entry.status === "complete";
  const uncovered = useMemo(
    () => (open ? getUncoveredAyahs(entry.surah) : []),
    [open, entry.surah],
  );

  return (
    <div
      className={`rounded-xl border transition-colors ${
        isComplete
          ? "border-ustaz-gold/20 bg-ustaz-gold/[0.04]"
          : "border-ov/[0.06] bg-ov/[0.02]"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-3 px-3 py-2.5 text-left"
      >
        {/* Sure numarası */}
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold ${
            isComplete
              ? "bg-ustaz-gold/15 text-ustaz-gold"
              : "bg-ov/[0.06] text-ustaz-turkish/40"
          }`}
        >
          {entry.surah}
        </span>

        {/* İsim + progress */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-ustaz-turkish">
              {entry.name}
            </span>
            <span className="text-[10px] text-ustaz-arabic/50" dir="rtl">
              {entry.nameAr}
            </span>
          </div>
          <div className="mt-1 flex items-center gap-2">
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-ov/[0.08]">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  isComplete
                    ? "bg-ustaz-gold/70"
                    : "bg-ustaz-gold/40"
                }`}
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="text-[10px] tabular-nums text-ustaz-turkish/40">
              {entry.coveredAyahs.length}/{entry.ayatCount}
            </span>
          </div>
        </div>

        {/* Chevron */}
        <span className="text-ustaz-turkish/20">
          {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </span>
      </button>

      {/* Detay */}
      {open && (
        <div className="border-t border-ov/[0.06] px-3 py-2.5">
          <div className="mb-2">
            <AyahGrid entry={entry} />
          </div>
          <div className="flex flex-wrap gap-1">
            {entry.lessonIds.map((lid) => (
              <button
                key={lid}
                onClick={() => onSelectLesson?.(lid)}
                className={`rounded-md px-1.5 py-0.5 text-[9px] transition-colors ${
                  onSelectLesson
                    ? "bg-ustaz-gold/10 text-ustaz-gold hover:bg-ustaz-gold/20 cursor-pointer"
                    : "bg-ov/[0.06] text-ustaz-turkish/50"
                }`}
                title={onSelectLesson ? `${lid} dersine git` : lid}
              >
                {lid}
                {onSelectLesson && <ExternalLink size={7} className="ml-0.5 inline-block opacity-50" />}
              </button>
            ))}
          </div>
          {uncovered.length > 0 && (
            <p className="mt-1.5 text-[10px] text-ustaz-turkish/30">
              Eksik: {uncovered.length} ayet ({uncovered.slice(0, 8).join(", ")}
              {uncovered.length > 8 ? "..." : ""})
            </p>
          )}
          {entry.note && (
            <p className="mt-1 text-[10px] italic text-ustaz-turkish/25">
              {entry.note}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// ── Ana bileşen ──
export default function SurahTracker({ compact = false, onSelectLesson }) {
  const stats = useMemo(() => getStats(), []);
  const [filter, setFilter] = useState("all"); // all | complete | partial | cuz-N

  // Cüz numaralarını tespit et
  const cuzNumbers = useMemo(() => {
    const set = new Set(surahRegistry.map((s) => s.cuz));
    return [...set].sort((a, b) => b - a); // büyükten küçüğe
  }, []);

  const filtered = useMemo(() => {
    if (filter === "complete")
      return surahRegistry.filter((s) => s.status === "complete");
    if (filter === "partial")
      return surahRegistry.filter((s) => s.status === "partial");
    if (filter.startsWith("cuz-")) {
      const cuzNum = Number(filter.split("-")[1]);
      return getSurahsByCuz(cuzNum);
    }
    return surahRegistry;
  }, [filter]);

  // Sureyi numaraya göre sırala (küçükten büyüğe)
  const sorted = useMemo(
    () => [...filtered].sort((a, b) => a.surah - b.surah),
    [filtered],
  );

  const completePct = Math.round(
    (stats.coveredAyahs / stats.totalAyahs) * 100,
  );

  if (compact) {
    // Kompakt mod: sadece özet bar (LessonNav header için)
    return (
      <div className="flex items-center gap-2 rounded-xl bg-ov/[0.03] px-3 py-2">
        <BookOpenCheck size={14} className="text-ustaz-gold/60" />
        <div className="flex-1">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-ov/[0.08]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-ustaz-gold/50 to-ustaz-gold/80 transition-all"
              style={{ width: `${completePct}%` }}
            />
          </div>
        </div>
        <span className="text-[10px] tabular-nums text-ustaz-turkish/40">
          {stats.complete}/{stats.total} sure
        </span>
        <span className="text-[10px] tabular-nums text-ustaz-turkish/30">
          {stats.coveredAyahs}/{stats.totalAyahs} ayet
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Özet */}
      <div className="rounded-xl border border-ov/[0.06] bg-ov/[0.02] p-3">
        <div className="mb-2 flex items-center gap-2">
          <BookOpenCheck size={16} className="text-ustaz-gold/70" />
          <h3 className="text-xs font-bold text-ustaz-arabic">Sure Haritası</h3>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <p className="text-lg font-bold text-ustaz-gold">{stats.complete}</p>
            <p className="text-[10px] text-ustaz-turkish/40">Tam</p>
          </div>
          <div>
            <p className="text-lg font-bold text-orange-400/70">{stats.partial}</p>
            <p className="text-[10px] text-ustaz-turkish/40">Kısmî</p>
          </div>
          <div>
            <p className="text-lg font-bold text-ustaz-turkish/50">{stats.coveredAyahs}</p>
            <p className="text-[10px] text-ustaz-turkish/40">Ayet</p>
          </div>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-ov/[0.08]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-ustaz-gold/50 to-ustaz-gold/80 transition-all"
            style={{ width: `${completePct}%` }}
          />
        </div>
        <p className="mt-1 text-center text-[10px] text-ustaz-turkish/30">
          {completePct}% ayet kapsamı
        </p>
      </div>

      {/* Filtre */}
      <div className="flex flex-wrap gap-1.5">
        {[
          { key: "all", label: `Hepsi (${stats.total})` },
          { key: "complete", label: `Tam (${stats.complete})` },
          { key: "partial", label: `Kısmî (${stats.partial})` },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`rounded-lg px-2.5 py-1 text-[10px] font-medium transition-colors ${
              filter === key
                ? "bg-ustaz-gold/15 text-ustaz-gold"
                : "bg-ov/[0.04] text-ustaz-turkish/40 hover:bg-ov/[0.08]"
            }`}
          >
            {label}
          </button>
        ))}
        {/* Cüz filtreleri */}
        {cuzNumbers.map((cuz) => (
          <button
            key={`cuz-${cuz}`}
            onClick={() => setFilter(filter === `cuz-${cuz}` ? "all" : `cuz-${cuz}`)}
            className={`rounded-lg px-2.5 py-1 text-[10px] font-medium transition-colors ${
              filter === `cuz-${cuz}`
                ? "bg-ustaz-gold/15 text-ustaz-gold"
                : "bg-ov/[0.04] text-ustaz-turkish/40 hover:bg-ov/[0.08]"
            }`}
          >
            Cüz {cuz}
          </button>
        ))}
      </div>

      {/* Kartlar */}
      <div className="flex flex-col gap-2">
        {sorted.map((entry) => (
          <SurahCard key={entry.surah} entry={entry} onSelectLesson={onSelectLesson} />
        ))}
      </div>
    </div>
  );
}
