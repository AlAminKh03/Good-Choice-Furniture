/**
 * Renders schema.org JSON-LD. Native <script> per Next.js docs;
 * `<` escaped to \u003c to prevent XSS via string injection.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
