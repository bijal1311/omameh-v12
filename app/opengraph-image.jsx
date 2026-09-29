/**
 * Open Graph card for /.
 * Generated at build time — see lib/og/card.jsx.
 */

import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og/card';

export const runtime = 'edge';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Everyone got the technology. Almost nobody got their time back.';

export default function Image() {
  return ogCard({
    eyebrow: 'Omameh Group',
    title: 'Everyone got the technology.',
    accent: 'Almost nobody got their time back.',
  });
}
