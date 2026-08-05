import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/lib/i18n";
import { SectionHeading } from "./Reveal";

export function Faq() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="bg-card/60 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading
          eyebrow={t.faqSection.eyebrow}
          title={t.faqSection.title}
        />

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {t.faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-background px-6 last:border-b"
            >
              <AccordionTrigger className="py-5 text-left font-display text-base text-primary hover:no-underline md:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
