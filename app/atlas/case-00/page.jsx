import ArticleLayout from '../../_components/ArticleLayout';
import article from '../../_articles/case-00';

/**
 * 09 · Case 00 · the editorial essay.
 *
 * The route is deliberately thin. The article is data in
 * app/_articles/case-00.js and renders through ArticleLayout, which is the
 * repeating format — Case 01 and the Founder Notes follow the same shape.
 *
 * It used to sit at /case-00, at the root, as if it were a section of the
 * site rather than a piece in the publication. That works until Case 01,
 * at which point either the root fills with one URL per case and /atlas
 * indexes nothing, or the stream is split across two URL shapes for good.
 * Moved while it cost twelve internal links and one redirect.
 *
 * Notes are titled and cases are numbered — /atlas/carrying-enough and
 * /atlas/case-00 — because that is how the site already refers to them.
 *
 * omameh.com.au is canonical. The same words publish to Substack, so
 * without an explicit canonical the search engine picks the platform over
 * the owner. The Substack side of that has to be set in Substack's own
 * post settings; code cannot do it.
 */

export const metadata = {
  title: article.masthead.title,
  description: article.masthead.dek,
  alternates: { canonical: article.url },
  openGraph: {
    type: 'article',
    url: article.url,
    title: article.masthead.title,
    description: article.masthead.dek,
    publishedTime: article.publishedAt,
    authors: [article.masthead.author],
    siteName: 'Omameh',
  },
  twitter: {
    card: 'summary_large_image',
    title: article.masthead.title,
    description: article.masthead.dek,
  },
};

const SITE = 'https://www.omameh.com.au';

/**
 * Author and publisher are references into the site graph rather than
 * fresh literals, which is what Founder Note 01 already does. Spelled out
 * twice they are two people called Bijal Sejpal as far as a crawler is
 * concerned, and neither inherits the role, the former positions or the
 * organisation the graph in app/layout.jsx establishes.
 */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': `${article.url}#article`,
      headline: article.masthead.title,
      description: article.masthead.dek,
      datePublished: article.publishedAt,
      dateModified: article.publishedAt,
      author: { '@id': `${SITE}/#bijal` },
      publisher: { '@id': `${SITE}/#organization` },
      mainEntityOfPage: { '@type': 'WebPage', '@id': article.url },
      url: article.url,
      inLanguage: 'en-AU',
      isAccessibleForFree: true,
      articleSection: 'Month End Close',
      isPartOf: { '@type': 'Blog', name: 'The Unlearning · Month End Close' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${article.url}#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Atlas', item: `${SITE}/atlas` },
        { '@type': 'ListItem', position: 2, name: 'Month End Close', item: `${SITE}/atlas` },
        { '@type': 'ListItem', position: 3, name: 'You do not get a blank month' },
      ],
    },
  ],
};

export default function Case00Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleLayout article={article} />
    </>
  );
}
