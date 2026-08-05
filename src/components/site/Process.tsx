import { useLanguage } from "@/lib/i18n";
import { Reveal, SectionHeading } from "./Reveal";

export function Process() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        eyebrow={t.process.eyebrow}
        title={t.process.title}
        subtitle={t.process.subtitle}
      />

      <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {t.steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.06}>
            <li className="relative h-full rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft">
              <span className="font-display text-3xl text-gold">{s.n}</span>
              <h3 className="mt-3 text-xl text-primary">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
