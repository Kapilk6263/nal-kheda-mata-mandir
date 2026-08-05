import { Star } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { Reveal, SectionHeading } from "./Reveal";

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        eyebrow={t.testimonialsSection.eyebrow}
        title={t.testimonialsSection.title}
        subtitle={t.testimonialsSection.subtitle}
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {t.testimonials.map((item, i) => (
          <Reveal key={item.name} delay={(i % 2) * 0.08}>
            <figure className="h-full rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft">
              <div className="flex gap-1 text-gold" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-secondary md:text-base">
                “{item.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className="grid size-11 place-items-center rounded-full bg-background font-display text-lg text-primary"
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
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
