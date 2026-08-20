import { useState } from "react";
import { ERAS } from "@/content/somu";
import { play } from "@/lib/sound";
import { cn } from "@/lib/utils";
import { Photo, Reveal, SectionShell, SoftButton, Stars } from "./primitives";

const themeClass: Record<string, string> = {
  cute: "bg-blush text-burgundy",
  bossy: "bg-ink text-cream",
  lover: "bg-[color-mix(in_oklab,var(--color-rose)_35%,white)] text-burgundy",
  artist: "bg-wine text-cream",
};

export function Eras({ onBack }: { onBack: () => void }) {
  const [open, setOpen] = useState<string | null>(null);
  const era = ERAS.find((e) => e.id === open);

  if (era) {
    return (
      <section className={cn("grain anim-fade min-h-dvh w-full", themeClass[era.theme])}>
        <div className="relative z-2 mx-auto w-full max-w-3xl px-5 pt-6 pb-24 sm:px-8">
          <button
            onClick={() => {
              play("tap");
              setOpen(null);
            }}
            className="overline mb-10 inline-flex min-h-11 items-center text-[0.6rem] opacity-70"
          >
            ← All eras
          </button>
          <Stars count={8} className="text-current/40" />

          <p className="overline anim-fade text-[0.6rem] opacity-60">{era.emoji} Era</p>
          <h1 className="editorial anim-fade-up mt-3 text-5xl sm:text-7xl">{era.name}</h1>
          <p className="hand anim-fade-up mt-4 text-2xl opacity-80" style={{ animationDelay: "200ms" }}>
            {era.caption}
          </p>

          <div className="anim-fade-up mt-10 grid gap-6 sm:grid-cols-[1fr_1.1fr]" style={{ animationDelay: "320ms" }}>
            <Photo id={era.photo} shape={era.theme === "artist" ? "cover" : "polaroid"} tilt={-1.5} />
            <p className="self-center text-[0.95rem] leading-relaxed opacity-80">{era.body}</p>
          </div>

          <div className="mt-14 flex flex-wrap gap-3">
            <SoftButton variant="outline" onClick={() => setOpen(null)}>
              Back to eras
            </SoftButton>
            <SoftButton variant="ghost" onClick={onBack}>
              Somu's World
            </SoftButton>
          </div>
        </div>
      </section>
    );
  }

  return (
    <SectionShell onBack={onBack} label="Eras">
      <header className="mb-10">
        <h1 className="editorial text-5xl text-wine sm:text-7xl">Somu's Eras</h1>
        <p className="hand mt-2 text-xl text-rose">five moods, one woman, no warning</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {ERAS.map((e, i) => (
          <Reveal key={e.id} delay={i * 70}>
            <button
              onClick={() => {
                play("era");
                setOpen(e.id);
              }}
              className={cn("lift flex min-h-36 w-full flex-col justify-between rounded-sm p-5 text-left", themeClass[e.theme])}
            >
              <span className="text-2xl">{e.emoji}</span>
              <span>
                <span className="editorial block text-2xl">{e.name}</span>
                <span className="mt-1 block text-xs opacity-70">{e.caption}</span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
