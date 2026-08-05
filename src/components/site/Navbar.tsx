import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#testimonials", label: t.nav.testimonials },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20">
        <a href="#home" className="flex items-center gap-3">
          <span
            className={cn(
              "grid size-10 place-items-center rounded-full border font-display text-lg transition-colors",
              scrolled
                ? "border-gold/40 bg-card text-primary"
                : "border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground",
            )}
            aria-hidden
          >
            ॐ
          </span>
          <span className="leading-tight">
            <span
              className={cn(
                "block font-display text-base transition-colors md:text-lg",
                scrolled ? "text-primary" : "text-primary-foreground",
              )}
            >
              {t.brand.name}
            </span>
            <span
              className={cn(
                "block text-[10px] tracking-[0.2em] uppercase transition-colors",
                scrolled ? "text-muted-foreground" : "text-primary-foreground/70",
              )}
            >
              {t.brand.tagline}
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "text-sm transition-colors hover:text-gold",
                  scrolled ? "text-secondary" : "text-primary-foreground/85",
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitcher variant={scrolled || open ? "light" : "dark"} />
          <a
            href={`tel:${site.phone}`}
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-gold hover:text-primary lg:inline-flex"
          >
            <Phone className="size-4" /> {t.nav.call}
          </a>
          <button
            type="button"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "grid size-11 place-items-center rounded-full border transition-colors lg:hidden",
              scrolled || open
                ? "border-border bg-card text-primary"
                : "border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground",
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-[max-height] duration-500 lg:hidden",
          open ? "max-h-[32rem]" : "max-h-0 border-t-0",
        )}
      >
        <ul className="space-y-1 px-5 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3.5 text-base text-secondary transition-colors hover:bg-card hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="block rounded-xl bg-primary px-4 py-4 text-center text-base font-medium text-primary-foreground"
            >
              {t.nav.whatsapp}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
