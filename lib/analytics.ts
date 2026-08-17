/**
 * GA4 event tracking (PRD §6 — track WhatsApp clicks, call clicks, form submissions).
 * No-ops silently when GA is not configured or not yet loaded.
 */
export type TrackEvent =
  | "whatsapp_click"
  | "call_click"
  | "email_click"
  | "quote_submit"
  | "quote_email_submit"
  | "language_switch";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: TrackEvent, params: Record<string, string> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}
