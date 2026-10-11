import { useState } from "react";
import { ArrowRight, ChevronDown, MessageCircle, Phone, X } from "lucide-react";
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
  const [selectedProblemSlug, setSelectedProblemSlug] = useState<string>("");

  const active = t.serviceItems.find((s) => s.slug === activeSlug) ?? null;

  // Active item for the mobile dropdown card (defaults to the first problem)
  const activeProblem =
    t.problems.find((p) => p.slug === selectedProblemSlug) ?? t.problems[0];
  const activeProblemService =
    t.serviceItems.find((s) => s.slug === activeProblem?.slug) ?? null;

  return (
    <section id="services" className="bg-card/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow={t.services.finderEyebrow}
          title={t.services.finderTitle}
          subtitle={t.services.finderSubtitle}
        />

        {/* --- Mobile View: Single card with dropdown (< md) --- */}
        <div className="mt-8 block md:hidden">
          <Reveal>
            <div className="rounded-2xl border border-border bg-background p-5 shadow-soft">
              <label
                htmlFor="problem-select"
                className="mb-2 block text-xs font-medium text-muted-foreground"
              >
                {t.services.finderEyebrow || "Select your concern"}
              </label>

              {/* Problem Selector Dropdown */}
              <div className="relative">
                <select
                  id="problem-select"
                  value={activeProblem?.slug ?? ""}
                  onChange={(e) => setSelectedProblemSlug(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-border bg-card/60 px-4 py-3 pr-10 font-display text-base text-primary transition-colors focus:border-gold focus:outline-none"
                >
                  {t.problems.map((p) => (
                    <option
                      key={p.slug}
                      value={p.slug}
                      className="bg-background text-foreground"
                    >
                      {p.title}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-gold" />
              </div>

              {/* Dynamic content showing the recommended pooja */}
              {activeProblem && (
                <div className="mt-4 border-t border-border/80 pt-4">
                  <span className="block text-xs text-muted-foreground">
                    Recommended Pooja
                  </span>

                  <button
                    type="button"
                    onClick={() => setActiveSlug(activeProblem.slug)}
                    className="mt-2 flex w-full items-center justify-between rounded-xl border border-border/80 bg-card/30 p-4 text-left transition-all hover:border-gold hover:shadow-soft"
                  >
                    <div>
                      <span className="block font-display text-base font-medium text-primary">
                        {activeProblemService?.title ?? activeProblem.title}
                      </span>
                      <span className="mt-1 flex items-center gap-1 text-xs text-gold">
                        {t.services.knowMore || "Know More"}{" "}
                        <ArrowRight className="size-3.5" />
                      </span>
                    </div>
                    <ArrowRight className="size-4 shrink-0 text-gold" />
                  </button>
                </div>
              )}
            </div>
          </Reveal>
        </div>

        {/* --- Laptop & Desktop View: Original Grid (md+) --- */}
        <div className="mt-12 hidden md:grid md:grid-cols-4 gap-3 sm:gap-4">
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

        {/* --- Services Section --- */}
        <div className="mt-24">
          <SectionHeading
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            subtitle={t.services.subtitle}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
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

      {/* --- Modal Dialog --- */}
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