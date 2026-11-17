import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import havanVideo from "@/assets/havan-video.mp4";
import havanImg from "@/assets/havan.jpg";
import templeImg from "@/assets/temple1.jpg";
import temple2Img from "@/assets/temple2.jpg";
import templeInteriorImg from "@/assets/temple-interior.jpg";
import poojaImg from "@/assets/pooja.jpg";
import devoteesImg from "@/assets/devotees.jpg";
import panditImg from "@/assets/pandit-ji.jpg";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";

const galleryItems = [
  { src: havanVideo, type: "video" as const, alt: "Havan ceremony at the temple" },
  { src: havanImg, type: "image" as const, alt: "Havan fire ritual" },
  { src: templeImg, type: "image" as const, alt: "Siddhpeeth temple exterior" },
  { src: temple2Img, type: "image" as const, alt: "Temple view" },
  { src: templeInteriorImg, type: "image" as const, alt: "Temple interior" },
  { src: poojaImg, type: "image" as const, alt: "Pooja ceremony" },
  { src: devoteesImg, type: "image" as const, alt: "Devotees at the temple" },
  { src: panditImg, type: "image" as const, alt: "Pandit Ji" },
];

export function HavanGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.7;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-card/60 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">
            {lang === "hi" ? "हवन एवं पूजा गैलरी" : "Havan & Pooja Gallery"}
          </p>
          <h2 className="mt-3 text-2xl leading-tight text-primary sm:text-3xl md:text-4xl">
            {lang === "hi"
              ? "मंदिर एवं अनुष्ठानों की झलकियाँ"
              : "Glimpses of ceremonies & the temple"}
          </h2>
        </Reveal>

        {/* Horizontal scroll strip */}
        <div className="relative mt-8">
          {/* Scroll buttons - desktop */}
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scroll("left")}
            className="absolute -left-3 top-1/2 z-10 hidden -translate-y-1/2 place-items-center rounded-full border border-border bg-background/90 p-2 text-primary shadow-soft backdrop-blur-sm transition-colors hover:bg-card md:grid"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scroll("right")}
            className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 place-items-center rounded-full border border-border bg-background/90 p-2 text-primary shadow-soft backdrop-blur-sm transition-colors hover:bg-card md:grid"
          >
            <ChevronRight className="size-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-3 scrollbar-none"
          >
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="w-[70vw] max-w-[280px] flex-shrink-0 snap-start overflow-hidden rounded-2xl border border-border sm:w-[45vw] sm:max-w-[320px]"
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="aspect-[4/5] w-full object-cover"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
