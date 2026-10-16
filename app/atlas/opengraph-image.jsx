/**
 * Open Graph card for /atlas.
 * Generated at build time — see lib/og/card.jsx.
 *
 * Rewritten 16 October 2026 with the page. The old card carried "What we
 * learn inside the work, written down.", which is one of the strings the
 * rebuild removes — and a share card is as much part of the page as the
 * page is.
 */

import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og/card';

export const runtime = 'edge';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt =
  'The Unlearning — for anyone who has outgrown the version of themselves that got them here.';

export default function Image() {
  return ogCard({
    eyebrow: 'The Unlearning',
    title: 'For anyone who has outgrown the version',
    accent: 'of themselves that got them here.',
    withPortrait: true,
  });
}
