import type { MetadataRoute } from "next";
import { en } from "@/content/en";
import { serviceSlugs } from "@/content/types";
import { site } from "@/lib/site";

/** XML sitemap with hreflang alternates for every route (PRD §6). */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/services", "/gallery", "/about", "/blog", "/quote", "/contact"];
  const servicePaths = serviceSlugs.map((s) => `/services/${s}`);
  const blogPaths = en.blog.posts.map((p) => `/blog/${p.slug}`);
  const allPaths = [...staticPaths, ...servicePaths, ...blogPaths];

  return allPaths.flatMap((path) =>
    (["en", "ar"] as const).map((locale) => ({
      url: `${site.url}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : path.startsWith("/services") ? 0.9 : 0.7,
      alternates: {
        languages: {
          en: `${site.url}/en${path}`,
          ar: `${site.url}/ar${path}`,
          "x-default": `${site.url}/en${path}`,
        },
      },
    })),
  );
}
