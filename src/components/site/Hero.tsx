import { useState, useRef, useEffect } from "react";
import {
  MapPin,
  MessageCircle,
  Phone,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import heroTemple from "@/assets/temple3.png";
import panditJi from "@/assets/yatin.jpeg";
import { site } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";

// Carousel video items
const PUJA_SLIDES = [
  {
    id: 1,
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-fire-burning-in-a-ritual-or-prayer-41584-large.mp4",
  },
  {
    id: 2,
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-hands-lighting-a-fire-in-a-ceremony-43187-large.mp4",
  },
  {
    id: 3,
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-a-close-up-of-a-candle-flame-41619-large.mp4",
  },
  {
    id: 4,
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-small-candle-on-a-dark-night-42171-large.mp4",
  },
  {
    id: 5,
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-fire-burning-in-a-ritual-or-prayer-41584-large.mp4",
  },
  {
    id: 6,
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-hands-lighting-a-fire-in-a-ceremony-43187-large.mp4",
  },
];

export function Hero({ hideStats = false }: { hideStats?: boolean }) {
  const { t } = useLanguage();

  // Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [direction, setDirection] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const totalSlides = PUJA_SLIDES.length;
  const currentSlide = PUJA_SLIDES[currentIndex];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.play().catch(() => {});
    }
  }, [currentIndex, isMuted]);

  // Subtle, controlled shake animation (fires on load, then every 2s)
  const shakeAnimation = {
    animate: {
      rotate: [0, -2.5, 2.5, -2, 2, -1, 1, 0],
      x: [0, -3, 3, -3, 2, -2, 1, 0],
    },
    transition: {
      duration: 0.5,
      delay: 0.3,
      repeat: Infinity,
      repeatDelay: 3,
      ease: "easeInOut",
    },
  };

  return (
    <section id="home" className="relative isolate overflow-hidden">
      <img
        src={heroTemple}
        alt="Nal Kheda Mata Mandir temple shikhara at golden hour"
        width={1600}
        height={1200}
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgb(74 44 42 / 0.80) 0%, rgb(110 56 14 / 0.62) 45%, rgb(74 44 42 / 0.90) 100%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-5 pt-24 pb-16 md:pt-40 md:pb-24">
        <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          
          {/* Text block: 2nd on mobile, 1st on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <p className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">
              {t.brand.deity} · {t.brand.tagline.split("·")[1]?.trim()}
            </p>
            <h1 className="mt-5 font-display text-3xl leading-[1.08] text-primary-foreground sm:text-5xl md:text-6xl">
              {t.hero.titleLine1}
              <span className="block text-gold">{t.hero.titleLine2}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              {t.hero.subtitle}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {/* Call button: Gold background, black text and icon */}
              <motion.a
                href={`tel:${site.phone}`}
                {...shakeAnimation}
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-semibold text-black shadow-md transition-colors hover:bg-gold/90"
              >
                <Phone className="size-5 text-black" /> {t.hero.call}
              </motion.a>

              {/* WhatsApp button: Green background, white text and icon */}
              <motion.a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                {...shakeAnimation}
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-base font-semibold text-white shadow-md transition-colors hover:bg-[#20ba59]"
              >
                <MessageCircle className="size-5 text-white" /> {t.hero.whatsapp}
              </motion.a>

              <a
                href={site.mapLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base text-primary-foreground/75 transition-colors hover:text-gold"
              >
                <MapPin className="size-5" /> {t.hero.location}
              </a>
            </div>
          </motion.div>

          {/* Video Carousel Card: 1st on mobile, 2nd on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 relative mx-auto w-full max-w-[340px] sm:max-w-[370px] lg:order-2"
          >
            {/* Outer Golden Framed Box */}
            <div className="rounded-[28px] border-2 border-amber-400/90 bg-amber-50/15 p-2.5 sm:p-3 shadow-2xl backdrop-blur-sm">
              
              {/* Clean Video Player */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] bg-neutral-950 shadow-inner">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentSlide.id}
                    custom={direction}
                    initial={{ x: direction > 0 ? 60 : -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction > 0 ? -60 : 60, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -40) handleNext();
                      else if (info.offset.x > 40) handlePrev();
                    }}
                    className="absolute inset-0 size-full cursor-grab active:cursor-grabbing"
                  >
                    <video
                      ref={videoRef}
                      src={currentSlide.videoUrl}
                      poster={panditJi}
                      autoPlay
                      playsInline
                      loop
                      muted={isMuted}
                      className="size-full object-cover select-none pointer-events-none"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Top Right Control: Mute / Voice Toggle Only */}
                <div className="absolute top-3 right-3 z-20">
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute" : "Mute"}
                    className="flex size-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-transform hover:scale-110 active:scale-95"
                  >
                    {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
                  </button>
                </div>
              </div>

              {/* Prev / Dots / Next Controls */}
              <div className="mt-2.5 flex items-center justify-between px-1 py-0.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex items-center gap-0.5 rounded-full border border-neutral-300 bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-800 shadow-sm transition-all hover:bg-neutral-100 active:scale-95"
                >
                  <ChevronLeft className="size-3.5 stroke-[2.5]" /> Prev
                </button>

                <div className="flex items-center gap-1.5">
                  {PUJA_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setDirection(idx > currentIndex ? 1 : -1);
                        setCurrentIndex(idx);
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentIndex
                          ? "w-6 bg-amber-500"
                          : "w-2 bg-amber-300/80 hover:bg-amber-400"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-0.5 rounded-full border border-neutral-300 bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-800 shadow-sm transition-all hover:bg-neutral-100 active:scale-95"
                >
                  Next <ChevronRight className="size-3.5 stroke-[2.5]" />
                </button>
              </div>

            </div>
          </motion.div>

        </div>

        {!hideStats && (
        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-primary-foreground/15 bg-primary-foreground/15 md:mt-20 md:grid-cols-4">
          {t.stats.map((s) => (
            <div
              key={s.label}
              className="bg-primary/40 px-5 py-7 text-center backdrop-blur-sm"
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-display text-3xl text-gold md:text-4xl">
                  {s.value}
                </span>
                <span className="mt-1 block text-xs tracking-[0.14em] text-primary-foreground/75 uppercase">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
        )}
      </div>
    </section>
  );
}