/**
 * Open Graph card for /founder.
 * Generated at build time — see lib/og/card.jsx.
 */

import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og/card';

export const runtime = 'edge';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Twenty years inside the architecture of large institutions.';

export default function Image() {
  return ogCard({
    eyebrow: 'Founder',
    title: 'Twenty years inside the architecture of large',
    accent: 'institutions.',
    withPortrait: true,
  });
}
