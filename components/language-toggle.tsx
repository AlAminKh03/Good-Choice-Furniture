"use client";

import { usePathname } from "next/navigation";
import { otherLocale, type Locale } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

/** EN/AR switch — swaps the locale prefix, preserving the current path. */
export function LanguageToggle({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname() ?? `/${locale}`;
  const target = otherLocale(locale);
  const href = pathname.replace(/^\/(en|ar)(\/|$)/, `/${target}$2`);

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
