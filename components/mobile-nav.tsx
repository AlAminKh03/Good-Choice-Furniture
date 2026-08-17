"use client";

import { useState } from "react";
import Link from "next/link";
import { localizedPath, type Locale } from "@/lib/site";
import { CloseIcon, MenuIcon } from "./icons";

export function MobileNav({
  locale,
  links,
  openLabel,
  closeLabel,
}: {
  locale: Locale;
  links: { href: string; label: string }[];
  openLabel: string;
  closeLabel: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? closeLabel : openLabel}
        className="rounded-md p-2 text-maroon hover:bg-maroon/5"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>
      {open ? (
        <nav className="absolute inset-x-0 top-full border-b border-ink/10 bg-paper shadow-lg">
          <ul className="container-x flex flex-col py-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={localizedPath(locale, link.href)}
                  onClick={() => setOpen(false)}
                  className="block border-b border-ink/5 py-3 text-base font-semibold text-ink last:border-0 hover:text-maroon"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
