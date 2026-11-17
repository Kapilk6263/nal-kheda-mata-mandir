import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function HavanAbout() {
  const { lang } = useLanguage();

  const content =
    lang === "hi"
      ? {
          eyebrow: "हवन एवं पूजा के विषय में",
          title: "शास्त्रोक्त विधि, सच्चा मार्गदर्शन",
          p1: "हवन एक वैदिक अग्नि अनुष्ठान है जिसमें पवित्र मंत्रों के उच्चारण के साथ अग्नि में आहुतियाँ दी जाती हैं। प्रत्येक हवन श्रद्धालु के नाम एवं गोत्र से संकल्प लेकर आरंभ होता है।",
          p2: "नलखेड़ा सिद्धपीठ पर पंडित यतिन शर्मा सभी अनुष्ठान शास्त्रोक्त विधि से, उचित सामग्री एवं शुभ मुहूर्त में संपन्न कराते हैं। अनुष्ठान के पश्चात प्रसाद, रक्षा सूत्र एवं संकल्प पत्र डाक द्वारा आपके घर भेजा जाता है।",
          p3: "आप मंदिर में उपस्थित होकर या वीडियो कॉल के माध्यम से कहीं से भी सम्मिलित हो सकते हैं। पहले अपनी स्थिति बताएँ — आपको केवल वही अनुष्ठान बताया जाता है जो वास्तव में उपयुक्त है।",
          cta: "पंडित जी से बात करें",
        }
      : {
          eyebrow: "About Havan & Pooja",
          title: "Authentic rituals, honest guidance",
          p1: "Havan is a Vedic fire ritual where offerings are made into a consecrated fire while chanting sacred mantras. Every Havan begins with a sankalp — a formal intention taken in the devotee's name and gotra.",
          p2: "At the Nalkheda Siddhpeeth, Pandit Yatin Sharma performs all rituals as prescribed in the scriptures, using the correct samagri and muhurat. After the ceremony, prasad, raksha sutra and sankalp patra are sent to the devotee's home by speed post.",
          p3: "You can participate by visiting the temple in person or joining live over a video call from anywhere. Share your situation first — you are advised only the ritual that genuinely fits.",
          cta: "Talk to Pandit Ji",
        };

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal className="text-center">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="mt-3 text-2xl leading-tight text-primary sm:text-3xl md:text-4xl">
            {content.title}
          </h2>
        </Reveal>

        <Reveal>
          <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>{content.p1}</p>
            <p>{content.p2}</p>
            <p>{content.p3}</p>
          </div>
        </Reveal>

        <Reveal className="mt-8 text-center">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-[#20ba59] hover:scale-[1.02]"
          >
            <MessageCircle className="size-5" />
            {content.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
