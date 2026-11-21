import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";
import logo from "@/assets/logo.png";

export function HavanHeader() {
  const [scrolled, setScrolled] = useState(false);

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
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between pl-0 pr-[30px] md:h-24 md:px-5">
        {/* Logo — top left */}
        <a href="/havan" aria-label="Maa Baglamukhi – Yatin Sharma">
          <img
            src={logo}
            alt="Maa Baglamukhi – Yatin Sharma"
            className="h-[4.5rem] w-72 object-contain md:h-[5.25rem] md:w-96"
            loading="eager"
          />
        </a>

        {/* Language Switcher — top right (same variant logic as home Navbar) */}
        <LanguageSwitcher variant={scrolled ? "light" : "dark"} />
      </nav>
    </header>
  );
}
