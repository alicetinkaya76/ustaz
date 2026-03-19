import { useState } from "react";
import { ChevronRight, SkipForward } from "lucide-react";
import { selfAssessment, validationQuestions, determineProfile } from "../data/assessment";

export default function QuickAssessment({ onComplete, onSkip }) {
  const [phase, setPhase] = useState("self");
  const [currentQ, setCurrentQ] = useState(0);
  const [selfAnswers, setSelfAnswers] = useState([]);
  const [selfScore, setSelfScore] = useState(0);
  const [profile, setProfile] = useState(null);
  const [valAnswers, setValAnswers] = useState([]);
  const [valScore, setValScore] = useState(0);

  const questions = phase === "self" ? selfAssessment : (validationQuestions[profile] || validationQuestions.B);
  const current = questions[currentQ];
  const totalSteps = selfAssessment.length + 5;
  const currentStep = phase === "self" ? currentQ + 1 : selfAssessment.length + currentQ + 1;

  function handleSelfAnswer(optionIndex) {
    const score = selfAssessment[currentQ].options[optionIndex].score;
    const newScore = selfScore + score;
    setSelfAnswers([...selfAnswers, optionIndex]);
    setSelfScore(newScore);
    if (currentQ < selfAssessment.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      const prof = determineProfile(newScore);
      setProfile(prof);
      setPhase("validation");
      setCurrentQ(0);
    }
  }

  function handleValAnswer(optionIndex) {
    const isCorrect = optionIndex === questions[currentQ].correct;
    const newScore = valScore + (isCorrect ? 1 : 0);
    setValAnswers([...valAnswers, optionIndex]);
    setValScore(newScore);
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      onComplete(profile, newScore, questions.length);
    }
  }

  function handleAnswer(optionIndex) {
    if (phase === "self") handleSelfAnswer(optionIndex);
    else handleValAnswer(optionIndex);
  }

  return (
    <div className="mx-auto max-w-lg">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-xs text-ustaz-turkish/40">
          <span>{phase === "self" ? "Ön Değerlendirme" : `Doğrulama (${profile} profili)`}</span>
          <span>{currentStep} / {totalSteps}</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
          <div className="h-full rounded-full bg-ustaz-gold transition-all duration-500" style={{ width: `${(currentStep / totalSteps) * 100}%` }} />
        </div>
      </div>

      {/* Question */}
      <div className="card mb-6">
        <p className="mb-1 text-[10px] font-medium uppercase tracking-wider text-ustaz-gold/50">
          {phase === "self" ? `Soru ${currentQ + 1}` : `Doğrulama ${currentQ + 1}`}
        </p>
        <p className="text-lg font-medium leading-relaxed text-ustaz-turkish">{current.question}</p>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-2.5">
        {(current.options || []).map((opt, i) => {
          const label = typeof opt === "string" ? opt : opt.text;
          return (
            <button key={i} onClick={() => handleAnswer(i)}
              className="group flex items-center gap-3 rounded-xl border border-white/5 bg-ustaz-card px-4 py-3.5 text-left transition-all hover:border-ustaz-gold/20 hover:bg-white/5 active:scale-[0.99]">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-xs text-ustaz-turkish/40 transition group-hover:border-ustaz-gold/30 group-hover:text-ustaz-gold">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="text-sm text-ustaz-turkish/80 group-hover:text-ustaz-turkish">{label}</span>
              <ChevronRight size={14} className="ml-auto text-ustaz-turkish/20 transition group-hover:text-ustaz-gold/50" />
            </button>
          );
        })}
      </div>

      {/* Skip button */}
      {onSkip && (
        <button
          onClick={() => onSkip("B", "L01-fatiha")}
          className="mt-6 flex w-full items-center justify-center gap-2 text-xs text-ustaz-turkish/25 transition hover:text-ustaz-turkish/50"
        >
          <SkipForward size={13} />
          Değerlendirmeyi atla, Fâtiha'dan başla
        </button>
      )}
    </div>
  );
}
