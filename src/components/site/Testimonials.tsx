import { Star, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { Reveal, SectionHeading } from "./Reveal";

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="mx-auto max-w-6xl overflow-hidden px-5 py-20 md:py-28">
      <SectionHeading
        eyebrow={t.testimonialsSection.eyebrow}
        title={t.testimonialsSection.title}
        subtitle={t.testimonialsSection.subtitle}
      />

      <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 pt-2 md:mx-0 md:mt-12 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 md:pt-0 [&::-webkit-scrollbar]:hidden">
        {t.testimonials.map((item, i) => (
          <div key={item.name} className="w-[85vw] shrink-0 snap-center sm:w-[350px] md:w-auto md:shrink">
            <Reveal delay={(i % 2) * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft md:rounded-3xl md:p-7">
                
                {/* 1. Author Info */}
                <figcaption className="order-1 mb-3 mt-0 flex items-center gap-3 md:order-3 md:mb-0 md:mt-6">
                  <span
                    className="grid size-10 shrink-0 place-items-center rounded-full bg-background font-display text-base text-primary md:size-11 md:text-lg"
                    aria-hidden
                  >
                    {item.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-primary">
                      {item.name}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      {item.place} · {t.testimonialsSection.source}
                    </span>
                  </span>
                </figcaption>

                {/* 2. Stars */}
                <div className="order-2 flex gap-1 text-gold md:order-1" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-3.5 fill-current md:size-4" />
                  ))}
                </div>

                {/* 3. Quote Text */}
                <blockquote className="order-3 mt-2 text-sm leading-relaxed text-secondary md:order-2 md:mt-4 md:text-base">
                  “{item.text}”
                </blockquote>
                
              </figure>
            </Reveal>
          </div>
        ))}
      </div>

      {/* Swipe Indicator: Darker, bolder, and more visible */}
      <div className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-primary md:hidden animate-pulse">
        <span>Swipe for more</span>
        <ArrowRight className="size-4" />
      </div>
      
    </section>
  );
}