"use client";

import { usePathname } from "next/navigation";
import { otherLocale, type Locale } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

/** EN/AR switch — swaps the locale prefix, preserving the current path. */
export function LanguageToggle({
  locale,
  label,
  otherLocaleBlogSlugs,
}: {
  locale: Locale;
  label: string;
  /**
   * Blog slugs the *other* locale actually has. Every other route exists in
   * both languages; the blog is the one place they diverge.
   */
  otherLocaleBlogSlugs: readonly string[];
}) {
  const pathname = usePathname() ?? `/${locale}`;
  const target = otherLocale(locale);
  const href = swapLocale(pathname, target, otherLocaleBlogSlugs);

  return (
    <a
      href={href}
      hrefLang={target}
      data-track="language_switch"
      onClick={() => {
        trackEvent("language_switch", { from: locale, to: target });
        // Remember the explicit choice for future visits.
        document.cookie = `NEXT_LOCALE=${target};path=/;max-age=31536000`;
      }}
      className="rounded-full border border-maroon/30 px-3.5 py-1.5 text-sm font-bold text-maroon transition-colors hover:bg-maroon hover:text-paper"
    >
      {label}
    </a>
  );
}

/**
 * Swap the locale prefix, but never point at a page the target locale does
 * not have.
 *
 * Arabic has four of the twelve blog posts. Blindly swapping the prefix meant
 * a visitor reading an English-only post who clicked العربية — someone telling
 * us in the clearest possible way that they would rather read Arabic — landed
 * on a 404. Now they land on the Arabic blog index, which is a real page with
 * somewhere to go next.
 *
 * Only the blog needs this: services, subcategories and the static pages are
 * present in both dictionaries by contract, so their paths always resolve.
 */
function swapLocale(pathname: string, target: Locale, targetBlogSlugs: readonly string[]): string {
  const swapped = pathname.replace(/^\/(en|ar)(\/|$)/, `/${target}$2`);
  const post = swapped.match(/^\/(?:en|ar)\/blog\/([^/]+)\/?$/);
  if (post && !targetBlogSlugs.includes(post[1])) return `/${target}/blog`;
  return swapped;
}
