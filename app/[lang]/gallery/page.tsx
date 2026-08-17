import type { Metadata } from "next";
import { getDictionary, isLocale } from "@/lib/i18n";
import { serviceSlugs } from "@/content/types";
import { PageHero } from "@/components/page-hero";
import { GalleryGrid } from "@/components/gallery-grid";
import { CtaBand } from "@/components/cta-band";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(isLocale(lang) ? lang : "en");
  return {
    title: { absolute: dict.gallery.metaTitle },
    description: dict.gallery.metaDescription,
    alternates: {
      canonical: `/${dict.locale}/gallery`,
      languages: { en: "/en/gallery", ar: "/ar/gallery", "x-default": "/en/gallery" },
    },
  };
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const dict = await getDictionary(locale);
  const g = dict.gallery;

  return (
    <>
      <PageHero eyebrow={g.eyebrow} title={g.heading} subtitle={g.intro} />
      <section className="container-x py-14 sm:py-16">
        <GalleryGrid
          items={g.items}
          filters={serviceSlugs.map((s) => [s, dict.services[s].name])}
          allLabel={g.filterAll}
          beforeLabel={dict.common.before}
          afterLabel={dict.common.after}
          emptyState={g.emptyState}
        />
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
