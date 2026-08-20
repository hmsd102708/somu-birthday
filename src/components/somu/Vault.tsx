import { useState } from "react";
import { VAULT_QUESTIONS } from "@/content/somu";
import { play } from "@/lib/sound";
import { Reveal, SectionShell, SoftButton, Stars } from "./primitives";

const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ").trim();

export function Vault({ onBack, onAllUnlocked }: { onBack: () => void; onAllUnlocked?: () => void }) {
  const [locked, setLocked] = useState(true);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<"idle" | "wrong">("idle");
  const [unlocked, setUnlocked] = useState<number[]>([]);
  const [showHint, setShowHint] = useState(false);

  const q = VAULT_QUESTIONS[index];
  const done = unlocked.length === VAULT_QUESTIONS.length;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!q) return;
    const ok = q.answers.some((a) => normalize(a) === normalize(value));
    if (ok) {
      play("unlock");
      setUnlocked((u) => [...u, index]);
      setStatus("idle");
      setValue("");
      setShowHint(false);
      if (unlocked.length + 1 === VAULT_QUESTIONS.length) onAllUnlocked?.();
    } else {
      play("wrong");
      setStatus("wrong");
    }
  };

  if (locked) {
    return (
      <SectionShell onBack={onBack} label="The Vault" tone="dark">
        <div className="relative flex min-h-[60vh] flex-col items-center justify-center text-center">
          <Stars count={18} className="text-gold/40" />
          <span className="text-5xl">🔐</span>
          <h1 className="editorial mt-6 text-5xl text-cream sm:text-6xl">Somu's Secret Vault</h1>
          <p className="mt-4 max-w-xs text-sm text-cream/60">Only a true Swiftie can open this.</p>
          <div className="mt-10">
            <SoftButton
              variant="gold"
              sfx="unlock"
              onClick={() => setLocked(false)}
            >
              Begin the riddles
            </SoftButton>
          </div>
        </div>
      </SectionShell>
    );
  }

  return (
    <SectionShell onBack={onBack} label="The Vault" tone="dark">
      <div className="relative">
        <Stars count={12} className="text-gold/30" />
        <header className="mb-8">
          <p className="overline text-[0.55rem] text-chrome">
            {unlocked.length} / {VAULT_QUESTIONS.length} unlocked
          </p>
          <h1 className="editorial mt-3 text-4xl text-cream sm:text-5xl">The Vault</h1>
        </header>

        <div className="mb-10 space-y-3">
          {unlocked.map((i) => {
            const item = VAULT_QUESTIONS[i];
            if (!item) return null;
            return (
              <div key={i} className="anim-scale-in border border-gold/35 bg-cream/[0.04] p-4">
                <p className="overline text-[0.5rem] text-gold">Correct! You unlocked</p>
                <p className="editorial mt-2 text-2xl text-cream">{item.reward}</p>
                <p className="mt-1 text-xs text-cream/60">{item.rewardNote}</p>
              </div>
            );
          })}
        </div>

        {done ? (
          <Reveal>
            <div className="border border-gold/40 p-6 text-center">
              <p className="editorial text-3xl text-gold">Vault emptied.</p>
              <p className="mt-3 text-sm text-cream/70">
                Certified Swiftie. The final surprise is now yours to open.
              </p>
            </div>
          </Reveal>
        ) : (
          q && (
            <form onSubmit={submit} className="border border-chrome/20 bg-cream/[0.03] p-5">
              <p className="overline text-[0.5rem] text-chrome">Riddle {index + 1}</p>
              <p className="editorial mt-3 text-2xl text-cream">{q.prompt}</p>

              <label htmlFor="vault-answer" className="sr-only">
                Your answer
              </label>
              <input
                id="vault-answer"
                value={value}
                autoComplete="off"
                onChange={(e) => {
                  setValue(e.target.value);
                  setStatus("idle");
                }}
                placeholder="type your answer…"
                className="mt-5 min-h-12 w-full border-b border-chrome/30 bg-transparent px-1 pb-2 text-cream outline-none placeholder:text-cream/30 focus:border-gold"
              />

              {status === "wrong" && (
                <p className="hand anim-fade mt-3 text-lg text-rose">not quite. try again, superstar. 😭</p>
              )}

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <SoftButton type="submit" variant="gold" sfx={null}>
                  Unlock
                </SoftButton>
                <SoftButton variant="ghost" onClick={() => setShowHint((s) => !s)} className="text-cream/60">
                  {showHint ? "Hide hint" : "Hint"}
                </SoftButton>
                {index < VAULT_QUESTIONS.length - 1 && (
                  <SoftButton
                    variant="ghost"
                    className="text-cream/40"
                    onClick={() => {
                      setIndex((i) => Math.min(i + 1, VAULT_QUESTIONS.length - 1));
                      setValue("");
                      setStatus("idle");
                      setShowHint(false);
                    }}
                  >
                    Skip →
                  </SoftButton>
                )}
              </div>

              {showHint && <p className="hand mt-4 text-lg text-gold/80">hint: {q.hint}</p>}
            </form>
          )
        )}

        {!done && unlocked.includes(index) && (
          <div className="mt-6">
            <SoftButton
              variant="gold"
              onClick={() => {
                const next = VAULT_QUESTIONS.findIndex((_, i) => !unlocked.includes(i));
                setIndex(next === -1 ? index : next);
              }}
            >
              Next riddle →
            </SoftButton>
          </div>
        )}
      </div>
    </SectionShell>
  );
}
