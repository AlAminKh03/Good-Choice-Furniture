import type { AreaKey, Locale } from "@/lib/site";

export const serviceSlugs = ["sales", "repair", "installation", "moving", "disposal"] as const;
export type ServiceSlug = (typeof serviceSlugs)[number];

export interface Faq {
  q: string;
  a: string;
}

/**
 * One subcategory of a service — its own page at
 * /{lang}/services/{service}/{slug}.
 *
 * These live in the dictionaries (not in a component) because three
 * server-side consumers need them: the sitemap, `generateStaticParams`, and
 * the crawlable link list on the service page. The `slug` is shared across
 * locales — it is the URL — while `label` and `description` are translated.
 */
export interface SubcategoryContent {
  slug: string;
  label: string;
  /** One-line intro used on the subcategory hero and its showcase card. */
  description: string;
}

export interface ServiceContent {
  slug: ServiceSlug;
  name: string;
  /** Subcategory pages under this service; same slugs in every locale. */
  subcategories: SubcategoryContent[];
  tagline: string;
  cardDescription: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  overview: string[];
  features: { title: string; description: string }[];
  process: { title: string; description: string }[];
  /** Repair & sales: before/after showcase captions. */
  showcase?: { title: string; caption: string }[];
  /** Disposal page (PRD §5): compliance statement + acceptance scope. */
  compliance?: { heading: string; body: string };
  accepted?: string[];
  notAccepted?: string[];
  notAcceptedNote?: string;
  faqs: Faq[];
  /**
   * Two selling points shown under this service in the homepage
   * ServiceSelector, plus its "trending" line.
   *
   * These live here rather than inline in app/[lang]/page.tsx, where they
   * were hardcoded English for all five services — so the Arabic homepage
   * rendered fifteen English strings inside its main interactive module.
   */
  selectorDetails: string[];
  selectorTrending: string;
  /** Pre-filled WhatsApp message specific to this service (PRD §5). */
  whatsappMessage: string;
  ctaLabel: string;
  /** Related blog post slugs for "Expert Tips & Guides" section */
  relatedBlogSlugs?: string[];
  /** Curated related service slugs (not mechanical) */
  relatedServiceSlugs?: string[];
}

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  date: string; // ISO 8601
  category: string;
  relatedService: ServiceSlug;
  blocks: BlogBlock[];
}

export interface GalleryItem {
  id: string;
  service: ServiceSlug;
  title: string;
  kind: "single" | "pair";
  /**
   * Keys into `imageMap` (lib/images.ts), not URLs — the gallery is shared
   * between locales, so the photo is picked by key and only the `title`
   * differs per language. Any key left unset renders the branded
   * placeholder, which is the intended state until the owner supplies real
   * job photos (PRD §8).
   */
  /** `kind: "single"` — the one photo of the finished job. */
  image?: string;
  /** `kind: "pair"` — the same item before the work. */
  beforeImage?: string;
  /** `kind: "pair"` — the same item after the work. */
  afterImage?: string;
}

export interface QuoteFormDict {
  name: string;
  namePlaceholder: string;
  phone: string;
  phonePlaceholder: string;
  service: string;
  servicePlaceholder: string;
  photo: string;
  photoHint: string;
  message: string;
  messagePlaceholder: string;
  submit: string;
  submitEmail: string;
  whatsappNote: string;
  validation: string;
}

