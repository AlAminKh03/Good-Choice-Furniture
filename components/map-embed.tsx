import { site } from "@/lib/site";

/** Lazy-loaded Google Maps embed (no API key required). */
export function MapEmbed({ title, className = "" }: { title: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-lg border border-ink/10 ${className}`}>
      <iframe
        src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="h-80 w-full sm:h-96"
      />
    </div>
  );
}
