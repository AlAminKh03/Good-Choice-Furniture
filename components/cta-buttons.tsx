import { waLink } from "@/lib/whatsapp";
import { site } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./icons";

/**
 * The two primary conversion CTAs (PRD §2: WhatsApp clicks + calls are
 * the primary metric). data-track attributes feed GA4 via <Analytics>.
 * WhatsApp CTAs use recognizable WhatsApp green — the brand color is
 * itself a conversion signal.
 */
export function WhatsAppButton({
  message,
  label,
  location,
  variant = "solid",
  className = "",
}: {
  message: string;
  label: string;
  /** Analytics location label, e.g. "hero", "service-sales". */
  location: string;
  variant?: "solid" | "outline-light";
  className?: string;
}) {
  const styles =
    variant === "solid"
      ? "bg-maroon text-white shadow-sm hover:bg-brand-deep"
      : "border-2 border-paper/70 text-paper hover:bg-paper/10";
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-track="whatsapp_click"
      data-track-location={location}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-colors w-full sm:w-auto ${styles} ${className}`}
    >
      <WhatsAppIcon className="size-5" />
      {label}
    </a>
  );
}

export function CallButton({
  label,
  location,
  variant = "solid",
  className = "",
}: {
  label: string;
  location: string;
  variant?: "solid" | "outline-light" | "outline-dark";
  className?: string;
}) {
  const styles = {
    solid: "bg-maroon text-paper shadow-sm hover:bg-brand-deep",
    "outline-light": "border-2 border-paper/70 text-paper hover:bg-paper/10",
    "outline-dark": "border-2 border-maroon/40 text-maroon hover:bg-maroon/5",
  }[variant];
  return (
    <a
      href={site.phoneHref}
      data-track="call_click"
      data-track-location={location}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-colors w-full sm:w-auto ${styles} ${className}`}
    >
      <PhoneIcon className="size-5" />
      {label}
    </a>
  );
}