export interface Dictionary {
  locale: Locale;
  meta: {
    defaultTitle: string;
    defaultDescription: string;
  };
  nav: {
    home: string;
    services: string;
    gallery: string;
    about: string;
    blog: string;
    disposal: string;
    quote: string;
    contact: string;
  };
  common: {
    getQuote: string;
    whatsappUs: string;
    callNow: string;
    learnMore: string;
    viewAll: string;
    readMore: string;
    before: string;
    after: string;
    ourProcess: string;
    faqHeading: string;
    areasHeading: string;
    /** Coverage answer. Deliberately not a list of districts — the business
     *  works across the whole country, and naming a handful of areas reads
     *  as a limit to anyone who lives outside them. */
    areasAllQatar: string;
    relatedServices: string;
    backToServices: string;
    openMenu: string;
    closeMenu: string;
    languageLabel: string;
    /* Accessible names for controls and landmarks that have no visible text.
     * These are read aloud, so they belong in the dictionaries like any other
     * copy — an Arabic screen-reader user should not hit English here. */
    themeToDark: string;
    themeToLight: string;
    /** Accessible name for the testimonial star row, e.g. "5 out of 5 stars". */
    ratingLabel: string;
    breadcrumbLabel: string;
    filtersLabel: string;
    primaryNavLabel: string;
  };
  header: {
    tagline: string;
  };
  footer: {
    blurb: string;
    servicesTitle: string;
    companyTitle: string;
    contactTitle: string;
    hoursTitle: string;
    hours: string;
    rights: string;
  };
  floating: {
    label: string;
    message: string;
  };
  areas: Record<AreaKey, string>;
  home: {
    metaTitle: string;
    metaDescription: string;
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    heroNote: string;
    heroImageLabel: string;
    /**
     * The hero chat card (components/hero-chat.tsx). Each chip's `message` is
     * pre-typed into the visitor's WhatsApp, so it is written first-person in
     * the customer's voice, not ours. `id` is an analytics key that must match
     * across locales; it is never shown to anyone.
     */
    heroChat: {
      headerName: string;
      headerStatus: string;
      greeting: string;
      greetingTime: string;
      photoCaption: string;
      chipsLabel: string;
      chips: { id: string; label: string; message: string }[];
    };
    videoHeading: string;
    videoTitle: string;
    /** Accessible name for the click-to-play facade button. */
    videoPlayLabel: string;
    stats: { value: string; label: string }[];
    servicesEyebrow: string;
    servicesHeading: string;
    servicesIntro: string;
    whyEyebrow: string;
    whyHeading: string;
    whyIntro: string;
    whyPoints: { title: string; text: string }[];
    areasEyebrow: string;
    areasText: string;
    testimonialsEyebrow: string;
    testimonialsHeading: string;
    galleryEyebrow: string;
    galleryHeading: string;
    galleryCta: string;
    faqHeading: string;
    faqs: Faq[];
    /** Homepage "how it works" booking flow — three steps, WhatsApp-first. */
    /**
     * Scrolling hero ticker. Each entry is one claim; the last is the
     * payoff, because disposal is the service people do not expect a
     * furniture company to offer.
     */
    tickerItems: string[];
    steps: { title: string; text: string }[];
    ctaTitle: string;
    ctaText: string;
  };
  servicesIndex: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    intro: string;
  };
  services: Record<ServiceSlug, ServiceContent>;
  /** Standalone /disposal landing page (app/[lang]/disposal/page.tsx). */
  disposalPage: {
    eyebrow: string;
    featuresHeading: string;
    acceptedHeading: string;
    notAcceptedHeading: string;
    ctaTitle: string;
    ctaText: string;
    imageAlt: string;
  };
  /** Shared chrome for every subcategory page; the per-page copy comes
   *  from the matching `SubcategoryContent`. */
  subcategoryPage: {
    breadcrumbHome: string;
    benefits: string[];
    whyHeading: string;
    whyText: string;
    ctaTitle: string;
    ctaText: string;
    /** Heading above the subcategory links on a service page. */
    exploreHeading: string;
    /** Label on the home selector's "trending" line. */
    trendingLabel: string;
  };
  gallery: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    intro: string;
    filterAll: string;
    emptyState: string;
    items: GalleryItem[];
  };
  testimonials: { name: string; areaKey: AreaKey; quote: string }[];
  about: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    intro: string[];
    valuesHeading: string;
    values: { title: string; text: string }[];
    teamHeading: string;
    teamText: string;
    licensingHeading: string;
    licensingText: string;
    workshopImageAlt: string;
    dohaImageAlt: string;
  };
  blog: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    intro: string;
    byServicePrefix: string;
    posts: BlogPost[];
  };
  quote: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    intro: string;
    stepsHeading: string;
    steps: { title: string; text: string }[];
    form: QuoteFormDict;
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    intro: string;
    callTitle: string;
    callText: string;
    whatsappTitle: string;
    whatsappText: string;
    emailTitle: string;
    hoursTitle: string;
    hours: string;
    mapTitle: string;
    formHeading: string;
    formIntro: string;
  };
  notFound: {
    title: string;
    text: string;
    cta: string;
  };
}
