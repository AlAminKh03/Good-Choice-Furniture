import type { Metadata } from "next";
import { getDictionary, isLocale } from "@/lib/i18n";
import { areaKeys, site } from "@/lib/site";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { PlaceholderImage } from "@/components/placeholder-image";
import { CtaBand } from "@/components/cta-band";
import { CheckIcon, PinIcon } from "@/components/icons";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(isLocale(lang) ? lang : "en");
  return {
    title: { absolute: dict.about.metaTitle },
    description: dict.about.metaDescription,
    alternates: {
      canonical: `/${dict.locale}/about`,
      languages: { en: "/en/about", ar: "/ar/about", "x-default": "/en/about" },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const dict = await getDictionary(locale);
  const a = dict.about;

  return (
    <>
      <PageHero eyebrow={a.eyebrow} title={a.heading} subtitle={a.intro[0]} />

      <section className="container-x grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-2">
        <div className="space-y-4">
          {a.intro.slice(1).map((p) => (
            <p key={p.slice(0, 24)} className="text-base/8 text-ink/75">
              {p}
            </p>
          ))}
        </div>
        {/* TODO(owner): team/truck photo (PRD §8) */}
        <PlaceholderImage label={a.teamText} ratio="aspect-[4/3]" />
      </section>

      <section className="bg-sand">
        <div className="container-x py-14 sm:py-16">
          <SectionHeading title={a.valuesHeading} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v) => (
              <div key={v.title} className="rounded-xl border border-ink/10 bg-white/70 p-5 transition-colors hover:border-brass/50">
                <span className="flex size-8 items-center justify-center rounded-lg border border-maroon/10 bg-maroon/5 text-maroon">
                  <CheckIcon className="size-4" />
                </span>
                <h3 className="mt-3 font-bold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm/6 text-ink/70">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x grid gap-10 py-14 sm:py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl text-navy">{a.teamHeading}</h2>
          <p className="mt-4 text-base/8 text-ink/75">{a.teamText}</p>
          <h2 className="font-display mt-10 text-3xl text-navy">{a.licensingHeading}</h2>
          <p className="mt-4 text-base/8 text-ink/75">{a.licensingText}</p>
          <p className="mt-2 text-sm font-semibold text-ink/50">{site.crNumber}</p>
        </div>
        <div className="rounded-xl border border-ink/10 bg-sand p-6">
          <h3 className="font-display text-sm text-brass">{dict.common.areasHeading}</h3>
          <ul className="mt-4 grid grid-cols-2 gap-3">
            {areaKeys.map((k) => (
              <li key={k} className="flex items-center gap-2 text-sm font-semibold text-ink/75">
                <PinIcon className="size-4 text-brass" />
                {dict.areas[k]}
              </li>
            ))}
          </ul>
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
