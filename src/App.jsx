import { useState, useCallback, useRef, useEffect } from "react";
import { BookOpen, GraduationCap, Brain, MessageCircle, Settings as SettingsIcon, Layers, ChevronLeft, ChevronRight, X, Search, Sun, Moon, BarChart3 } from "lucide-react";
import curriculum from "./data/curriculum";
import useProgress from "./hooks/useProgress";
import QuickAssessment from "./components/QuickAssessment";
import LevelResult from "./components/LevelResult";
import LessonView from "./components/LessonView";
import LessonNav from "./components/LessonNav";
import Settings from "./components/Settings";
import GrammarCard from "./components/GrammarCard";
import VezinCard from "./components/VezinCard";
import QuickReview from "./components/QuickReview";
import ConjugationPopup from "./components/ConjugationPopup";
import DailyRoot from "./components/DailyRoot";
import StatsPage from "./components/StatsPage";
import OfflineBanner from "./components/OfflineBanner";
import CrossLessonReview from "./components/CrossLessonReview";

const API_KEY_STORAGE = "ustaz-api-key";
const THEME_STORAGE = "ustaz-theme";
function loadApiKey() { try { return localStorage.getItem(API_KEY_STORAGE) || ""; } catch { return ""; } }
function saveApiKey(key) { try { localStorage.setItem(API_KEY_STORAGE, key); } catch {} }
function loadTheme() { try { return localStorage.getItem(THEME_STORAGE) || "dark"; } catch { return "dark"; } }
function saveTheme(t) { try { localStorage.setItem(THEME_STORAGE, t); } catch {} }

