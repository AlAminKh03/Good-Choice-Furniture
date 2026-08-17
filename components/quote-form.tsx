"use client";

import { useRef, useState } from "react";
import type { QuoteFormDict, ServiceSlug } from "@/content/types";
import { site, type Locale } from "@/lib/site";
import { mailtoLink, waLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { CameraIcon, WhatsAppIcon, MailIcon } from "./icons";

/**
 * Universal quote form (PRD §5). Submission builds a WhatsApp deep link
 * with all details pre-filled (the photo is attached by the user inside
 * WhatsApp — wa.me URLs can't carry files), with an email fallback.
 */
export function QuoteForm({
  locale,
  form,
  services,
  location,
}: {
  locale: Locale;
  form: QuoteFormDict;
  services: [ServiceSlug, string][];
  /** Analytics location: "quote" or "contact". */
  location: string;
}) {
  const [photoName, setPhotoName] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function buildMessage() {
    const data = new FormData(formRef.current!);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "").trim();
    const serviceName = services.find(([s]) => s === service)?.[1] ?? service;

    if (!name || !phone || !service) return null;

    const lines = [
      name,
      phone,
      serviceName,
      message || undefined,
      photoName ? `[${locale === "ar" ? "سأرفق صورة في المحادثة" : "I will attach a photo in the chat"}: ${photoName}]` : undefined,
    ].filter(Boolean);
    return { name, text: lines.join("\n") };
  }

  function submitWhatsApp(e: React.FormEvent) {
    e.preventDefault();
    const built = buildMessage();
    if (!built) {
      setError(true);
      return;
    }
    setError(false);
    trackEvent("quote_submit", { location });
    window.open(waLink(built.text), "_blank", "noopener,noreferrer");
  }

  function submitEmail(e: React.MouseEvent) {
    e.preventDefault();
    const built = buildMessage();
    if (!built) {
      setError(true);
      return;
    }
    setError(false);
    trackEvent("quote_email_submit", { location });
    window.location.href = mailtoLink(
      `${site.name} — ${locale === "ar" ? "طلب عرض سعر" : "Quote request"} (${built.name})`,
      built.text,
    );
  }

  const inputClass =
    "w-full rounded-md border border-ink/15 bg-white/80 px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-brass";
  const labelClass = "mb-1.5 block text-sm font-bold text-navy";

  return (
    <form ref={formRef} onSubmit={submitWhatsApp} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`qf-name-${location}`} className={labelClass}>
            {form.name}
          </label>
          <input
            id={`qf-name-${location}`}
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder={form.namePlaceholder}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor={`qf-phone-${location}`} className={labelClass}>
            {form.phone}
          </label>
          <input
            id={`qf-phone-${location}`}
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            dir="ltr"
            placeholder={form.phonePlaceholder}
            className={`${inputClass} text-start`}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`qf-service-${location}`} className={labelClass}>
          {form.service}
        </label>
        <select id={`qf-service-${location}`} name="service" required defaultValue="" className={inputClass}>
          <option value="" disabled>
            {form.servicePlaceholder}
          </option>
          {services.map(([slug, name]) => (
            <option key={slug} value={slug}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={`qf-photo-${location}`} className={labelClass}>
          {form.photo}
        </label>
        <label
          htmlFor={`qf-photo-${location}`}
          className="flex cursor-pointer items-center gap-3 rounded-md border border-dashed border-brass/50 bg-sand/60 px-4 py-3 text-sm text-ink/70 transition-colors hover:border-brass"
        >
          <CameraIcon className="size-5 shrink-0 text-brass" />
          <span className="truncate">{photoName ?? form.photoHint}</span>
        </label>
        <input
          id={`qf-photo-${location}`}
          name="photo"
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={(e) => setPhotoName(e.target.files?.[0]?.name ?? null)}
        />
      </div>

      <div>
        <label htmlFor={`qf-message-${location}`} className={labelClass}>
          {form.message}
        </label>
        <textarea
          id={`qf-message-${location}`}
          name="message"
          rows={3}
          placeholder={form.messagePlaceholder}
          className={inputClass}
        />
      </div>

      {error ? (
        <p role="alert" className="rounded-md bg-maroon/10 px-4 py-2.5 text-sm font-semibold text-maroon">
          {form.validation}
        </p>
      ) : null}

      <div className="flex flex-col gap-3">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-maroon px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-deep"
        >
          <WhatsAppIcon className="size-5" />
          {form.submit}
        </button>
        <button
          type="button"
          onClick={submitEmail}
          className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-ink/60 transition-colors hover:text-maroon"
        >
          <MailIcon className="size-4" />
          {form.submitEmail}
        </button>
        <p className="text-xs/5 text-ink/50">{form.whatsappNote}</p>
      </div>
    </form>
  );
}
