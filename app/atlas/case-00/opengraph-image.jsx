import { unlearningCard, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og/unlearning-card';
import { og, masthead } from '../../_articles/case-00';

/**
 * Month End Close. `closed` lights the first four ticks on the twelve
 * month rail, which is the piece's own subject — four months, month by
 * month. It advances with each issue.
 */

export const runtime = 'edge';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = masthead.title + ' — ' + masthead.dek;

export default function Image() {
  return unlearningCard(og);
}
