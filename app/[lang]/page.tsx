import type { Metadata } from "next";
import { getDictionary, isLocale } from "@/lib/i18n";
import { faqSchema } from "@/lib/schema";
import { getImageUrl } from "@/lib/images";
import { serviceSlugs, type ServiceSlug } from "@/content/types";
import { JsonLd } from "@/components/json-ld";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq";
import { ServiceSelector } from "@/components/service-selector";
import { ServiceCard } from "@/components/service-card";
import { Reveal } from "@/components/reveal";
import { CheckIcon, StarIcon } from "@/components/icons";
import { ServiceTicker } from "@/components/service-ticker";
import { HeroChat } from "@/components/hero-chat";
import { CallButton } from "@/components/cta-buttons";
import { VideoEmbed } from "@/components/video-embed";
import { site } from "@/lib/site";

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

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const dict = await getDictionary(locale);
  const h = dict.home;
  const heroImage = getImageUrl("hero-main");

  return (
    <>
      <JsonLd data={faqSchema(h.faqs)} />

      {/* Hero: the visitor steps into a WhatsApp thread.
          Two columns on desktop — the case on the start side, the thread on
          the end side. On mobile the copy stacks above the card, so the chips
          (the only conversion path above the fold) stay reachable without
          scrolling past a photo. See components/hero-chat.tsx for why the
          thread is deliberately static. */}
      <section className="bg-paper pt-6 pb-6 sm:pt-10 sm:pb-8">
        <div className="container-x grid items-start gap-10 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-12">
          <div className="text-center lg:pt-1 lg:text-start">
            {/* heroEyebrow was dead copy — defined in both dictionaries and
                rendered nowhere, so the coverage areas never made it above
                the fold. For a local services business that is the single
                most persuasive line available, so it leads now. It replaces
                the old heroBadge pill, which said "five services under one
                roof" directly above a subtitle listing those same five
                services. */}
            <p className="hero-rise eyebrow mb-4 text-xs font-semibold tracking-wider text-maroon">
              {h.heroEyebrow}
            </p>

            <h1 className="hero-headline [--rise-delay:90ms] font-display text-4xl sm:text-5xl xl:text-[3.375rem] font-bold text-navy leading-tight mb-4">
              {h.heroTitle}
            </h1>
            <p className="hero-rise [--rise-delay:200ms] text-lg sm:text-xl text-ink/60 mb-6 max-w-2xl mx-auto lg:mx-0">
              {h.heroSubtitle}
            </p>

            {/* Call fallback. It stays next to the chat card rather than
                below it because desktop WhatsApp is unreliable — a wa.me
                link can dump someone on web.whatsapp.com with a QR code to
                scan, and that visitor needs a phone number in front of them,
                not further down the page. */}
            <div className="hero-rise [--rise-delay:340ms] mb-6 flex justify-center lg:justify-start">
              <CallButton
                label={dict.common.callNow}
                location="hero"
                variant="outline-dark"
              />
            </div>

            {/* Trust signals, from the localized `heroNote`. */}
            <div className="hero-rise [--rise-delay:400ms] flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-ink/60">
              {h.heroNote.split(" · ").map((signal) => (
                <div key={signal} className="flex items-center gap-2">
                  <CheckIcon className="size-4 text-wa" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* The hero photo now lives inside the thread as an image message
              rather than as a full-width band under the headline. The band
              carried two black scrims for text that was never placed on it
              and a 26s infinite drift on what was the LCP element; at bubble
              size it is a small, honest picture of the work instead. */}
          <HeroChat
            copy={h.heroChat}
            photo={heroImage}
            photoAlt={h.heroImageLabel}
          />
        </div>

        {/* Sits outside container-x on purpose: a marquee that stops at the
            text column reads as a clipped box, not as something running past
            the edge of the screen. The top margin is load-bearing: the
            section's pb-6/sm:pb-8 falls below the ticker, so the grid above
            has no bottom spacing of its own and the chat card would otherwise
            sit flush against the ticker's top rule. */}
        <div className="mt-10 sm:mt-14">
          <ServiceTicker items={h.tickerItems} />
        </div>
      </section>

      {/* Services: Interactive selector (TaskRabbit style) */}
      <section className="bg-paper border-t border-border">
        <div className="container-x py-8">
          <div className="space-y-8">
            {/* Service selector with tabs and dynamic showcase */}
            {/* Every string here comes from the dictionary. The `details` and
                `trending` entries used to be inline English literals for all
                five services, so the Arabic homepage rendered fifteen English
                strings in its main interactive module. They now live on
                ServiceContent as selectorDetails / selectorTrending. */}
            <ServiceSelector
              locale={locale}
              services={Object.fromEntries(
                serviceSlugs.map((slug) => [
                  slug,
                  {
                    title: dict.services[slug].name,
                    description: dict.services[slug].cardDescription,
                    details: dict.services[slug].selectorDetails,
                    trending: dict.services[slug].selectorTrending,
                  },
                ]),
              ) as Record<ServiceSlug, { title: string; description: string; details: string[]; trending: string }>}
              serviceImages={{
                sales: getImageUrl("sales-furniture"),
                repair: getImageUrl("repair-sofa"),
                installation: getImageUrl("installation-tv"),
                moving: getImageUrl("moving-furniture"),
                disposal: getImageUrl("disposal-waste"),
              }}
              serviceSubcategories={{
                sales: dict.services.sales.subcategories,
                repair: dict.services.repair.subcategories,
                installation: dict.services.installation.subcategories,
                moving: dict.services.moving.subcategories,
                disposal: dict.services.disposal.subcategories,
              }}
              trendingLabel={dict.subcategoryPage.trendingLabel}
              serviceBgColors={{
                sales: "bg-blue-100",
                repair: "bg-amber-100",
                installation: "bg-cyan-100",
                moving: "bg-purple-100",
                disposal: "bg-emerald-100",
              }}
            />
          </div>
        </div>
      </section>

      {/* Stats row - brag bar, right under the selector like TaskRabbit */}
      <section className="border-y border-border bg-paper/50">
        <div className="container-x py-6 sm:py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {h.stats.map((stat) => (
              <Reveal key={stat.label}>
                <div className="text-center">
                  <p className="font-display text-2xl sm:text-3xl text-maroon font-bold">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-ink/60 mt-1">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Intro video (PRD §4, §5). The whole section is gated on
          site.introVideoId: until the owner supplies real footage that id is
          null and nothing renders — no empty frame, no stock clip standing in
          for the business. VideoEmbed is a click-to-load facade, so even once
          it is set the player JS stays off the initial load. */}
      {site.introVideoId ? (
        <section className="bg-paper border-t border-border">
          <div className="container-x py-8 sm:py-12">
            <Reveal>
              <h2 className="font-display text-3xl text-navy text-center mb-6">{h.videoHeading}</h2>
              <div className="mx-auto max-w-3xl">
                <VideoEmbed
                  videoId={site.introVideoId}
                  title={h.videoTitle}
                  playLabel={h.videoPlayLabel}
                />
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* Popular services - photo grid, TaskRabbit-style project cards */}
      <section className="bg-paper border-t border-border">
        <div className="container-x py-8 sm:py-12">
          <Reveal>
            <h2 className="font-display text-3xl text-navy mb-8 text-center">
              Our Services
            </h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceSlugs.map((slug, i) => (
              <Reveal key={slug} delay={i * 80}>
                <ServiceCard
                  service={dict.services[slug]}
                  locale={locale}
                  learnMore={dict.common.learnMore}
                  index={i}
                  featured={slug === "sales"}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - real trust signal, with star ratings */}
      <section className="container-x py-8 sm:py-12">
        <Reveal>
          <span className="eyebrow justify-center flex mb-3">{h.testimonialsEyebrow}</span>
          <h2 className="font-display text-3xl text-navy mb-10 text-center">
            {h.testimonialsHeading}
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {dict.testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="p-6 sm:p-8 rounded-lg bg-sand border border-sand-deep h-full flex flex-col">
                {/* TODO(owner): these five stars are decoration, not a rating
                    anyone gave — the testimonials beneath them are still the
                    sample set. PRD §5 says not to publish fabricated ratings.
                    Delete this row, or keep it only once the quotes are real
                    reviews that actually carry five stars. */}
                <div className="flex gap-0.5 mb-4" role="img" aria-label={dict.common.ratingLabel}>
                  {Array.from({ length: 5 }).map((_, star) => (
                    <StarIcon key={star} className="size-4 text-brass" />
                  ))}
                </div>
                {/* <q> rather than typing the quote marks: the browser picks
                    the pair that belongs to the page's lang, so Arabic gets
                    Arabic quotes instead of ASCII ones sitting the wrong way
                    round in an RTL line. */}
                <blockquote className="text-ink/80 leading-relaxed mb-4 flex-1">
                  <q>{t.quote}</q>
                </blockquote>
                <figcaption className="text-sm font-bold text-navy">
                  {t.name}
                  {/* No district beside the name: the team works across the
                      whole country, so pinning a reviewer to one area both
                      narrows the claim and dates the review to a place. */}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why us section - real brand copy, not generic placeholders (trust signals) */}
      <section className="bg-sand border-y border-sand-deep">
        <div className="container-x py-8 sm:py-12">
          <Reveal>
            <h2 className="font-display text-3xl text-navy mb-8 text-center">
              {h.whyHeading}
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {h.whyPoints.map((point, i) => (
              <Reveal key={point.title} delay={i * 100}>
                <div className="p-6 rounded-lg bg-white/70 border border-sand-deep h-full">
                  <h3 className="font-bold text-navy mb-2">{point.title}</h3>
                  <p className="text-sm text-ink/70">{point.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works - 3 steps, WhatsApp-first booking flow */}
      <section className="container-x py-8 sm:py-12">
        <Reveal>
          <h2 className="font-display text-3xl text-navy mb-2 text-center">
            {dict.common.ourProcess}
          </h2>
          <p className="text-ink/60 text-center mb-10 max-w-xl mx-auto">
            {h.servicesIntro}
          </p>
        </Reveal>

        {/* Steps come from the dictionary; they were inline English before, so
            the Arabic homepage showed an English booking flow. */}
        <div className="grid md:grid-cols-3 gap-8">
          {h.steps.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="text-center">
                {/* The step number is derived from position, not stored in the
                    dictionary — it is the same 1/2/3 in every language and
                    would only be one more string to keep in sync. */}
                <div className="inline-flex items-center justify-center size-12 rounded-full bg-maroon text-white font-display text-xl font-bold mb-4">
                  {(i + 1).toLocaleString(locale === "ar" ? "ar-QA" : "en-QA")}
                </div>
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-ink/70 max-w-xs mx-auto">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-8 sm:py-12">
        <Reveal>
          <div className="max-w-2xl mx-auto">
            <FaqAccordion faqs={h.faqs.slice(0, 5)} heading={h.faqHeading} />
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      {/* h.ctaTitle / h.ctaText existed in both dictionaries all along — this
          band was passing English literals instead, so the Arabic homepage
          closed on an English call to action. */}
      <CtaBand
        locale={locale}
        title={h.ctaTitle}
        text={h.ctaText}
        whatsappLabel={dict.common.whatsappUs}
        whatsappMessage={dict.floating.message}
        quoteLabel={dict.common.getQuote}
      />
    </>
  );
}
