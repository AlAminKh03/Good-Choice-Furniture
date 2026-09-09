import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, localesWithPost } from "@/lib/i18n";
import { localizedPath } from "@/lib/site";
import { articleSchema } from "@/lib/schema";
import { blogImageKeys, getImageUrl } from "@/lib/images";
import { JsonLd } from "@/components/json-ld";
import { WhatsAppButton } from "@/components/cta-buttons";

/**
 * Runs once per locale the parent generated, and returns only the slugs that
 * locale actually has.
 *
 * It used to return the English slug list for every locale. Arabic has four
 * of the twelve posts, so that prerendered eight Arabic URLs whose only
 * content was a 404 — while the sitemap listed them and each English post
 * pointed an hreflang alternate at one. Generating per-locale means an
 * untranslated post simply has no Arabic URL, which is the honest answer.
 */
export async function generateStaticParams({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(isLocale(params.lang) ? params.lang : "en");
  return dict.blog.posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const dict = await getDictionary(isLocale(lang) ? lang : "en");
  const post = dict.blog.posts.find((p) => p.slug === slug);
  if (!post) return {};
  // Only advertise the locales that have this post translated. Claiming an
  // alternate that 404s is worse than claiming none: Google reports it as an
  // hreflang error and can discount the pair.
  const available = await localesWithPost(slug);
  const languages = Object.fromEntries(
    available.map((locale) => [locale, `/${locale}/blog/${slug}`]),
  );
  return {
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    alternates: {
      canonical: `/${dict.locale}/blog/${slug}`,
      languages: {
        ...languages,
        "x-default": `/${available.includes("en") ? "en" : dict.locale}/blog/${slug}`,
      },
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const dict = await getDictionary(locale);
  const post = dict.blog.posts.find((p) => p.slug === slug);
  if (!post) notFound();
  const related = dict.services[post.relatedService];
  const cover = getImageUrl(blogImageKeys[slug]);

  return (
    <>
      <JsonLd
        data={articleSchema({
          locale,
          title: post.title,
          description: post.metaDescription,
          slug: post.slug,
          date: post.date,
        })}
      />

      <article className="container-x max-w-3xl py-14 sm:py-16">
        <div className="flex items-center gap-3 text-xs font-semibold">
          <span className="rounded-full border border-brass/40 bg-brass/10 px-3 py-1 text-maroon">{post.category}</span>
          <time dateTime={post.date} className="text-ink/50">
            {new Date(post.date).toLocaleDateString(locale === "ar" ? "ar-QA" : "en-QA", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
        <h1 className="font-display mt-4 text-4xl text-navy">{post.title}</h1>

        {/* Cover. The alt carries the excerpt rather than the title, which the
            H1 immediately above already announces. */}
        {cover ? (
          <figure className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-ink/8 shadow-[0_24px_50px_-24px_rgba(27,94,74,0.35)]">
            <Image
              src={cover}
              alt={post.excerpt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </figure>
        ) : null}

        <div className="mt-8 space-y-5">
          {post.blocks.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2 key={i} className="font-display pt-4 text-2xl text-navy">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={i} className="list-disc space-y-2 ps-6 text-base/8 text-ink/80 marker:text-brass">
                  {block.items.map((item) => (
                    <li key={item.slice(0, 24)}>{item}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-base/8 text-ink/80">
                {block.text}
              </p>
            );
          })}
        </div>

        {/* Related service CTA (PRD §4: blog CTAs link to relevant service) */}
        <aside className="mt-12 rounded-xl border border-brass/40 bg-sand p-6 sm:p-8">
          <p className="eyebrow">{dict.blog.byServicePrefix}</p>
          <h2 className="font-display mt-2 text-2xl text-navy">{related.name}</h2>
          <p className="mt-2 text-sm/6 text-ink/70">{related.cardDescription}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <WhatsAppButton
              message={related.whatsappMessage}
              label={related.ctaLabel}
              location={`blog-${post.slug}`}
            />
            <Link
              href={localizedPath(locale, `/services/${related.slug}`)}
              className="inline-flex items-center justify-center rounded-full border-2 border-maroon/40 px-6 py-3 text-sm font-bold text-maroon transition-colors hover:bg-maroon/5"
            >
              {dict.common.learnMore}
            </Link>
          </div>
        </aside>
      </article>
    </>
  );
}
