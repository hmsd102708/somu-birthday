import { useState } from "react";
import { FINAL_LINES, FINAL_SURPRISE, HER } from "@/content/somu";
import { play } from "@/lib/sound";
import { Photo, Reveal, SectionShell, SoftButton, Stars } from "./primitives";

export function Final({ onBack }: { onBack: () => void }) {
  const [opened, setOpened] = useState(false);

  return (
    <SectionShell onBack={onBack} label="Chapter 24" tone="dark">
      <div className="relative mx-auto max-w-xl text-center">
        <Stars count={20} className="text-gold/40" />

        <Reveal>
          <div className="relative py-10">
            <span className="editorial gold-text text-[9rem] leading-none sm:text-[12rem]">{HER.age}</span>
            <p className="overline mt-2 text-[0.6rem] text-chrome">Chapter {HER.age}: unlocked</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-6 max-w-[16rem]">
            <Photo id="PHOTO_PLACEHOLDER_08" shape="polaroid" tilt={-1.5} caption="my favourite person" />
          </div>
        </Reveal>

        <div className="mt-14 space-y-2">
          {FINAL_LINES.map((l, i) => (
            <Reveal key={l} delay={i * 140}>
              <p className="editorial text-2xl text-cream/85 sm:text-3xl">{l}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="editorial mt-10 text-3xl text-gold sm:text-4xl">I'm just really lucky to have you. ❤️</p>
        </Reveal>

        <Reveal delay={260}>
          <h1 className="editorial mt-12 text-5xl text-cream sm:text-6xl">Happy Birthday, {HER.name}.</h1>
          <p className="mt-4 text-sm text-cream/60">I hope this year gives you everything you deserve.</p>
        </Reveal>

        {!opened ? (
          <Reveal delay={320}>
            <div className="mt-16">
              <SoftButton
                variant="gold"
                sfx="unlock"
                onClick={() => {
                  play("sparkle");
                  setOpened(true);
                }}
              >
                One last surprise ↓
              </SoftButton>
            </div>
          </Reveal>
        ) : (
          <div className="anim-scale-in mt-16 border border-gold/35 bg-cream/[0.03] p-6 text-left">
            <p className="overline text-[0.5rem] text-gold">The last one</p>

            {FINAL_SURPRISE.video ? (
              <video src={FINAL_SURPRISE.video} controls playsInline className="mt-4 w-full rounded-sm" />
            ) : (
              <p className="hand mt-4 text-xl text-cream/60">
                FINAL_VIDEO_PLACEHOLDER — drop a video at public/media/final.mp4 and set it in the content file.
              </p>
            )}

            <p className="mt-6 text-[0.95rem] leading-relaxed text-cream/80">{FINAL_SURPRISE.letter}</p>

            {FINAL_SURPRISE.voice && (
              <audio src={FINAL_SURPRISE.voice} controls preload="none" className="mt-6 w-full">
                <track kind="captions" />
              </audio>
            )}

            <p className="hand mt-8 text-center text-2xl text-gold">happy birthday, my love. ✦</p>
          </div>
        )}
      </div>
    </SectionShell>
  );
}
