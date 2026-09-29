/**
 * Open Graph card for /products.
 * Generated at build time — see lib/og/card.jsx.
 */

import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og/card';

export const runtime = 'edge';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'We build the things we advise on.';

export default function Image() {
  return ogCard({
    eyebrow: 'Products',
    title: 'We build the things we',
    accent: 'advise on.',
  });
}
