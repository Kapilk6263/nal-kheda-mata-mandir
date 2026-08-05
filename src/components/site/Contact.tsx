import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Contact() {
  const { t } = useLanguage();

  const quickLinks = [
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "gallery", label: t.nav.gallery },
    { id: "testimonials", label: t.nav.testimonials },
    { id: "faq", label: t.nav.faq },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <>
      <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <div className="rounded-[2rem] bg-primary px-6 py-14 text-center md:px-16 md:py-20">
            <p className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">
              {t.contact.eyebrow}
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl leading-tight text-primary-foreground sm:text-4xl md:text-5xl">
              {t.contact.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/75 md:text-base">
              {t.contact.subtitle}
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-medium text-primary transition-transform hover:scale-[1.02]"
              >
                <Phone className="size-5" /> {t.contact.call}
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/35 px-7 py-4 text-base font-medium text-primary-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <MessageCircle className="size-5" /> {t.contact.whatsapp}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/35 px-7 py-4 text-base font-medium text-primary-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <Mail className="size-5" /> {t.contact.email}
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-card p-8">
              <h3 className="text-2xl text-primary">{t.contact.visitTitle}</h3>
              <ul className="mt-6 space-y-5 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-gold" />
                  <span>{t.brand.address}</span>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-gold" />
                  <span>{t.brand.hours}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-gold" />
                  <a href={`tel:${site.phone}`} className="hover:text-primary">
                    {site.phoneDisplay}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-gold" />
                  <a
                    href={`mailto:${site.email}`}
                    className="break-all hover:text-primary"
                  >
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full overflow-hidden rounded-3xl border border-border">
              <iframe
                title={t.contact.mapTitle}
                src={site.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full lg:h-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border bg-card/60">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <span
                  className="grid size-10 place-items-center rounded-full border border-gold/40 bg-background font-display text-lg text-primary"
                  aria-hidden
                >
                  ॐ
                </span>
                <span className="font-display text-lg text-primary">
                  {t.brand.name}
                </span>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {t.contact.footerAbout}
              </p>
            </div>

            <nav aria-label={t.contact.quickLinks}>
              <h3 className="text-sm font-medium text-primary">
                {t.contact.quickLinks}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {quickLinks.map((l) => (
                  <li key={l.id}>
                    <a href={`#${l.id}`} className="hover:text-gold">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h3 className="text-sm font-medium text-primary">
                {t.contact.servicesTitle}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {t.serviceItems.slice(0, 5).map((s) => (
                  <li key={s.slug}>
                    <a href="#services" className="hover:text-gold">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="hairline my-10" />

          <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground md:flex-row">
            <p>
              © {new Date().getFullYear()} {t.brand.name}. {t.contact.rights}
            </p>
            <div className="flex gap-6">
              <a href="#contact" className="hover:text-gold">
                {t.contact.privacy}
              </a>
              <a href="#contact" className="hover:text-gold">
                {t.contact.terms}
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold"
              >
                {t.contact.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
