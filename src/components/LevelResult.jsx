import { ArrowRight, Target, Zap } from "lucide-react";
import { profileDescriptions, determineStartPoint } from "../data/assessment";

export default function LevelResult({ profile, valScore, valTotal, onStart }) {
  const desc = profileDescriptions[profile] || profileDescriptions.B;
  const start = determineStartPoint(profile, valScore);

  return (
    <div className="mx-auto max-w-lg">
      <div className="card text-center">
        {/* Profile badge */}
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-ustaz-gold/10 text-3xl font-bold text-ustaz-gold">
          {profile}
        </div>

        <h2 className="mb-1 text-xl font-semibold text-ustaz-arabic">
          {desc.title}
        </h2>
        <p className="mb-6 text-sm text-ustaz-turkish/50">
          {desc.subtitle}
        </p>

        {/* Validation score */}
        <div className="mb-6 rounded-lg bg-ov/5 px-4 py-3">
          <p className="text-xs text-ustaz-turkish/40">Doğrulama Skoru</p>
          <p className="text-2xl font-semibold text-ustaz-gold">
            {valScore} / {valTotal}
          </p>
        </div>

        {/* Strengths */}
        <div className="mb-4 text-left">
          <p className="mb-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-pos-fil/60">
            <Zap size={12} /> Güçlü yönlerin
          </p>
          <ul className="space-y-1">
            {desc.strengths.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-ustaz-turkish/70">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pos-fil/40" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Goals */}
        <div className="mb-6 text-left">
          <p className="mb-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-ustaz-gold/60">
            <Target size={12} /> Hedefler
          </p>
          <ul className="space-y-1">
            {desc.goals.map((g, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-ustaz-turkish/70">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ustaz-gold/40" />
                {g}
              </li>
            ))}
          </ul>
        </div>

        {/* Start button */}
        <button
          onClick={() => onStart(start.lesson)}
          className="btn-primary group flex w-full items-center justify-center gap-2 text-base"
        >
          {start.label}
          <ArrowRight size={18} className="transition group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}
