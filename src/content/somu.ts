/**
 * ─────────────────────────────────────────────────────────────
 *  SOMU — ALL EDITABLE CONTENT LIVES HERE
 * ─────────────────────────────────────────────────────────────
 *  Change text, quiz questions, love notes and file paths below.
 *  Photos  ->  public/photos/   (see PHOTOS list)
 *  Audio   ->  public/audio/    (see AUDIO list)
 * ─────────────────────────────────────────────────────────────
 */

export const HER = {
  name: "Somu",
  age: 24,
  handle: "@somu",
};

/* ── PHOTOS ───────────────────────────────────────────────────
 * Drop a file in `public/photos/` with the matching name and the
 * placeholder is replaced automatically. e.g. public/photos/01.jpg
 * Leave `src: null` to keep showing the elegant placeholder.
 */
export type PhotoId =
  | "PHOTO_PLACEHOLDER_01"
  | "PHOTO_PLACEHOLDER_02"
  | "PHOTO_PLACEHOLDER_03"
  | "PHOTO_PLACEHOLDER_04"
  | "PHOTO_PLACEHOLDER_06"
  | "PHOTO_PLACEHOLDER_07"
  | "PHOTO_PLACEHOLDER_08"
  | "PHOTO_PLACEHOLDER_09";

export const PHOTOS: Record<PhotoId, { src: string | null; alt: string }> = {
  PHOTO_PLACEHOLDER_01: { src: "/photos/01.JPG", alt: "Somu smiling" }, // hero / world
  PHOTO_PLACEHOLDER_02: { src: "/photos/02.JPG", alt: "Somu, cute era" },
  PHOTO_PLACEHOLDER_03: { src: "/photos/03.JPG", alt: "Somu, bossy era" },
  PHOTO_PLACEHOLDER_04: { src: "/photos/04.jpg", alt: "Somu, lover era" },
  PHOTO_PLACEHOLDER_06: { src: "/photos/06.jpg", alt: "Somu, artist era" },
  PHOTO_PLACEHOLDER_07: { src: "/photos/07.jpg", alt: "Somu singing" },
  PHOTO_PLACEHOLDER_08: { src: "/photos/08.jpg", alt: "Somu, favourite photo" },
  PHOTO_PLACEHOLDER_09: { src: "/photos/09.jpg", alt: "Us together" },
};

/* ── AUDIO ────────────────────────────────────────────────────
 * Put files in `public/audio/`. Nothing autoplays, ever.
 */
export const AUDIO = {
  herSong: "/audio/somu-song.mp3", // [ADD SONG FILE HERE] — Somu singing
  ambientMain: "/audio/ambient-main.mp3", // [ADD AMBIENT TRACK]
  ambientBossy: "/audio/ambient-bossy.mp3", // [ADD BOSSY TRACK]
  ambientMidnight: "/audio/ambient-midnight.mp3", // [ADD MIDNIGHT TRACK]
};

export const SONG_META = {
  title: "[ADD SONG TITLE HERE]",
  subtitle: "Sung by Somu · recorded [ADD DATE HERE]",
  note: "The most streamed song in this house.",
};

/* ── WORLD CARDS ─────────────────────────────────────────────── */
export type SectionId =
  | "bossy"
  | "artist"
  | "cute"
  | "know"
  | "vault"
  | "analytics"
  | "love"
  | "letter"
  | "eras"
  | "music"
  | "final";

export const WORLD_CARDS: {
  id: SectionId;
  emoji: string;
  title: string;
  sub: string;
  tone: "wine" | "pink" | "cream" | "ink";
  span?: boolean;
}[] = [
  {
    id: "bossy",
    emoji: "👑",
    title: "Bossy Somu",
    sub: "Because apparently the world revolves around her.",
    tone: "ink",
    span: true,
  },
  { id: "artist", emoji: "🎤", title: "Generational Artist", sub: "Taylor Swift has competition.", tone: "wine" },
  {
    id: "cute",
    emoji: "💗",
    title: "Cute Somu",
    sub: "For the 0.0001% of moments when she isn't bossing me around.",
    tone: "pink",
  },
  { id: "eras", emoji: "🎞", title: "Somu's Eras", sub: "Five moods. One woman. No warning.", tone: "cream", span: true },
  { id: "know", emoji: "🧠", title: "How Well Do You Know Somu?", sub: "Let's see if you actually know your girlfriend.", tone: "cream" },
  { id: "vault", emoji: "🔐", title: "Somu's Secret Vault", sub: "Only a true Swiftie can unlock this.", tone: "ink" },
  { id: "analytics", emoji: "📊", title: "Somu Analytics", sub: "Officially unofficial statistics.", tone: "wine" },
  { id: "love", emoji: "❤️", title: "Things I Love About You", sub: "An ever-growing list.", tone: "pink" },
  { id: "music", emoji: "♫", title: "Her Music", sub: "The voice. Unreleased. Priceless.", tone: "cream" },
  { id: "letter", emoji: "💌", title: "A Letter For You", sub: "Something I wanted you to read.", tone: "cream", span: true },
  { id: "final", emoji: "🎁", title: "One Last Surprise", sub: "You have to earn this one.", tone: "wine" },
];

