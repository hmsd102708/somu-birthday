import { useState } from "react";
import { HER } from "@/content/somu";
import { play } from "@/lib/sound";
import { Stars } from "./primitives";

export function GiftWrapper({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);

  const unwrap = () => {
    if (opening) return;
    play("open");
    setOpening(true);
    window.setTimeout(onOpen, 1400);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Double click to unwrap ${HER.name}'s gift`}
      onDoubleClick={unwrap}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          unwrap();
        }
      }}
      className="fixed inset-0 z-50 cursor-pointer select-none"
    >
      <div
        className="grain absolute inset-x-0 top-0 h-1/2 bg-burgundy transition-transform duration-[1200ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{ transform: opening ? "translateY(-102%)" : "none" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_120%,color-mix(in_oklab,var(--color-wine)_75%,transparent),transparent_70%)]" />
        <Stars count={10} className="text-gold/50" />
      </div>
      <div
        className="grain absolute inset-x-0 bottom-0 h-1/2 bg-burgundy transition-transform duration-[1200ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{ transform: opening ? "translateY(102%)" : "none" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_-20%,color-mix(in_oklab,var(--color-wine)_75%,transparent),transparent_70%)]" />
        <Stars count={10} className="text-gold/40" />
      </div>

      <div
        aria-hidden
        className="absolute inset-y-0 left-1/2 w-8 -translate-x-1/2 bg-[linear-gradient(90deg,transparent,color-mix(in_oklab,var(--color-gold)_55%,transparent)_20%,color-mix(in_oklab,var(--color-gold)_85%,white)_50%,color-mix(in_oklab,var(--color-gold)_55%,transparent)_80%,transparent)] transition-all duration-700"
        style={{ opacity: opening ? 0 : 0.85, transform: opening ? "translateX(-50%) scaleY(1.2)" : "translateX(-50%)" }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-1/2 h-6 -translate-y-1/2 bg-[linear-gradient(0deg,transparent,color-mix(in_oklab,var(--color-gold)_50%,transparent)_25%,color-mix(in_oklab,var(--color-gold)_80%,white)_50%,color-mix(in_oklab,var(--color-gold)_50%,transparent)_75%,transparent)] transition-all duration-500"
        style={{ opacity: opening ? 0 : 0.7 }}
      />

      <div
        className="absolute inset-0 z-2 flex flex-col items-center justify-center px-8 text-center transition-all duration-500"
        style={{ opacity: opening ? 0 : 1, transform: opening ? "scale(1.06)" : "none" }}
      >
        <p className="overline mb-7 rounded-full border border-gold/30 px-4 py-2 text-[0.5rem] text-gold/80">To: {HER.name} · Handle with care</p>
        <p className="hand text-2xl text-cream/70">Something special for {HER.name}...</p>
        <p className="editorial mt-4 text-5xl text-cream sm:text-6xl">Wrapped with love</p>
        <p className="overline mt-10 animate-pulse text-[0.65rem] text-gold">Double-click to unlock</p>
        <p className="overline mt-3 text-[0.5rem] text-cream/40">(or press enter)</p>
      </div>

      {opening && <div className="pointer-events-none absolute inset-0 z-3 bg-cream anim-flash" />}
    </div>
  );
}
