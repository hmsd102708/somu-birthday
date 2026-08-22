/**
 * ─────────────────────────────────────────────────────────────
 *  SOMU — ALL EDITABLE CONTENT LIVES HERE
 * ─────────────────────────────────────────────────────────────
 *  Change text, quiz questions, love notes and file paths below.
 *  Photos   ->  public/photos/    (see PHOTOS list)
 *  Audio    ->  public/audio/     (see AUDIO list)
 * ─────────────────────────────────────────────────────────────
 */

export const HER = {
  name: "Somu",
  age: 24,
  handle: "@somu",
};

/* ── PHOTOS ─────────────────────────────────────────────────── */

export type PhotoId =
  | "PHOTO_PLACEHOLDER_01"
  | "PHOTO_PLACEHOLDER_02"
  | "PHOTO_PLACEHOLDER_03"
  | "PHOTO_PLACEHOLDER_04"
  | "PHOTO_PLACEHOLDER_06"
  | "PHOTO_PLACEHOLDER_07"
  | "PHOTO_PLACEHOLDER_08"
  | "PHOTO_PLACEHOLDER_09"
  | "PHOTO_PLACEHOLDER_10"
  | "PHOTO_PLACEHOLDER_11"
  | "PHOTO_PLACEHOLDER_12"
  | "PHOTO_PLACEHOLDER_13"
  | "PHOTO_PLACEHOLDER_14"
  | "PHOTO_PLACEHOLDER_15"
  | "PHOTO_PLACEHOLDER_16"
  | "PHOTO_PLACEHOLDER_17"
  | "PHOTO_PLACEHOLDER_18";

export const PHOTOS: Record<PhotoId, { src: string | null; alt: string }> = {
  PHOTO_PLACEHOLDER_01: { src: "/photos/01.JPG", alt: "Somu smiling" },

  PHOTO_PLACEHOLDER_02: { src: "/photos/02.JPG", alt: "Somu, cute era" },
  PHOTO_PLACEHOLDER_03: { src: "/photos/03.JPG", alt: "Somu, confident era" },
  PHOTO_PLACEHOLDER_04: { src: "/photos/04.jpg", alt: "Somu, funky era" },
  PHOTO_PLACEHOLDER_06: { src: "/photos/06.jpg", alt: "Somu, lively era" },
  PHOTO_PLACEHOLDER_07: { src: "/photos/07.jpg", alt: "Somu singing" },
  PHOTO_PLACEHOLDER_08: { src: "/photos/08.jpg", alt: "Somu, favourite photo" },
  PHOTO_PLACEHOLDER_09: { src: "/photos/09.jpg", alt: "Us together" },

  /* ── ADDITIONAL PHOTOS ──
   * Put these files inside public/photos/
   */
  PHOTO_PLACEHOLDER_10: { src: "/photos/10.jpg", alt: "Somu, cute photo 2" },
  PHOTO_PLACEHOLDER_11: { src: "/photos/11.jpg", alt: "Somu, cute photo 3" },
  PHOTO_PLACEHOLDER_12: { src: "/photos/12.jpg", alt: "Somu, cute photo 4" },
  PHOTO_PLACEHOLDER_13: { src: "/photos/13.jpg", alt: "Somu, confident photo 2" },
  PHOTO_PLACEHOLDER_14: { src: "/photos/14.jpg", alt: "Somu, funky photo 2" },
  PHOTO_PLACEHOLDER_15: { src: "/photos/15.jpg", alt: "Somu, lively photo 2" },
  PHOTO_PLACEHOLDER_16: { src: "/photos/16.jpg", alt: "Somu, Bossy Somu photo 2" },
  PHOTO_PLACEHOLDER_17: { src: "/photos/17.jpg", alt: "Somu, final surprise photo 2" },
  PHOTO_PLACEHOLDER_18: { src: "/photos/18.jpg", alt: "Somu, extra photo" },
};

/* ── AUDIO ──────────────────────────────────────────────────── */

export const AUDIO = {
  herSong: "/audio/somu-song.mp3",
  ambientMain: "/audio/ambient-main.mp3",
  ambientBossy: "/audio/ambient-bossy.mp3",
  ambientMidnight: "/audio/ambient-midnight.mp3",
};

