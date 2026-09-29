/**
 * Open Graph card for /media.
 * Generated at build time — see lib/og/card.jsx.
 */

import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og/card';

export const runtime = 'edge';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Approved portraits, bios, and one address.';

export default function Image() {
  return ogCard({
    eyebrow: 'Media kit',
    title: 'Approved portraits, bios, and one',
    accent: 'address.',
  });
}
