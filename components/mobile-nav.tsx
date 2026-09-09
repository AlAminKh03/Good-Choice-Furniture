"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActivePath, localizedPath, type Locale } from "@/lib/site";
import { CloseIcon, MenuIcon } from "./icons";

export function MobileNav({
  locale,
  links,
  openLabel,
  closeLabel,
  themeToggle,
}: {
  locale: Locale;
  links: { href: string; label: string }[];
  openLabel: string;
  closeLabel: string;
  /** Rendered inside the panel: the header bar has no room for it on a phone. */
  themeToggle?: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? closeLabel : openLabel}
        className="rounded-lg p-2.5 text-maroon hover:bg-sand transition-colors active:scale-95"
      >
        {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
      </button>
      {open ? (
        <nav className="absolute inset-x-0 top-full z-50 border-b border-border bg-paper shadow-lg">
          <ul className="container-x flex flex-col">
            {links.map((link) => {
              const isCurrent = isActivePath(pathname, locale, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={localizedPath(locale, link.href)}
                    onClick={() => setOpen(false)}
                    aria-current={isCurrent ? "page" : undefined}
                    // Marked with a colour, a weight, an inline-start bar and
                    // aria-current — colour on its own is not a sufficient
                    // state cue (WCAG 1.4.1).
                    className={`block border-b border-border py-4 text-base font-semibold transition-colors last:border-0 active:bg-sand ${
                      isCurrent
                        ? "border-s-4 border-s-maroon bg-sand/60 ps-3 text-maroon"
                        : "px-2 text-ink hover:bg-sand/50 hover:text-maroon"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          {themeToggle ? (
            <div className="container-x flex justify-end pb-4 pt-3">{themeToggle}</div>
          ) : null}
        </nav>
      ) : null}
    </div>
  );
}
