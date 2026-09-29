/**
 * Open Graph card for /about.
 * Generated at build time — see lib/og/card.jsx.
 */

import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og/card';

export const runtime = 'edge';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'The people who design it are the people who build it.';

export default function Image() {
  return ogCard({
    eyebrow: 'About',
    title: 'The people who design it are the people who',
    accent: 'build it.',
  });
}