export const SONG_META = {
  title: "Unstoppable by SOMU",
  subtitle: "Sung by Somu",
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
  {
    id: "artist",
    emoji: "🎤",
    title: "Generational Artist",
    sub: "Taylor Swift has competition.",
    tone: "wine",
  },
  {
    id: "cute",
    emoji: "💗",
    title: "Cute Somu",
    sub: "For the 0.0001% of moments when she isn't bossing me around.",
    tone: "pink",
  },
  {
    id: "eras",
    emoji: "🎞",
    title: "Somu's Eras",
    sub: "Four moods. One woman. No warning.",
    tone: "cream",
    span: true,
  },
  {
    id: "know",
    emoji: "🧠",
    title: "How Well Do You Know Somu?",
    sub: "Let's see if you actually know your girlfriend.",
    tone: "cream",
  },
  {
    id: "vault",
    emoji: "🔐",
    title: "Somu's Secret Vault",
    sub: "Only a true Swiftie can unlock this.",
    tone: "ink",
  },
  {
    id: "analytics",
    emoji: "📊",
    title: "Somu Analytics",
    sub: "Officially unofficial statistics.",
    tone: "wine",
  },
  {
    id: "love",
    emoji: "❤️",
    title: "Things I Love About You",
    sub: "An ever-growing list.",
    tone: "pink",
  },
  {
    id: "music",
    emoji: "♫",
    title: "Her Music",
    sub: "The voice. Unreleased. Priceless.",
    tone: "cream",
  },
  {
    id: "letter",
    emoji: "💌",
    title: "A Letter For You",
    sub: "Something I wanted you to read.",
    tone: "cream",
    span: true,
  },
  {
    id: "final",
    emoji: "🎁",
    title: "One Last Surprise",
    sub: "You have to earn this one.",
    tone: "wine",
  },
];

/* ── ERAS ─────────────────────────────────────────────────────── */

export const ERAS: {
  id: string;
  emoji: string;
  name: string;
  caption: string;
  body: string;
  photo: PhotoId;
  photos: PhotoId[];
  theme: "cute" | "bossy" | "lover" | "artist";
}[] = [
  {
    id: "cute",
    emoji: "🎀",
    name: "Cute Somu",
    caption: "Smile and everything melts.",
    body: "Smile and now you cannot say anything, everything inside of you will melt and you will be doing everything she asks.",
    photo: "PHOTO_PLACEHOLDER_02",
    photos: [
      "PHOTO_PLACEHOLDER_02",
      "PHOTO_PLACEHOLDER_10",
      "PHOTO_PLACEHOLDER_11",
      "PHOTO_PLACEHOLDER_12",
    ],
    theme: "cute",
  },
  {
    id: "confident",
    emoji: "👑",
    name: "Confident Somu",
    caption: "Inspiration in action.",
    body: "Confidence that inspires me so much that it makes me push myself harder.",
    photo: "PHOTO_PLACEHOLDER_03",
    photos: [
      "PHOTO_PLACEHOLDER_03",
      "PHOTO_PLACEHOLDER_13",
    ],
    theme: "bossy",
  },
  {
    id: "funky",
    emoji: "✨",
    name: "Funky Somu",
    caption: "Killing the style with the looks.",
    body: "Always increasing the value of what you wear, always killing the style with the looks.",
    photo: "PHOTO_PLACEHOLDER_04",
    photos: [
      "PHOTO_PLACEHOLDER_04",
      "PHOTO_PLACEHOLDER_14",
    ],
    theme: "lover",
  },
  {
    id: "lively",
    emoji: "🌸",
    name: "Lively Somu",
    caption: "Peaceful and happy vibes.",
    body: "That chulbuli part of yours that gives peaceful and happy vibes.",
    photo: "PHOTO_PLACEHOLDER_06",
    photos: [
      "PHOTO_PLACEHOLDER_06",
      "PHOTO_PLACEHOLDER_15",
    ],
    theme: "artist",
  },
];

/* ── FAKE CELEBRITY PROFILE ───────────────────────────────────── */

export const CELEB_STATS = [
  { label: "Followers", value: "999M" },
  { label: "Likes", value: "100B" },
  { label: "Trending", value: "#1" },
  { label: "Status", value: "Global Icon" },
];

