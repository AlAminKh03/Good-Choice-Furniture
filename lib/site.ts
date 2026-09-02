/**
 * Central business configuration.
 * TODO(owner): replace placeholder values with the final business name,
 * domain, phone/WhatsApp number, email, and registration details (PRD §8).
 */
export const site = {
  /** Placeholder brand name — swap once finalized (PRD §1). */
  name: "Good Choice Furniture",
  /** Placeholder domain — open question: .qa vs .com (PRD §10). */
  url: "https://baytak.qa",
  phoneDisplay: "+974 5555 1234",
  phoneHref: "tel:+97455551234",
  /** wa.me requires digits only, international format without '+'. */
  whatsappNumber: "97455551234",
  email: "info@baytak.qa",
  /** YouTube video id for the homepage intro video (placeholder). */
  introVideoId: "aqz-KE-bpKQ",
  /** Google Maps embed query (no API key needed with output=embed). */
  mapsQuery: "Doha, Qatar",
  /** Commercial registration placeholder shown on the About page. */
  crNumber: "C.R. 000000 (placeholder)",
} as const;

export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "ar" : "en";
}

/** Locale-aware path helper: `localizedPath("ar", "/services/moving")`. */
export function localizedPath(locale: Locale, path: string): string {
  return `/${locale}${path === "/" ? "" : path}`;
}

/** Service coverage areas (PRD §5). Translated names live in the dictionaries. */
export const areaKeys = [
  "doha",
  "alRayyan",
  "alWakrah",
  "lusail",
  "thePearl",
  "alKhor",
  "ummSalal",
] as const;
export type AreaKey = (typeof areaKeys)[number];
