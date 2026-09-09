import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/lib/i18n";
import { localizedPath, site } from "@/lib/site";
import { getImageUrl, serviceHeroImageKeys, subcategoryImageKeys } from "@/lib/images";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { WhatsAppButton, CallButton } from "@/components/cta-buttons";
import Image from "next/image";
import Link from "next/link";


/**
 * Prerender every subcategory in both locales. Without this the route was
 * rendered on demand and, more importantly, the pages were reachable only by
 * clicking a tab in the client-side selector — so nothing ever linked to them
 * in server HTML. They are now in the sitemap and linked from the service
 * page as well (PRD §6).
 */
export async function generateStaticParams() {
  const dict = await getDictionary("en");
  return (["en", "ar"] as const).flatMap((lang) =>
    Object.values(dict.services).flatMap((service) =>
      service.subcategories.map((sub) => ({
        lang,
        slug: service.slug,
        subslug: sub.slug,
      })),
    ),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string; subslug: string }>;
}): Promise<Metadata> {
  const { lang, slug, subslug } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const dict = await getDictionary(locale);

  const service = dict.services[slug as keyof typeof dict.services];
  const sub = service?.subcategories.find((s) => s.slug === subslug);
  if (!service || !sub) return {};

  return {
    title: `${sub.label} — ${service.name} | ${site.name}`,
    description: sub.description,
    alternates: {
      canonical: `${site.url}/${locale}/services/${slug}/${subslug}`,
      languages: {
        en: `${site.url}/en/services/${slug}/${subslug}`,
        ar: `${site.url}/ar/services/${slug}/${subslug}`,
        "x-default": `${site.url}/en/services/${slug}/${subslug}`,
      },
    },
  };
}

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string; subslug: string }>;
}) {
  const { lang, slug, subslug } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const dict = await getDictionary(locale);

  const service = dict.services[slug as keyof typeof dict.services];
  const sub = service?.subcategories.find((s) => s.slug === subslug);
  // An unknown service or subcategory is a real 404, not an empty page.
  if (!service || !sub) notFound();

  const chrome = dict.subcategoryPage;
  const subImage = getImageUrl(subcategoryImageKeys[subslug]);
  const subImageAlt = `${sub.label} — ${service.name}`;
  // The parent service hero shot. Using it here rather than repeating
  // `subImage` keeps two distinct photos on the page and visually ties the
  // subcategory back to the service it belongs to.
  const serviceImage = getImageUrl(serviceHeroImageKeys[slug]);
  const siblings = service.subcategories.filter((s) => s.slug !== subslug);

  return (
    <>
      <PageHero
        eyebrow={dict.nav.services}
        title={sub.label}
        subtitle={sub.description}
        image={subImage}
        imageAlt={subImageAlt}
        above={
          <nav aria-label={dict.common.breadcrumbLabel} className="flex flex-wrap gap-2 text-sm text-ink/60">
            <Link href={localizedPath(locale, "/")} className="hover:text-maroon">
              {chrome.breadcrumbHome}
            </Link>
            <span aria-hidden>/</span>
            <Link
              href={localizedPath(locale, `/services/${slug}`)}
              className="hover:text-maroon"
            >
              {service.name}
            </Link>
            <span aria-hidden>/</span>
            <span aria-current="page" className="text-ink">
              {sub.label}
            </span>
          </nav>
        }
      >
        <WhatsAppButton
          message={dict.floating.message}
          label={dict.common.whatsappUs}
          location="subcategory-hero"
        />
        <CallButton
          label={dict.common.callNow}
          location="subcategory-hero"
          variant="outline-dark"
        />
      </PageHero>

      {/* What you get — benefits card paired with the parent service photo.
          Previously this band was raw Tailwind blues (bg-blue-100, a blue-200
          gradient behind the image) which belong to no palette on this site;
          it now sits on `sand` like every other alternating section. */}
      <section className="bg-sand">
        <div className="container-x py-12 sm:py-14">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl border border-ink/8 bg-white/80 p-6 shadow-[0_1px_2px_rgba(34,26,20,0.05)] sm:p-8">
                <span
                  aria-hidden
                  className="block h-1.5 w-12 rounded-full bg-gradient-to-r from-maroon to-transparent rtl:bg-gradient-to-l"
                />
                <h2 className="font-display mt-6 text-3xl text-navy sm:text-4xl">
                  {sub.label}
                </h2>
                <p className="mt-4 text-base/8 text-ink/70">{sub.description}</p>

                <ul className="mt-6 space-y-3">
                  {chrome.benefits.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-maroon/10 text-xs font-bold text-maroon"
                      >
                        ✓
                      </span>
                      <span className="text-sm/6 text-ink/80">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-ink/10 pt-5">
                  <p className="text-sm font-bold text-navy">{chrome.whyHeading}</p>
                  <p className="mt-1 text-sm/6 text-ink/60">{chrome.whyText}</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              {serviceImage ? (
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink/8 shadow-[0_24px_50px_-24px_rgba(27,94,74,0.4)]">
                  <Image
                    src={serviceImage}
                    alt={`${service.name} — ${service.tagline}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-cover"
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Brag/Stats Section */}
      <section className="bg-paper/50 border-y border-border">
        <div className="container-x py-8 sm:py-12">
          {/* Shares the home page's stats rather than a second, contradictory
              set. The figures this block used to hardcode ("12+ years",
              "5000+ services", "4.8★", "100% satisfaction") were untranslated,
              disagreed with the home page, and asserted a star rating with no
              reviews behind it — PRD §5 says not to publish ratings until real
              ones exist. */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {dict.home.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl sm:text-3xl text-maroon font-bold">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-ink/60 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The rest of the parent service. Sideways links between siblings were
          missing entirely — the only way out of this page was the breadcrumb
          or the footer. */}
      {siblings.length > 0 ? (
        <section className="container-x py-12 sm:py-14">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-display text-2xl text-navy">{chrome.exploreHeading}</h2>
            <Link
              href={localizedPath(locale, `/services/${slug}`)}
              className="text-sm font-bold text-maroon decoration-brass decoration-2 underline-offset-8 hover:underline"
            >
              {service.name}
            </Link>
          </div>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {siblings.map((other) => {
              const otherImage = getImageUrl(subcategoryImageKeys[other.slug]);
              return (
                <li key={other.slug}>
                  <Link
                    href={localizedPath(locale, `/services/${slug}/${other.slug}`)}
                    className="group flex h-full flex-col overflow-hidden rounded-xl border border-ink/8 bg-white transition-all hover:-translate-y-0.5 hover:border-maroon/40 hover:shadow-[0_12px_28px_-14px_rgba(27,28,38,0.3)]"
                  >
                    {/* Decorative: the heading beneath already names the
                        subcategory, so an alt would only repeat it. */}
                    {otherImage ? (
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={otherImage}
                          alt=""
                          aria-hidden
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ) : null}
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-bold text-navy group-hover:text-maroon">
                        {other.label}
                      </h3>
                      <p className="mt-2 text-sm/6 text-ink/65">{other.description}</p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      {/* Final CTA */}
      <CtaBand
        locale={locale}
        title={chrome.ctaTitle}
        text={chrome.ctaText}
        whatsappLabel={dict.common.whatsappUs}
        whatsappMessage={dict.floating.message}
        quoteLabel={dict.common.getQuote}
      />
    </>
  );
}
