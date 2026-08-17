import Link from "next/link";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/site";
import { localizedPath } from "@/lib/site";
import { site } from "@/lib/site";
import { PhoneIcon } from "./icons";
import { LanguageToggle } from "./language-toggle";
import { MobileNav } from "./mobile-nav";

/** Sticky header: wordmark, primary nav, EN/AR toggle, phone chip, quote CTA. */
export function SiteHeader({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const links = [
    { href: "/", label: dict.nav.home },
    { href: "/services", label: dict.nav.services },
    { href: "/gallery", label: dict.nav.gallery },
    { href: "/about", label: dict.nav.about },
    { href: "/blog", label: dict.nav.blog },
    { href: "/contact", label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-ink/8 bg-paper/95 shadow-[0_1px_0_rgba(185,138,69,0.18)]">
      <div className="container-x relative flex items-center justify-between gap-4 py-3">
        <Link
          href={localizedPath(locale, "/")}
          className="flex items-center gap-2.5"
          aria-label={site.name}
        >
          <span
            aria-hidden
            className="block size-9 rotate-45 rounded-[4px] border-2 border-maroon bg-maroon"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-xl sm:text-2xl text-navy">{site.name}</span>
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