export const CELEB_LINES = [
  "Most influential bossy girl of the generation.",
  "Queen of absolutely everything.",
  "",
];

export const CELEB_AWARDS: { label: string; pct: number }[] = [
  { label: "Most Powerful", pct: 100 },
  { label: "Most Beautiful", pct: 100 },
  { label: "Most Bossy", pct: 100 },
  { label: "Most Loved", pct: 100 },
  { label: "Most Dangerous Smile", pct: 100 },
  { label: "Most Likely To Be Right", pct: 100 },
];

/* ── ANALYTICS ────────────────────────────────────────────────── */

export const ANALYTICS: {
  label: string;
  value: string;
  numeric?: number;
  suffix?: string;
}[] = [
  { label: "Cuteness", value: "∞" },
  { label: "Bossiness", value: "∞" },
  { label: "Patience", value: "Depends on me" },
  { label: "Anger Level", value: "CLASSIFIED" },
  { label: "Smile Power", value: "Dangerous" },
  { label: "Boyfriend Control", value: "100%", numeric: 100, suffix: "%" },
  { label: "Times She Was Wrong", value: "0", numeric: 0 },
];

/* ── VAULT ────────────────────────────────────────────────────── */

export type VaultQuestion = {
  prompt: string;
  hint: string;
  answers: string[];
  reward: string;
  rewardNote: string;
};

export const VAULT_QUESTIONS: VaultQuestion[] = [
  {
    prompt: "And I don't know why, but with you I'd dance in a storm in my ______.",
    hint: "Fearless (Taylor's Version)",
    answers: ["best dress", "bestdress"],
    reward: "💋 100 Virtual & Real Kissies",
    rewardNote: "Redeemable anytime, anywhere. No expiration date.",
  },
  {
    prompt: "I like shiny things, but I'd marry you with ______ rings.",
    hint: "Paper Rings (Lover)",
    answers: ["paper"],
    reward: "🤗 The Big Warm Hug",
    rewardNote: "The extra-cozy kind where I squeeze tight and don't let go first.",
  },
  {
    prompt: "Can I go where you go? Can we always be this ______?",
    hint: "Lover",
    answers: ["close"],
    reward: "👑 Full Princess Treatment Day",
    rewardNote: "I handle all your errands, cook your favorite meal, and treat you like royalty.",
  },
  {
    prompt: "You are the best thing that's ever been ______.",
    hint: "Mine (Speak Now)",
    answers: ["mine"],
    reward: "💆 Deluxe Shoulder & Head Massage",
    rewardNote: "A complete stress-relief session to melt away all your tiredness.",
  },
];

/* ── HOW WELL DO YOU KNOW SOMU ────────────────────────────────── */

export type KnowQuestion = {
  q: string;
  options: string[];
  correct: number | number[];
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
    q: "Which is Somu's favourite chocolate?",
    options: ["KitKat", "Dairy Milk", "Both obviously 👑"],
    correct: 2,
    right: "Correct. Why choose when you can have both?",
    wrong: "Wrong. It's obviously both!",
  },
  {
    q: "What is her favourite hoodie?",
    options: ["Her own hoodie", "Any cozy hoodie", "My hoodie obviously 👑"],
    correct: 2,
    right: "What's yours is hers.",
    wrong: "Nope, your closet is her closet.",
  },
  {
    q: "What is Somu's favourite food?",
    options: ["Bhindi", "My cooked food", "My cooked bhindi 👑"],
    correct: 2,
    right: "Chef status achieved!",
    wrong: "Close, but it has to be cooked by you!",
  },
  {
    q: "Is Somu the prettiest?",
    options: ["Obviously 👑", "100% yes 👑", "All 3 👑"],
    correct: [0, 1, 2],
    right: "There are no wrong answers here. She's the prettiest!",
    wrong: "Impossible to get this wrong!",
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
  video: null as string | null,
  letter: "FINAL_LETTER_PLACEHOLDER — [ADD FINAL MESSAGE HERE]",
  voice: null as string | null,

  photos: [
    "PHOTO_PLACEHOLDER_08",
    "PHOTO_PLACEHOLDER_17",
  ] as PhotoId[],
};

export const FINAL_LINES = [
  "And after all the jokes,",
  "all the bossiness,",
  "all the chaos,",
  "all the Taylor Swift references…",
];
