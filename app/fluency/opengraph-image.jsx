/**
 * Open Graph card for /fluency.
 * Generated at build time — see lib/og/card.jsx.
 */

import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og/card';

export const runtime = 'edge';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Unlearn. Relearn. Reinvent.';

export default function Image() {
  return ogCard({
    eyebrow: 'AI-Era Fluency',
    title: 'Unlearn. Relearn.',
    accent: 'Reinvent.',
  });
}
