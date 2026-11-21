import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { site } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";

/* ─── Orbiting dot ─────────────────────────────────────────── */
function OrbitDot({
  angle,
  radius,
  size = 4,
  delay = 0,
}: {
  angle: number;
  radius: number;
  size?: number;
  delay?: number;
}) {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;
  return (
    <motion.div
      className="absolute rounded-full bg-red-500"
      style={{
        width: size,
        height: size,
        left: "50%",
        top: "50%",
        marginLeft: x - size / 2,
        marginTop: y - size / 2,
      }}
      animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.4, 0.8] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

/* ─── SVG petal ring ───────────────────────────────────────── */
function PetalRing({ r, petals = 8 }: { r: number; petals?: number }) {
  return (
    <>
      {Array.from({ length: petals }).map((_, i) => {
        const angle = (360 / petals) * i;
        const rad = (angle * Math.PI) / 180;
        const cx = 100 + Math.cos(rad) * r;
        const cy = 100 + Math.sin(rad) * r;
        return (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx={r * 0.18}
            ry={r * 0.09}
            transform={`rotate(${angle} ${cx} ${cy})`}
            fill="none"
            stroke="#dc2626"
            strokeWidth="0.8"
            opacity="0.7"
          />
        );
      })}
    </>
  );
}

/* ─── Main Om Animation ────────────────────────────────────── */
function OmAnimation() {
  const orbits8 = Array.from({ length: 8 }, (_, i) => i * 45);
  const orbits12 = Array.from({ length: 12 }, (_, i) => i * 30);

  return (
    <div className="relative mx-auto flex items-center justify-center" style={{ width: 320, height: 320 }}>

      {/* SVG mandala rings */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {/* Outer dashed arc */}
        <circle cx="100" cy="100" r="92" fill="none" stroke="#dc2626" strokeWidth="1" strokeDasharray="4 6" opacity="0.5" />
        {/* Petal ring outer */}
        <PetalRing r={78} petals={12} />
        {/* Mid solid ring */}
        <circle cx="100" cy="100" r="62" fill="none" stroke="#dc2626" strokeWidth="0.8" opacity="0.4" />
      </motion.svg>

      {/* Counter-rotating inner mandala */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        {/* Inner petal ring */}
        <PetalRing r={52} petals={8} />
        {/* Inner dashed ring */}
        <circle cx="100" cy="100" r="44" fill="none" stroke="#dc2626" strokeWidth="1" strokeDasharray="2 5" opacity="0.5" />
      </motion.svg>

      {/* Outer orbit dots — 8 points */}
      <div className="absolute inset-0">
        {orbits8.map((angle, i) => (
          <OrbitDot key={i} angle={angle} radius={68} size={5} delay={i * 0.25} />
        ))}
      </div>

      {/* Inner orbit dots — 12 points */}
      <div className="absolute inset-0">
        {orbits12.map((angle, i) => (
          <OrbitDot key={i} angle={angle} radius={48} size={3} delay={i * 0.17} />
        ))}
      </div>

      {/* Pulsing glow rings */}
      <motion.div
        className="absolute rounded-full"
        style={{ width: 100, height: 100, left: "50%", top: "50%", marginLeft: -50, marginTop: -50 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="size-full rounded-full bg-red-600" />
      </motion.div>

      <motion.div
        className="absolute rounded-full"
        style={{ width: 72, height: 72, left: "50%", top: "50%", marginLeft: -36, marginTop: -36 }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        <div className="size-full rounded-full bg-red-600" />
      </motion.div>

      {/* Solid center circle */}
      <div
        className="absolute rounded-full border border-gold/60 bg-background shadow-inner"
        style={{ width: 56, height: 56, left: "50%", top: "50%", marginLeft: -28, marginTop: -28 }}
      />

      {/* ॐ symbol — center, slightly pulsing */}
      <motion.span
        className="relative z-10 select-none font-display text-4xl leading-none text-gold drop-shadow-[0_0_8px_rgba(201,151,43,0.8)]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        ॐ
      </motion.span>
    </div>
  );
}

/* ─── Section ──────────────────────────────────────────────── */
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

        {/* Heading */}
        <Reveal className="text-center">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="mt-3 text-2xl leading-tight text-primary sm:text-3xl md:text-4xl">
            {content.title}
          </h2>
        </Reveal>

        {/* Om Animation divider */}
        <div className="mt-8 flex items-center justify-center">
          <OmAnimation />
        </div>

        {/* Body paragraphs */}
        <Reveal>
          <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>{content.p1}</p>
            <p>{content.p2}</p>
            <p>{content.p3}</p>
          </div>
        </Reveal>

        {/* CTA */}
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
