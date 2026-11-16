import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Clock,
  MessageCircle,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
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

        {/* --- Mobile View: Redesigned Problem Card matching the reference design (< md) --- */}
        <div className="mt-8 block md:hidden">
          <Reveal>
            <div className="relative overflow-hidden rounded-[28px] border-2 border-amber-300/80 bg-gradient-to-b from-[#fffefc] via-[#fffcf6] to-[#fff8ee] p-5 shadow-lg shadow-amber-950/5">
              
              {/* Concern Selector Label */}
              <label
                htmlFor="problem-select"
                className="mb-2 block text-xs font-bold uppercase tracking-wider text-amber-900/75"
              >
                {t.services.finderEyebrow || "Find the Right Pooja"}
              </label>

              {/* Styled Dropdown Container */}
              <div className="relative">
                <select
                  id="problem-select"
                  value={activeProblem?.slug ?? ""}
                  onChange={(e) => setSelectedProblemSlug(e.target.value)}
                  className="w-full appearance-none rounded-2xl border border-amber-300 bg-[#fffdf7] px-4 py-3.5 pr-11 font-serif text-base font-semibold text-amber-950 shadow-sm transition-all focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400/20"
                >
                  {t.problems.map((p) => (
                    <option
                      key={p.slug}
                      value={p.slug}
                      className="bg-white font-sans text-neutral-900"
                    >
                      {p.title}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-amber-600" />
              </div>

              {/* Faint Decorative Divider */}
              <div className="my-4 border-t border-amber-200/70" />

              {/* Recommended Pooja Box */}
              {activeProblem && (
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-amber-900/75">
                    Recommended Pooja
                  </span>

                  <button
                    type="button"
                    onClick={() => setActiveSlug(activeProblem.slug)}
                    className="group mt-2.5 flex w-full items-center justify-between rounded-2xl border-2 border-amber-300 bg-gradient-to-r from-[#fff9ee] via-[#fffdf8] to-[#fff7e6] p-4 text-left shadow-sm transition-all duration-300 hover:border-amber-500 hover:shadow-md active:scale-[0.99]"
                  >
                    <div>
                      <span className="block font-serif text-lg font-bold text-amber-950 transition-colors group-hover:text-amber-800">
                        {activeProblemService?.title ?? activeProblem.title}
                      </span>
                      <span className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-amber-700">
                        {t.services.knowMore || "Know More"}
                        <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>

                    <div className="grid size-9 shrink-0 place-items-center rounded-full bg-amber-500/15 text-amber-800 transition-colors group-hover:bg-amber-500 group-hover:text-black">
                      <ArrowRight className="size-4" />
                    </div>
                  </button>
                </div>
              )}
            </div>
          </Reveal>
        </div>

        {/* --- Laptop & Desktop View: Styled Problem Grid (md+) --- */}
        <div className="mt-12 hidden md:grid md:grid-cols-4 gap-3 sm:gap-4">
          {t.problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.04}>
              <button
                type="button"
                onClick={() => setActiveSlug(p.slug)}
                className="group flex h-full w-full flex-col justify-between rounded-2xl border-2 border-amber-200/80 bg-gradient-to-b from-[#fffdfa] to-[#fff9f0] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-md active:scale-[0.99]"
              >
                <div>
                  <div className="flex items-center justify-between text-amber-600/70">
                    <Sparkles className="size-3.5" />
                    <span className="text-[10px] font-bold tracking-widest uppercase">
                      Vedic Vidhi
                    </span>
                  </div>
                  <span className="mt-2 block font-serif text-base font-bold text-amber-950 transition-colors group-hover:text-amber-800 md:text-lg">
                    {p.title}
                  </span>
                </div>
                <span className="mt-4 flex items-center gap-1 text-xs font-semibold text-amber-700">
                  {t.serviceItems.find((s) => s.slug === p.slug)?.title || "Know More"}{" "}
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        {/* --- Services Cards Grid --- */}
        <div className="mt-24">
          <SectionHeading
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            subtitle={t.services.subtitle}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {t.serviceItems.slice(0, 4).map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 0.08}>
                <article className="group flex h-full flex-col rounded-[26px] border-2 border-amber-300/80 bg-[#fffdfa] p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl sm:p-3">
                  {/* Image with Tag Pill & Gradient Title Overlay */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[20px] bg-neutral-900">
                    <img
                      src={imageMap[s.slug]}
                      alt={`${s.title} ritual`}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Top Tag Badge */}
                    <div className="absolute left-3.5 top-3.5 z-10">
                      <span className="rounded-full bg-amber-500 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-black shadow-sm">
                        {(s as any).tag || "VEDIC PUJA"}
                      </span>
                    </div>

                    {/* Title Overlay with Dark Gradient */}
                    <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-12">
                      <h3 className="font-serif text-lg font-bold uppercase tracking-wide text-white drop-shadow-md sm:text-xl">
                        {s.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content & Action Buttons */}
                  <div className="flex flex-1 flex-col justify-between p-4 pt-3.5">
                    <div>
                      <p className="line-clamp-3 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                        {s.desc}
                      </p>

                      {/* Duration Badge */}
                      <div className="mt-3.5">
                        <span className="inline-flex items-center gap-1.5 rounded-lg border border-amber-200 bg-[#fff9ee] px-2.5 py-1 text-xs font-semibold text-amber-900">
                          <Clock className="size-3.5 text-amber-700" />
                          {(s as any).duration || "2-3 Hours"}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons Row */}
                    <div className="mt-4 space-y-2.5">
                      <div className="grid grid-cols-2 gap-2.5">
                        {/* Call Button */}
                        <a
                          href={`tel:${site.phone}`}
                          className="flex items-center justify-center gap-1.5 rounded-xl bg-amber-500 py-2.5 px-3 text-center text-xs font-bold text-black shadow-sm transition-colors hover:bg-amber-600 sm:text-sm"
                        >
                          <Phone className="size-3.5 text-black sm:size-4" />
                          {t.services.call || "Call Now"}
                        </a>

                        {/* WhatsApp Button */}
                        <a
                          href={`${site.whatsapp.split("?")[0]}?text=${encodeURIComponent(
                            t.services.enquiryText(s.title),
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] py-2.5 px-3 text-center text-xs font-bold text-white shadow-sm transition-colors hover:bg-[#20ba59] sm:text-sm"
                        >
                          <MessageCircle className="size-3.5 text-white sm:size-4" />
                          WhatsApp
                        </a>
                      </div>

                      {/* Read Complete Vidhi */}
                      <button
                        type="button"
                        onClick={() => setActiveSlug(s.slug)}
                        className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-amber-300 bg-[#fff9ee] py-2.5 text-xs font-bold text-amber-900 transition-colors hover:bg-[#faedd1] sm:text-sm"
                      >
                        {t.services.knowMore || "Read Complete Vidhi"}{" "}
                        <ChevronRight className="size-4 text-amber-900" />
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* --- Modal Dialog (Popup) --- */}
      {active ? (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-primary/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActiveSlug(null)}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-t-3xl bg-background shadow-2xl sm:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] w-full bg-neutral-900">
              <img
                src={imageMap[active.slug]}
                alt={active.title}
                width={1200}
                height={900}
                loading="lazy"
                className="size-full object-cover"
              />
              <button
                type="button"
                aria-label={t.services.close}
                onClick={() => setActiveSlug(null)}
                className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-black/60 text-white backdrop-blur-md transition-transform hover:scale-110 active:scale-95"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="p-6 sm:p-7">
              <h3 className="font-serif text-2xl font-bold text-primary">
                {active.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {active.detail}
              </p>

              {/* Popup Action Buttons */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`${site.whatsapp.split("?")[0]}?text=${encodeURIComponent(
                    t.services.enquiryText(active.title),
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#20ba59]"
                >
                  <MessageCircle className="size-4 text-white" /> {t.services.enquire || "WhatsApp"}
                </a>

                <a
                  href={`tel:${site.phone}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-semibold text-black shadow-md transition-colors hover:bg-gold/90"
                >
                  <Phone className="size-4 text-black" /> {t.services.call || "Call Now"}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}