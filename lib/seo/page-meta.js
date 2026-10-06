/**
 * One metadata builder for every route.
 *
 * App Router inherits anything a child route does not restate, and three
 * separate faults came out of that: the canonical, og:title and
 * og:description all fell through to the homepage's, and twitter:title
 * with them. Every share of seven pages carried the right picture and the
 * homepage's words, which reads as a mistake rather than a default.
 *
 * Declaring these as a set rather than field by field is the point. A
 * route gives its title, its description and its path; it cannot give one
 * and silently inherit the rest.
 *
 *   export const metadata = pageMeta({
 *     title: 'We work out what is actually in the way.',
 *     description: '…',
 *     path: '/advisory',
 *   });
 *
 * The page <title> takes the root template and becomes "… · Omameh",
 * except where absoluteTitle is set — the homepage, whose title is already
 * the full line and would otherwise read "… · Omameh · Omameh".
 * og:title deliberately does not — the suffix is noise in a share card,
 * and the two article pages already set theirs bare.
 *
 * The article routes build their own metadata from the article module and
 * are left alone; they were the two that were right throughout.
 */

export function pageMeta({ title, description, path, noindex = false, absoluteTitle = false }) {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: 'website',
      siteName: 'Omameh',
      locale: 'en_AU',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  };
}
