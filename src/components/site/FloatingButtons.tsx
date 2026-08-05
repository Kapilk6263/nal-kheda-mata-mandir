import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function FloatingButtons() {
  const [show, setShow] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3">
      <button
        type="button"
        aria-label={t.floating.top}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "grid size-11 place-items-center rounded-full border border-border bg-background text-primary shadow-soft transition-all duration-300 hover:bg-card",
          show ? "opacity-100" : "pointer-events-none translate-y-2 opacity-0",
        )}
      >
        <ArrowUp className="size-5" />
      </button>
      <a
        href={`tel:${site.phone}`}
        aria-label={t.floating.call}
        className="grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift transition-colors hover:bg-gold hover:text-primary"
      >
        <Phone className="size-6" />
      </a>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label={t.floating.whatsapp}
        className="grid size-14 place-items-center rounded-full bg-gold text-primary shadow-lift transition-transform hover:scale-105"
      >
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}
