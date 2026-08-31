import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, isLocale } from "@/lib/i18n";
import { areaKeys, localizedPath, site } from "@/lib/site";
import { faqSchema } from "@/lib/schema";
import { serviceSlugs } from "@/content/types";
import { getImageUrl } from "@/lib/images";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq";
import { RealImage } from "@/components/real-image";
import { VideoEmbed } from "@/components/video-embed";
import { WhatsAppButton, CallButton } from "@/components/cta-buttons";
import { Reveal } from "@/components/reveal";
import { CheckIcon, StarIcon } from "@/components/icons";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(isLocale(lang) ? lang : "en");
  return {
    title: { absolute: dict.home.metaTitle },
    description: dict.home.metaDescription,
  };
}

/** Rotating accent colors for the "recent jobs" gallery cards. */
const jobColors = ["#e14b44", "#0ea5a0", "#1b1c26", "#f59e0b", "#8b5cf6"];

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const dict = await getDictionary(locale);
  const h = dict.home;
  const areas = areaKeys.map((k) => dict.areas[k]);

  return (
    <>
      <JsonLd data={faqSchema(h.faqs)} />

      {/* Hero — clean light, navy serif headline, dark visual card */}
      <section className="bg-paper">
        <div className="container-x grid items-center gap-10 py-10 sm:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow">{h.heroEyebrow}</p>
            <h1 className="font-display mt-4 max-w-xl text-4xl/[1.08] text-navy sm:text-6xl/[1.05] lg:text-[4.25rem]/[1.02] rtl:leading-[1.3]">
              {h.heroTitle}
            </h1>
            <p className="mt-5 max-w-xl text-base/7 sm:text-lg/8 text-ink/65">{h.heroSubtitle}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppButton
                message={dict.floating.message}
                label={dict.common.whatsappUs}
                location="hero"
                className="w-full sm:w-auto"
              />
              <Link
                href={localizedPath(locale, "/quote")}
                className="inline-flex items-center justify-center rounded-full border-2 border-navy/20 px-6 py-3 text-sm font-bold text-navy transition-colors hover:bg-navy hover:text-paper w-full sm:w-auto text-center"
              >
                {dict.common.getQuote}
              </Link>
            </div>
            <p className="mt-6 flex items-center gap-2 text-xs font-semibold tracking-wide text-ink/50">
              <CheckIcon className="size-4 text-wa" />
              {h.heroNote}
            </p>
          </div>
          <RealImage
            src={getImageUrl("hero-main")}
            alt={h.heroImageLabel}
            ratio="aspect-[4/3]"
            priority={true}
          />
        </div>
      </section>

      {/* Trust row — hairline stat strip */}
      <section className="border-y border-ink/8 bg-paper">
        <div className="container-x grid grid-cols-2 divide-ink/8 py-7 sm:grid-cols-4 sm:divide-x sm:rtl:divide-x-reverse">
          {h.stats.map((stat) => (
            <div key={stat.label} className="px-4 py-2 text-center">
              <p className="font-display text-3xl text-navy sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-xs font-semibold text-ink/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services — featured navy Sales card + 4 accent-chipped cards */}
      <section className="container-x py-12 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow={h.servicesEyebrow}
            title={h.servicesHeading}
            intro={h.servicesIntro}
          />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceSlugs.map((slug, i) => (
            <Reveal
              key={slug}
              delay={(i % 3) * 90}
              className={i === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}
            >
              <ServiceCard
                service={dict.services[slug]}
                locale={locale}
                learnMore={dict.common.learnMore}
                index={i}
                featured={i === 0}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why us — white cards, then intro video */}
      <section className="bg-sand">
        <div className="container-x py-12 sm:py-24">
          <Reveal>
            <SectionHeading eyebrow={h.whyEyebrow} title={h.whyHeading} intro={h.whyIntro} />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {h.whyPoints.map((point, i) => (
              <Reveal key={point.title} delay={(i % 3) * 90}>
                <div className="h-full rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_1px_2px_rgba(38,33,30,0.05)]">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-sand text-maroon">
                    <CheckIcon className="size-5" />
                  </span>
                  <h3 className="font-display mt-4 text-lg text-navy">{point.title}</h3>
                  <p className="mt-2 text-sm/6 text-ink/65">{point.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mx-auto mt-12 max-w-3xl space-y-4">
              <VideoEmbed
                videoId={site.introVideoId}
                title={h.videoTitle}
                playLabel={h.videoHeading}
              />
              <p className="text-center text-xs font-medium tracking-wide text-ink/50">
                {h.videoHeading}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery preview — colorful job cards */}
      <section className="container-x py-12 sm:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow={h.galleryEyebrow} title={h.galleryHeading} />
            <Link
              href={localizedPath(locale, "/gallery")}
              className="text-sm font-bold text-maroon decoration-maroon/40 decoration-2 underline-offset-8 hover:underline"
            >
              {h.galleryCta}
            </Link>
          </div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dict.gallery.items.slice(0, 5).map((item, i) => (
              <li
                key={item.id}
                className={i === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}
              >
                <Link
                  href={localizedPath(locale, "/gallery")}
                  className="group relative flex h-full min-h-36 sm:min-h-40 items-end overflow-hidden rounded-2xl p-5 shadow-[0_10px_28px_-14px_rgba(27,28,38,0.4)] transition-transform hover:-translate-y-1"
                  style={{ backgroundColor: jobColors[i % jobColors.length] }}
                >
                  <span
                    aria-hidden
                    className="absolute end-4 top-4 block size-5 rotate-45 rounded-[3px] border-2 border-white/40"
                  />
                  <span className="text-sm font-bold text-white">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Areas — simple inline row */}
      <section className="border-y border-ink/8 bg-paper">
        <div className="container-x py-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-semibold text-ink/55">
            {areas.map((area, i) => (
              <li key={area} className="flex items-center gap-4">
                {i > 0 ? <span aria-hidden className="inline-block size-1.5 rotate-45 bg-maroon/50" /> : null}
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials — white cards with gold stars */}
      <section className="container-x py-12 sm:py-24">
        <Reveal>
          <SectionHeading eyebrow={h.testimonialsEyebrow} title={h.testimonialsHeading} />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dict.testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 4) * 80}>
              <figure className="flex h-full flex-col rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_1px_2px_rgba(38,33,30,0.05)]">
                <div className="flex gap-0.5 text-brass" aria-hidden>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} className="size-4" />
                  ))}
                </div>
                <blockquote className="mt-3 flex-1 text-sm/7 text-ink/80">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-bold text-maroon">— {t.name}</span>
                  <span className="text-ink/50"> · {dict.areas[t.areaKey]}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand">
        <div className="container-x max-w-3xl py-16 sm:py-24">
          <Reveal>
            <FaqAccordion faqs={h.faqs} heading={h.faqHeading} />
          </Reveal>
        </div>
      </section>

      <CtaBand
        locale={locale}
        title={h.ctaTitle}
        text={h.ctaText}
        whatsappLabel={dict.common.whatsappUs}
        whatsappMessage={dict.floating.message}
        quoteLabel={dict.common.getQuote}
      />

      <div className="container-x flex justify-center py-8">
        <CallButton label={dict.common.callNow} location="home-bottom" variant="outline-dark" />
      </div>
    </>
  );
}
