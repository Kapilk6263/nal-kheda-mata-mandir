import { MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import heroTemple from "@/assets/hero-temple.jpg";
import panditJi from "@/assets/Manish.jpeg";
import { site } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { t } = useLanguage();

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
            "linear-gradient(180deg, oklch(0.354 0.039 33.5 / 0.82) 0%, oklch(0.354 0.039 33.5 / 0.66) 45%, oklch(0.354 0.039 33.5 / 0.92) 100%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-5 pt-28 pb-16 md:pt-40 md:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">
              {t.brand.deity} · {t.brand.tagline.split("·")[1]?.trim()}
            </p>
            <h1 className="mt-5 font-display text-4xl leading-[1.08] text-primary-foreground sm:text-5xl md:text-6xl">
              {t.hero.titleLine1}
              <span className="block text-gold">{t.hero.titleLine2}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              {t.hero.subtitle}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-medium text-primary transition-transform hover:scale-[1.02]"
              >
                <Phone className="size-5" /> {t.hero.call}
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/35 px-7 py-4 text-base font-medium text-primary-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <MessageCircle className="size-5" /> {t.hero.whatsapp}
              </a>
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

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="overflow-hidden rounded-[2rem] border border-gold/30 shadow-lift">
              <img
                src={panditJi}
                alt={`${site.pandit}, Priest at Nal Kheda Mata Mandir`}
                width={912}
                height={1104}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="mx-4 -mt-8 rounded-2xl border border-gold/25 bg-background/95 px-5 py-4 text-center shadow-soft backdrop-blur">
              <p className="font-display text-lg text-primary">{t.brand.pandit}</p>
              <p className="mt-0.5 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                {t.hero.priestRole}
              </p>
            </div>
          </motion.div>
        </div>

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
      </div>
    </section>
  );
}
