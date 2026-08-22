import { CELEB_LINES, HER, type PhotoId } from "@/content/somu";
import { Photo, PhotoGallery, Reveal, SectionShell } from "./primitives";

export function CuteSomu({ onBack }: { onBack: () => void }) {
  const notes = [
    {
      t: "Exhibit A",
      b: "The face she makes when she wants something. Effective 100% of the time.",
    },
    {
      t: "Exhibit B",
      b: "Falls asleep mid-sentence. Wakes up ready to argue about the same sentence.",
    },
    {
      t: "Exhibit C",
      b: "Claims innocence. Has never been innocent.",
    },
  ];

  const photos: PhotoId[] = [
    "PHOTO_PLACEHOLDER_02",
    "PHOTO_PLACEHOLDER_10",
    "PHOTO_PLACEHOLDER_11",
    "PHOTO_PLACEHOLDER_12",
  ];

  return (
    <SectionShell onBack={onBack} label="Cute Somu" tone="pink">
      <header className="mb-8">
        <p className="overline text-[0.6rem] opacity-60">Rare footage</p>
        <h1 className="editorial mt-3 text-5xl sm:text-7xl">Cute Somu</h1>
        <p className="hand mt-2 text-xl opacity-70">
          for the 0.0001% of moments when she isn't bossing me around
        </p>
      </header>

      <PhotoGallery
        photos={photos}
        shape="polaroid"
        captions={["Exhibit A", "Exhibit B", "Exhibit C", "Just more cuteness"]}
      />

      <div className="mt-10 space-y-4">
        {notes.map((n, i) => (
          <Reveal key={n.t} delay={i * 70}>
            <div className="border-l-2 border-wine/30 pl-4">
              <p className="overline text-[0.5rem] opacity-60">{n.t}</p>
              <p className="mt-2 text-sm leading-relaxed opacity-80">{n.b}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

export function ArtistSomu({ onBack }: { onBack: () => void }) {
  return (
    <SectionShell onBack={onBack} label="Generational Artist" tone="dark">
      <header className="mb-8">
        <p className="overline text-[0.6rem] text-chrome">Cover story</p>
        <h1 className="editorial mt-3 text-5xl text-cream sm:text-7xl">
          Generational Artist
        </h1>
        <p className="hand mt-2 text-xl text-gold/80">
          Taylor Swift has competition.
        </p>
      </header>

      <Reveal>
        <div className="relative border border-chrome/20">
          <Photo
            id="PHOTO_PLACEHOLDER_06"
            shape="cover"
            ratio="3 / 4"
            caption="Somu · the interview"
          />

          <div className="pointer-events-none absolute top-4 left-4">
            <p className="overline text-[0.5rem] text-cream/70">
              SOMU · MONTHLY
            </p>
          </div>
        </div>
      </Reveal>

      <div className="mt-10 space-y-6">
        <Reveal>
          <p className="editorial text-3xl text-cream">
            "Generational talent. Extremely underrated."
          </p>
        </Reveal>

        <Reveal delay={80}>
          <p className="text-sm leading-relaxed text-cream/70">
            Sold-out shows in the festivals. Phenomenal performances ever in
            history. Critics (me) call it "the best voice I've ever been
            personally serenaded by."
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