export default function App() {
  const { progress, update, markLessonComplete, updateVocab, updateRootSR, saveQuizResult, reviewWords, exportProgress, importProgress, resetProgress } = useProgress();

  const [view, setView] = useState(() => {
    if (!progress.assessmentDone) return "assessment";
    if (reviewWords.length > 0) return "review";
    return "lesson";
  });
  const [assessmentResult, setAssessmentResult] = useState(null);
  const [currentLessonId, setCurrentLessonId] = useState(progress.currentLessonId || "L01-fatiha");
  const [showNav, setShowNav] = useState(false);
  const [apiKey, setApiKey] = useState(loadApiKey);
  const [activeTab, setActiveTab] = useState(progress.activeTab || "verses");
  const [theme, setTheme] = useState(loadTheme);
  const [highContrast, setHighContrast] = useState(() => { try { return localStorage.getItem("ustaz-hc") === "1"; } catch { return false; } });

  // Grammar / Vezin modals
  const [grammarTerm, setGrammarTerm] = useState(null);
  const [grammarHistory, setGrammarHistory] = useState([]);
  const [showVezin, setShowVezin] = useState(false);
  const [vezinPattern, setVezinPattern] = useState(null);

  // Conjugation modal
  const [conjRoot, setConjRoot] = useState(null);
  const [conjHighlight, setConjHighlight] = useState(null);

  // Bottom nav active tab
  const [bottomTab, setBottomTab] = useState("ders");

  // Swipe gesture
  const touchRef = useRef({ startX: 0, startY: 0, startTime: 0 });

  const lessons = curriculum.lessons;
  const currentLesson = lessons.find((l) => l.id === currentLessonId) || lessons[0];
  const currentIdx = lessons.findIndex((l) => l.id === currentLessonId);

  // Theme effect
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    saveTheme(theme);
  }, [theme]);

  // High contrast effect
  useEffect(() => {
    document.documentElement.setAttribute("data-hc", highContrast ? "1" : "0");
    try { localStorage.setItem("ustaz-hc", highContrast ? "1" : "0"); } catch {}
  }, [highContrast]);

  function toggleTheme() { setTheme((t) => t === "dark" ? "light" : "dark"); }
  function toggleContrast() { setHighContrast((v) => !v); }
  function handleApiKeyChange(key) { setApiKey(key); saveApiKey(key); }

  function handleAssessmentComplete(profile, valScore, valTotal) {
    setAssessmentResult({ profile, valScore, valTotal });
    update({ profile, assessmentDone: true });
    setView("result");
  }
  function handleSkipAssessment(profile, lessonId) {
    update({ profile, assessmentDone: true, currentLessonId: lessonId });
    setCurrentLessonId(lessonId);
    setView("lesson");
    setBottomTab("ders");
  }
  function handleStartFromResult(lessonId) {
    setCurrentLessonId(lessonId);
    update({ currentLessonId: lessonId });
    setView("lesson");
    setBottomTab("ders");
  }
  function handleSelectLesson(lessonId) {
    setCurrentLessonId(lessonId);
    update({ currentLessonId: lessonId });
    setActiveTab("verses");
    setShowNav(false);
    setView("lesson");
    setBottomTab("ders");
  }
  function handleTabChange(tab) {
    setActiveTab(tab);
    update({ activeTab: tab });
  }
  function handleQuizComplete(lessonId, score, total) {
    saveQuizResult(lessonId, score, total);
    if (score / total >= 0.6) markLessonComplete(lessonId);
  }
  function handlePrevLesson() { if (currentIdx > 0) handleSelectLesson(lessons[currentIdx - 1].id); }
  function handleNextLesson() { if (currentIdx < lessons.length - 1) handleSelectLesson(lessons[currentIdx + 1].id); }

  // Swipe handlers
  function handleTouchStart(e) {
    touchRef.current = { startX: e.touches[0].clientX, startY: e.touches[0].clientY, startTime: Date.now() };
  }
  function handleTouchEnd(e) {
    const dx = e.changedTouches[0].clientX - touchRef.current.startX;
    const dy = e.changedTouches[0].clientY - touchRef.current.startY;
    const dt = Date.now() - touchRef.current.startTime;
    if (dt > 500 || Math.abs(dx) < 60 || Math.abs(dy) > Math.abs(dx) * 0.7) return;
    if (dx > 0 && currentIdx > 0) handlePrevLesson();
    else if (dx < 0 && currentIdx < lessons.length - 1) handleNextLesson();
  }

  function handleReset() {
    resetProgress();
    setView("assessment");
    setCurrentLessonId("L01-fatiha");
    setAssessmentResult(null);
    setGrammarTerm(null);
    setGrammarHistory([]);
  }

  // Grammar navigation
  function openGrammar(termKey) {
    if (termKey === "vezin") { setShowVezin(true); setVezinPattern(null); return; }
    setGrammarHistory((prev) => grammarTerm ? [...prev, grammarTerm] : prev);
    setGrammarTerm(termKey);
  }
  function openVezinFromGrammar(pattern) { setShowVezin(true); setVezinPattern(pattern || null); }

  // Conjugation navigation
  function openConjugation(root, highlightForm) {
    setConjRoot(root);
    setConjHighlight(highlightForm || null);
  }

  function closeGrammar() {
    if (grammarHistory.length > 0) {
      setGrammarTerm(grammarHistory[grammarHistory.length - 1]);
      setGrammarHistory((h) => h.slice(0, -1));
    } else { setGrammarTerm(null); setGrammarHistory([]); }
  }

  // Bottom nav handler
  function handleBottomNav(tab) {
    setBottomTab(tab);
    if (tab === "ders") { setView("lesson"); setShowNav(false); }
    else if (tab === "dersler") { setShowNav(true); }
    else if (tab === "tekrar") { setView("review"); setShowNav(false); }
    else if (tab === "istatistik") { setView("stats"); setShowNav(false); }
    else if (tab === "ayarlar") { setView("settings"); setShowNav(false); }
  }

  const isAppReady = progress.assessmentDone;
  const completedCount = progress.completedLessons.length;
  const totalLessons = lessons.length;

  return (
    <div className="min-h-screen min-h-[100dvh] bg-ustaz-bg pattern-overlay" lang="tr">
      <a href="#main-content" className="sr-skip">Ana içeriğe atla</a>
      <OfflineBanner />
      {/* ── Header ── */}
      <header className="sticky top-0 z-40 border-b border-ov/[0.04] bg-ustaz-bg/85 backdrop-blur-xl pt-safe">
        <div className="mx-auto flex h-12 max-w-2xl items-center justify-between px-4">
          <button onClick={() => { if (isAppReady) { setView("lesson"); setBottomTab("ders"); } }} className="flex items-center gap-2">
            <span className="text-base">📖</span>
            <span className="text-sm font-bold text-ustaz-gold tracking-wider">Ustaz</span>
          </button>

          {view === "lesson" && (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-ustaz-turkish/30 tabular-nums">{progress.totalRootsLearned}</span>
                <div className="h-1 w-16 overflow-hidden rounded-full bg-ov/[0.06]">
                  <div className="h-full rounded-full bg-gradient-to-r from-ustaz-gold/70 to-ustaz-gold transition-all duration-500"
                    style={{ width: `${Math.min((progress.totalRootsLearned / 300) * 100, 100)}%` }} />
                </div>
                <span className="text-[10px] text-ustaz-turkish/15">300</span>
              </div>
            </div>
          )}

          {/* Desktop only: lesson nav toggle + theme toggle */}
          <div className="flex items-center gap-1">
            <button onClick={toggleTheme}
              className="rounded-lg p-2 text-ustaz-turkish/30 transition hover:bg-ov/5 hover:text-ustaz-gold" title="Tema değiştir">
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            {view === "lesson" && (
              <button onClick={() => setShowNav(!showNav)}
                className="hidden rounded-lg p-2 text-ustaz-turkish/30 transition hover:bg-ov/5 hover:text-ustaz-turkish/60 sm:block" title="Dersler">
                <Layers size={16} />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* ── Mobile Nav Drawer ── */}
      {showNav && (
        <div className="fixed inset-0 z-50 flex sm:block">
          {/* Mobile: full-screen overlay */}
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm sm:hidden" onClick={() => setShowNav(false)} />
          <div className="fixed inset-y-0 left-0 z-50 w-[85vw] max-w-xs border-r border-ov/[0.06] bg-ustaz-bg shadow-2xl sm:absolute sm:w-72"
            style={{ paddingTop: 'env(safe-area-inset-top, 0px)', paddingBottom: 'calc(64px + env(safe-area-inset-bottom, 0px))' }}>
            <LessonNav
              lessons={lessons}
              currentLessonId={currentLessonId}
              completedLessons={progress.completedLessons}
              onSelect={handleSelectLesson}
              onClose={() => setShowNav(false)}
              completedCount={completedCount}
              totalLessons={totalLessons}
            />
          </div>
          {/* Desktop: click-away */}
          <div className="hidden flex-1 sm:block" onClick={() => setShowNav(false)} />
        </div>
      )}

      {/* ── Main Content ── */}
      <main id="main-content" className="mx-auto max-w-2xl px-4 pb-4 mb-nav" role="main">
        {view === "assessment" && (
          <div className="view-enter pt-8">
            <div className="mb-8 text-center">
              <div className="mb-3 text-4xl">📖</div>
              <h1 className="mb-2 text-2xl font-bold text-ustaz-arabic">Hoş geldin!</h1>
              <p className="text-sm text-ustaz-turkish/50">Sana en uygun başlangıç noktasını belirleyelim.</p>
            </div>
            <QuickAssessment onComplete={handleAssessmentComplete} onSkip={handleSkipAssessment} />
          </div>
        )}

        {view === "result" && assessmentResult && (
          <div className="view-enter pt-8">
            <div className="mb-8 text-center">
              <h1 className="mb-2 text-2xl font-bold text-ustaz-arabic">Değerlendirme Tamamlandı</h1>
            </div>
            <LevelResult profile={assessmentResult.profile} valScore={assessmentResult.valScore} valTotal={assessmentResult.valTotal} onStart={handleStartFromResult} />
          </div>
        )}

        {view === "review" && (
          <div className="view-enter pt-6">
            <div className="mb-6 text-center">
              <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pos-harf/10">
                <Brain size={22} className="text-pos-harf" />
              </div>
              <h1 className="mb-1 text-xl font-bold text-ustaz-arabic">Bugünün Tekrarı</h1>
              <p className="text-sm text-ustaz-turkish/40">{reviewWords.length} kök tekrar bekliyor</p>
            </div>
            <QuickReview vocabulary={progress.vocabulary} onUpdateVocab={updateVocab} onFinish={() => { setView("lesson"); setBottomTab("ders"); }} />
            {progress.completedLessons.length >= 3 && (
              <button
                onClick={() => setView("cross-review")}
                className="mt-4 w-full btn-secondary flex items-center justify-center gap-2 text-sm"
                aria-label="Karma tekrar quiz başlat"
              >
                <Brain size={14} /> Karma Quiz ({progress.completedLessons.length} ders)
              </button>
            )}
          </div>
        )}

        {view === "cross-review" && (
          <div className="view-enter pt-6">
            <CrossLessonReview
              lessons={lessons}
              completedLessons={progress.completedLessons}
              onRootResult={updateRootSR}
              onClose={() => { setView("review"); setBottomTab("tekrar"); }}
            />
          </div>
        )}

        {view === "lesson" && (
          <div className="view-enter pt-4" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            {/* Daily Root Widget */}
            <DailyRoot onRootResult={updateVocab} />

            {/* Lesson Header Card */}
            <div className="mb-5 rounded-2xl border border-ov/[0.06] bg-gradient-to-br from-ustaz-card to-ustaz-card/80 p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded-lg bg-ustaz-gold/10 px-2 py-0.5 text-[10px] font-semibold text-ustaz-gold tracking-wide">
                  {currentLesson.level ? `SEVİYE ${currentLesson.level}` : `AŞAMA ${currentLesson.stage}`}
                </span>
                {progress.completedLessons.includes(currentLessonId) && (
                  <span className="flex items-center gap-1 rounded-lg bg-pos-fil/10 px-2 py-0.5 text-[10px] font-semibold text-pos-fil">✓ Tamamlandı</span>
                )}
              </div>
              <div className="flex items-baseline gap-2">
                <h1 className="text-lg font-bold text-ustaz-arabic">{currentLesson.title}</h1>
                <span className="arabic-text text-base text-ustaz-gold/50">{currentLesson.titleAr}</span>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-ustaz-turkish/40">{currentLesson.description}</p>

              {/* Quick stats */}
              <div className="mt-3 flex gap-3 text-[10px] text-ustaz-turkish/30">
                <span>{currentLesson.verses.length} ayet</span>
                <span>·</span>
                <span>{currentLesson.verses.reduce((a, v) => a + v.words.length, 0)} kelime</span>
                <span>·</span>
                <span>{currentLesson.exercises.length} quiz</span>
              </div>
            </div>

            <LessonView
              lesson={currentLesson}
              apiKey={apiKey}
              onQuizComplete={handleQuizComplete}
              onRootResult={updateVocab}
              isCompleted={progress.completedLessons.includes(currentLessonId)}
              activeTab={activeTab}
              onTabChange={handleTabChange}
              onGrammarClick={openGrammar}
              onConjugation={openConjugation}
            />

            {/* Lesson Navigation */}
            <div className="mt-6 flex items-center justify-between">
              <button onClick={handlePrevLesson} disabled={currentIdx <= 0}
                className="flex items-center gap-1.5 rounded-xl border border-ov/[0.06] bg-ov/[0.02] px-4 py-2.5 text-xs font-medium text-ustaz-turkish/40 transition active:scale-95 disabled:opacity-20">
                <ChevronLeft size={14} /> Önceki
              </button>
              <div className="flex items-center gap-1.5">
                {lessons.map((_, i) => (
                  <div key={i} className={`h-1.5 rounded-full transition-all ${
                    i === currentIdx ? "w-4 bg-ustaz-gold" : "w-1.5 bg-ov/10"
                  }`} />
                ))}
              </div>
              <button onClick={handleNextLesson} disabled={currentIdx >= lessons.length - 1}
                className="flex items-center gap-1.5 rounded-xl border border-ov/[0.06] bg-ov/[0.02] px-4 py-2.5 text-xs font-medium text-ustaz-turkish/40 transition active:scale-95 disabled:opacity-20">
                Sonraki <ChevronRight size={14} />
              </button>
            </div>
          </div>
        )}

        {view === "settings" && (
          <div className="view-enter pt-6">
            <Settings apiKey={apiKey} onApiKeyChange={handleApiKeyChange} onExport={exportProgress} onImport={importProgress}
              onReset={handleReset} onClose={() => { setView("lesson"); setBottomTab("ders"); }}
              theme={theme} onToggleTheme={toggleTheme} highContrast={highContrast} onToggleContrast={toggleContrast} />
          </div>
        )}

        {view === "stats" && (
          <div className="view-enter pt-6">
            <StatsPage progress={progress} lessons={lessons} onClose={() => { setView("lesson"); setBottomTab("ders"); }} />
          </div>
        )}
      </main>

      {/* ── Bottom Navigation (mobile) ── */}
      {isAppReady && (
        <nav className="bottom-nav sm:hidden" aria-label="Ana gezinme">
          <div className="flex" role="tablist">
            <button onClick={() => handleBottomNav("ders")}
              className={`bottom-nav-item ${bottomTab === "ders" ? "active" : ""}`}
              role="tab" aria-selected={bottomTab === "ders"} aria-label="Ders görünümü">
              <BookOpen size={20} strokeWidth={bottomTab === "ders" ? 2.5 : 1.5} />
              <span>Ders</span>
            </button>
            <button onClick={() => handleBottomNav("dersler")}
              className={`bottom-nav-item ${bottomTab === "dersler" ? "active" : ""}`}
              role="tab" aria-selected={bottomTab === "dersler"} aria-label="Ders listesi">
              <Layers size={20} strokeWidth={bottomTab === "dersler" ? 2.5 : 1.5} />
              <span>Dersler</span>
            </button>
            <button onClick={() => handleBottomNav("tekrar")}
              className={`bottom-nav-item ${bottomTab === "tekrar" ? "active" : ""}`}
              role="tab" aria-selected={bottomTab === "tekrar"} aria-label={`Tekrar${reviewWords.length > 0 ? `, ${reviewWords.length} kök bekliyor` : ""}`}>
              <div className="relative">
                <Brain size={20} strokeWidth={bottomTab === "tekrar" ? 2.5 : 1.5} />
                {reviewWords.length > 0 && (
                  <span className="absolute -right-1.5 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-pos-harf text-[8px] font-bold text-ustaz-bg" aria-hidden="true">
                    {reviewWords.length}
                  </span>
                )}
              </div>
              <span>Tekrar</span>
            </button>
            <button onClick={() => handleBottomNav("istatistik")}
              className={`bottom-nav-item ${bottomTab === "istatistik" ? "active" : ""}`}
              role="tab" aria-selected={bottomTab === "istatistik"} aria-label="İstatistikler">
              <BarChart3 size={20} strokeWidth={bottomTab === "istatistik" ? 2.5 : 1.5} />
              <span>İstatistik</span>
            </button>
            <button onClick={() => handleBottomNav("ayarlar")}
              className={`bottom-nav-item ${bottomTab === "ayarlar" ? "active" : ""}`}
              role="tab" aria-selected={bottomTab === "ayarlar"} aria-label="Ayarlar">
              <SettingsIcon size={20} strokeWidth={bottomTab === "ayarlar" ? 2.5 : 1.5} />
              <span>Ayarlar</span>
            </button>
          </div>
        </nav>
      )}

      {/* ── Grammar Card Modal ── */}
      {grammarTerm && <GrammarCard termKey={grammarTerm} onClose={closeGrammar} onTermClick={openGrammar} onVezinClick={openVezinFromGrammar} />}

      {/* ── Vezin Card Modal ── */}
      {showVezin && <VezinCard onClose={() => setShowVezin(false)} initialPattern={vezinPattern} />}

      {/* ── Conjugation Popup Modal ── */}
      {conjRoot && <ConjugationPopup root={conjRoot} highlightForm={conjHighlight} onClose={() => { setConjRoot(null); setConjHighlight(null); }} />}

      {/* ── Footer (desktop only) ── */}
      <footer className="hidden border-t border-ov/[0.04] py-6 text-center text-[10px] text-ustaz-turkish/15 sm:block">
        Ustaz v0.14 — Kur'an Arapçası Öğrenme Uygulaması
      </footer>
    </div>
  );
}
