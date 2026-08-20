import { useEffect, useRef, useState } from "react";
import { AUDIO } from "@/content/somu";
import { isMuted, setMuted, subscribeMute } from "@/lib/sound";

export type Ambient = "main" | "bossy" | "midnight" | null;

const TRACKS: Record<string, string> = {
  main: AUDIO.ambientMain,
  bossy: AUDIO.ambientBossy,
  midnight: AUDIO.ambientMidnight,
};

export function AudioBar({ ambient }: { ambient: Ambient }) {
  const ref = useRef<HTMLAudioElement>(null);
  const [muted, setLocalMuted] = useState(isMuted());
  const [ambientOn, setAmbientOn] = useState(false);

  useEffect(() => {
    const unsub = subscribeMute(setLocalMuted);
    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!ambientOn || muted || !ambient) {
      el.pause();
      return;
    }
    el.volume = 0.25;
    void el.play().catch(() => setAmbientOn(false));
  }, [ambient, ambientOn, muted]);

  return (
    <div className="fixed right-3 bottom-3 z-30 flex items-center gap-1 rounded-full border border-current/15 bg-background/80 px-1 py-1 backdrop-blur-sm">
      <button
        onClick={() => setAmbientOn((v) => !v)}
        aria-label={ambientOn ? "Pause ambient music" : "Play ambient music"}
        className="overline min-h-9 rounded-full px-3 text-[0.5rem] text-foreground/70 transition-colors hover:text-foreground"
      >
        {ambientOn ? "♫ on" : "♫ ambient"}
      </button>
      <button
        onClick={() => setMuted(!muted)}
        aria-label={muted ? "Unmute sound effects" : "Mute sound effects"}
        className="overline min-h-9 rounded-full px-3 text-[0.5rem] text-foreground/70 transition-colors hover:text-foreground"
      >
        {muted ? "muted" : "sfx"}
      </button>
      {ambient && (
        <audio ref={ref} src={TRACKS[ambient]} loop preload="none" className="hidden">
          <track kind="captions" />
        </audio>
      )}
    </div>
  );
}
