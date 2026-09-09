import "server-only";
import type { Dictionary } from "@/content/types";
import { isLocale, type Locale } from "./site";

const dictionaries = {
  en: () => import("@/content/en").then((m) => m.en),
  ar: () => import("@/content/ar").then((m) => m.ar),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}

/**
 * Which locales actually have a translation of this blog post.
 *
 * The two dictionaries are not at parity: English has twelve posts, Arabic
 * has the four that have been translated so far. Anything that advertises a
 * URL — the sitemap, hreflang alternates — has to ask this rather than assume
 * both, or it points search engines at pages that 404.
 *
 * Returns locales in a stable order so generated markup does not churn.
 */
export async function localesWithPost(slug: string): Promise<Locale[]> {
  const entries = await Promise.all(
    (Object.keys(dictionaries) as Locale[]).map(async (locale) => {
      const dict = await getDictionary(locale);
      return dict.blog.posts.some((p) => p.slug === slug) ? locale : null;
    }),
  );
  return entries.filter((l): l is Locale => l !== null);
}

export { isLocale };
export type { Locale };
