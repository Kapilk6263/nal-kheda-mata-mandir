import { useState } from "react";
import { ArrowRight, MessageCircle, Phone, X } from "lucide-react";
import havanImg from "@/assets/havan1.jpeg";
import poojaImg from "@/assets/havan3.png";
import templeImg from "@/assets/img2.png";
import devoteesImg from "@/assets/img1.png";
import { site } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";
import { Reveal, SectionHeading } from "./Reveal";

const imageMap: Record<string, string> = {
  "baglamukhi-havan": havanImg,
  "mahamrityunjaya-jaap": poojaImg,
  "navgraha-shanti": templeImg,
  rudrabhishek: devoteesImg,
  "grah-pravesh": poojaImg,
  "satyanarayan-katha": templeImg,
  "pitra-dosh-nivaran": havanImg,
  "durga-saptashati": devoteesImg,
};

export function Services() {
  const { t } = useLanguage();
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const active = t.serviceItems.find((s) => s.slug === activeSlug) ?? null;

  return (
    <section id="services" className="bg-card/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow={t.services.finderEyebrow}
          title={t.services.finderTitle}
          subtitle={t.services.finderSubtitle}
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {t.problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.04}>
              <button
                type="button"
                onClick={() => setActiveSlug(p.slug)}
                className="h-full w-full rounded-2xl border border-border bg-background p-5 text-left transition-all duration-400 hover:-translate-y-1 hover:border-gold hover:shadow-soft"
              >
                <span className="block font-display text-base text-primary md:text-lg">
                  {p.title}
                </span>
                <span className="mt-2 flex items-center gap-1 text-xs text-gold">
                  {t.serviceItems.find((s) => s.slug === p.slug)?.title}{" "}
                  <ArrowRight className="size-3.5" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeading
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            subtitle={t.services.subtitle}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Added .slice(0, 4) to temporarily restrict to 4 cards */}
            {t.serviceItems.slice(0, 4).map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 0.08}>
                <article className="group h-full overflow-hidden rounded-3xl border border-border bg-background transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                  <div className="overflow-hidden">
                    <img
                      src={imageMap[s.slug]}
                      alt={`${s.title} ritual at Nal Kheda Mata Mandir`}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="text-2xl text-primary">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                    <button
                      type="button"
                      onClick={() => setActiveSlug(s.slug)}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-gold"
                    >
                      {t.services.knowMore} <ArrowRight className="size-4" />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-primary/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActiveSlug(null)}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-t-3xl bg-background sm:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imageMap[active.slug]}
              alt={active.title}
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
            <div className="p-7">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl text-primary">{active.title}</h3>
                <button
                  type="button"
                  aria-label={t.services.close}
                  onClick={() => setActiveSlug(null)}
                  className="grid size-9 shrink-0 place-items-center rounded-full border border-border text-primary"
                >
                  <X className="size-4" />
                </button>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {active.detail}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`${site.whatsapp.split("?")[0]}?text=${encodeURIComponent(
                    t.services.enquiryText(active.title),
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-gold hover:text-primary"
                >
                  <MessageCircle className="size-4" /> {t.services.enquire}
                </a>
                <a
                  href={`tel:${site.phone}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border px-6 py-4 text-sm font-medium text-primary transition-colors hover:border-gold"
                >
                  <Phone className="size-4" /> {t.services.call}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}