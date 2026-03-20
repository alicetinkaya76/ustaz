import { useState } from "react";
import { BookOpen, GraduationCap, PenTool, MessageCircle, ChevronDown, ChevronUp, GitBranch, Sparkles } from "lucide-react";
import InterlinearVerse from "./InterlinearVerse";
import ExerciseCard from "./ExerciseCard";
import ChatInline from "./ChatInline";
import RootExplorer from "./RootExplorer";
import BalaghaTab from "./BalaghaTab";

export default function LessonView({ lesson, apiKey, onQuizComplete, onRootResult, isCompleted, activeTab, onTabChange, onGrammarClick }) {
  const [expandedGrammar, setExpandedGrammar] = useState(null);
  const [chatInitialMessage, setChatInitialMessage] = useState(null);

  const tab = activeTab || "verses";
  const setTab = onTabChange || (() => {});

  const sections = [
    { id: "verses", icon: BookOpen, label: "Ayetler" },
    { id: "roots", icon: GitBranch, label: "Kökler" },
    { id: "grammar", icon: GraduationCap, label: "Gramer" },
    { id: "balagha", icon: Sparkles, label: "بلاغة" },
    { id: "quiz", icon: PenTool, label: "Quiz" },
    { id: "chat", icon: MessageCircle, label: "Sor" },
  ];

  const chatContext = lesson.verses.map((v) => `${v.surah}:${v.ayah} — ${v.arabic}`).join(" | ");

  function handleAskUstaz(message) {
    setChatInitialMessage(message);
    setTab("chat");
  }

  return (
    <div>
      {/* Tab Bar — scrollable on mobile */}
      <div className="tab-bar mb-5 overflow-x-auto scrollbar-hide">
        <div className="flex min-w-max">
          {sections.map(({ id, icon: Icon, label }) => (
            <button key={id} onClick={() => setTab(id)}
              className={`tab-item ${tab === id ? "active" : ""}`}>
              <Icon size={15} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="view-enter">
        {tab === "verses" && (
          <div className="space-y-6">
            {lesson.verses.map((verse, i) => (
              <div key={`${verse.surah}-${verse.ayah}`}>
                <InterlinearVerse
                  verse={verse}
                  onGrammarClick={onGrammarClick}
                  onAskUstaz={handleAskUstaz}
                />
                {i < lesson.verses.length - 1 && (
                  <div className="my-5 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                    <span className="text-ustaz-gold/15 text-xs">✦</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "roots" && (
          <RootExplorer lessonId={lesson.id} />
        )}

        {tab === "grammar" && (
          <div className="space-y-2.5">
            {lesson.grammarNotes.map((note, i) => {
              const isExpanded = expandedGrammar === i;
              return (
                <div key={i} className="card">
                  <button onClick={() => setExpandedGrammar(isExpanded ? null : i)} className="flex w-full items-center justify-between text-left">
                    <h3 className="text-sm font-semibold text-ustaz-arabic">{note.title}</h3>
                    {isExpanded ? <ChevronUp size={16} className="text-ustaz-turkish/30" /> : <ChevronDown size={16} className="text-ustaz-turkish/30" />}
                  </button>
                  {isExpanded && (
                    <div className="mt-4 space-y-3">
                      <p className="text-sm leading-relaxed text-ustaz-turkish/70">{note.explanation}</p>
                      <div className="rounded-xl bg-ustaz-gold/5 border border-ustaz-gold/10 px-4 py-3">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-ustaz-gold/50 mb-1">Kural</p>
                        <p className="text-sm font-medium text-ustaz-gold/80 whitespace-pre-line">{note.rule}</p>
                      </div>
                      {note.examples.length > 0 && (
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-ustaz-turkish/30 mb-1.5">Örnekler</p>
                          <div className="space-y-1.5">
                            {note.examples.map((ex, j) => (
                              <div key={j} className="rounded-xl bg-white/[0.02] px-3 py-2.5 text-sm text-ustaz-turkish/60">{ex}</div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "balagha" && (
          <BalaghaTab lessonId={lesson.id} />
        )}

        {tab === "quiz" && (
          <ExerciseCard exercises={lesson.exercises} lessonId={lesson.id}
            onComplete={(score, total) => onQuizComplete?.(lesson.id, score, total)}
            onRootResult={onRootResult} />
        )}

        {tab === "chat" && (
          <ChatInline apiKey={apiKey} context={chatContext} initialMessage={chatInitialMessage} />
        )}
      </div>
    </div>
  );
}
