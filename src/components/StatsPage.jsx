import { useState, useMemo, lazy, Suspense } from "react";
import { BarChart3, Calendar, TrendingUp, Target, ChevronLeft, Flame, Clock, Award, Trophy, BookOpenCheck } from "lucide-react";
import { ACHIEVEMENT_DEFS } from "../hooks/useProgress";

const SurahTracker = lazy(() => import("./SurahTracker"));

// Simple mini bar chart component
function MiniBar({ value, max, color = "bg-ustaz-gold" }) {
  const pct = max > 0 ? Math.min((value / max) * 100, 100) : 0;
  return (
    <div className="h-2 w-full rounded-full bg-ov/[0.06]">
      <div className={`h-2 rounded-full ${color} transition-all`} style={{ width: `${pct}%` }} />
    </div>
  );
}

// Days from now helper
function daysFromNow(dateStr) {
  if (!dateStr) return Infinity;
  const d = new Date(dateStr);
  const now = new Date();
  return Math.ceil((d - now) / 86400000);
}

export default function StatsPage({ progress, lessons, onClose }) {
  const [tab, setTab] = useState("overview");

  const stats = useMemo(() => {
    const vocab = progress.vocabulary || {};
    const rootSR = progress.rootSR || {};
    const quizResults = progress.quizResults || {};
    const completed = progress.completedLessons || [];

    // Root stats
    const totalRoots = Object.keys(vocab).length;
    const masteredRoots = Object.values(vocab).filter(v => v.correct >= 3 && v.correct > v.wrong).length;
    const strugglingRoots = Object.values(vocab).filter(v => v.wrong > v.correct).length;

    // SM-2 review calendar (next 7 days)
    const now = Date.now();
    const reviewCalendar = [];
    for (let i = 0; i < 7; i++) {
      const dayStart = new Date(now + i * 86400000);
      dayStart.setHours(0, 0, 0, 0);
      const dayEnd = new Date(dayStart.getTime() + 86400000);
      const dueCount = Object.values(rootSR).filter(sr => {
        if (!sr.nextReview) return false;
        const nr = new Date(sr.nextReview).getTime();
        return i === 0 ? nr <= dayEnd.getTime() : (nr > dayStart.getTime() && nr <= dayEnd.getTime());
      }).length;
      const dayLabel = i === 0 ? "Bugün" : i === 1 ? "Yarın" : dayStart.toLocaleDateString("tr-TR", { weekday: "short" });
      reviewCalendar.push({ label: dayLabel, count: dueCount, date: dayStart });
    }

    // Quiz performance per level
    const levelStats = {};
    for (const lesson of lessons) {
      const lv = lesson.level || 1;
      if (!levelStats[lv]) levelStats[lv] = { total: 0, completed: 0, quizAvg: 0, quizCount: 0 };
      levelStats[lv].total++;
      if (completed.includes(lesson.id)) levelStats[lv].completed++;
      const qr = quizResults[lesson.id];
      if (qr) {
        levelStats[lv].quizAvg += qr.total > 0 ? qr.score / qr.total : 0;
        levelStats[lv].quizCount++;
      }
    }
    for (const lv of Object.keys(levelStats)) {
      const ls = levelStats[lv];
      ls.quizAvg = ls.quizCount > 0 ? Math.round((ls.quizAvg / ls.quizCount) * 100) : 0;
    }

    // Recent quiz results (last 10)
    const recentQuizzes = Object.entries(quizResults)
      .map(([id, r]) => ({ id, ...r }))
      .filter(r => r.date)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 10);

    // Streak calculation
    const sessionDates = new Set();
    for (const v of Object.values(vocab)) {
      if (v.lastSeen) sessionDates.add(new Date(v.lastSeen).toDateString());
    }
    for (const qr of Object.values(quizResults)) {
      if (qr.date) sessionDates.add(new Date(qr.date).toDateString());
    }
    let streak = 0;
    const today = new Date();
    for (let i = 0; i < 365; i++) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      if (sessionDates.has(d.toDateString())) streak++;
      else if (i > 0) break;
    }

    return { totalRoots, masteredRoots, strugglingRoots, reviewCalendar, levelStats, recentQuizzes, streak, completed: completed.length, totalLessons: lessons.length };
  }, [progress, lessons]);

  const tabs = [
    { id: "overview", icon: BarChart3, label: "Genel" },
    { id: "sureler", icon: BookOpenCheck, label: "Sureler" },
    { id: "achievements", icon: Trophy, label: "Başarım" },
    { id: "roots", icon: Target, label: "Kökler" },
    { id: "calendar", icon: Calendar, label: "Takvim" },
    { id: "quizzes", icon: TrendingUp, label: "Quizler" },
  ];

  return (
    <div className="mx-auto max-w-lg">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={onClose} className="rounded-lg p-1.5 text-ustaz-turkish/30 hover:text-ustaz-turkish">
            <ChevronLeft size={18} />
          </button>
          <h2 className="text-lg font-bold text-ustaz-arabic">İstatistikler</h2>
        </div>
        {stats.streak > 0 && (
          <div className="flex items-center gap-1.5 rounded-xl bg-orange-500/10 px-3 py-1.5">
            <Flame size={14} className="text-orange-400" />
            <span className="text-xs font-bold text-orange-400">{stats.streak} gün</span>
          </div>
        )}
      </div>

      {/* Sub-tabs */}
      <div className="tab-bar mb-5 overflow-x-auto scrollbar-hide">
        <div className="flex min-w-max">
          {tabs.map(({ id, icon: Icon, label }) => (
            <button key={id} onClick={() => setTab(id)}
              className={`tab-item ${tab === id ? "active" : ""}`}>
              <Icon size={14} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 view-enter">
        {tab === "overview" && (
          <>
            {/* Summary cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="card text-center">
                <div className="text-2xl font-bold text-ustaz-gold">{progress.xp || 0}</div>
                <div className="text-[10px] text-ustaz-turkish/40 mt-1">Toplam XP</div>
                <MiniBar value={progress.xp || 0} max={2000} color="bg-ustaz-gold" />
              </div>
              <div className="card text-center">
                <div className="text-2xl font-bold text-pos-fil">{stats.completed}</div>
                <div className="text-[10px] text-ustaz-turkish/40 mt-1">Tamamlanan Ders</div>
                <MiniBar value={stats.completed} max={stats.totalLessons} color="bg-pos-fil" />
                <div className="text-[9px] text-ustaz-turkish/25 mt-1">{stats.totalLessons} dersten</div>
              </div>
              <div className="card text-center">
                <div className="text-2xl font-bold text-pos-ism">{stats.totalRoots}</div>
                <div className="text-[10px] text-ustaz-turkish/40 mt-1">Öğrenilen Kök</div>
                <MiniBar value={stats.masteredRoots} max={stats.totalRoots} color="bg-pos-ism" />
                <div className="text-[9px] text-ustaz-turkish/25 mt-1">{stats.masteredRoots} ustalaşmış</div>
              </div>
              <div className="card text-center">
                <div className="flex items-center justify-center gap-1">
                  <span className="text-2xl font-bold text-orange-400">{progress.streak || stats.streak}</span>
                  {(progress.streak || stats.streak) > 0 && <Flame size={16} className="text-orange-400" />}
                </div>
                <div className="text-[10px] text-ustaz-turkish/40 mt-1">Gün Serisi</div>
              </div>
            </div>

            {/* Level progress */}
            <div className="card">
              <h3 className="text-sm font-semibold text-ustaz-arabic mb-3">Seviye İlerlemesi</h3>
              <div className="space-y-2.5">
                {Object.entries(stats.levelStats).sort(([a],[b]) => a - b).map(([lv, ls]) => (
                  <div key={lv}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-ustaz-turkish/60">Seviye {lv}</span>
                      <span className="text-[10px] text-ustaz-turkish/30">{ls.completed}/{ls.total} ders</span>
                    </div>
                    <MiniBar value={ls.completed} max={ls.total} color={ls.completed === ls.total ? "bg-pos-fil" : "bg-ustaz-gold/70"} />
                    {ls.quizCount > 0 && (
                      <div className="text-[9px] text-ustaz-turkish/25 mt-0.5">Quiz ort: %{ls.quizAvg}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {tab === "sureler" && (
          <Suspense fallback={<p className="text-center text-xs text-ustaz-turkish/30 py-8">Yükleniyor...</p>}>
            <SurahTracker />
          </Suspense>
        )}

        {tab === "achievements" && (
          <>
            <div className="card">
              <h3 className="text-sm font-semibold text-ustaz-arabic mb-3">
                <Trophy size={14} className="inline mr-1.5 text-ustaz-gold" />
                Başarımlar ({(progress.achievements || []).length}/{ACHIEVEMENT_DEFS.length})
              </h3>
              <div className="space-y-2">
                {ACHIEVEMENT_DEFS.map((def) => {
                  const unlocked = (progress.achievements || []).includes(def.id);
                  return (
                    <div key={def.id} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition ${
                      unlocked ? "bg-ustaz-gold/10 border border-ustaz-gold/15" : "bg-ov/[0.03] border border-ov/[0.05] opacity-50"
                    }`}>
                      <span className="text-xl">{unlocked ? def.icon : "🔒"}</span>
                      <div className="flex-1 min-w-0">
                        <div className={`text-xs font-semibold ${unlocked ? "text-ustaz-arabic" : "text-ustaz-turkish/40"}`}>{def.title}</div>
                        <div className="text-[10px] text-ustaz-turkish/30">{def.desc}</div>
                      </div>
                      {unlocked && <span className="text-[10px] text-ustaz-gold font-medium">✓</span>}
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {tab === "roots" && (
          <>
            <div className="card">
              <h3 className="text-sm font-semibold text-ustaz-arabic mb-3">Kök Dağılımı</h3>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-lg font-bold text-pos-ism">{stats.masteredRoots}</div>
                  <div className="text-[10px] text-ustaz-turkish/40">Ustalaşmış</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-ustaz-gold">{stats.totalRoots - stats.masteredRoots - stats.strugglingRoots}</div>
                  <div className="text-[10px] text-ustaz-turkish/40">Öğreniliyor</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-red-400">{stats.strugglingRoots}</div>
                  <div className="text-[10px] text-ustaz-turkish/40">Zorlanılan</div>
                </div>
              </div>
            </div>

            {/* Struggling roots list */}
            {stats.strugglingRoots > 0 && (
              <div className="card">
                <h3 className="text-sm font-semibold text-red-400/80 mb-3">Zorlanılan Kökler</h3>
                <div className="space-y-2">
                  {Object.entries(progress.vocabulary || {})
                    .filter(([, v]) => v.wrong > v.correct)
                    .sort(([, a], [, b]) => (b.wrong - b.correct) - (a.wrong - a.correct))
                    .slice(0, 8)
                    .map(([root, v]) => (
                      <div key={root} className="flex items-center justify-between rounded-xl bg-red-500/5 px-3 py-2">
                        <span className="arabic-text text-sm text-ustaz-arabic">{root}</span>
                        <div className="flex items-center gap-3 text-[10px]">
                          <span className="text-pos-fil">✓ {v.correct}</span>
                          <span className="text-red-400">✗ {v.wrong}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </>
        )}

        {tab === "calendar" && (
          <>
            <div className="card">
              <h3 className="text-sm font-semibold text-ustaz-arabic mb-3">
                <Calendar size={14} className="inline mr-1.5 text-ustaz-gold" />
                SM-2 Tekrar Takvimi
              </h3>
              <div className="grid grid-cols-7 gap-1.5">
                {stats.reviewCalendar.map((day, i) => (
                  <div key={i} className={`rounded-xl text-center py-3 ${
                    day.count > 0
                      ? i === 0 ? "bg-ustaz-gold/15 border border-ustaz-gold/20" : "bg-pos-harf/10 border border-pos-harf/15"
                      : "bg-ov/[0.03] border border-ov/[0.05]"
                  }`}>
                    <div className="text-[9px] text-ustaz-turkish/40 mb-1">{day.label}</div>
                    <div className={`text-sm font-bold ${day.count > 0 ? (i === 0 ? "text-ustaz-gold" : "text-pos-harf") : "text-ustaz-turkish/20"}`}>
                      {day.count}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-ustaz-turkish/30 mt-3 text-center">
                Toplam: {Object.keys(progress.rootSR || {}).length} kök SM-2 sisteminde
              </p>
            </div>

            {/* Upcoming reviews */}
            {(() => {
              const upcoming = Object.entries(progress.rootSR || {})
                .filter(([, sr]) => sr.nextReview && daysFromNow(sr.nextReview) <= 0)
                .sort(([, a], [, b]) => new Date(a.nextReview) - new Date(b.nextReview))
                .slice(0, 10);
              if (upcoming.length === 0) return null;
              return (
                <div className="card">
                  <h3 className="text-sm font-semibold text-ustaz-gold/80 mb-3">
                    <Clock size={14} className="inline mr-1.5" />
                    Bugün Due ({upcoming.length})
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {upcoming.map(([root]) => (
                      <span key={root} className="arabic-text text-xs px-2.5 py-1.5 rounded-lg bg-ustaz-gold/10 text-ustaz-gold border border-ustaz-gold/15">
                        {root}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })()}
          </>
        )}

        {tab === "quizzes" && (
          <>
            {stats.recentQuizzes.length > 0 ? (
              <div className="card">
                <h3 className="text-sm font-semibold text-ustaz-arabic mb-3">Son Quiz Sonuçları</h3>
                <div className="space-y-2">
                  {stats.recentQuizzes.map((qr, i) => {
                    const pct = qr.total > 0 ? Math.round((qr.score / qr.total) * 100) : 0;
                    const lesson = lessons.find(l => l.id === qr.id);
                    return (
                      <div key={i} className="flex items-center justify-between rounded-xl bg-ov/[0.03] px-3 py-2.5">
                        <div>
                          <div className="text-xs font-medium text-ustaz-turkish/70">{lesson?.title || qr.id}</div>
                          <div className="text-[9px] text-ustaz-turkish/25">
                            {new Date(qr.date).toLocaleDateString("tr-TR", { day: "numeric", month: "short" })}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <MiniBar value={qr.score} max={qr.total} color={pct >= 60 ? "bg-pos-fil" : "bg-red-400"} />
                          <span className={`text-xs font-bold ${pct >= 60 ? "text-pos-fil" : "text-red-400"}`}>
                            %{pct}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <Award size={28} className="mx-auto mb-3 text-ustaz-turkish/15" />
                <p className="text-sm text-ustaz-turkish/30">Henüz quiz sonucu yok.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
