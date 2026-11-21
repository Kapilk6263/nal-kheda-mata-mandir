import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";
import logo from "@/assets/logo.png";

export function HavanHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur-md shadow-sm"
          : "border-b border-transparent bg-transparent",
      )}
      style={{
        transform: "translateZ(0)",
        WebkitTransform: "translateZ(0)",
      }}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:h-20 md:px-8">
        {/* Logo — top left */}
        <a
          href="/havan"
          aria-label="Maa Baglamukhi – Yatin Sharma"
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="Maa Baglamukhi – Yatin Sharma"
            className="h-11 w-auto max-w-[210px] object-contain drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] sm:h-13 sm:max-w-[260px] md:h-14 md:max-w-none"
            loading="eager"
          />
        </a>

        {/* Language Switcher — top right */}
        <div className="shrink-0">
          <LanguageSwitcher variant={scrolled ? "light" : "dark"} />
        </div>
      </nav>
    </header>
  );
}
