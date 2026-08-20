import { useEffect, useState } from "react";
import { CELEB_AWARDS, CELEB_LINES, CELEB_STATS, HER } from "@/content/somu";
import { Counter, Photo, Reveal, SectionShell, Stars } from "./primitives";

export function Bossy({ onBack }: { onBack: () => void }) {
  const [stage, setStage] = useState<"intro" | "profile">("intro");

  useEffect(() => {
    const t = window.setTimeout(() => setStage("profile"), 4200);
    return () => window.clearTimeout(t);
  }, []);

  if (stage === "intro") {
    return (
      <div className="grain fixed inset-0 z-40 flex flex-col items-center justify-center bg-ink px-6 text-center">
        <div className="pointer-events-none absolute inset-0 bg-cream anim-flash" style={{ animationDelay: "700ms" }} />
        <div
          className="anim-fade absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_50%,color-mix(in_oklab,var(--color-wine)_85%,transparent),transparent_75%)]"
          style={{ animationDelay: "1500ms" }}
        />
        <h2 className="editorial anim-fade-up relative z-2 text-5xl tracking-tight text-cream sm:text-7xl" style={{ animationDelay: "1800ms" }}>
          BOSSY SOMU
        </h2>
        <p className="overline anim-fade relative z-2 mt-6 text-[0.6rem] text-chrome" style={{ animationDelay: "2900ms" }}>
          The most powerful woman in the industry
        </p>
        <button onClick={() => setStage("profile")} className="overline absolute bottom-8 z-2 text-[0.55rem] text-cream/40">
          skip
        </button>
      </div>
    );
  }

  return (
    <SectionShell onBack={onBack} label="Bossy Somu" tone="dark">
      <div className="relative">
        <Stars count={10} className="text-chrome/30" />

        <Reveal>
          <div className="flex flex-col items-center gap-6 border-b border-chrome/15 pb-10 text-center sm:flex-row sm:text-left">
            <Photo id="PHOTO_PLACEHOLDER_03" shape="circle" className="w-36 shrink-0" ratio="1 / 1" />
            <div>
              <h1 className="editorial text-5xl text-cream sm:text-6xl">{HER.name}</h1>
              <p className="overline mt-2 text-[0.6rem] text-chrome">{HER.handle} · verified by me</p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/70">{CELEB_LINES[0]}</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {CELEB_STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="border border-chrome/15 bg-cream/[0.03] p-4 text-center">
                <p className="editorial text-3xl text-gold">{s.value}</p>
                <p className="overline mt-2 text-[0.5rem] text-chrome">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <blockquote className="mt-12 border-l-2 border-gold/50 pl-5">
            <p className="editorial text-2xl text-cream sm:text-3xl">{CELEB_LINES[1]}</p>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">{CELEB_LINES[2]}</p>
          </blockquote>
        </Reveal>

        <div className="mt-14 space-y-5">
          <p className="overline text-[0.55rem] text-chrome">Industry rankings · unaudited</p>
          {CELEB_AWARDS.map((a, i) => (
            <Reveal key={a.label} delay={i * 60}>
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="editorial text-xl text-cream">{a.label}</span>
                  <span className="overline text-[0.6rem] text-gold">
                    <Counter to={a.pct} suffix="%" />
                  </span>
                </div>
                <div className="mt-2 h-px w-full bg-chrome/20">
                  <div
                    className="h-px bg-gold transition-[width] duration-[1600ms] ease-out"
                    style={{ width: `${a.pct}%` }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <p className="hand mt-14 text-center text-xl text-chrome/70">
            she's going to read this and say "obviously". 💅
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
