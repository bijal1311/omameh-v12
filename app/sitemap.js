import { SITE, ENTRIES } from '@/lib/seo/content';

/**
 * Generated from the content manifest, not a second hand-kept list.
 *
 * It used to be its own hardcoded array, which meant adding an article
 * updated the page, the schema and the metadata but silently not the
 * sitemap — found exactly that way when Founder Note 01 went in. A list
 * maintained in two places is a list that is wrong in one of them.
 *
 * /follow and /trial are deliberately absent: both carry
 * robots:{index:false}. /follow is reached from print and QR codes,
 * /trial from the essay — neither from search. They are not in ENTRIES,
 * so they cannot creep in here either.
 *
 * priority and changefreq are dropped on purpose. Google ignores both.
 */
export default function sitemap() {
  return ENTRIES.map((e) => ({
    url: `${SITE.url}${e.slug}`,
    lastModified: new Date(e.modified),
  }));
}
