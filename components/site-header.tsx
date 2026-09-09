import Link from "next/link";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/site";
import { localizedPath } from "@/lib/site";
import { site } from "@/lib/site";
import { PhoneIcon } from "./icons";
import { BrandMark } from "./brand-mark";
import { LanguageToggle } from "./language-toggle";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";
import { NavLinks } from "./nav-links";

/** Sticky header: wordmark, primary nav, EN/AR toggle, phone chip, quote CTA. */
export function SiteHeader({
  locale,
  dict,
  otherLocaleBlogSlugs,
}: {
  locale: Locale;
  dict: Dictionary;
  /** Blog slugs the other locale has — see LanguageToggle. */
  otherLocaleBlogSlugs: readonly string[];
}) {
  const links = [
    { href: "/", label: dict.nav.home },
    { href: "/disposal", label: dict.nav.disposal },
    { href: "/services", label: dict.nav.services },
    { href: "/gallery", label: dict.nav.gallery },
    { href: "/about", label: dict.nav.about },
    { href: "/blog", label: dict.nav.blog },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-paper/70 backdrop-blur-md shadow-[0_2px_8px_var(--color-shadow)]">
      <div className="container-x relative flex items-center justify-between gap-4 py-3">
        <Link
          href={localizedPath(locale, "/")}
          className="flex min-w-0 items-center gap-2 sm:gap-2.5 hover:opacity-80 transition-opacity"
          aria-label={site.name}
        >
          <BrandMark className="size-9 shrink-0 drop-shadow-md sm:size-10" />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="font-display whitespace-nowrap text-[0.95rem] sm:text-xl font-bold text-navy">
              {site.name}
            </span>
            {/* The tagline is the first thing to go on a phone — it is the
                least load-bearing line in the header and the reason the
                wordmark had no room to stay on one line. */}
            <span className="hidden text-[0.65rem] font-medium text-ink/50 sm:block">
              {dict.header.tagline}
            </span>
          </span>
        </Link>

        <NavLinks locale={locale} links={links} navLabel={dict.common.primaryNavLabel} />

        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          <span className="hidden sm:inline-flex">
            <ThemeToggle toDarkLabel={dict.common.themeToDark} toLightLabel={dict.common.themeToLight} />
          </span>
          <LanguageToggle
            locale={locale}
            label={dict.common.languageLabel}
            otherLocaleBlogSlugs={otherLocaleBlogSlugs}
          />
          <a
            href={site.phoneHref}
            data-track="call_click"
            data-track-location="header"
            className="hidden items-center gap-2 rounded-full bg-navy px-4 py-2 text-sm font-bold text-paper transition-colors hover:bg-navy-deep sm:inline-flex"
          >
            <PhoneIcon className="size-4" />
            <span dir="ltr">{site.phoneDisplay}</span>
          </a>
          <Link
            href={localizedPath(locale, "/quote")}
            className="hidden rounded-full border-2 border-maroon px-4 py-1.5 text-sm font-bold text-maroon transition-colors hover:bg-maroon hover:text-paper lg:inline-flex"
          >
            {dict.nav.quote}
          </Link>
          <MobileNav
            locale={locale}
            links={[...links, { href: "/quote", label: dict.nav.quote }]}
            themeToggle={<ThemeToggle toDarkLabel={dict.common.themeToDark} toLightLabel={dict.common.themeToLight} />}
            openLabel={dict.common.openMenu}
            closeLabel={dict.common.closeMenu}
          />
        </div>
      </div>
    </header>
  );
}
