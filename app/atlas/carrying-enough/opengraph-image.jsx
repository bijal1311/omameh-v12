import { unlearningCard, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og/unlearning-card';
import { photo } from '@/lib/og/photos/aob';
import { og, masthead } from '../../_articles/founder-note-01';

/**
 * Without this the piece inherits the /atlas card, which says "What we
 * learn inside the work, written down" — true of the publication, wrong on
 * a link to one essay.
 *
 * Same image serves three places: the link preview, the thumbnail on
 * /atlas, and the cover uploaded to Substack.
 */

export const runtime = 'edge';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = masthead.title + ' — ' + masthead.dek;

export default function Image() {
  return unlearningCard({ ...og, photo });
}
