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
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 gap-0.5 border-t border-border bg-paper/80 backdrop-blur-md pb-[env(safe-area-inset-bottom)] px-1 py-1.5 shadow-[0_-4px_16px_var(--color-shadow)] md:hidden"
    >
      <a
        href={site.phoneHref}
        data-track="call_click"
        data-track-location="mobile-bar"
        className="flex flex-col items-center justify-center gap-1 rounded-lg py-3 px-2 text-[0.75rem] font-bold text-maroon hover:bg-sand transition-colors active:scale-95"
      >
        <PhoneIcon className="size-6" />
        <span>{callLabel}</span>
      </a>
      <a
        href={waLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        data-track="whatsapp_click"
        data-track-location="mobile-bar"
        className="flex flex-col items-center justify-center gap-1 rounded-lg bg-wa py-3 px-2 text-[0.75rem] font-bold text-white hover:bg-wa-deep transition-colors active:scale-95"
      >
        <WhatsAppIcon className="size-6" />
        <span>{whatsappLabel}</span>
      </a>
      <Link
        href={localizedPath(locale, "/quote")}
        className="flex flex-col items-center justify-center gap-1 rounded-lg py-3 px-2 text-[0.75rem] font-bold text-navy hover:bg-sand transition-colors active:scale-95"
      >
        <QuoteDocIcon className="size-6" />
        <span>{quoteLabel}</span>
      </Link>
    </nav>
  );
}
