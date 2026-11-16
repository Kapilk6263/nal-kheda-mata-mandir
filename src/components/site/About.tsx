import { useState } from "react";
import { Check, ChevronDown, Sparkles, Flame, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import templeInterior from "@/assets/yatin.jpeg";
import { useLanguage } from "@/lib/i18n";
import { Reveal, SectionHeading } from "./Reveal";

export function About() {
  const [expanded, setExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* --- Left Column: Heritage Framed Card --- */}
        <Reveal>
          <div className="relative mx-auto w-full max-w-[420px] rounded-[30px] border-2 border-amber-400/90 bg-amber-50/15 p-2.5 sm:p-3 shadow-xl backdrop-blur-sm">
            {/* Image Container with Inner Shadow */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[22px] bg-neutral-950 sm:aspect-[4/4.5]">
              <img
                src={templeInterior}
                alt="Lamps and marigold garlands inside the temple sanctum"
                width={1200}
                height={900}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Top Tag Pill */}
              <div className="absolute left-3.5 top-3.5 z-10 flex items-center gap-1.5 rounded-full bg-amber-500 px-3 py-1 text-[10px] font-black tracking-wider text-black uppercase shadow-md">
                <Flame className="size-3 fill-black text-black" />
                <span>Siddha Peeth Parampara</span>
              </div>

              {/* Dark Vignette Bottom Gradient */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

              {/* Floating Bottom Trust Pill */}
              <div className="absolute inset-x-3 bottom-3 z-20 flex items-center justify-between rounded-xl border border-white/20 bg-black/70 px-4 py-2.5 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-emerald-400 shrink-0" />
                  <span className="text-xs font-semibold text-white/95">
                    100% Vedic Vidhi Vidhan
                  </span>
                </div>
                <span className="text-[11px] font-medium text-amber-300">
                  Nal Kheda
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* --- Right Column: Story & Philosophy --- */}
        <div>
          <SectionHeading
            align="left"
            eyebrow={t.about.eyebrow}
            title={t.about.title}
            subtitle={t.about.subtitle}
          />

          {/* Intro Paragraph */}
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>{t.about.p1}</p>

            {/* Smooth AnimatePresence Accordion */}
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="space-y-4 overflow-hidden pt-1"
                >
                  <p>{t.about.p2}</p>
                  <p>{t.about.p3}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Quick Key Highlights / Trust Pillars */}
          <div className="mt-6 grid grid-cols-1 gap-2.5 border-y border-border/70 py-4 sm:grid-cols-2">
            <div className="flex items-center gap-2 text-xs font-medium text-primary">
              <span className="grid size-5 place-items-center rounded-full bg-gold/15 text-gold">
                <Check className="size-3.5" />
              </span>
              Authentic Vedic Sankalp
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-primary">
              <span className="grid size-5 place-items-center rounded-full bg-gold/15 text-gold">
                <Check className="size-3.5" />
              </span>
              Pure Temple Havans & Samagri
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-primary sm:col-span-2">
              <span className="grid size-5 place-items-center rounded-full bg-gold/15 text-gold">
                <Check className="size-3.5" />
              </span>
              Direct Acharya & Purohit Guidance
            </div>
          </div>

          {/* Read More / Read Less Toggle */}
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card/60 px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-all hover:border-gold hover:bg-gold/10 hover:text-gold active:scale-95"
          >
            <span>{expanded ? t.about.readLess : t.about.readMore}</span>
            <ChevronDown
              className={`size-4 text-gold transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* --- Why Choose Us (Tablet/Desktop View) --- */}
      <div className="hidden md:block md:mt-28">
        <SectionHeading eyebrow={t.about.whyEyebrow} title={t.about.whyTitle} />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <article className="group h-full rounded-[24px] border-2 border-border/80 bg-[#fffdfa] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl dark:bg-card">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-2xl bg-amber-500/15 text-gold transition-colors group-hover:bg-amber-500 group-hover:text-black">
                    <Sparkles className="size-5" />
                  </span>
                  <span className="text-xs font-bold text-amber-600/70">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-xl font-bold text-primary">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}