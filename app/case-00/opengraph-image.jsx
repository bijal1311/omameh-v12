/**
 * Open Graph card for /case-00.
 * Generated at build time — see lib/og/card.jsx.
 */

import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og/card';

export const runtime = 'edge';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'You do not get a blank month.';

export default function Image() {
  return ogCard({
    eyebrow: 'Atlas · Cases · 00',
    title: 'You do not get a',
    accent: 'blank month.',
  });
}
