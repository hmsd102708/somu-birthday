import { HER } from "@/content/somu";
import { SoftButton, Stars } from "./primitives";

export function BirthdayReveal({ onEnter }: { onEnter: () => void }) {
  return (
    <section className="grain paper relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 py-16 text-center">
      <Stars count={16} className="text-gold/60" />

      <div className="relative z-2 w-full max-w-2xl">
        <p className="overline anim-fade text-[0.6rem] text-muted-foreground" style={{ animationDelay: "120ms" }}>
          The birthday edition · chapter {HER.age}
        </p>

        <h1
          className="editorial anim-fade-up mt-5 text-[2.6rem] text-wine sm:text-6xl"
          style={{ animationDelay: "260ms" }}
        >
          Happy Birthday,
          <br />
          <span className="italic">{HER.name}</span> <span className="text-rose">❤︎</span>
        </h1>

        <p
          className="anim-fade-up mx-auto mt-6 max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground"
          style={{ animationDelay: "520ms" }}
        >
          To the most lovely person,
          <br />
          the bossiest lady,
          <br />
          and a generational artist.
        </p>

        <div className="anim-scale-in relative mt-9 flex items-center justify-center" style={{ animationDelay: "760ms" }}>
          <span className="absolute top-3 left-1/2 -translate-x-1/2 overline text-[0.48rem] text-gold/80">TWENTY FOUR</span>
          <Stars count={10} className="text-gold" />
          <span className="editorial gold-text relative z-2 text-[8.5rem] leading-none sm:text-[11rem]">{HER.age}</span>
        </div>

        <p className="editorial anim-fade-up -mt-2 text-2xl text-burgundy sm:text-3xl" style={{ animationDelay: "1000ms" }}>
          {HER.age} looks really good on you.
        </p>
        <p className="hand anim-fade text-xl text-rose" style={{ animationDelay: "1200ms" }}>
          chapter {HER.age} begins now
        </p>

        <div className="anim-fade-up mt-12" style={{ animationDelay: "1400ms" }}>
          <SoftButton onClick={onEnter} sfx="sparkle">
            Enter {HER.name}'s World →
          </SoftButton>
        </div>
      </div>
    </section>
  );
}
