import Link from "next/link";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/site";
import { localizedPath } from "@/lib/site";
import { site } from "@/lib/site";
import { waLink } from "@/lib/whatsapp";
import { PhoneIcon, WhatsAppIcon, MailIcon, ClockIcon } from "./icons";
import { BrandMark } from "./brand-mark";

/** Light footer: brand blurb + service / company / contact columns. */
export function SiteFooter({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();
  const serviceLinks = Object.values(dict.services).map((s) => ({
    href: `/services/${s.slug}`,
    label: s.name,
  }));
  const companyLinks = [
    { href: "/about", label: dict.nav.about },
    { href: "/gallery", label: dict.nav.gallery },
    { href: "/blog", label: dict.nav.blog },
    { href: "/quote", label: dict.nav.quote },
    { href: "/contact", label: dict.nav.contact },
  ];

  return (
    <footer className="mt-10 border-t border-ink/8 bg-paper">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <BrandMark className="size-9 shrink-0" />
            <span className="font-display text-2xl text-navy">{site.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm/6 text-ink/60">{dict.footer.blurb}</p>
        </div>

        <nav aria-label={dict.footer.servicesTitle}>
          <h3 className="text-xs font-bold tracking-widest text-maroon uppercase rtl:tracking-normal">{dict.footer.servicesTitle}</h3>
          <ul className="mt-4 space-y-2.5">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={localizedPath(locale, link.href)} className="text-sm text-ink/65 transition-colors hover:text-maroon">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={dict.footer.companyTitle}>
          <h3 className="text-xs font-bold tracking-widest text-maroon uppercase rtl:tracking-normal">{dict.footer.companyTitle}</h3>
          <ul className="mt-4 space-y-2.5">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={localizedPath(locale, link.href)} className="text-sm text-ink/65 transition-colors hover:text-maroon">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-bold tracking-widest text-maroon uppercase rtl:tracking-normal">{dict.footer.contactTitle}</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink/65">
            <li>
              <a href={site.phoneHref} data-track="call_click" data-track-location="footer" className="inline-flex items-center gap-2 transition-colors hover:text-maroon">
                <PhoneIcon className="size-4 text-maroon" />
                <span dir="ltr">{site.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a
                href={waLink(dict.floating.message)}
                target="_blank"
                rel="noopener noreferrer"
                data-track="whatsapp_click"
                data-track-location="footer"
                className="inline-flex items-center gap-2 transition-colors hover:text-maroon"
              >
                <WhatsAppIcon className="size-4 text-wa" />
                <span dir="ltr">{site.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} data-track="email_click" data-track-location="footer" className="inline-flex items-center gap-2 transition-colors hover:text-maroon">
                <MailIcon className="size-4 text-maroon" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <ClockIcon className="mt-0.5 size-4 shrink-0 text-maroon" />
              <span>{dict.footer.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/8">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-ink/45 sm:flex-row">
          <p>© {year} {site.name}. {dict.footer.rights}</p>
          <p className="flex items-center gap-1.5">
            <span aria-hidden className="inline-block size-2.5 rotate-45 bg-maroon" />
            {dict.header.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
