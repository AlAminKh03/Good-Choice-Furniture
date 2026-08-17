import Link from "next/link";
import { localizedPath, site, type Locale } from "@/lib/site";
import { waLink } from "@/lib/whatsapp";
import { PhoneIcon, QuoteDocIcon, WhatsAppIcon } from "./icons";

/**
 * Sticky mobile conversion bar (replaces the floating WhatsApp button
 * on small screens): Call | WhatsApp | Quote, always one thumb-tap away.
 * Server component — no JS needed.
 */
export function MobileCtaBar({
  locale,
  callLabel,
  whatsappLabel,
  quoteLabel,
  message,
}: {
  locale: Locale;
  callLabel: string;
  whatsappLabel: string;
  quoteLabel: string;
  message: string;
}) {
  return (
    <nav
      aria-label={quoteLabel}
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-ink/10 bg-paper/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_16px_rgba(34,26,20,0.08)] md:hidden"
    >
      <a
        href={site.phoneHref}
        data-track="call_click"
        data-track-location="mobile-bar"
        className="flex flex-col items-center gap-1 py-2.5 text-[0.7rem] font-bold text-maroon"
      >
        <PhoneIcon className="size-5" />
        {callLabel}
      </a>
      <a
        href={waLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        data-track="whatsapp_click"
        data-track-location="mobile-bar"
        className="flex flex-col items-center gap-1 bg-wa py-2.5 text-[0.7rem] font-bold text-white"
      >
        <WhatsAppIcon className="size-5" />
        {whatsappLabel}
      </a>
      <Link
        href={localizedPath(locale, "/quote")}
        className="flex flex-col items-center gap-1 py-2.5 text-[0.7rem] font-bold text-ink/70"
      >
        <QuoteDocIcon className="size-5" />
        {quoteLabel}
      </Link>
    </nav>
  );
}
