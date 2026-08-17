import type { Metadata } from "next";
import { getDictionary, isLocale } from "@/lib/i18n";
import { serviceSlugs } from "@/content/types";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { CallButton } from "@/components/cta-buttons";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(isLocale(lang) ? lang : "en");
  return {
    title: { absolute: dict.quote.metaTitle },
    description: dict.quote.metaDescription,
    alternates: {
      canonical: `/${dict.locale}/quote`,
      languages: { en: "/en/quote", ar: "/ar/quote", "x-default": "/en/quote" },
    },
  };
}

export default async function QuotePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const dict = await getDictionary(locale);
  const q = dict.quote;

  return (
    <>
      <PageHero eyebrow={q.eyebrow} title={q.heading} subtitle={q.intro}>
        <CallButton label={dict.common.callNow} location="quote-hero" variant="outline-dark" />
      </PageHero>

      <section className="container-x grid gap-10 py-14 sm:py-16 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="font-display text-2xl text-navy">{q.stepsHeading}</h2>
          <ol className="mt-6 space-y-6">
            {q.steps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="font-display flex size-9 shrink-0 items-center justify-center rounded-full bg-maroon text-base text-paper shadow-sm">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-navy">{step.title}</h3>
                  <p className="mt-1 text-sm/6 text-ink/70">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-xl border border-ink/10 bg-sand p-6 shadow-[0_1px_2px_rgba(34,26,20,0.05)] sm:p-8">
          <QuoteForm
            locale={locale}
            form={q.form}
            services={serviceSlugs.map((s) => [s, dict.services[s].name])}
            location="quote"
          />
        </div>
      </section>
    </>
  );
}
