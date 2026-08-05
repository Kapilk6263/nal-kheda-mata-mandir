import { useState } from "react";
import { X } from "lucide-react";
import templeVideo from "@/assets/havan-video.mp4"; 
import havanImg from "@/assets/img6.png";
import poojaImg from "@/assets/img3.jpeg";
import templeImg from "@/assets/img4.jpeg";
import devoteesImg from "@/assets/img5.jpeg";
import panditJi from "@/assets/temple2.jpg";
import { useLanguage } from "@/lib/i18n";
import { Reveal, SectionHeading } from "./Reveal";

const gallerySources = [
  { src: templeVideo, span: "sm:col-span-2 sm:row-span-2", type: "video" },
  { src: havanImg, span: "", type: "image" },
  { src: poojaImg, span: "", type: "image" },
  { src: templeImg, span: "", type: "image" },
  { src: devoteesImg, span: "", type: "image" },
  { src: panditJi, span: "sm:col-span-2", type: "image" },
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
          {images.map((media, i) => {
            const wrapperClasses = `group overflow-hidden rounded-2xl border border-border ${media.span}`;

            if (media.type === "video") {
              return (
                <div key={media.alt || i} className={wrapperClasses}>
                  <video
                    src={media.src}
                    controls
                    autoPlay     
                    muted        
                    loop         
                    playsInline
                    className="size-full object-cover"
                  />
                </div>
              );
            }

            return (
              <button
                key={media.alt || i}
                type="button"
                onClick={() => setOpen(i)}
                aria-label={media.alt}
                className={wrapperClasses}
              >
                <img
                  src={media.src}
                  alt={media.alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </button>
            );
          })}
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