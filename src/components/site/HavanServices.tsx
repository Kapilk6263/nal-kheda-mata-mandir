import { MessageCircle } from "lucide-react";
import havanImg from "@/assets/havan1.jpeg";
import templeImg from "@/assets/temple1.jpg";
import panditImg from "@/assets/pandit1.png";
import { site } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";

const cards = {
  en: [
    {
      title: "Havan in Your Name",
      desc: "A personalised Havan performed with sankalp in your name and gotra — you can join live via video call from anywhere.",
      image: havanImg,
      cta: "Jai Maa Baglamukhi. I want to book a Havan in my name.",
    },
    {
      title: "Visit the Temple & Participate",
      desc: "Come to the Siddhpeeth at Nalkheda with your family and sit through the Havan yourself in the temple courtyard.",
      image: templeImg,
      cta: "Jai Maa Baglamukhi. I want to visit the temple for a Havan. Please share details.",
    },
    {
      title: "Online Havan Booking",
      desc: "Book a Havan from home. Pandit Ji performs the ritual at the temple — you join live on video call. Prasad is sent by post.",
      image: panditImg,
      cta: "Jai Maa Baglamukhi. I want to book an online Havan. Please guide me.",
    },
  ],
  hi: [
    {
      title: "आपके नाम से हवन",
      desc: "आपके नाम एवं गोत्र से संकल्प लेकर हवन — वीडियो कॉल पर कहीं से भी लाइव जुड़ सकते हैं।",
      image: havanImg,
      cta: "जय माँ बगलामुखी। मैं अपने नाम से हवन बुक करना चाहता/चाहती हूँ।",
    },
    {
      title: "मंदिर में आकर भाग लें",
      desc: "परिवार सहित नलखेड़ा सिद्धपीठ पधारें और मंदिर प्रांगण में स्वयं हवन में सम्मिलित हों।",
      image: templeImg,
      cta: "जय माँ बगलामुखी। मैं मंदिर आकर हवन में भाग लेना चाहता/चाहती हूँ। कृपया जानकारी दें।",
    },
    {
      title: "ऑनलाइन हवन बुकिंग",
      desc: "घर बैठे हवन बुक करें। पंडित जी मंदिर में अनुष्ठान करते हैं — आप वीडियो कॉल से जुड़ें। प्रसाद डाक से भेजा जाता है।",
      image: panditImg,
      cta: "जय माँ बगलामुखी। मैं ऑनलाइन हवन बुक करना चाहता/चाहती हूँ। कृपया मार्गदर्शन करें।",
    },
  ],
};

export function HavanServices() {
  const { lang } = useLanguage();
  const items = cards[lang] ?? cards.en;

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
            {lang === "hi" ? "हवन एवं पूजा सेवाएँ" : "Havan & Pooja Services"}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {lang === "hi"
              ? "अपनी आवश्यकता अनुसार सेवा चुनें"
              : "Choose how you'd like to participate"}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-amber-200/80 bg-[#fffdfa] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg">
                {/* Image */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-neutral-900">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-10">
                    <h3 className="font-display text-lg font-bold text-white drop-shadow-md">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col justify-between p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {card.desc}
                  </p>

                  <a
                    href={`${site.whatsapp.split("?")[0]}?text=${encodeURIComponent(card.cta)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#20ba59]"
                  >
                    <MessageCircle className="size-4" />
                    {lang === "hi" ? "व्हाट्सएप पर बुक करें" : "Book on WhatsApp"}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
