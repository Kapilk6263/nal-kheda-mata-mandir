import { useRef, useEffect, useCallback, useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const isPaused = useRef(false);

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement | undefined;
    if (!card) return;
    container.scrollTo({ left: card.offsetLeft - container.offsetLeft, behavior: "smooth" });
  }, []);

  const scroll = (dir: "left" | "right") => {
    const next =
      dir === "right"
        ? (activeIndex + 1) % galleryItems.length
        : (activeIndex - 1 + galleryItems.length) % galleryItems.length;
    setActiveIndex(next);
    scrollToIndex(next);
  };

  // Auto-advance every 2 s; pause on hover / touch
  useEffect(() => {
    const tick = setInterval(() => {
      if (isPaused.current) return;
      setActiveIndex((prev) => {
        const next = (prev + 1) % galleryItems.length;
        scrollToIndex(next);
        return next;
      });
    }, 2000);
    return () => clearInterval(tick);
  }, [scrollToIndex]);

  // Sync activeIndex when user manually scrolls
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const onScroll = () => {
      const cards = Array.from(container.children) as HTMLElement[];
      const center = container.scrollLeft + container.clientWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      cards.forEach((card, i) => {
        const dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      setActiveIndex(closest);
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

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
            onMouseEnter={() => { isPaused.current = true; }}
            onMouseLeave={() => { isPaused.current = false; }}
            onTouchStart={() => { isPaused.current = true; }}
            onTouchEnd={() => { isPaused.current = false; }}
          >
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="w-[calc(100vw-2.5rem)] max-w-full flex-shrink-0 snap-start overflow-hidden rounded-2xl border border-border sm:w-[45vw] sm:max-w-[320px]"
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

          {/* Dot indicators */}
          <div className="mt-4 flex justify-center gap-1.5" role="tablist" aria-label="Gallery position">
            {galleryItems.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => { setActiveIndex(i); scrollToIndex(i); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-5 bg-primary"
                    : "w-1.5 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
