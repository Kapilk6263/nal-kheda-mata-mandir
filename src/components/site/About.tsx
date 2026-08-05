import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import templeInterior from "@/assets/pandit1.png";
import { useLanguage } from "@/lib/i18n";
import { Reveal, SectionHeading } from "./Reveal";

export function About() {
  const [expanded, setExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-border">
            <img
              src={templeInterior}
              alt="Lamps and marigold garlands inside the temple sanctum"
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow={t.about.eyebrow}
            title={t.about.title}
            subtitle={t.about.subtitle}
          />

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>{t.about.p1}</p>
            {expanded ? (
              <>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
              </>
            ) : null}
          </div>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-primary transition-colors hover:border-gold hover:text-gold"
          >
            {expanded ? t.about.readLess : t.about.readMore}
            <ChevronDown
              className={`size-4 transition-transform ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>

      <div className="mt-20 md:mt-28">
        <SectionHeading eyebrow={t.about.whyEyebrow} title={t.about.whyTitle} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <article className="h-full rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <span className="grid size-10 place-items-center rounded-full bg-background text-gold">
                  <Check className="size-5" />
                </span>
                <h3 className="mt-5 text-xl text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
