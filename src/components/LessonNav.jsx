import { useState, lazy, Suspense } from "react";
import { CheckCircle2, Circle, Lock, X, Search, BookOpenCheck, Layers } from "lucide-react";

const SurahTracker = lazy(() => import("./SurahTracker"));

export default function LessonNav({ lessons, currentLessonId, completedLessons, onSelect, onClose, completedCount = 0, totalLessons = 0 }) {
  const [search, setSearch] = useState("");
  const [navMode, setNavMode] = useState("dersler"); // "dersler" | "sureler"

  // Filter lessons by search
  const filtered = search.trim()
    ? lessons.filter((l) => {
        const q = search.toLowerCase();
        return l.title.toLowerCase().includes(q)
          || l.titleAr.includes(search)
          || l.description.toLowerCase().includes(q)
          || (l.surah && String(l.surah).includes(q));
      })
    : lessons;

  // Group filtered lessons by level
  const levels = {};
  filtered.forEach((l) => {
    const lv = l.level || 1;
    if (!levels[lv]) levels[lv] = [];
    levels[lv].push(l);
  });
  const levelLabels = { 1: "Seviye 1 — Temel", 2: "Seviye 2 — Gelişen", 3: "Seviye 3 — Orta" };

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-ov/[0.06] px-4 py-3">
        <div>
          <h2 className="text-sm font-bold text-ustaz-arabic">
            {navMode === "dersler" ? "Dersler" : "Sure Haritası"}
          </h2>
          <p className="text-[10px] text-ustaz-turkish/30">{completedCount}/{totalLessons} tamamlandı</p>
        </div>
        <div className="flex items-center gap-1">
          {/* Dersler / Sureler toggle */}
          <div className="flex rounded-lg bg-ov/[0.04] p-0.5">
            <button
              onClick={() => setNavMode("dersler")}
              className={`flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-medium transition-colors ${
                navMode === "dersler"
                  ? "bg-ustaz-gold/15 text-ustaz-gold shadow-sm"
                  : "text-ustaz-turkish/30 hover:text-ustaz-turkish/50"
              }`}
              aria-label="Ders listesi"
            >
              <Layers size={11} />
              Dersler
            </button>
            <button
              onClick={() => setNavMode("sureler")}
              className={`flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-medium transition-colors ${
                navMode === "sureler"
                  ? "bg-ustaz-gold/15 text-ustaz-gold shadow-sm"
                  : "text-ustaz-turkish/30 hover:text-ustaz-turkish/50"
              }`}
              aria-label="Sure haritası"
            >
              <BookOpenCheck size={11} />
              Sureler
            </button>
          </div>
          {onClose && (
            <button onClick={onClose} className="flex h-8 w-8 items-center justify-center rounded-xl text-ustaz-turkish/30 transition hover:bg-ov/5 active:scale-90">
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      {navMode === "sureler" ? (
        /* ── Sure Haritası görünümü ── */
        <div className="flex-1 overflow-y-auto px-4 py-3">
          <Suspense fallback={<p className="text-center text-xs text-ustaz-turkish/30 py-8">Yükleniyor...</p>}>
            <SurahTracker />
          </Suspense>
        </div>
      ) : (
        /* ── Ders listesi görünümü (mevcut) ── */
        <>
          {/* Progress bar */}
          <div className="px-4 py-2">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-ov/[0.06]">
              <div className="h-full rounded-full bg-gradient-to-r from-ustaz-gold/60 to-pos-fil/60 transition-all duration-500"
                style={{ width: `${totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0}%` }} />
            </div>
          </div>

          {/* Search */}
          <div className="px-4 pb-2">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ustaz-turkish/20" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Sure, konu veya numara ara..."
                className="w-full rounded-xl border border-ov/[0.06] bg-ov/[0.03] py-2.5 pl-9 pr-3 text-xs text-ustaz-turkish placeholder:text-ustaz-turkish/20 focus:border-ustaz-gold/30 focus:outline-none"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-2 top-1/2 -translate-y-1/2 text-ustaz-turkish/30 hover:text-ustaz-turkish/60">
                  <X size={12} />
                </button>
              )}
            </div>
          </div>

          {/* Lesson list grouped by level */}
          <div className="flex-1 overflow-y-auto pb-4">
            {Object.entries(levels).map(([lv, lvLessons]) => (
          <div key={lv}>
            <div className="sticky top-0 z-10 bg-ustaz-bg/90 backdrop-blur-sm px-4 py-2">
              <p className="text-[10px] font-bold uppercase tracking-wider text-ustaz-turkish/25">
                {levelLabels[lv] || `Seviye ${lv}`}
              </p>
            </div>
            {lvLessons.map((lesson) => {
              const isActive = lesson.id === currentLessonId;
              const isCompleted = completedLessons?.includes(lesson.id);
              return (
                <button key={lesson.id} onClick={() => onSelect(lesson.id)}
                  className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-all active:bg-ov/[0.04] ${
                    isActive ? "bg-ustaz-gold/[0.06]" : "hover:bg-ov/[0.02]"
                  }`}>
                  <div className="shrink-0">
                    {isCompleted ? (
                      <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-pos-fil/10">
                        <CheckCircle2 size={15} className="text-pos-fil" />
                      </div>
                    ) : (
                      <div className={`flex h-7 w-7 items-center justify-center rounded-xl ${isActive ? "bg-ustaz-gold/10" : "bg-ov/[0.03]"}`}>
                        <Circle size={15} className={isActive ? "text-ustaz-gold" : "text-ustaz-turkish/15"} />
                      </div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-2">
                      <p className={`text-sm font-medium truncate ${isActive ? "text-ustaz-gold" : "text-ustaz-turkish/70"}`}>
                        {lesson.title}
                      </p>
                      <span className="arabic-text text-xs text-ustaz-turkish/20 truncate">{lesson.titleAr}</span>
                    </div>
                    <p className="text-[10px] text-ustaz-turkish/25 truncate">
                      {lesson.verses.length} ayet · {lesson.verses.reduce((a, v) => a + v.words.length, 0)} kelime · {lesson.exercises.length} quiz
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        ))}
            </div>
          </>
        )}
    </div>
  );
}
