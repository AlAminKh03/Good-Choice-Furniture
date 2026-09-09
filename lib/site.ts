/**
 * Central business configuration.
 *
 * The brand name is settled — Good Choice Furniture. Everything else here is
 * still a stand-in.
 * TODO(owner): replace placeholder values with the final domain,
 * phone/WhatsApp number, email, and registration details (PRD §8).
 */
export const site = {
  /** Final brand name (PRD §1). */
  name: "Good Choice Furniture",
  /**
   * Placeholder domain — open question: .qa vs .com (PRD §10). Registering it
   * is on the critical path: this string is the base for every canonical URL,
   * the sitemap and the JSON-LD, so all three stay wrong until it is real.
   */
  url: "https://goodchoicefurniture.qa",
  phoneDisplay: "+974 5555 1234",
  phoneHref: "tel:+97455551234",
  /** wa.me requires digits only, international format without '+'. */
  whatsappNumber: "97455551234",
  email: "info@goodchoicefurniture.qa",
  /**
   * YouTube id for the homepage intro video (PRD §4, §5).
   *
   * null until the owner supplies real footage (PRD §8) — the homepage gates
   * the whole video section on this, so nothing renders rather than a stock
   * clip standing in for the business. Set the id and the section appears.
   */
  introVideoId: null as string | null,
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

/**
 * Is `href` the nav entry for the page currently on screen?
 *
 * `pathname` comes from usePathname(), so it already carries the locale
 * prefix. Everything except Home matches its subtree, which is what makes
 * "Services" stay lit on /services/repair and on a subcategory page beneath
 * it. Home has to be an exact match or it would light up on every route.
 *
 * The trailing slash in the startsWith check matters: without it /disposal
 * would also claim /disposal-something, and it keeps /services/disposal
 * (a service page) from lighting the separate /disposal nav entry.
 */
export function isActivePath(pathname: string, locale: Locale, href: string): boolean {
  const target = localizedPath(locale, href);
  if (href === "/") return pathname === target || pathname === `${target}/`;
  return pathname === target || pathname.startsWith(`${target}/`);
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
