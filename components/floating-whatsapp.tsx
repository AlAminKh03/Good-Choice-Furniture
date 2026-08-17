import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";

/**
 * Floating WhatsApp pill in recognizable WhatsApp green, label always
 * visible — desktop / tablet only; on mobile the sticky MobileCtaBar
 * takes over. Bottom-right in LTR / bottom-left in RTL via `end-*`.
 */
export function FloatingWhatsApp({
  label,
  message,
}: {
  label: string;
  message: string;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      data-track="whatsapp_click"
      data-track-location="floating"
      className="fixed bottom-5 end-5 z-50 hidden items-center gap-2 rounded-full bg-wa px-5 py-3 text-sm font-bold text-white shadow-[0_10px_28px_-8px_rgba(22,163,74,0.55)] transition-all hover:-translate-y-0.5 hover:bg-wa-deep md:inline-flex"
    >
      <WhatsAppIcon className="size-5" />
      {label}
    </a>
  );
}
