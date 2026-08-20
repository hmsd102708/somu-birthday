import { useState } from "react";
import { KNOW_QUESTIONS } from "@/content/somu";
import { play } from "@/lib/sound";
import { cn } from "@/lib/utils";
import { SectionShell, SoftButton, Stars } from "./primitives";

export function KnowQuiz({ onBack }: { onBack: () => void }) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = KNOW_QUESTIONS[i];

  const isCorrectOption = (idx: number) => {
    if (!q) return false;
    return Array.isArray(q.correct)
      ? q.correct.includes(idx)
      : q.correct === idx;
  };

  const correct = picked !== null && isCorrectOption(picked);

  const choose = (idx: number) => {
    if (picked !== null || !q) return;
    setPicked(idx);

    if (isCorrectOption(idx)) {
      setScore((s) => s + 1);
      play("correct");
    } else {
      play("wrong");
    }
  };

  const next = () => {
    if (i + 1 >= KNOW_QUESTIONS.length) return setFinished(true);
    setI(i + 1);
    setPicked(null);
  };

  return (
    <SectionShell onBack={onBack} label="The Quiz">
      <header className="mb-8">
        <p className="overline text-[0.6rem] text-muted-foreground">
          {finished ? "Results" : `Question ${i + 1} of ${KNOW_QUESTIONS.length}`}
        </p>
        <h1 className="editorial mt-3 text-4xl text-wine sm:text-6xl">How well do you know Somu?</h1>
      </header>

      {finished ? (
        <div className="card-paper relative anim-scale-in p-8 text-center">
          <Stars count={10} className="text-gold/50" />
          <p className="editorial text-6xl text-burgundy">
            {score}/{KNOW_QUESTIONS.length}
          </p>
          <p className="hand mt-4 text-2xl text-rose">
            {score === KNOW_QUESTIONS.length
              ? "flawless. you clearly live with her."
              : score > KNOW_QUESTIONS.length / 2
                ? "decent. she'd allow it."
                : "concerning. she will be informed."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <SoftButton
              onClick={() => {
                setI(0);
                setPicked(null);
                setScore(0);
                setFinished(false);
              }}
            >
              Play again
            </SoftButton>
            <SoftButton variant="ghost" onClick={onBack}>
              Back to her world
            </SoftButton>
          </div>
        </div>
      ) : (
        q && (
          <div className="card-paper p-6">
            <p className="editorial text-2xl text-burgundy sm:text-3xl">{q.q}</p>
            <div className="mt-6 space-y-3">
              {q.options.map((o, idx) => {
                const isOptionCorrect = isCorrectOption(idx);
                const state =
                  picked === null
                    ? "idle"
                    : isOptionCorrect
                      ? "right"
                      : idx === picked
                        ? "wrong"
                        : "dim";

                return (
                  <button
                    key={o}
                    onClick={() => choose(idx)}
                    disabled={picked !== null}
                    className={cn(
                      "flex min-h-12 w-full items-center rounded-sm border px-4 py-3 text-left text-sm transition-all duration-300",
                      state === "idle" && "border-border hover:border-rose hover:bg-blush/40",
                      state === "right" && "border-rose bg-blush text-burgundy",
                      state === "wrong" && "border-destructive/40 bg-destructive/5",
                      state === "dim" && "border-border opacity-40",
                    )}
                  >
                    <span className="overline mr-3 text-[0.55rem] opacity-50">{String.fromCharCode(65 + idx)}</span>
                    {o}
                  </button>
                );
              })}
            </div>

            {picked !== null && (
              <div className="anim-fade-up mt-6">
                <p className="hand text-xl text-wine">{correct ? q.right : q.wrong}</p>
                <div className="mt-5">
                  <SoftButton onClick={next}>
                    {i + 1 >= KNOW_QUESTIONS.length ? "See results" : "Next question →"}
                  </SoftButton>
                </div>
              </div>
            )}
          </div>
        )
      )}
    </SectionShell>
  );
}
