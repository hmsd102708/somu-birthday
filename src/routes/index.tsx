import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { HER, type SectionId } from "@/content/somu";
import { AudioBar, type Ambient } from "@/components/somu/AudioBar";
import { Analytics } from "@/components/somu/Analytics";
import { BirthdayReveal } from "@/components/somu/BirthdayReveal";
import { Bossy } from "@/components/somu/Bossy";
import { Eras } from "@/components/somu/Eras";
import { Final } from "@/components/somu/Final";
import { GiftWrapper } from "@/components/somu/GiftWrapper";
import { KnowQuiz } from "@/components/somu/KnowQuiz";
import { Letter } from "@/components/somu/Letter";
import { LoveList } from "@/components/somu/LoveList";
import { ArtistSomu, CuteSomu } from "@/components/somu/MoodSection";
import { Music } from "@/components/somu/Music";
import { Vault } from "@/components/somu/Vault";
import { World } from "@/components/somu/World";

const TITLE = `Happy 24th Birthday, ${HER.name} — a little world made for you`;
const DESC = `A hand-made birthday microsite for ${HER.name}: her eras, her analytics, a Swiftie vault, and one last surprise.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Stage = "wrapped" | "reveal" | "world" | SectionId;

function Index() {
  const [stage, setStage] = useState<Stage>("wrapped");
  const back = () => setStage("world");

  const ambient: Ambient =
    stage === "bossy" || stage === "artist" ? "bossy" : stage === "music" ? "midnight" : "main";

  return (
    <main className="min-h-dvh">
      {stage === "wrapped" && <GiftWrapper onOpen={() => setStage("reveal")} />}
      {stage === "reveal" && <BirthdayReveal onEnter={() => setStage("world")} />}
      {stage === "world" && <World onOpen={(id) => setStage(id)} />}

      {stage === "bossy" && <Bossy onBack={back} />}
      {stage === "artist" && <ArtistSomu onBack={back} />}
      {stage === "cute" && <CuteSomu onBack={back} />}
      {stage === "eras" && <Eras onBack={back} />}
      {stage === "know" && <KnowQuiz onBack={back} />}
      {stage === "vault" && <Vault onBack={back} />}
      {stage === "analytics" && <Analytics onBack={back} />}
      {stage === "love" && <LoveList onBack={back} />}
      {stage === "music" && <Music onBack={back} />}
      {stage === "letter" && <Letter onBack={back} />}
      {stage === "final" && <Final onBack={back} />}

      {stage !== "wrapped" && <AudioBar ambient={ambient} />}
    </main>
  );
}
