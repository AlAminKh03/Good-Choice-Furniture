import type { Metadata } from "next";
import { getDictionary, isLocale } from "@/lib/i18n";
import { serviceSlugs } from "@/content/types";
import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { CtaBand } from "@/components/cta-band";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(isLocale(lang) ? lang : "en");
  return {
    title: { absolute: dict.servicesIndex.metaTitle },
    description: dict.servicesIndex.metaDescription,
    alternates: {
      canonical: `/${dict.locale}/services`,
      languages: { en: "/en/services", ar: "/ar/services", "x-default": "/en/services" },
    },
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const dict = await getDictionary(locale);
  const s = dict.servicesIndex;

  return (
    <>
      <PageHero eyebrow={s.eyebrow} title={s.heading} subtitle={s.intro} />
      <section className="container-x py-14 sm:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceSlugs.map((slug) => (
            <ServiceCard
              key={slug}
              service={dict.services[slug]}
              locale={locale}
              learnMore={dict.common.learnMore}
            />
          ))}
        </div>
      </section>
      <CtaBand
        locale={locale}
        title={dict.home.ctaTitle}
        text={dict.home.ctaText}
        whatsappLabel={dict.common.whatsappUs}
        whatsappMessage={dict.floating.message}
        quoteLabel={dict.common.getQuote}
      />
    </>
  );
}
