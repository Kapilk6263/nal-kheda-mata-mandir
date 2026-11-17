import { Home } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function HavanQuickActions() {
  const { lang } = useLanguage();

  return (
    <section className="bg-card/60 py-6">
      <div className="mx-auto flex max-w-md flex-col gap-3 px-5 sm:flex-row sm:max-w-lg">
        {/* Visit Home */}
        <a
          href="/"
          className="flex flex-1 items-center justify-center gap-2.5 rounded-2xl bg-gold px-6 py-4 text-base font-semibold text-black shadow-md transition-all hover:bg-gold/90 hover:scale-[1.02] active:scale-[0.98]"
        >
          <Home className="size-5" />
          {lang === "hi" ? "मुख्य पृष्ठ" : "Visit Our Website"}
        </a>
      </div>
    </section>
  );
}
