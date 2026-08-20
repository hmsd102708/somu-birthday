import { ANALYTICS, HER } from "@/content/somu";
import { Counter, Reveal, SectionShell } from "./primitives";

export function Analytics({ onBack }: { onBack: () => void }) {
  return (
    <SectionShell onBack={onBack} label="Analytics">
      <header className="mb-10">
        <p className="overline text-[0.6rem] text-muted-foreground">Officially unofficial statistics</p>
        <h1 className="editorial mt-3 text-5xl text-wine sm:text-7xl">Somu Analytics</h1>
        <p className="hand mt-2 text-xl text-rose">data doesn't lie. mostly.</p>
      </header>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {ANALYTICS.map((a, i) => (
          <Reveal key={a.label} delay={i * 60}>
            <div className="card-paper flex min-h-24 flex-col justify-between p-4">
              <p className="overline text-[0.55rem] text-muted-foreground">{a.label}</p>
              <p className="editorial mt-3 text-3xl text-burgundy">
                {typeof a.numeric === "number" ? (
                  <Counter to={a.numeric} suffix={a.suffix ?? ""} decimals={a.numeric % 1 ? 2 : 0} />
                ) : (
                  a.value
                )}
              </p>
              {typeof a.numeric === "number" && (
                <div className="mt-3 h-px w-full bg-border">
                  <div
                    className="h-px bg-rose transition-[width] duration-[1600ms] ease-out"
                    style={{ width: `${Math.min(100, a.numeric)}%` }}
                  />
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <p className="hand mt-12 text-center text-xl text-muted-foreground">
          methodology: {HER.age} years of observation, zero objectivity.
        </p>
      </Reveal>
    </SectionShell>
  );
}