/* ── ERAS ─────────────────────────────────────────────────────── */
export const ERAS: {
  id: string;
  emoji: string;
  name: string;
  caption: string;
  body: string;
  photo: PhotoId;
  theme: "cute" | "bossy" | "lover" | "artist";
}[] = [
  {
    id: "cute",
    emoji: "🎀",
    name: "Cute Somu",
    caption: "The cute one. Allegedly innocent.",
    body: "Big eyes, tiny voice, absolutely zero accountability. Somehow always forgiven within four seconds.",
    photo: "PHOTO_PLACEHOLDER_02",
    theme: "cute",
  },
  {
    id: "bossy",
    emoji: "👑",
    name: "Bossy Somu",
    caption: "The boss has entered the room.",
    body: "Decisions are announced, not discussed. I've learned to simply agree and be happy about it.",
    photo: "PHOTO_PLACEHOLDER_03",
    theme: "bossy",
  },
  {
    id: "lover",
    emoji: "💗",
    name: "Lover Somu",
    caption: "Soft hours. Rare. Documented.",
    body: "The version of her that makes an ordinary Tuesday feel like the best day of the year.",
    photo: "PHOTO_PLACEHOLDER_04",
    theme: "lover",
  },
  {
    id: "artist",
    emoji: "🎤",
    name: "Artist Somu",
    caption: "Generational talent. Extremely underrated. By everyone except me.",
    body: "One voice note from her outperforms most of the music industry. I don't make the rules.",
    photo: "PHOTO_PLACEHOLDER_06",
    theme: "artist",
  },
];

/* ── FAKE CELEBRITY PROFILE ───────────────────────────────────── */
export const CELEB_STATS = [
  { label: "Followers", value: "128.7M" },
  { label: "Likes", value: "2.4B" },
  { label: "Trending", value: "#1" },
  { label: "Status", value: "Global Icon" },
];

export const CELEB_LINES = [
  "Most influential bossy girl of the generation.",
  "Queen of absolutely everything.",
  "7 billion people exist. Somehow she still chose to boss me around.",
];

export const CELEB_AWARDS: { label: string; pct: number }[] = [
  { label: "Most Powerful", pct: 100 },
  { label: "Most Beautiful", pct: 100 },
  { label: "Most Bossy", pct: 99 },
  { label: "Most Loved", pct: 100 },
  { label: "Most Dangerous Smile", pct: 97 },
  { label: "Most Likely To Be Right", pct: 100 },
];

/* ── ANALYTICS ────────────────────────────────────────────────── */
export const ANALYTICS: { label: string; value: string; numeric?: number; suffix?: string }[] = [
  { label: "Cuteness", value: "99.99%", numeric: 99.99, suffix: "%" },
  { label: "Bossiness", value: "9999%", numeric: 9999, suffix: "%" },
  { label: "Taylor Swift Knowledge", value: "∞" },
  { label: "Patience", value: "Depends on me" },
  { label: "Anger Level", value: "CLASSIFIED" },
  { label: "Smile Power", value: "Dangerous" },
  { label: "Boyfriend Control", value: "100%", numeric: 100, suffix: "%" },
  { label: "Times She Was Wrong", value: "0", numeric: 0 },
  { label: "Songs Ruined By Her Version", value: "All of them" },
];

/* ── VAULT (Taylor-inspired riddles) ──────────────────────────── */
export type VaultQuestion = {
  prompt: string;
  hint: string;
  answers: string[]; // any match (case-insensitive) unlocks
  reward: string;
  rewardNote: string;
};

export const VAULT_QUESTIONS: VaultQuestion[] = [
  {
    prompt: "If I have a blank space, baby… I would write ______.",
    hint: "Blank Space",
    answers: ["your name", "name", "somu"],
    reward: "💋 One Virtual Kissie",
    rewardNote: "Redeemable in person. No expiry.",
  },
  {
    prompt: "We are never ever ever getting ______.",
    hint: "The break-up anthem",
    answers: ["back together", "backtogether"],
    reward: "🤗 One Unlimited Hug",
    rewardNote: "The long kind. The one where I don't let go first.",
  },
  {
    prompt: "It's me, hi, I'm the ______, it's me.",
    hint: "Midnights, 2022",
    answers: ["problem", "problem its me"],
    reward: "🍫 One Chocolate Of Her Choice",
    rewardNote: "Yes, even the expensive one.",
  },
  {
    prompt: "Complete it: 'Cause darling I'm a nightmare dressed like a ______.",
    hint: "Still Blank Space",
    answers: ["daydream"],
    reward: "👑 Official Queen Certificate",
    rewardNote: "Signed, sealed, legally meaningless, emotionally binding.",
  },
  {
    prompt: "Long live the walls we ______.",
    hint: "Speak Now finale",
    answers: ["crashed through"],
    reward: "💌 One Secret Message",
    rewardNote: "[ADD SECRET MESSAGE HERE]",
  },
  {
    prompt: "'Cause baby now we've got ______.",
    hint: "1989's opening scars",
    answers: ["bad blood"],
    reward: "❤️ One 'I Love You'",
    rewardNote: "Not the casual one. The serious one.",
  },
  {
    prompt: "Karma is my boyfriend, karma is a ______.",
    hint: "Midnights again",
    answers: ["god", "a god"],
    reward: "🎁 The Final Surprise Key",
    rewardNote: "You've officially earned the last section.",
  },
];

