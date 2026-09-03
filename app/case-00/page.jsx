import ArticleLayout from '../_components/ArticleLayout';
import article from '../_articles/case-00';

/**
 * 09 · Case 00 · the editorial essay.
 *
 * The route is deliberately thin. The article is data in
 * app/_articles/case-00.js and renders through ArticleLayout, which is the
 * repeating format — Case 01 and the Field Notes follow the same shape.
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.masthead.title,
  description: article.masthead.dek,
  datePublished: article.publishedAt,
  author: { '@type': 'Person', name: article.masthead.author },
  publisher: { '@type': 'Organization', name: 'Omameh Group' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': article.url },
  url: article.url,
  isPartOf: { '@type': 'Blog', name: 'Atlas · Field Notes' },
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
