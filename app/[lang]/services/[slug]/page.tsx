import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/lib/i18n";
import { areaKeys, localizedPath } from "@/lib/site";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { serviceSlugs, type ServiceSlug } from "@/content/types";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { FaqAccordion } from "@/components/faq";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { WhatsAppButton, CallButton } from "@/components/cta-buttons";
import { ArrowIcon, CheckIcon, ShieldIcon } from "@/components/icons";
import { Truck3d } from "@/components/truck-3d";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const dict = await getDictionary(isLocale(lang) ? lang : "en");
  const service = dict.services[slug as ServiceSlug];
  if (!service) return {};
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: {
      canonical: `/${dict.locale}/services/${slug}`,
      languages: {
        en: `/en/services/${slug}`,
        ar: `/ar/services/${slug}`,
        "x-default": `/en/services/${slug}`,
      },
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!serviceSlugs.includes(slug as ServiceSlug)) notFound();
  const locale = isLocale(lang) ? lang : "en";
  const dict = await getDictionary(locale);
  const s = dict.services[slug as ServiceSlug];
  const areas = areaKeys.map((k) => dict.areas[k]);
  // Use curated related services, fallback to first 3 if not defined
  const related = (s.relatedServiceSlugs?.filter((r) => serviceSlugs.includes(r as ServiceSlug)) as ServiceSlug[] | undefined) ||
    serviceSlugs.filter((r) => r !== slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          locale,
          name: s.name,
          description: s.metaDescription,
          slug,
          areas,
        })}
      />
      <JsonLd data={faqSchema(s.faqs)} />

      <PageHero eyebrow={dict.nav.services} title={s.name} subtitle={s.heroSubtitle}>
        {slug === "disposal" ? <Truck3d className="absolute bottom-0 end-6 hidden lg:block" /> : null}
        <WhatsAppButton
          message={s.whatsappMessage}
          label={s.ctaLabel}
          location={`service-${slug}`}
        />
        <CallButton label={dict.common.callNow} location={`service-${slug}`} variant="outline-dark" />
      </PageHero>

      {/* Overview */}
      <section className="container-x grid gap-10 py-14 sm:py-16 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="font-display text-3xl text-navy">{s.tagline}</h2>
          {s.overview.map((p) => (
            <p key={p.slice(0, 24)} className="mt-4 text-base/8 text-ink/75">
              {p}
            </p>
          ))}
        </div>
        <div className="rounded-xl border border-ink/10 bg-sand p-6">
          <h3 className="font-display text-sm text-brass">{dict.common.areasHeading}</h3>
          <ul className="mt-4 space-y-2">
            {areas.map((area) => (
              <li key={area} className="flex items-center gap-2 text-sm font-semibold text-ink/75">
                <CheckIcon className="size-4 text-maroon" />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Features */}
      <section className="bg-sand">
        <div className="container-x py-14 sm:py-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {s.features.map((f) => (
              <div key={f.title} className="rounded-xl border border-ink/10 bg-white/70 p-5 transition-colors hover:border-brass/50">
                <h3 className="font-bold text-navy">{f.title}</h3>
                <p className="mt-2 text-sm/6 text-ink/70">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disposal: compliance + acceptance scope (PRD §5) */}
      {s.compliance ? (
        <section className="container-x py-14 sm:py-16">
          <div className="rounded-xl border-2 border-teal/40 bg-teal/5 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-teal text-paper">
                <ShieldIcon className="size-6" />
              </span>
              <div>
                <h2 className="font-display text-2xl text-teal">{s.compliance.heading}</h2>
                <p className="mt-3 text-base/8 text-ink/80">{s.compliance.body}</p>
              </div>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-md border border-teal/30 bg-white/70 p-5">
                <h3 className="text-sm font-bold text-teal">✓ {locale === "ar" ? "نستلم" : "We accept"}</h3>
                <ul className="mt-3 space-y-2">
                  {s.accepted?.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm/6 text-ink/75">
                      <CheckIcon className="mt-0.5 size-4 shrink-0 text-teal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-md border border-maroon/30 bg-white/70 p-5">
                <h3 className="text-sm font-bold text-maroon">✕ {locale === "ar" ? "لا نستلم" : "We don't accept"}</h3>
                <ul className="mt-3 space-y-2">
                  {s.notAccepted?.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm/6 text-ink/75">
                      <span aria-hidden className="mt-0.5 font-bold text-maroon">×</span>
                      {item}
                    </li>
                  ))}
                </ul>
                {s.notAcceptedNote ? (
                  <p className="mt-4 border-t border-ink/10 pt-3 text-xs/5 text-ink/60">
                    {s.notAcceptedNote}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Before/after showcase — draggable comparison sliders */}
      {s.showcase ? (
        <section className="container-x py-14 sm:py-16">
          <SectionHeading eyebrow={dict.gallery.eyebrow} title={dict.home.galleryHeading} />
          <div className="mt-8 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {s.showcase.map((item) => (
              <figure key={item.title}>
                <BeforeAfterSlider
                  label={item.title}
                  beforeLabel={dict.common.before}
                  afterLabel={dict.common.after}
                />
                <figcaption className="mt-3">
                  <p className="text-sm font-bold text-navy">{item.title}</p>
                  <p className="text-xs text-ink/60">{item.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      {/* Process */}
      <section className="bg-sand">
        <div className="container-x py-14 sm:py-16">
          <SectionHeading title={dict.common.ourProcess} />
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {s.process.map((step, i) => (
              <li key={step.title} className="relative rounded-xl border border-ink/10 bg-white/70 p-5 pt-8 shadow-[0_1px_2px_rgba(34,26,20,0.05)]">
                <span className="font-display absolute -top-4 start-5 flex size-9 items-center justify-center rounded-full bg-maroon text-base text-paper shadow-sm">
                  {i + 1}
                </span>
                <h3 className="font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm/6 text-ink/70">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x max-w-3xl py-14 sm:py-16">
        <FaqAccordion faqs={s.faqs} heading={dict.common.faqHeading} />
      </section>

      {/* Related Blog Posts */}
      {s.relatedBlogSlugs && s.relatedBlogSlugs.length > 0 ? (
        <section className="bg-sand">
          <div className="container-x py-14 sm:py-16">
            <h2 className="font-display text-2xl text-navy">Expert Tips & Guides</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {s.relatedBlogSlugs
                .map((blogSlug) => dict.blog.posts.find((p) => p.slug === blogSlug))
                .filter(Boolean)
                .map((post) => (
                  <Link
                    key={post!.slug}
                    href={localizedPath(locale, `/blog/${post!.slug}`)}
                    className="group rounded-xl border border-ink/10 bg-white/70 p-5 transition-all hover:border-maroon/50 hover:shadow-md"
                  >
                    <div className="mb-2 inline-block rounded-full bg-maroon/10 px-2.5 py-1">
                      <span className="text-xs font-semibold text-maroon">{post!.category}</span>
                    </div>
                    <h3 className="font-bold text-navy group-hover:text-maroon">{post!.title}</h3>
                    <p className="mt-2 text-sm/6 text-ink/70">{post!.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between text-xs text-ink/60">
                      <span>{post!.date}</span>
                      <ArrowIcon className="size-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 rtl:rotate-180" />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Related Services */}
      <section className="bg-sand">
        <div className="container-x py-14 sm:py-16">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-display text-2xl text-navy">{dict.common.relatedServices}</h2>
            <Link href={localizedPath(locale, "/services")} className="inline-flex items-center gap-1.5 text-sm font-bold text-maroon decoration-brass decoration-2 underline-offset-8 hover:underline">
              {dict.common.backToServices}
              <ArrowIcon className="size-4 rtl:rotate-180" />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <ServiceCard
                key={r}
                service={dict.services[r]}
                locale={locale}
                learnMore={dict.common.learnMore}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
