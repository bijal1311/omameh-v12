/**
 * Structured data. Server component — no 'use client'.
 *
 * Rendered on the server so the JSON-LD is in the HTML source, where
 * crawlers read it. Injected client-side it would be in the DOM but absent
 * from the fetched document, and several engines never see it.
 */

export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
