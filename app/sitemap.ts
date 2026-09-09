import type { MetadataRoute } from "next";
import { ar } from "@/content/ar";
import { en } from "@/content/en";
import { serviceSlugs } from "@/content/types";
import { locales, site, type Locale } from "@/lib/site";

const dictionaries = { en, ar } as const;

/** XML sitemap with hreflang alternates for every route (PRD §6). */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/services", "/gallery", "/about", "/blog", "/quote", "/contact", "/disposal"];
  const servicePaths = serviceSlugs.map((s) => `/services/${s}`);
  // Subcategory slugs are locale-independent, so reading them from the
  // English dictionary covers both locales.
  const subcategoryPaths = serviceSlugs.flatMap((s) =>
    en.services[s].subcategories.map((sub) => `/services/${s}/${sub.slug}`),
  );
  // Everything above exists in both locales. Blog posts do not — Arabic has
  // four of the twelve — so those are resolved per locale instead of being
  // assumed. Listing a URL here that 404s is a crawl error, and pairing it
  // with an hreflang alternate compounds it.
  const sharedPaths = [...staticPaths, ...servicePaths, ...subcategoryPaths];
  const blogPathsFor = (locale: Locale) =>
    dictionaries[locale].blog.posts.map((p) => `/blog/${p.slug}`);

  /** The locales that actually serve `path`, for its hreflang alternates. */
  const localesFor = (path: string): readonly Locale[] =>
    sharedPaths.includes(path) ? locales : locales.filter((l) => blogPathsFor(l).includes(path));

  return locales.flatMap((locale) =>
    [...sharedPaths, ...blogPathsFor(locale)].map((path) => ({
      url: `${site.url}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : path.startsWith("/services") ? 0.9 : 0.7,
      alternates: {
        languages: Object.fromEntries([
          ...localesFor(path).map((l) => [l, `${site.url}/${l}${path}`]),
          ["x-default", `${site.url}/${localesFor(path).includes("en") ? "en" : locale}${path}`],
        ]),
      },
    })),
  );
}
