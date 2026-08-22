import { LETTER } from "@/content/somu";
import { Photo, Reveal, SectionShell } from "./primitives";

export function Letter({ onBack }: { onBack: () => void }) {
  return (
    <SectionShell onBack={onBack} label="The Letter">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <article className="card-paper tape relative px-6 py-10 sm:px-12 sm:py-14">
            <p className="overline text-[0.55rem] text-muted-foreground">
              A letter for you
            </p>

            <h1 className="editorial mt-4 text-4xl text-wine">
              {LETTER.salutation}
            </h1>

            <div className="mt-6 space-y-5">
              {LETTER.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[0.95rem] leading-[1.9] text-foreground/80"
                >
                  {p}
                </p>
              ))}
            </div>

            <p className="mt-10 text-sm text-muted-foreground">
              {LETTER.signoff}
            </p>

            <p className="hand text-3xl text-wine">
              {LETTER.signature}
            </p>
          </article>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <div className="mx-auto max-w-[15rem]">
            <Photo
              id="letter"
              shape="frame"
              caption="with love ❤️"
              tilt={1.5}
            />
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
