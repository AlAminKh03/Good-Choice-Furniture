import type { Metadata } from "next";
import { getDictionary, isLocale } from "@/lib/i18n";
import { localizedPath } from "@/lib/site";
import { CtaBand } from "@/components/cta-band";
import { WhatsAppButton, CallButton } from "@/components/cta-buttons";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string; subslug: string }>;
}): Promise<Metadata> {
  const { lang, slug, subslug } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const dict = await getDictionary(locale);

  const service = dict.services[slug as keyof typeof dict.services];
  const serviceTitle = service?.name || slug;
  const subTitle = subslug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    title: `${subTitle} - ${serviceTitle} | Good Choice Furniture`,
    description: `Get ${subTitle.toLowerCase()} services from Good Choice Furniture. Call or message us on WhatsApp for immediate assistance.`,
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
  if (!service) return null;

  const subTitle = subslug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return (
    <>
      {/* Hero Section */}
      <section className="bg-paper pt-12 pb-8 sm:pt-20 sm:pb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full blur-3xl opacity-30 -mr-48 -mt-48"></div>

        <div className="container-x relative z-10">
          {/* Breadcrumb */}
          <div className="flex gap-2 text-sm text-ink/60 mb-6">
            <Link href={localizedPath(locale, "/")} className="hover:text-ink">
              Home
            </Link>
            <span>/</span>
            <Link href={localizedPath(locale, `/services/${slug}`)} className="hover:text-ink">
              {service.name}
            </Link>
            <span>/</span>
            <span className="text-ink">{subTitle}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-navy mb-4 leading-tight">
            {subTitle}
          </h1>
          <p className="text-lg sm:text-xl text-ink/70 max-w-2xl mb-8">
            Professional {subTitle.toLowerCase()} services tailored to your needs. Contact us today for a free quote.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <WhatsAppButton
              message={dict.floating.message}
              label={dict.common.whatsappUs}
              location="subcategory-hero"
            />
            <CallButton label={dict.common.callNow} location="subcategory-hero" variant="outline-dark" />
          </div>
        </div>
      </section>

      {/* Showcase Section - Full width with image */}
      <section className="bg-blue-100 py-12 sm:py-16 relative overflow-hidden rounded-3xl mx-4 sm:mx-0 my-8 sm:my-12">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-96">
            {/* Floating Card */}
            <div className="relative z-10 order-2 lg:order-1">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
                <div className="w-12 h-1.5 bg-gradient-to-r from-maroon to-transparent mb-6 rounded-full"></div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-4">
                  {subTitle}
                </h2>
                <p className="text-base sm:text-lg text-ink/70 mb-6 leading-relaxed">
                  Expert {subTitle.toLowerCase()} services tailored to your specific needs. Our experienced team ensures quality work and customer satisfaction.
                </p>

                {/* Benefits List */}
                <ul className="space-y-3 mb-6">
                  {[
                    "Professional and experienced team",
                    "Quick and reliable service",
                    "Transparent pricing",
                    "Available same-day",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <div className="shrink-0 mt-0.5">
                        <div className="flex items-center justify-center size-5 rounded-full bg-maroon/10">
                          <span className="text-maroon font-bold text-xs">✓</span>
                        </div>
                      </div>
                      <span className="text-ink/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Trending */}
                <div className="pt-5 border-t border-border/30">
                  <p className="text-xs sm:text-sm text-ink/70">
                    <span className="font-bold text-navy">Why Choose Us:</span>
                    <br />
                    <span className="text-ink/60">
                      12+ years serving Doha with trusted, professional service
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Image Area */}
            <div className="order-1 lg:order-2 h-96 bg-gradient-to-br from-blue-200 to-blue-100 rounded-xl overflow-hidden flex items-center justify-center">
              <div className="text-6xl opacity-30">📦</div>
            </div>
          </div>
        </div>
      </section>

      {/* Brag/Stats Section */}
      <section className="bg-paper/50 border-y border-border">
        <div className="container-x py-8 sm:py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="font-display text-2xl sm:text-3xl text-maroon font-bold">
                12+
              </p>
              <p className="text-xs sm:text-sm text-ink/60 mt-2">Years in Business</p>
            </div>
            <div className="text-center">
              <p className="font-display text-2xl sm:text-3xl text-maroon font-bold">
                5000+
              </p>
              <p className="text-xs sm:text-sm text-ink/60 mt-2">Services Completed</p>
            </div>
            <div className="text-center">
              <p className="font-display text-2xl sm:text-3xl text-maroon font-bold">
                4.8★
              </p>
              <p className="text-xs sm:text-sm text-ink/60 mt-2">Customer Rating</p>
            </div>
            <div className="text-center">
              <p className="font-display text-2xl sm:text-3xl text-maroon font-bold">
                100%
              </p>
              <p className="text-xs sm:text-sm text-ink/60 mt-2">Satisfaction Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CtaBand
        locale={locale}
        title={`Ready for ${subTitle}?`}
        text="Get in touch today. We're available via WhatsApp or phone for immediate assistance."
        whatsappLabel={dict.common.whatsappUs}
        whatsappMessage={dict.floating.message}
        quoteLabel={dict.common.getQuote}
      />
    </>
  );
}
