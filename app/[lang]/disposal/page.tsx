import type { Metadata } from "next";
import { getDictionary, isLocale } from "@/lib/i18n";
import { localizedPath } from "@/lib/site";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq";
import { WhatsAppButton } from "@/components/cta-buttons";
import { Reveal } from "@/components/reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(isLocale(lang) ? lang : "en");
  const service = dict.services.disposal;

  return {
    title: { absolute: service.title },
    description: service.description,
    alternates: {
      canonical: localizedPath(isLocale(lang) ? lang : "en", "/disposal"),
      languages: {
        en: "/en/disposal",
        ar: "/ar/disposal",
        "x-default": "/en/disposal"
      },
    },
  };
}

export default async function DisposalPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const dict = await getDictionary(locale);
  const service = dict.services.disposal;

  return (
    <>
      <PageHero
        eyebrow="Eco-Friendly Solutions"
        title={service.title}
        subtitle={service.description}
      >
        <WhatsAppButton
          message={dict.floating.message}
          label={dict.common.whatsappUs}
          location="disposal-hero"
        />
      </PageHero>

      {/* Overview */}
      <section className="container-x py-12 sm:py-16">
        <Reveal>
          <div className="prose prose-sm sm:prose max-w-3xl">
            <p className="text-lg text-ink/75">
              {service.description}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Features */}
      <section className="container-x py-12 sm:py-16">
        <Reveal>
          <h2 className="font-display mb-8 text-2xl text-navy">Why Choose Our Disposal Service?</h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.features.map((feature, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className="rounded-lg bg-sand p-6">
                <h3 className="font-display mb-2 text-lg text-navy">{feature.title}</h3>
                <p className="text-sm text-ink/70">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="container-x py-12 sm:py-16">
        <Reveal>
          <h2 className="font-display mb-8 text-2xl text-navy">Our Process</h2>
        </Reveal>
        <div className="space-y-4">
          {service.process.map((step, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className="flex gap-4 rounded-lg border border-border bg-paper p-6">
                <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-maroon text-white font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-1">{step.title}</h3>
                  <p className="text-sm text-ink/70">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="container-x py-12 sm:py-16">
        <Reveal>
          <h2 className="font-display mb-8 text-2xl text-navy">Frequently Asked Questions</h2>
        </Reveal>
        <FaqAccordion faqs={service.faqs} />
      </section>

      {/* CTA */}
      <CtaBand
        locale={locale}
        title={`Ready for Professional Disposal?`}
        text={`Get a free quote for your furniture disposal needs. Same-day service available.`}
        whatsappLabel={dict.common.whatsappUs}
        whatsappMessage={dict.floating.message}
        quoteLabel={dict.common.getQuote}
      />
    </>
  );
}
