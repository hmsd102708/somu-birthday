import { HER, WORLD_CARDS, type SectionId } from "@/content/somu";
import { play } from "@/lib/sound";
import { cn } from "@/lib/utils";
import { Photo, Reveal, Stars } from "./primitives";

const toneClass: Record<string, string> = {
  cream: "card-paper text-foreground",
  pink: "bg-blush text-burgundy border border-rose/25",
  wine: "bg-wine text-cream border border-gold/25",
  ink: "bg-ink text-cream border border-chrome/20",
};

export function World({ onOpen }: { onOpen: (id: SectionId) => void }) {

  return (
    <section className="world-canvas grain-light relative min-h-dvh px-5 pt-8 pb-24 sm:px-8 sm:pt-11">
      <div className="mx-auto w-full max-w-5xl">
        <header className="relative mb-9 text-center sm:mb-12">
          <Stars count={8} className="text-gold/50" />
          <p className="overline text-[0.57rem] text-muted-foreground">A little universe for one very special girl</p>
          <div className="mx-auto mt-4 flex max-w-xs items-center justify-center gap-3 text-gold/60">
            <span className="h-px flex-1 bg-current" />
            <span className="overline text-[0.5rem]">Est. {HER.name} · {HER.age}</span>
            <span className="h-px flex-1 bg-current" />
          </div>
          <h1 className="world-title-shadow editorial mt-4 text-5xl text-wine sm:text-7xl">
            {HER.name}'s <span className="italic">World</span>
          </h1>
          <p className="hand mt-2 text-xl text-rose">tap anything. it's all yours.</p>
        </header>

        <Reveal className="mb-8">
          <div className="relative mx-auto max-w-[17rem] sm:max-w-xs">
            <div className="absolute -top-3 -left-8 hidden h-24 w-24 rounded-full border border-rose/25 sm:block" />
            <span className="anim-float absolute -top-3 -right-5 z-10 text-2xl text-gold" style={{ ["--float-rotate" as string]: "-8deg" }}>✦</span>
            <Photo id="PHOTO_PLACEHOLDER_01" shape="polaroid" caption="the birthday girl" tilt={-2.5} />
            
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WORLD_CARDS.map((c, i) => (
            <Reveal key={c.id} delay={i * 60} className={cn(c.span && "sm:col-span-2 lg:col-span-1")}>
              <button
                onClick={() => {
                  play(c.id === "bossy" ? "era" : "tap");
                  onOpen(c.id);
                }}
                className={cn(
                  "world-card lift group relative flex h-full min-h-44 w-full flex-col justify-between rounded-sm p-5 text-left sm:min-h-48",
                  toneClass[c.tone],
                )}
                data-card={c.id}
                style={{ rotate: `${(i % 3) - 1 ? (i % 2 ? 0.5 : -0.5) : 0}deg` }}
              >
                <span className="flex items-start justify-between">
                  <span className="world-card-icon">{c.emoji}</span>
                  <span className="world-index">0{i + 1} / 11</span>
                </span>
                <span className="mt-6">
                  <span className="editorial block text-2xl">{c.title}</span>
                  <span className="mt-2 block text-xs leading-relaxed opacity-70">{c.sub}</span>
                </span>
                <span className="overline mt-4 block text-[0.5rem] opacity-60 transition-opacity duration-300 group-hover:opacity-100">
                  Open →
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
