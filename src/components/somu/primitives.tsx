import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { PHOTOS, type PhotoId } from "@/content/somu";
import { play, type Sfx } from "@/lib/sound";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];

        if (!e) return;

        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "-8% 0px -8% 0px" },
    );

    io.observe(el);

    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        shown ? "anim-fade-up" : "opacity-0",
        className,
      )}
      style={
        shown
          ? { animationDelay: `${delay}ms` }
          : undefined
      }
    >
      {children}
    </div>
  );
}

export function SoftButton({
  children,
  onClick,
  variant = "solid",
  sfx = "tap",
  className,
  type = "button",
  ariaLabel,
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "solid" | "outline" | "ghost" | "gold";
  sfx?: Sfx | null;
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
}) {
  const styles = {
    solid:
      "bg-primary text-primary-foreground hover:bg-wine/90",
    outline:
      "border border-current text-current hover:bg-current/10",
    ghost:
      "text-current/70 hover:text-current",
    gold:
      "border border-gold/60 text-gold hover:bg-gold/10",
  }[variant];

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      onClick={() => {
        if (sfx) play(sfx);
        onClick?.();
      }}
      className={cn(
        "overline inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 transition-all duration-300 active:scale-[0.97]",
        styles,
        className,
      )}
    >
      {children}
    </button>
  );
}

