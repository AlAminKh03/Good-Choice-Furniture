"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActivePath, localizedPath, type Locale } from "@/lib/site";

/**
 * Desktop primary nav.
 *
 * A client component purely so it can read usePathname() — the header itself
 * stays a server component, and only this list ships. The current page was
 * previously indistinguishable from the other five links: every entry
 * rendered in the same muted ink, so nothing on screen told you where you
 * were.
 *
 * The active entry gets three cues, not one: the brand colour, the brass
 * underline the others only show on hover, and aria-current="page" so it is
 * announced rather than merely coloured (colour alone fails WCAG 1.4.1).
 */
export function NavLinks({
  locale,
  links,
  navLabel,
}: {
  locale: Locale;
  links: { href: string; label: string }[];
  /** Accessible name for the landmark — distinguishes it from the mobile nav. */
  navLabel: string;
}) {
  const pathname = usePathname();

  return (
    <nav className="hidden md:block" aria-label={navLabel}>
      <ul className="flex items-center gap-6">
        {links.map((link) => {
          const active = isActivePath(pathname, locale, link.href);
          return (
            <li key={link.href}>
              <Link
                href={localizedPath(locale, link.href)}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-semibold decoration-brass decoration-2 underline-offset-8 transition-colors ${
                  active
                    ? "text-maroon underline"
                    : "text-ink/70 hover:text-maroon hover:underline"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
