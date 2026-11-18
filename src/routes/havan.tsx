import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import type { HeroSlide } from "@/components/site/Hero";
import { HavanQuickActions } from "@/components/site/HavanQuickActions";
import { HavanServices } from "@/components/site/HavanServices";
import { HavanGallery } from "@/components/site/HavanGallery";
import { HavanAbout } from "@/components/site/HavanAbout";
import { SocialMedia } from "@/components/site/SocialMedia";
import { HavanVisitors } from "@/components/site/HavanVisitors";
import { FloatingButtons } from "@/components/site/FloatingButtons";
import { LanguageProvider } from "@/lib/i18n";
import panditJi from "@/assets/yatin.jpeg";
import yatinSharma from "@/assets/yatin_sharma.jpg";
import yatinHavan from "@/assets/yatin_havan.mp4";

const title = "Havan & Pooja Services | Nal Kheda Mata Mandir";
const description =
  "Book authentic Vedic Havan and Pooja at Siddhpeeth Maa Baglamukhi, Nalkheda. Havan in your name, visit the temple, or join online — with Pandit Yatin Sharma.";

// Havan hero slides:
//   1. yatin.jpeg  — the original pandit photo (already present)
//   2. yatin_sharma.jpg — additional pandit photo
//   3. yatin_havan.mp4  — havan video
const HAVAN_SLIDES: HeroSlide[] = [
  {
    id: 1,
    type: "image",
    url: panditJi,
    alt: "Pandit Yatin Sharma",
  },
  {
    id: 2,
    type: "image",
    url: yatinSharma,
    alt: "Pandit Yatin Sharma",
  },
  {
    id: 3,
    type: "video",
    url: yatinHavan,
  },
];

export const Route = createFileRoute("/havan")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HavanPage,
});

function HavanPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <main>
          <Hero hideStats slides={HAVAN_SLIDES} autoPlay />
          <HavanQuickActions />
          <HavanServices />
          <HavanGallery />
          <SocialMedia />
          <HavanAbout />
          <HavanVisitors />
        </main>
        <FloatingButtons />
      </div>
    </LanguageProvider>
  );
}