export function Photo({
  id,
  shape = "polaroid",
  caption,
  className,
  tilt = 0,
  ratio = "4 / 5",
}: {
  id: PhotoId;
  shape?: "polaroid" | "frame" | "circle" | "strip" | "cover";
  caption?: string;
  className?: string;
  tilt?: number;
  ratio?: string;
}) {
  const p = PHOTOS[id];

  const inner = (
    <div
      className="relative w-full overflow-hidden bg-muted"
      style={{
        aspectRatio: ratio,
        borderRadius:
          shape === "circle" ? "9999px" : undefined,
      }}
    >
      {p.src ? (
        <img
          src={p.src}
          alt={p.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="placeholder-photo grain-light absolute inset-0 flex flex-col items-center justify-center gap-2 bg-secondary/40 px-4 text-center">
          <span className="text-2xl opacity-45">✦</span>

          <span className="overline text-[0.55rem] text-muted-foreground">
            {id}
          </span>

          <span className="hand text-lg text-muted-foreground">
            [ add photo here ]
          </span>
        </div>
      )}
    </div>
  );

  if (shape === "polaroid") {
    return (
      <figure
        className={cn(
          "card-paper anim-drift relative p-2.5 pb-9",
          className,
        )}
        style={{
          ["--tilt" as string]: `${tilt}deg`,
          rotate: `${tilt}deg`,
        }}
      >
        {inner}

        <figcaption className="hand absolute right-0 bottom-1.5 left-0 text-center text-lg text-muted-foreground">
          {caption ?? "\u00a0"}
        </figcaption>
      </figure>
    );
  }

  if (shape === "circle") {
    return (
      <figure className={cn("relative", className)}>
        <div className="rounded-full border border-gold/40 p-1.5">
          {inner}
        </div>

        {caption && (
          <figcaption className="hand mt-2 text-center text-lg text-muted-foreground">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  if (shape === "cover") {
    return (
      <figure
        className={cn(
          "relative overflow-hidden",
          className,
        )}
      >
        {inner}

        {caption && (
          <figcaption className="overline absolute bottom-3 left-3 text-[0.6rem] text-primary-foreground/90">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  if (shape === "strip") {
    return (
      <figure className={cn("bg-ink/90 p-2", className)}>
        <div className="border-y-4 border-dashed border-cream/25 py-1">
          {inner}
        </div>

        {caption && (
          <figcaption className="overline mt-1 text-center text-[0.55rem] text-cream/60">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure
      className={cn(
        "card-paper tape relative p-2",
        className,
      )}
      style={{ rotate: `${tilt}deg` }}
    >
      {inner}

      {caption && (
        <figcaption className="hand mt-1 text-center text-lg text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* ── MULTI PHOTO GALLERY ─────────────────────────────────────── */

export function PhotoGallery({
  photos,
  shape = "polaroid",
  captions,
  ratio = "4 / 5",
}: {
  photos: PhotoId[];
  shape?: "polaroid" | "frame" | "circle" | "strip" | "cover";
  captions?: string[];
  ratio?: string;
}) {
  const [active, setActive] = useState(0);

  const validPhotos = photos.filter(Boolean);

  if (!validPhotos.length) return null;

  const next = () => {
    play("tap");
    setActive((current) =>
      current === validPhotos.length - 1
        ? 0
        : current + 1,
    );
  };

  const previous = () => {
    play("tap");
    setActive((current) =>
      current === 0
        ? validPhotos.length - 1
        : current - 1,
    );
  };

  const currentPhoto = validPhotos[active];

  return (
    <div className="w-full">
      <div className="relative mx-auto max-w-md">
        <div className="relative">
          <Photo
            id={currentPhoto}
            shape={shape}
            ratio={ratio}
            caption={captions?.[active]}
            tilt={shape === "polaroid" ? (active % 2 === 0 ? -1.5 : 1.5) : 0}
          />

          {validPhotos.length > 1 && (
            <>
              <button
                type="button"
                onClick={previous}
                aria-label="Previous photo"
                className="absolute top-1/2 left-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xl text-white backdrop-blur-sm transition hover:bg-black/50"
              >
                ←
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next photo"
                className="absolute top-1/2 right-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xl text-white backdrop-blur-sm transition hover:bg-black/50"
              >
                →
              </button>
            </>
          )}
        </div>
      </div>

      {validPhotos.length > 1 && (
        <div className="mt-5 flex items-center justify-center gap-2">
          {validPhotos.map((photo, index) => (
            <button
              key={`${photo}-${index}`}
              type="button"
              aria-label={`Show photo ${index + 1}`}
              onClick={() => {
                play("tap");
                setActive(index);
              }}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === active
                  ? "w-7 bg-current"
                  : "w-2 bg-current/25",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function Stars({
  count = 12,
  className,
}: {
  count?: number;
  className?: string;
}) {
  const items = Array.from(
    { length: count },
    (_, i) => ({
      left: (i * 37) % 100,
      top: (i * 61) % 100,
      delay: (i % 6) * 0.55,
      size: 3 + (i % 3),
    }),
  );

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {items.map((s, i) => (
        <span
          key={i}
          className="anim-twinkle absolute rounded-full bg-current"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export function SectionShell({
  children,
  onBack,
  label,
  className,
  tone = "cream",
}: {
  children: ReactNode;
  onBack: () => void;
  label: string;
  className?: string;
  tone?: "cream" | "dark" | "midnight" | "pink";
}) {
  const tones = {
    cream: "bg-background text-foreground",
    dark: "bg-ink text-cream",
    midnight: "bg-midnight text-cream",
    pink: "bg-blush text-burgundy",
  }[tone];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <section
      className={cn(
        "grain anim-fade min-h-dvh w-full",
        tones,
        className,
      )}
    >
      <div className="relative z-2 mx-auto w-full max-w-5xl px-5 pt-6 pb-24 sm:px-8">
        <div className="mb-8 flex items-center justify-between gap-3">
          <button
            onClick={() => {
              play("tap");
              onBack();
            }}
            className="overline inline-flex min-h-11 items-center gap-2 text-[0.6rem] opacity-70 transition-opacity hover:opacity-100"
          >
            ← Somu's World
          </button>

          <span className="overline text-[0.55rem] opacity-45">
            {label}
          </span>
        </div>

        {children}
      </div>
    </section>
  );
}

export function Counter({
  to,
  suffix = "",
  decimals = 0,
}: {
  to: number;
  suffix?: string;
  decimals?: number;
}) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];

        if (!e) return;
        if (!e.isIntersecting) return;

        io.disconnect();

        const reduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

        if (reduced) {
          setV(to);
          return;
        }

        const start = performance.now();
        const dur = 1400;

        const tick = (now: number) => {
          const p = Math.min(
            1,
            (now - start) / dur,
          );

          setV(
            to * (1 - Math.pow(1 - p, 3)),
          );

          if (p < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
      },
    );

    io.observe(el);

    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {v.toFixed(decimals)}
      {suffix}
    </span>
  );
}
