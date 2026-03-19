import { CheckCircle2, Circle, Lock, X } from "lucide-react";

export default function LessonNav({ lessons, currentLessonId, completedLessons, onSelect, onClose, completedCount = 0, totalLessons = 0 }) {
  // Group lessons by level
  const levels = {};
  lessons.forEach((l) => {
    const lv = l.level || 1;
    if (!levels[lv]) levels[lv] = [];
    levels[lv].push(l);
  });
  const levelLabels = { 1: "Seviye 1 — Temel", 2: "Seviye 2 — Gelişen", 3: "Seviye 3 — Orta" };

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
        <div>
          <h2 className="text-sm font-bold text-ustaz-arabic">Dersler</h2>
          <p className="text-[10px] text-ustaz-turkish/30">{completedCount}/{totalLessons} tamamlandı</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="flex h-8 w-8 items-center justify-center rounded-xl text-ustaz-turkish/30 transition hover:bg-white/5 active:scale-90">
            <X size={18} />
          </button>
        )}
      </div>

      {/* Progress bar */}
      <div className="px-4 py-2">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
          <div className="h-full rounded-full bg-gradient-to-r from-ustaz-gold/60 to-pos-fil/60 transition-all duration-500"
            style={{ width: `${totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0}%` }} />
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
                  className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-all active:bg-white/[0.04] ${
                    isActive ? "bg-ustaz-gold/[0.06]" : "hover:bg-white/[0.02]"
                  }`}>
                  <div className="shrink-0">
                    {isCompleted ? (
                      <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-pos-fil/10">
                        <CheckCircle2 size={15} className="text-pos-fil" />
                      </div>
                    ) : (
                      <div className={`flex h-7 w-7 items-center justify-center rounded-xl ${isActive ? "bg-ustaz-gold/10" : "bg-white/[0.03]"}`}>
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
    </div>
  );
}
