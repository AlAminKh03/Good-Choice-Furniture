"use client";

import { useEffect } from "react";
import Script from "next/script";
import { trackEvent, type TrackEvent } from "@/lib/analytics";

/**
 * GA4 loader + delegated click tracking (PRD §6).
 * Set NEXT_PUBLIC_GA_ID in .env to enable. Any element with
 * data-track="event_name" reports clicks, with optional
 * data-track-location for context.
 */
export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    function onClick(event: MouseEvent) {
      const el = (event.target as HTMLElement).closest<HTMLElement>("[data-track]");
      if (!el) return;
      trackEvent(el.dataset.track as TrackEvent, {
        location: el.dataset.trackLocation ?? "",
      });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${gaId}');`}
      </Script>
    </>
  );
}