/* ── HOW WELL DO YOU KNOW SOMU ────────────────────────────────── */
export type KnowQuestion = {
  q: string;
  options: string[];
  correct: number;
  right: string;
  wrong: string;
};

export const KNOW_QUESTIONS: KnowQuestion[] = [
  {
    q: "Who is always right?",
    options: ["Me", "Somu", "Obviously Somu 👑"],
    correct: 2,
    right: "Correct. This was never a question.",
    wrong: "Wrong answer. She's going to know about this. 😭",
  },
  {
    q: "Who is the boss?",
    options: ["Me", "Somu 👑", "The government"],
    correct: 1,
    right: "The government wishes.",
    wrong: "Bold of you. Brave, even.",
  },
  {
    q: "What happens if you disagree with her?",
    options: ["A calm discussion", "You lose", "You lose, but politely"],
    correct: 1,
    right: "Efficient. No notes.",
    wrong: "Optimistic of you.",
  },
  {
    q: "Which Taylor era is Somu, spiritually?",
    options: ["All of them, simultaneously", "Just one", "None"],
    correct: 0,
    right: "Chaotic. Accurate.",
    wrong: "You clearly haven't met her.",
  },
  {
    q: "Her ideal apology from me is…",
    options: ["Words", "Food", "Food, then words"],
    correct: 2,
    right: "You've studied.",
    wrong: "Words alone have never worked. Ever.",
  },
  {
    q: "How long can she stay angry?",
    options: ["[ADD ANSWER HERE]", "Until food arrives", "Forever, she's built different"],
    correct: 1,
    right: "Scientifically proven.",
    wrong: "Close, but the kitchen always wins.",
  },
];

/* ── THINGS I LOVE ABOUT YOU ──────────────────────────────────── */
export const LOVE_LIST: { emoji: string; title: string; message: string }[] = [
  { emoji: "💗", title: "Your smile", message: "It ends arguments I was winning. Every single time." },
  { emoji: "👑", title: "Your confidence", message: "You walk into rooms like they were reserved for you. Because they were." },
  { emoji: "😂", title: "Your craziness", message: "Nobody else could make chaos feel this comforting." },
  { emoji: "🎀", title: "Your cuteness", message: "Unfair. Weaponised. I've stopped resisting." },
  { emoji: "🧠", title: "Your intelligence", message: "You explain things twice because I'm slow, and never once make me feel it." },
  { emoji: "✨", title: "Your ambition", message: "You want a big life, and I have never once doubted you'll get it." },
  { emoji: "❤️", title: "The way you care", message: "Quietly, constantly, in a hundred tiny ways you think nobody notices. I notice." },
  { emoji: "🥹", title: "The way you make my days better", message: "Even the bad ones. Especially the bad ones." },
  { emoji: "💞", title: "The way I resonate with you", message: "Same wavelength, same jokes, same silence. Rare thing." },
  { emoji: "🤍", title: "The way you understand me", message: "You read me before I finish the sentence. Slightly terrifying. Mostly wonderful." },
  { emoji: "🌱", title: "The way you believe in me", message: "You've backed me on days I couldn't back myself." },
  { emoji: "☀️", title: "My mood lifter", message: "One text from you resets the whole day." },
  { emoji: "❤️", title: "My love", message: "[ADD PERSONAL MESSAGE HERE]" },
];

/* ── THE LETTER ───────────────────────────────────────────────── */
export const LETTER = {
  salutation: "Dear Somu,",
  paragraphs: [
    "[ADD PERSONAL MESSAGE HERE] — this is where your letter goes. Write it exactly how you'd say it out loud.",
    "[ADD MEMORY HERE] — the moment you'd keep if you could only keep one.",
    "[ADD PERSONAL MESSAGE HERE] — what you're hoping for, for her, this year.",
  ],
  signoff: "Always yours,",
  signature: "[ADD YOUR NAME HERE]",
};

/* ── FINAL SURPRISE ───────────────────────────────────────────── */
export const FINAL_SURPRISE = {
  /** Put a video at public/media/final.mp4 and set this to that path. */
  video: null as string | null, // FINAL_VIDEO_PLACEHOLDER
  letter: "FINAL_LETTER_PLACEHOLDER — [ADD FINAL MESSAGE HERE]",
  /** Optional voice note: "/audio/final-voice.mp3" */
  voice: null as string | null,
};

export const FINAL_LINES = [
  "And after all the jokes,",
  "all the bossiness,",
  "all the chaos,",
  "all the Taylor Swift references…",
];
