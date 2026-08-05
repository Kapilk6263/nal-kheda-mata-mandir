import { useState } from "react";
import { X } from "lucide-react";
import havanImg from "@/assets/temple2.jpg";
import poojaImg from "@/assets/pooja.jpg";
import templeImg from "@/assets/temple-interior.jpg";
import devoteesImg from "@/assets/devotees.jpg";
import heroTemple from "@/assets/temple1.jpg";
import panditJi from "@/assets/pandit-ji.jpg";
import { useLanguage } from "@/lib/i18n";
import { Reveal, SectionHeading } from "./Reveal";

const gallerySources = [
  { src: heroTemple, span: "sm:col-span-2 sm:row-span-2" },
  { src: havanImg, span: "" },
  { src: poojaImg, span: "" },
  { src: templeImg, span: "" },
  { src: devoteesImg, span: "" },
  { src: panditJi, span: "sm:col-span-2" },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const { t } = useLanguage();

  const images = gallerySources.map((g, i) => ({
    ...g,
    alt: t.gallery.images[i] ?? "",
  }));

  return (
    <section id="gallery" className="bg-card/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow={t.gallery.eyebrow}
          title={t.gallery.title}
          subtitle={t.gallery.subtitle}
        />

        <div className="mt-12 grid auto-rows-[10rem] grid-cols-2 gap-3 sm:auto-rows-[12rem] sm:grid-cols-4 sm:gap-4">
          {images.map((img, i) => (
            <button
              key={img.alt}
              type="button"
              onClick={() => setOpen(i)}
              aria-label={img.alt}
              className={`group overflow-hidden rounded-2xl border border-border ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </button>
          ))}
        </div>
      </div>

      {open !== null ? (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-primary/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            aria-label={t.gallery.close}
            onClick={() => setOpen(null)}
            className="absolute top-5 right-5 grid size-11 place-items-center rounded-full border border-primary-foreground/30 text-primary-foreground"
          >
            <X className="size-5" />
          </button>
          <img
            src={images[open]?.src}
            alt={images[open]?.alt ?? ""}
            className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </section>
  );
}
