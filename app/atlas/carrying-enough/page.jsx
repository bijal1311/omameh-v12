import ArticleLayout from '../../_components/ArticleLayout';
import article from '../../_articles/founder-note-01';

/**
 * Founder Note 01 · Carrying enough
 *
 * Nested under /atlas so the breadcrumb reads Atlas › Founder Notes ›
 * Carrying enough, and every future piece nests the same way. Case 00 was
 * moved under /atlas to join it — the root was filling with one URL per
 * piece, and the cost of moving only went up with each one.
 *
 * The site is canonical. Substack carries the same words with its post
 * canonical pointed back here, which is the only thing stopping a platform
 * with far more domain authority outranking her for her own writing.
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
      articleSection: 'Any Other Business',
      isPartOf: { '@type': 'Blog', name: 'The Unlearning · Any Other Business' },
      keywords: [
        'Leaving corporate',
        'Founding a business',
        'Unlearning',
        'Operating model',
        'Career capacity',
      ].join(', '),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${article.url}#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Atlas', item: `${SITE}/atlas` },
        { '@type': 'ListItem', position: 2, name: 'Any Other Business', item: `${SITE}/atlas` },
        { '@type': 'ListItem', position: 3, name: article.masthead.title },
      ],
    },
  ],
};

export default function CarryingEnoughPage() {
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
