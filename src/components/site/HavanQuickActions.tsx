import { MessageCircle, Home } from "lucide-react";
import { site } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";

const WHATSAPP_HAVAN_MSG =
  "Jai Maa Baglamukhi. I am interested in Havan/Pooja services. Please share details.";

export function HavanQuickActions() {
  const { lang } = useLanguage();

  const whatsappUrl = `${site.whatsapp.split("?")[0]}?text=${encodeURIComponent(
    lang === "hi"
      ? "जय माँ बगलामुखी। मुझे हवन/पूजा सेवाओं की जानकारी चाहिए।"
      : WHATSAPP_HAVAN_MSG,
  )}`;

  return (
    <section className="bg-card/60 py-6">
      <div className="mx-auto flex max-w-md flex-col gap-3 px-5 sm:flex-row sm:max-w-lg">
        {/* WhatsApp Enquiry */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-6 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-[#20ba59] hover:scale-[1.02] active:scale-[0.98]"
        >
          <MessageCircle className="size-5" />
          {lang === "hi" ? "व्हाट्सएप पूछताछ" : "WhatsApp Enquiry"}
        </a>

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
