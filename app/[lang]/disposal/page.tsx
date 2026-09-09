import type { Metadata } from "next";
import Image from "next/image";
import { getDictionary, isLocale } from "@/lib/i18n";
import { localizedPath } from "@/lib/site";
import { getImageUrl } from "@/lib/images";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq";
import { WhatsAppButton } from "@/components/cta-buttons";
import { Reveal } from "@/components/reveal";
import { CheckIcon, ShieldIcon } from "@/components/icons";
import { JunkTruck } from "@/components/junk-truck";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(isLocale(lang) ? lang : "en");
  const service = dict.services.disposal;

  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: {
      canonical: localizedPath(isLocale(lang) ? lang : "en", "/disposal"),
      languages: {
        en: "/en/disposal",
        ar: "/ar/disposal",
        "x-default": "/en/disposal",
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
  const page = dict.disposalPage;
  const image = getImageUrl("disposal-skip");

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={service.name}
        subtitle={service.heroSubtitle}
      >
        {/* The truck lives here rather than on /services/disposal: that hero
            now carries a photo in this corner, and two things fighting for
            the same space read as a mistake. This header is still text-only,
            so the truck has the corner to itself. */}
        <JunkTruck className="absolute bottom-1 end-6 hidden lg:block" />
        <WhatsAppButton
          message={service.whatsappMessage}
          label={service.ctaLabel}
          location="disposal-hero"
        />
      </PageHero>

      {/* Overview + photo. `overview` was already written in both dictionaries
          but this page never rendered it — it repeated `cardDescription`,
          which the hero subtitle above already covers. */}
      <section className="container-x py-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <div className="max-w-2xl">
              {service.overview.map((p) => (
                <p key={p.slice(0, 24)} className="mt-4 text-base/8 text-ink/75 first:mt-0">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          {image ? (
            <Reveal delay={100}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={image}
                  alt={page.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ) : null}
        </div>
      </section>

      {/* Compliance + acceptance scope (PRD §5). Written in both dictionaries
          and rendered on /services/disposal, but missing here until now —
          this is the substantive part of the disposal offer. */}
      {service.compliance ? (
        <section className="container-x pb-10 sm:pb-14">
          <Reveal>
            <div className="rounded-xl border-2 border-teal/40 bg-teal/5 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-teal text-paper">
                  <ShieldIcon className="size-6" />
                </span>
                <div>
                  <h2 className="font-display text-2xl text-teal">
                    {service.compliance.heading}
                  </h2>
                  <p className="mt-3 text-base/8 text-ink/80">{service.compliance.body}</p>
                </div>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-md border border-teal/30 bg-white/70 p-5">
                  <h3 className="text-sm font-bold text-teal">✓ {page.acceptedHeading}</h3>
                  <ul className="mt-3 space-y-2">
                    {service.accepted?.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm/6 text-ink/75">
                        <CheckIcon className="mt-0.5 size-4 shrink-0 text-teal" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-md border border-maroon/30 bg-white/70 p-5">
                  <h3 className="text-sm font-bold text-maroon">✕ {page.notAcceptedHeading}</h3>
                  <ul className="mt-3 space-y-2">
                    {service.notAccepted?.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm/6 text-ink/75">
                        <span aria-hidden className="mt-0.5 font-bold text-maroon">×</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {service.notAcceptedNote ? (
                    <p className="mt-4 border-t border-ink/10 pt-3 text-xs/5 text-ink/60">
                      {service.notAcceptedNote}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      ) : null}

      {/* Features */}
      <section className="bg-sand">
        <div className="container-x py-10 sm:py-14">
          <Reveal>
            <h2 className="font-display mb-8 text-2xl text-navy">{page.featuresHeading}</h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.features.map((feature, idx) => (
              <Reveal key={feature.title} delay={idx * 100}>
                <div className="h-full rounded-lg border border-ink/10 bg-white/70 p-6">
                  <h3 className="font-display mb-2 text-lg text-navy">{feature.title}</h3>
                  <p className="text-sm text-ink/70">{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-x py-10 sm:py-14">
        <Reveal>
          <h2 className="font-display mb-8 text-2xl text-navy">{dict.common.ourProcess}</h2>
        </Reveal>
        <div className="space-y-4">
          {service.process.map((step, idx) => (
            <Reveal key={step.title} delay={idx * 100}>
              <div className="flex gap-4 rounded-lg border border-border bg-paper p-6">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-maroon text-white font-bold">
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
      <section className="container-x pb-10 sm:pb-14">
        <Reveal>
          <FaqAccordion faqs={service.faqs} heading={dict.common.faqHeading} />
        </Reveal>
      </section>

      <CtaBand
        locale={locale}
        title={page.ctaTitle}
        text={page.ctaText}
        whatsappLabel={dict.common.whatsappUs}
        whatsappMessage={service.whatsappMessage}
        quoteLabel={dict.common.getQuote}
      />
    </>
  );
}
