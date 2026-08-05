import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { Reveal, SectionHeading } from "./Reveal";

export function Process() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        eyebrow={t.process.eyebrow}
        title={t.process.title}
        subtitle={t.process.subtitle}
      />

      {/* 
        - On Mobile (< md): flex layout with horizontal overflow, swipeable cards, and scroll snapping.
        - On Tablet/Desktop (md+): resets to your standard 2 & 3 column grid.
      */}
      <ol className="mt-10 flex gap-4 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none md:mt-14 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-3">
        {t.steps.map((s, i) => (
          <Reveal 
            key={s.n} 
            delay={i * 0.06} 
            className="min-w-[78%] shrink-0 snap-start sm:min-w-[60%] md:min-w-0 md:shrink"
          >
            <li className="relative h-full rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft md:rounded-3xl md:p-7">
              <span className="font-display text-2xl text-gold md:text-3xl">
                {s.n}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-primary md:mt-3 md:text-xl">
                {s.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground md:mt-2">
                {s.text}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>

      {/* Swipe Indicator: Darker, bolder, and visible ONLY on mobile */}
      <div className="mt-2 flex items-center justify-center gap-2 text-sm font-semibold text-primary md:hidden animate-pulse">
        <span>Swipe for more</span>
        <ArrowRight className="size-4" />
      </div>
    </section>
  );
}