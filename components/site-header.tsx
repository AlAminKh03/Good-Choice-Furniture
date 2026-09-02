import Link from "next/link";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/site";
import { localizedPath } from "@/lib/site";
import { site } from "@/lib/site";
import { PhoneIcon } from "./icons";
import { LanguageToggle } from "./language-toggle";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";

/** Sticky header: wordmark, primary nav, EN/AR toggle, phone chip, quote CTA. */
export function SiteHeader({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const links = [
    { href: "/", label: dict.nav.home },
    { href: "/disposal", label: "Disposal" },
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
          className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
          aria-label={site.name}
        >
          <div className="flex items-center justify-center size-10 rounded-lg bg-linear-to-br from-maroon to-brand-deep shadow-md">
            <svg className="size-6 text-paper" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M3 4h18c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1h-1v4c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-4H9v4c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-4H3c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zm2 2v8h14V6H5z"/>
            </svg>
          </div>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg sm:text-xl font-bold text-navy">{site.name}</span>
            <span className="text-[0.65rem] font-medium text-ink/50">{dict.header.tagline}</span>
          </span>
        </Link>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={localizedPath(locale, link.href)}
                  className="text-sm font-semibold text-ink/70 decoration-brass decoration-2 underline-offset-8 transition-colors hover:text-maroon hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <LanguageToggle locale={locale} label={dict.common.languageLabel} />
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
            openLabel={dict.common.openMenu}
            closeLabel={dict.common.closeMenu}
          />
        </div>
      </div>
    </header>
  );
}
