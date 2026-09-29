/**
 * Open Graph card for /advisory.
 * Generated at build time — see lib/og/card.jsx.
 */

import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og/card';

export const runtime = 'edge';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'We work out what is actually in the way.';

export default function Image() {
  return ogCard({
    eyebrow: 'Advisory',
    title: 'We work out what is actually',
    accent: 'in the way.',
  });
}
