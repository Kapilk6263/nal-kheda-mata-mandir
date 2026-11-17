import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { HavanQuickActions } from "@/components/site/HavanQuickActions";
import { HavanServices } from "@/components/site/HavanServices";
import { HavanGallery } from "@/components/site/HavanGallery";
import { HavanAbout } from "@/components/site/HavanAbout";
import { SocialMedia } from "@/components/site/SocialMedia";
import { HavanVisitors } from "@/components/site/HavanVisitors";
import { FloatingButtons } from "@/components/site/FloatingButtons";
import { LanguageProvider } from "@/lib/i18n";

const title = "Havan & Pooja Services | Nal Kheda Mata Mandir";
const description =
  "Book authentic Vedic Havan and Pooja at Siddhpeeth Maa Baglamukhi, Nalkheda. Havan in your name, visit the temple, or join online — with Pandit Yatin Sharma.";

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
          <Hero hideStats />
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
