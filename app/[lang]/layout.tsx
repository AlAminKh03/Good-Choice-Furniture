import type { Metadata, Viewport } from "next";
import {
  Fraunces,
  Noto_Naskh_Arabic,
  IBM_Plex_Sans,
  IBM_Plex_Sans_Arabic,
} from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { areaKeys, locales, localizedPath, site } from "@/lib/site";
import { localBusinessSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { Analytics } from "@/components/analytics";

/* Typography v2: Fraunces (EN display serif), Noto Naskh Arabic (AR
 * display serif), IBM Plex Sans / Plex Sans Arabic for body. */
const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-fraunces",
});
const notoNaskh = Noto_Naskh_Arabic({
  subsets: ["arabic", "latin"],
  variable: "--font-naskh",
});
const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex",
});
const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic", "latin"],
  variable: "--font-ibm-plex-arabic",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#1B5E4A",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const dict = await getDictionary(locale);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: dict.meta.defaultTitle,
      template: `%s | ${site.name}`,
    },
    description: dict.meta.defaultDescription,
    alternates: {
      canonical: localizedPath(locale, "/"),
      languages: {
        en: localizedPath("en", "/"),
        ar: localizedPath("ar", "/"),
        "x-default": localizedPath("en", "/"),
      },
    },
    openGraph: {
      siteName: site.name,
      locale: locale === "ar" ? "ar_QA" : "en_QA",
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  // dynamicParams=false guarantees en/ar; coerce keeps not-found safe.
  const locale: Locale = isLocale(lang) ? lang : "en";
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(locale);
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale === "ar" ? "ar-QA" : "en-QA"}
      dir={dir}
      className={`${fraunces.variable} ${notoNaskh.variable} ${ibmPlex.variable} ${ibmPlexArabic.variable} h-full antialiased`}
    >
      {/* pb on <body only on mobile so the fixed MobileCtaBar never covers the footer */}
      <body className="flex min-h-full flex-col pb-16 font-body md:pb-0">
        {/* Reveal animations enhance with JS; keep content visible without it. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <JsonLd
          data={localBusinessSchema(
            locale,
            areaKeys.map((k) => dict.areas[k]),
          )}
        />
        <SiteHeader locale={locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <SiteFooter locale={locale} dict={dict} />
        <FloatingWhatsApp label={dict.floating.label} message={dict.floating.message} />
        <MobileCtaBar
          locale={locale}
          callLabel={dict.common.callNow}
          whatsappLabel={dict.common.whatsappUs}
          quoteLabel={dict.nav.quote}
          message={dict.floating.message}
        />
        <Analytics />
      </body>
    </html>
  );
}
