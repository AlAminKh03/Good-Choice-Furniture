import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/lib/i18n";
import { areaKeys, localizedPath } from "@/lib/site";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { blogImageKeys, getImageUrl, serviceHeroImageKeys, subcategoryImageKeys } from "@/lib/images";
import { serviceSlugs, type ServiceSlug } from "@/content/types";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { FaqAccordion } from "@/components/faq";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { WhatsAppButton, CallButton } from "@/components/cta-buttons";
import { ArrowIcon, CheckIcon, PinIcon, ShieldIcon } from "@/components/icons";

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

      <PageHero
        eyebrow={dict.nav.services}
        title={s.name}
        subtitle={s.heroSubtitle}
        image={getImageUrl(serviceHeroImageKeys[slug])}
        imageAlt={s.tagline}
      >
        <WhatsAppButton
          message={s.whatsappMessage}
          label={s.ctaLabel}
          location={`service-${slug}`}
        />
        <CallButton label={dict.common.callNow} location={`service-${slug}`} variant="outline-dark" />
      </PageHero>

      {/* Overview */}
      <section className="container-x grid gap-10 py-12 sm:py-14 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="font-display text-3xl text-navy">{s.tagline}</h2>
          {s.overview.map((p) => (
            <p key={p.slice(0, 24)} className="mt-4 text-base/8 text-ink/75">
              {p}
            </p>
          ))}
        </div>
        {/* Coverage. This used to list seven municipalities, which both
            implied the list WAS the coverage and stretched into a tall,
            mostly empty panel beside the overview copy. self-start stops
            the grid stretching it. */}
        <div className="self-start rounded-xl border border-ink/10 bg-sand p-6">
          <h3 className="font-display text-sm text-brass">{dict.common.areasHeading}</h3>
          <p className="mt-3 mb-0 flex items-center gap-2 text-lg font-bold text-navy">
            <PinIcon className="size-5 shrink-0 text-maroon" />
            {dict.common.areasAllQatar}
          </p>
          <p className="mt-3 mb-0 text-sm/6 text-ink/65">{dict.home.areasText}</p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-sand">
        <div className="container-x py-12 sm:py-14">
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
        <section className="container-x py-12 sm:py-14">
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
        <section className="container-x py-12 sm:py-14">
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
        <div className="container-x py-12 sm:py-14">
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

      {/* Subcategories — the only server-rendered links to these pages, so
          crawlers can reach them. The home selector also links them, but only
          after a click, which leaves them invisible to search engines. */}
      {s.subcategories.length > 0 ? (
        <section className="container-x py-12 sm:py-14">
          <h2 className="font-display text-2xl text-navy">
            {dict.subcategoryPage.exploreHeading}
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {s.subcategories.map((sub) => {
              const subImg = getImageUrl(subcategoryImageKeys[sub.slug]);
              return (
              <li key={sub.slug}>
                <Link
                  href={localizedPath(locale, `/services/${s.slug}/${sub.slug}`)}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-ink/8 bg-white transition-all hover:-translate-y-0.5 hover:border-maroon/40 hover:shadow-[0_12px_28px_-14px_rgba(27,28,38,0.3)]"
                >
                  {subImg ? (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={subImg}
                        alt={`${sub.label} — ${s.name}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-bold text-navy group-hover:text-maroon">
                      {sub.label}
                    </h3>
                    <p className="mt-2 text-sm/6 text-ink/65">{sub.description}</p>
                  </div>
                </Link>
              </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      {/* FAQ */}
      <section className="container-x max-w-3xl py-12 sm:py-14">
        <FaqAccordion faqs={s.faqs} heading={dict.common.faqHeading} />
      </section>

      {/* Related Blog Posts */}
      {s.relatedBlogSlugs && s.relatedBlogSlugs.length > 0 ? (
        <section className="bg-sand">
          <div className="container-x py-12 sm:py-14">
            <h2 className="font-display text-2xl text-navy">Expert Tips & Guides</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {s.relatedBlogSlugs
                .map((blogSlug) => dict.blog.posts.find((p) => p.slug === blogSlug))
                .filter(Boolean)
                .map((post) => {
                  const cover = getImageUrl(blogImageKeys[post!.slug]);
                  return (
                  <Link
                    key={post!.slug}
                    href={localizedPath(locale, `/blog/${post!.slug}`)}
                    className="group flex flex-col overflow-hidden rounded-xl border border-ink/10 bg-white/70 transition-all hover:-translate-y-0.5 hover:border-maroon/50 hover:shadow-md"
                  >
                    {/* Decorative here: the card title already names the post,
                        so an alt would just repeat it to a screen reader. */}
                    {cover ? (
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={cover}
                          alt=""
                          aria-hidden
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ) : null}
                    <div className="flex flex-1 flex-col p-5">
                      <div className="mb-2 inline-flex self-start rounded-full bg-maroon/10 px-2.5 py-1">
                        <span className="text-xs font-semibold text-maroon">{post!.category}</span>
                      </div>
                      <h3 className="font-bold text-navy group-hover:text-maroon">{post!.title}</h3>
                      <p className="mt-2 flex-1 text-sm/6 text-ink/70">{post!.excerpt}</p>
                      <div className="mt-4 flex items-center justify-between text-xs text-ink/60">
                        <span>{post!.date}</span>
                        <ArrowIcon className="size-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 rtl:rotate-180" />
                      </div>
                    </div>
                  </Link>
                  );
                })}
            </div>
          </div>
        </section>
      ) : null}

      {/* Related Services */}
      <section className="bg-sand">
        <div className="container-x py-12 sm:py-14">
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
