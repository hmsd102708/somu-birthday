import {
  useEffect,
  useRef,
  useState,
} from "react";
import { AUDIO, SONG_META } from "@/content/somu";
import { cn } from "@/lib/utils";
import {
  Photo,
  SectionShell,
  SoftButton,
} from "./primitives";

export function Music({
  onBack,
}: {
  onBack: () => void;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);
  const [missing, setMissing] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = audioRef.current;

    if (!el) return;

    const onTime = () => {
      setProgress(
        el.duration
          ? (el.currentTime / el.duration) * 100
          : 0,
      );
    };

    const onEnd = () => {
      setPlaying(false);
      setProgress(0);
    };

    el.addEventListener("timeupdate", onTime);
    el.addEventListener("ended", onEnd);

    return () => {
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = async () => {
    const el = audioRef.current;

    if (!el) return;

    try {
      if (playing) {
        el.pause();
        setPlaying(false);
      } else {
        setMissing(false);
        await el.play();
        setPlaying(true);
      }
    } catch {
      setMissing(true);
      setPlaying(false);
    }
  };

  return (
    <SectionShell
      onBack={onBack}
      label="Her Music"
      tone="midnight"
    >
      <div className="mx-auto max-w-md text-center">
        <p className="overline text-[0.6rem] text-cream/50">
          Unreleased · one listener only
        </p>

        <h1 className="editorial mt-3 text-5xl text-cream">
          Somu's Song
        </h1>

        {/* MUSIC PHOTO */}
        <div className="mt-8">
          <Photo
            id="music"
            shape="cover"
            ratio="1 / 1"
            className="border border-cream/15"
          />
        </div>

        <p className="editorial mt-6 text-2xl text-cream">
          {SONG_META.title}
        </p>

        <p className="mt-1 text-xs text-cream/50">
          {SONG_META.subtitle}
        </p>

        {/* VISUALIZER */}
        <div
          className="mt-8 flex h-12 items-end justify-center gap-[3px]"
          aria-hidden
        >
          {Array.from({ length: 40 }, (_, i) => (
            <span
              key={i}
              className={cn(
                "w-[3px] rounded-full bg-cream/40 transition-all duration-300",
                playing && "bg-cream/80",
              )}
              style={{
                height: playing
                  ? `${18 + Math.abs(
                      Math.sin((i + progress) / 3),
                    ) * 80}%`
                  : `${18 + (i % 5) * 8}%`,
                transitionDelay: `${i * 8}ms`,
              }}
            />
          ))}
        </div>

        {/* PROGRESS */}
        <div className="mt-4 h-px w-full bg-cream/15">
          <div
            className="h-px bg-gold transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* PLAY / PAUSE */}
        <div className="mt-8">
          <SoftButton
            variant="gold"
            onClick={toggle}
            sfx="tap"
          >
            {playing
              ? "❚❚ Pause"
              : "♫ Play Somu's Song"}
          </SoftButton>
        </div>

        {missing && (
          <p className="hand mt-5 text-lg text-cream/60">
            [ add song file here ] → place it at{" "}
            <code className="text-gold">
              public{AUDIO.herSong}
            </code>
          </p>
        )}

        <p className="hand mt-10 text-xl text-cream/60">
          {SONG_META.note}
        </p>

        <audio
          ref={audioRef}
          src={AUDIO.herSong}
          preload="none"
          className="hidden"
        >
          <track kind="captions" />
        </audio>
      </div>
    </SectionShell>
  );
}
