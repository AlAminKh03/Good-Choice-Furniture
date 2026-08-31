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
        className="rounded-lg p-2.5 text-maroon hover:bg-sand transition-colors active:scale-95"
      >
        {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
      </button>
      {open ? (
        <nav className="absolute inset-x-0 top-full border-b border-border bg-paper/95 backdrop-blur-md shadow-lg z-50">
          <ul className="container-x flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={localizedPath(locale, link.href)}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-4 px-2 text-base font-semibold text-ink last:border-0 hover:text-maroon hover:bg-sand/50 transition-colors active:bg-sand"
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
