import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { FloatingButtons } from "@/components/site/FloatingButtons";
import { LanguageProvider } from "@/lib/i18n";

const title = "Nal Kheda Mata Mandir | Vedic Pooja & Havan with Pandit Ji";
const description =
  "Authentic Vedic Pooja and Havan at Siddhpeeth Maa Baglamukhi, Nalkheda. Baglamukhi Havan, Mahamrityunjaya Jaap, Navgraha Shanti — in person or live on video call.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Process />
          <Gallery />
          <Testimonials />
          <Faq />
          <Contact />
        </main>
        <FloatingButtons />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HinduTemple",
            name: "Nal Kheda Mata Mandir",
            description,
            telephone: "+91 90399 72032",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Siddhpeeth Maa Baglamukhi Temple, Nalkheda",
              addressRegion: "Madhya Pradesh",
              postalCode: "465445",
              addressCountry: "IN",
            },
          }),
        }}
        />
      </div>
    </LanguageProvider>
  );
}
