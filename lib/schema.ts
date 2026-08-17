import { site } from "./site";
import type { Locale } from "./site";

/**
 * Schema.org JSON-LD builders (PRD §6: LocalBusiness, Service, FAQPage).
 * Rendered via <JsonLd> as application/ld+json script tags.
 */

export function localBusinessSchema(locale: Locale, areas: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#business`,
    name: locale === "ar" ? "بيتك لخدمات المنزل" : "Baytak Home Services",
    url: `${site.url}/${locale}`,
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Doha",
      addressCountry: "QA",
    },
    areaServed: areas.map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    priceRange: "$$",
  };
}

export function serviceSchema(opts: {
  locale: Locale;
  name: string;
  description: string;
  slug: string;
  areas: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    provider: { "@id": `${site.url}/#business` },
    areaServed: opts.areas.map((name) => ({ "@type": "City", name })),
    url: `${site.url}/${opts.locale}/services/${opts.slug}`,
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema(opts: {
  locale: Locale;
  title: string;
  description: string;
  slug: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.date,
    inLanguage: opts.locale === "ar" ? "ar-QA" : "en-QA",
    author: { "@id": `${site.url}/#business` },
    publisher: { "@id": `${site.url}/#business` },
    mainEntityOfPage: `${site.url}/${opts.locale}/blog/${opts.slug}`,
  };
}
