# Baytak — Home Services Website

Bilingual (English/Arabic, full RTL) marketing & lead-generation site for a Qatar home
services company. Built to the spec in `baytak-prd.md`. Theme: blush-white / rose-red / navy with colorful per-service accents (see `app/globals.css`).

**Stack:** Next.js 16 (App Router, static export-friendly) · Tailwind CSS 4 · TypeScript

## Commands

```bash
pnpm dev    # dev server (redirects / → /en or /ar by Accept-Language)
pnpm build  # production build — all routes prerendered (SSG)
pnpm lint   # eslint
```

## Structure

| Path | Purpose |
|---|---|
| `app/[lang]/` | All routes, locale-prefixed (`/en`, `/ar`). `dir`/fonts switch per locale |
| `content/en.ts` · `content/ar.ts` | All copy — two full hand-written dictionaries |
| `content/types.ts` | The `Dictionary` contract both locales satisfy |
| `lib/site.ts` | Business config: phone, WhatsApp number, email, areas, domain |
| `lib/schema.ts` | LocalBusiness / Service / FAQPage / BlogPosting JSON-LD |
| `proxy.ts` | Locale redirect (cookie → Accept-Language → en) |
| `components/` | Header, footer, floating WhatsApp, quote form, gallery grid, etc. |

## Before launch (owner-supplied, PRD §8)

1. Replace placeholders in `lib/site.ts`: final name, domain, phone/WhatsApp, email, video id, CR number
2. Swap `PlaceholderImage` usages for real photos (`next/image` + Cloudinary)
3. Replace sample testimonials in `content/*.ts` with real reviews
4. Set `NEXT_PUBLIC_GA_ID` in `.env` to enable GA4 (WhatsApp/call/form events are pre-wired)
5. Create Google Business Profile with all 5 services; submit `/sitemap.xml` in Search Console

## Deferred from PRD

- Headless CMS (Sanity) wiring — content currently lives in `content/*.ts`; dictionary shape is CMS-ready
- Real photos/videos, real testimonials, final branding (blocked on owner)
