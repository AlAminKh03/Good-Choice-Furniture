import type { Metadata } from "next";
import { getDictionary, isLocale } from "@/lib/i18n";
import { areaKeys, site } from "@/lib/site";
import { waLink } from "@/lib/whatsapp";
import { serviceSlugs } from "@/content/types";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { MapEmbed } from "@/components/map-embed";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/icons";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(isLocale(lang) ? lang : "en");
  return {
    title: { absolute: dict.contact.metaTitle },
    description: dict.contact.metaDescription,
    alternates: {
      canonical: `/${dict.locale}/contact`,
      languages: { en: "/en/contact", ar: "/ar/contact", "x-default": "/en/contact" },
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const dict = await getDictionary(locale);
  const c = dict.contact;

  const cards = [
    {
      icon: PhoneIcon,
      title: c.callTitle,
      text: c.callText,
      href: site.phoneHref,
      value: site.phoneDisplay,
      track: "call_click",
      dirLtr: true,
    },
    {
      icon: WhatsAppIcon,
      title: c.whatsappTitle,
      text: c.whatsappText,
      href: waLink(dict.floating.message),
      value: site.phoneDisplay,
      track: "whatsapp_click",
      dirLtr: true,
    },
    {
      icon: MailIcon,
      title: c.emailTitle,
      text: site.email,
      href: `mailto:${site.email}`,
      value: site.email,
      track: "email_click",
      dirLtr: true,
    },
    {
      icon: ClockIcon,
      title: c.hoursTitle,
      text: c.hours,
      href: null,
      value: null,
      track: null,
      dirLtr: false,
    },
  ];

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.heading} subtitle={c.intro} />

      <section className="container-x py-14 sm:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;
            const inner = (
              <>
                <span className="flex size-11 items-center justify-center rounded-lg border border-maroon/10 bg-maroon/5 text-maroon">
                  <Icon className="size-6" />
                </span>
                <h2 className="mt-3 font-bold text-navy">{card.title}</h2>
                <p className="mt-1 whitespace-pre-line text-sm/6 text-ink/70">{card.text}</p>
                {card.value ? (
                  <p dir={card.dirLtr ? "ltr" : undefined} className="mt-2 text-start text-sm font-bold text-maroon">
                    {card.value}
                  </p>
                ) : null}
              </>
            );
            return card.href ? (
              <a
                key={card.title}
                href={card.href}
                {...(card.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                data-track={card.track ?? undefined}
                data-track-location="contact-card"
                className="rounded-xl border border-ink/10 bg-white/70 p-5 shadow-[0_1px_2px_rgba(34,26,20,0.05)] transition-all hover:-translate-y-1 hover:border-brass/60 hover:shadow-[0_12px_32px_-12px_rgba(138,21,56,0.25)]"
              >
                {inner}
              </a>
            ) : (
              <div key={card.title} className="rounded-xl border border-ink/10 bg-white/70 p-5">
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-sand">
        <div className="container-x grid gap-10 py-14 sm:py-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl text-navy">{c.formHeading}</h2>
            <p className="mt-2 text-sm/6 text-ink/70">{c.formIntro}</p>
            <div className="mt-6 rounded-xl border border-ink/10 bg-paper p-6 shadow-[0_1px_2px_rgba(34,26,20,0.05)]">
              <QuoteForm
                locale={locale}
                form={dict.quote.form}
                services={serviceSlugs.map((s) => [s, dict.services[s].name])}
                location="contact"
              />
            </div>
          </div>
          <div className="space-y-6">
            <MapEmbed title={c.mapTitle} />
            <div className="rounded-xl border border-ink/10 bg-white/70 p-6">
              <h3 className="font-display text-sm text-brass">{dict.common.areasHeading}</h3>
              <ul className="mt-4 grid grid-cols-2 gap-2.5">
                {areaKeys.map((k) => (
                  <li key={k} className="flex items-center gap-2 text-sm font-semibold text-ink/75">
                    <PinIcon className="size-4 text-brass" />
                    {dict.areas[k]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
