import { site } from "./site";

/**
 * Builds a WhatsApp click-to-chat link with a pre-filled message (PRD §5).
 * Each page/service supplies its own message from the dictionaries.
 */
export function waLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject: string, body: string): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
