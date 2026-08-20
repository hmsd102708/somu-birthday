import { useState } from "react";
import { LOVE_LIST } from "@/content/somu";
import { play } from "@/lib/sound";
import { cn } from "@/lib/utils";
import { Reveal, SectionShell } from "./primitives";

export function LoveList({ onBack }: { onBack: () => void }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <SectionShell onBack={onBack} label="The List" tone="pink">
      <header className="mb-8">
        <p className="overline text-[0.6rem] opacity-60">An ever-growing list</p>
        <h1 className="editorial mt-3 text-5xl sm:text-7xl">Things I love about you</h1>
        <p className="hand mt-2 text-xl opacity-70">tap a card. each one opens.</p>
      </header>

      <div className="grid gap-3 sm:grid-cols-2">
        {LOVE_LIST.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={item.title} delay={i * 45}>
              <button
                onClick={() => {
                  play(isOpen ? "tap" : "sparkle");
                  setOpen(isOpen ? null : i);
                }}
                aria-expanded={isOpen}
                className={cn(
                  "lift w-full rounded-sm border p-4 text-left transition-colors",
                  isOpen ? "border-wine/40 bg-paper" : "border-rose/25 bg-paper/70",
                )}
              >
                <span className="flex items-center gap-3">
                  <span className="text-xl">{item.emoji}</span>
                  <span className="editorial text-xl text-burgundy">{item.title}</span>
                </span>
                {isOpen && (
                  <span className="anim-fade-up mt-3 block text-sm leading-relaxed text-burgundy/75">{item.message}</span>
                )}
              </button>
            </Reveal>
          );
        })}
      </div>

      <p className="hand mt-12 text-center text-xl opacity-70">…and the list keeps growing. annoyingly fast.</p>
    </SectionShell>
  );
}
