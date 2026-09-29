/**
 * Open Graph card for /contact.
 * Generated at build time — see lib/og/card.jsx.
 */

import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og/card';

export const runtime = 'edge';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'One inbox. It reaches me.';

export default function Image() {
  return ogCard({
    eyebrow: 'Contact',
    title: 'One inbox.',
    accent: 'It reaches me.',
  });
}
