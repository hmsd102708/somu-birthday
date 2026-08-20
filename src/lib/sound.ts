/**
 * Tiny synthesized sound effects (no asset files needed).
 * Nothing plays until the user interacts. Globally mutable mute.
 */

let muted = false;
let ctx: AudioContext | null = null;
const listeners = new Set<(m: boolean) => void>();

export function isMuted() {
  return muted;
}

export function setMuted(next: boolean) {
  muted = next;
  listeners.forEach((l) => l(muted));
}

export function subscribeMute(fn: (m: boolean) => void) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function audio() {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return null;
    ctx = new Ctor();
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

function tone(freq: number, start: number, dur: number, gain = 0.07, type: OscillatorType = "sine") {
  const ac = audio();
  if (!ac) return;
  const osc = ac.createOscillator();
  const g = ac.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, ac.currentTime + start);
  g.gain.setValueAtTime(0.0001, ac.currentTime + start);
  g.gain.exponentialRampToValueAtTime(gain, ac.currentTime + start + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + start + dur);
  osc.connect(g).connect(ac.destination);
  osc.start(ac.currentTime + start);
  osc.stop(ac.currentTime + start + dur + 0.05);
}

export type Sfx = "tap" | "open" | "correct" | "wrong" | "unlock" | "era" | "sparkle";

export function play(name: Sfx) {
  if (muted || typeof window === "undefined") return;
  switch (name) {
    case "tap":
      tone(880, 0, 0.09, 0.035, "triangle");
      break;
    case "open":
      [523, 659, 784, 1046].forEach((f, i) => tone(f, i * 0.07, 0.35, 0.05, "sine"));
      break;
    case "correct":
      [784, 1046, 1318].forEach((f, i) => tone(f, i * 0.06, 0.3, 0.05));
      break;
    case "wrong":
      tone(220, 0, 0.22, 0.05, "sine");
      tone(180, 0.1, 0.28, 0.04, "sine");
      break;
    case "unlock":
      [392, 523, 659, 880, 1174].forEach((f, i) => tone(f, i * 0.05, 0.45, 0.045));
      break;
    case "era":
      tone(140, 0, 0.7, 0.06, "sine");
      tone(280, 0.05, 0.6, 0.03, "triangle");
      break;
    case "sparkle":
      [1568, 2093].forEach((f, i) => tone(f, i * 0.05, 0.2, 0.025));
      break;
  }
}
