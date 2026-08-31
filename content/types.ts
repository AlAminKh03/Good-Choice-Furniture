import type { AreaKey, Locale } from "@/lib/site";

export const serviceSlugs = ["sales", "repair", "installation", "moving", "disposal"] as const;
export type ServiceSlug = (typeof serviceSlugs)[number];

export interface Faq {
  q: string;
  a: string;
}

export interface ServiceContent {
  slug: ServiceSlug;
  name: string;
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
    relatedServices: string;
    backToServices: string;
    openMenu: string;
    closeMenu: string;
    languageLabel: string;
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
    videoHeading: string;
    videoTitle: string;
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
