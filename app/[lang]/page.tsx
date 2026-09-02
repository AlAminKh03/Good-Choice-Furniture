import type { Metadata } from "next";
import { getDictionary, isLocale } from "@/lib/i18n";
import { faqSchema } from "@/lib/schema";
import { getImageUrl } from "@/lib/images";
import { serviceSlugs } from "@/content/types";
import { JsonLd } from "@/components/json-ld";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq";
import { ServiceSelector } from "@/components/service-selector";
import { ServiceCard } from "@/components/service-card";
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

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const dict = await getDictionary(locale);
  const h = dict.home;

  return (
    <>
      <JsonLd data={faqSchema(h.faqs)} />

      {/* Hero: Task-focused, clean and flat */}
      <section className="bg-paper pt-8 pb-6 sm:pt-12 sm:pb-10">
        <div className="container-x text-center">
          {/* Trust badge */}
          <div className="inline-block mb-6 px-4 py-2 bg-sand rounded-full border border-sand-deep">
            <p className="text-xs font-semibold text-maroon text-right">✓ Trusted Partner • 12+ Years</p>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-4">
            {h.heroTitle}
          </h1>
          <p className="text-lg sm:text-xl text-ink/60 mb-8 max-w-2xl mx-auto">
            {h.heroSubtitle}
          </p>

          {/* Search bar */}
          <div className="mb-10 max-w-2xl mx-auto">
            <div className="relative flex">
              <input
                type="text"
                placeholder="What service do you need?"
                className="flex-1 rounded-l-full border-2 border-maroon px-6 py-3.5 text-base placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-maroon/20"
              />
              <button className="rounded-r-full bg-maroon text-white px-6 py-3.5 font-bold hover:bg-brand-deep transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-ink/60">
            <div className="flex items-center gap-2">
              <CheckIcon className="size-4 text-wa" />
              <span>Same-day available</span>
            </div>
            <div className="flex items-center gap-2">
              <StarIcon className="size-4 text-brass" />
              <span>4.8★ Rated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services: Interactive selector (TaskRabbit style) */}
      <section className="bg-paper border-t border-border">
        <div className="container-x py-8">
          <div className="space-y-8">
            {/* Service selector with tabs and dynamic showcase */}
            <ServiceSelector
              locale={locale}
              services={{
                sales: {
                  title: dict.services.sales.name,
                  description: dict.services.sales.cardDescription,
                  details: [
                    "Browse our curated furniture collection with expert guidance",
                    "Free delivery and setup included in most purchases",
                  ],
                  trending: "Minimalist design, modular sofas, and sustainable materials",
                },
                repair: {
                  title: dict.services.repair.name,
                  description: dict.services.repair.cardDescription,
                  details: [
                    "Expert repair for sofas, chairs, and upholstery",
                    "Color matching and fabric restoration available",
                  ],
                  trending: "Premium fabric repairs, vintage furniture restoration",
                },
                installation: {
                  title: dict.services.installation.name,
                  description: dict.services.installation.cardDescription,
                  details: [
                    "Professional installation for TVs, cabinets, and shelving",
                    "Wall assessment and safety protocols included",
                  ],
                  trending: "Wall-mounted entertainment systems, custom shelving",
                },
                moving: {
                  title: dict.services.moving.name,
                  description: dict.services.moving.cardDescription,
                  details: [
                    "Safe furniture moving with professional packing",
                    "Assembly and disassembly services included",
                  ],
                  trending: "Corporate relocations, apartment moves within Doha",
                },
                disposal: {
                  title: dict.services.disposal.name,
                  description: dict.services.disposal.cardDescription,
                  details: [
                    "Eco-friendly furniture disposal with proper recycling",
                    "Compliance with local environmental standards",
                  ],
                  trending: "Sustainable waste management, bulk removals",
                },
              }}
              serviceImages={{
                sales: getImageUrl("sales-furniture"),
                repair: getImageUrl("repair-sofa"),
                installation: getImageUrl("installation-tv"),
                moving: getImageUrl("moving-furniture"),
                disposal: getImageUrl("disposal-waste"),
              }}
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
                <div className="flex gap-0.5 mb-4" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <StarIcon key={star} className="size-4 text-brass" />
                  ))}
                </div>
                <blockquote className="text-ink/80 leading-relaxed mb-4 flex-1">
                  "{t.quote}"
                </blockquote>
                <figcaption className="text-sm font-bold text-navy">
                  {t.name}
                  <span className="font-normal text-ink/60"> · {dict.areas[t.areaKey]}</span>
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

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Message us",
              desc: "Send a photo of what you need over WhatsApp or call us directly.",
            },
            {
              step: "2",
              title: "Get your price",
              desc: "We reply with a clear quote and the earliest available slot — no obligation.",
            },
            {
              step: "3",
              title: "We get it done",
              desc: "Our team shows up on time, does the job right, and cleans up after.",
            },
          ].map((item, i) => (
            <Reveal key={item.step} delay={i * 100}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center size-12 rounded-full bg-maroon text-white font-display text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-ink/70 max-w-xs mx-auto">{item.desc}</p>
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
      <CtaBand
        locale={locale}
        title="Ready to Get Started?"
        text="Get a free quote in minutes. Available same-day across Doha and beyond."
        whatsappLabel={dict.common.whatsappUs}
        whatsappMessage={dict.floating.message}
        quoteLabel={dict.common.getQuote}
      />
    </>
  );
}
