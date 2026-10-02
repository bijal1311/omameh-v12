/**
 * Open Graph card for /atlas.
 * Generated at build time — see lib/og/card.jsx.
 */

import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og/card';

export const runtime = 'edge';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'What we learn inside the work, written down.';

export default function Image() {
  return ogCard({
    eyebrow: 'Atlas',
    title: 'What we learn inside the work,',
    accent: 'written down.',
    withPortrait: true,
  });
}
