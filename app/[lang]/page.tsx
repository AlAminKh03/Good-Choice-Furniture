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

/** Rotating accent colors for the "recent jobs" gallery cards (Emerald Elegance). */
const jobColors = ["#1B5E4A", "#D4A574", "#9B8C7C", "#164237", "#4A9B7D"];

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

      {/* Hero section - Premium polished design */}
      <section className='bg-paper pt-20 pb-24 sm:pt-32 sm:pb-40'>
        <div className='container-x'>
          <div className='grid items-center gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20'>
            <div>
              {/* Subtitle eyebrow */}
              <div className='inline-flex items-center gap-2 mb-6'>
                <div className='w-2 h-2 rounded-full bg-maroon'></div>
                <span className='text-xs font-semibold tracking-widest text-maroon uppercase'>{h.heroEyebrow}</span>
              </div>

              {/* Main headline */}
              <h1 className='font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-navy leading-[1.1] mb-8'>
                {h.heroTitle}
              </h1>

              {/* Description */}
              <p className='text-lg sm:text-xl text-ink/70 leading-relaxed mb-10 max-w-lg'>
                {h.heroSubtitle}
              </p>

              {/* CTAs */}
              <div className='flex flex-col sm:flex-row gap-4 sm:gap-3 mb-12'>
                <WhatsAppButton
                  message={dict.floating.message}
                  label={dict.common.whatsappUs}
                  location='hero'
                  className='px-8 py-4 text-base font-bold rounded-lg shadow-lg hover:shadow-xl transition-shadow'
                />
                <Link
                  href={localizedPath(locale, '/quote')}
                  className='inline-flex items-center justify-center px-8 py-4 text-base font-bold border-2 border-maroon text-maroon rounded-lg hover:bg-maroon hover:text-paper transition-all duration-300'
                >
                  {dict.common.getQuote}
                </Link>
              </div>

              {/* Trust note */}
              <div className='flex items-start gap-3 text-sm text-ink/60'>
                <CheckIcon className='w-5 h-5 text-maroon flex-shrink-0 mt-0.5' />
                <span>{h.heroNote}</span>
              </div>
            </div>

            {/* Hero image with subtle shadow and border */}
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-br from-maroon/10 to-maroon/5 rounded-2xl'></div>
              <RealImage
                src={getImageUrl('hero-main')}
                alt={h.heroImageLabel}
                ratio='aspect-[4/3]'
                priority={true}
                className='rounded-2xl shadow-2xl relative'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services section - Premium refined */}
      <section className='bg-sand py-24 sm:py-40'>
        <div className='container-x'>
          <div className='mb-20'>
            <div className='inline-flex items-center gap-2 mb-4'>
              <div className='w-2 h-2 rounded-full bg-maroon'></div>
              <span className='text-xs font-semibold tracking-widest text-maroon uppercase'>{h.servicesEyebrow}</span>
            </div>
            <h2 className='font-display text-5xl sm:text-6xl font-bold text-navy mb-6 leading-tight'>
              {h.servicesHeading}
            </h2>
            <p className='text-xl text-ink/70 max-w-3xl leading-relaxed'>
              {h.servicesIntro}
            </p>
          </div>

          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {serviceSlugs.map((slug, i) => {
              const service = dict.services[slug];
              return (
                <Reveal key={slug} delay={(i % 3) * 100}>
                  <Link
                    href={localizedPath(locale, `/services/${slug}`)}
                    className='group flex flex-col h-full p-8 bg-paper rounded-xl border-2 border-transparent hover:border-maroon shadow-sm hover:shadow-xl transition-all duration-300'
                  >
                    {/* Icon circle */}
                    <div className='w-14 h-14 rounded-full bg-maroon/10 group-hover:bg-maroon/20 transition-colors mb-6'></div>

                    <h3 className='font-display text-2xl font-bold text-navy group-hover:text-maroon transition-colors mb-3'>
                      {service.name}
                    </h3>
                    <p className='text-base text-ink/70 flex-1 leading-relaxed mb-6'>
                      {service.description}
                    </p>
                    <div className='flex items-center gap-2 text-base font-semibold text-maroon group-hover:gap-3 transition-all'>
                      {dict.common.learnMore}
                      <span className='text-xl'>→</span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works - Premium process */}
      <section className='bg-sand py-24 sm:py-40'>
        <div className='container-x'>
          <div className='text-center mb-20'>
            <h2 className='font-display text-5xl sm:text-6xl font-bold text-navy mb-6 leading-tight'>
              How it works
            </h2>
            <p className='text-xl text-ink/70 max-w-3xl mx-auto leading-relaxed'>
              Get your furniture disposed in three simple, straightforward steps
            </p>
          </div>

          <div className='grid gap-12 sm:grid-cols-3 relative'>
            {/* Connecting lines */}
            <div className='hidden sm:block absolute top-1/4 left-1/3 right-1/3 h-1 bg-gradient-to-r from-transparent via-maroon/20 to-transparent'></div>

            {[
              { step: '1', icon: '📋', title: 'Tell us what you need', desc: 'Describe your furniture or items to be disposed' },
              { step: '2', icon: '✓', title: 'Get instant pricing', desc: 'Transparent pricing with no hidden charges' },
              { step: '3', icon: '🚚', title: 'We pick it up', desc: 'Fast, professional pickup and disposal' }
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 120}>
                <div className='flex flex-col items-center text-center relative z-10'>
                  {/* Step badge */}
                  <div className='flex items-center justify-center w-20 h-20 rounded-full bg-maroon text-paper text-3xl font-bold mb-8 shadow-lg'>
                    {item.step}
                  </div>

                  {/* Icon */}
                  <span className='text-6xl mb-6'>{item.icon}</span>

                  {/* Title */}
                  <h3 className='font-display text-2xl font-bold text-navy mb-4'>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className='text-base text-ink/70 leading-relaxed max-w-xs'>
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
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

      {/* Gallery - Premium showcase */}
      <section className='bg-paper py-24 sm:py-40'>
        <div className='container-x'>
          <div className='flex items-end justify-between mb-20 gap-8'>
            <div>
              <h2 className='font-display text-5xl sm:text-6xl font-bold text-navy mb-4 leading-tight'>
                {h.galleryHeading}
              </h2>
            </div>
            <Link
              href={localizedPath(locale, '/gallery')}
              className='text-base font-semibold text-maroon hover:text-brand-deep hover:gap-2 transition-all flex items-center gap-1 whitespace-nowrap'
            >
              View all collection
              <span className='text-xl'>→</span>
            </Link>
          </div>

          <ul className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[280px]'>
            {dict.gallery.items.slice(0, 6).map((item, i) => (
              <li key={item.id} className={i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}>
                <Link
                  href={localizedPath(locale, '/gallery')}
                  className='group relative w-full h-full flex items-end overflow-hidden rounded-xl p-6 bg-linear-to-br from-maroon/85 to-brand-deep/85 hover:from-maroon hover:to-brand-deep shadow-lg hover:shadow-2xl transition-all duration-300'
                >
                  <span className='text-lg font-bold text-white group-hover:translate-y-0 transform translate-y-1 transition-transform'>
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials - Premium social proof */}
      <section className='bg-paper py-24 sm:py-40'>
        <div className='container-x'>
          <div className='text-center mb-20'>
            <div className='inline-flex items-center gap-2 mb-4'>
              <div className='w-2 h-2 rounded-full bg-maroon'></div>
              <span className='text-xs font-semibold tracking-widest text-maroon uppercase'>{h.testimonialsEyebrow}</span>
            </div>
            <h2 className='font-display text-5xl sm:text-6xl font-bold text-navy mb-6 leading-tight'>
              {h.testimonialsHeading}
            </h2>
            <p className='text-xl text-ink/70 max-w-2xl mx-auto'>
              Trusted by thousands across Qatar
            </p>
          </div>

          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {dict.testimonials.slice(0, 6).map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 100}>
                <figure className='flex flex-col h-full p-8 bg-sand rounded-xl border-2 border-transparent hover:border-maroon shadow-sm hover:shadow-lg transition-all duration-300'>
                  {/* Stars */}
                  <div className='flex gap-1.5 text-brass mb-6'>
                    {Array.from({ length: 5 }).map((_, s) => (
                      <StarIcon key={s} className='w-5 h-5' />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className='flex-1 text-base text-ink/80 leading-relaxed mb-6 italic'>
                    {String.fromCharCode(34)}{t.quote}{String.fromCharCode(34)}
                  </blockquote>

                  {/* Author */}
                  <figcaption className='border-t border-border/50 pt-6 text-sm'>
                    <p className='font-bold text-navy mb-1'>{t.name}</p>
                    <p className='text-ink/60'>{dict.areas[t.areaKey]}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Premium Q&A */}
      <section className='bg-sand py-24 sm:py-40'>
        <div className='container-x max-w-4xl'>
          <div className='text-center mb-20'>
            <h2 className='font-display text-5xl sm:text-6xl font-bold text-navy mb-6 leading-tight'>
              {h.faqHeading}
            </h2>
            <p className='text-xl text-ink/70'>
              Everything you need to know about our service
            </p>
          </div>
          <Reveal>
            <div className='bg-paper rounded-xl shadow-sm border border-border p-8 sm:p-12'>
              <FaqAccordion faqs={h.faqs} heading='' />
            </div>
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
