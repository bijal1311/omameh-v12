/**
 * Open Graph card generator.
 *
 * Every share link rendered a blank grey box because og:image was null on
 * every route. This produces a typographic card per route at build time —
 * no designer in the loop, and a new article gets one for free.
 *
 * Fonts are inlined as base64 (lib/og/fonts.js) rather than fetched. Satori needs TTF or OTF
 * (not woff2), and fetching at build time is exactly what makes Google
 * Fonts able to break a deploy — the same dependency that has already cost
 * us one failed build.
 *
 * Satori renders a restricted CSS subset: flexbox only, no grid, and every
 * element with more than one child needs an explicit display:flex.
 *
 * The ring is three open arcs with a gap at north. The Open Circle Law
 * applies here as anywhere else — this image is a brand surface.
 */

import { ImageResponse } from 'next/og';
import { playfair500, playfair500Italic, inter400 } from './fonts';

const NAVY = '#06102C';
const CREAM = '#F4F0E6';
const GOLD = '#C9A84C';
const TEAL = '#00B5AD';
const SOFT = 'rgba(244,240,230,0.55)';

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';


/** Three open arcs, 20 degree gap at north, cap-compensated as elsewhere. */
function Ring({ size = 300, stroke = 26 }) {
  const c = 200;
  const r = 150;
  const cap = ((stroke / 2) / r) * (180 / Math.PI);
  const gap = 20 + 2 * cap;
  const pt = (a) => [
    (c + r * Math.sin((a * Math.PI) / 180)).toFixed(2),
    (c - r * Math.cos((a * Math.PI) / 180)).toFixed(2),
  ];
  const seg = (a1, a2) => {
    const [x1, y1] = pt(a1);
    const [x2, y2] = pt(a2);
    return `M ${x1} ${y1} A ${r} ${r} 0 ${a2 - a1 > 180 ? 1 : 0} 1 ${x2} ${y2}`;
  };
  const span = (360 - gap) / 3;
  const s = gap / 2;
  return (
    <svg width={size} height={size} viewBox="0 0 400 400">
      <g fill="none" strokeWidth={stroke} strokeLinecap="round">
        <path d={seg(s, s + span)} stroke={TEAL} opacity="0.85" />
        <path d={seg(s + span, s + span * 2)} stroke={CREAM} opacity="0.5" />
        <path d={seg(s + span * 2, 360 - gap / 2)} stroke={GOLD} opacity="0.85" />
      </g>
    </svg>
  );
}

/**
 * @param eyebrow  small mono label — the section or stream
 * @param title    the headline, cream
 * @param accent   optional trailing phrase, gold italic
 */
export function ogCard({ eyebrow, title, accent }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: NAVY,
          padding: '72px 80px',
          position: 'relative',
        }}
      >
        {/* the ring, bled off the right edge */}
        <div style={{ position: 'absolute', right: -70, top: 150, display: 'flex', opacity: 0.5 }}>
          <Ring size={420} stroke={22} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div
            style={{
              fontFamily: 'Inter',
              fontSize: 22,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: GOLD,
            }}
          >
            {eyebrow}
          </div>
          <div style={{ fontFamily: 'Playfair', fontSize: 34, color: CREAM, display: 'flex' }}>
            Om<span style={{ color: TEAL }}>a</span>meh
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            fontFamily: 'Playfair',
            fontSize: title.length > 64 ? 62 : 76,
            lineHeight: 1.12,
            color: CREAM,
            maxWidth: 860,
          }}
        >
          {title}
          {accent ? (
            <span style={{ color: GOLD, fontFamily: 'PlayfairItalic', fontStyle: 'italic' }}>
              &nbsp;{accent}
            </span>
          ) : null}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'Inter',
            fontSize: 21,
            color: SOFT,
          }}
        >
          <span>omameh.com.au</span>
          <span>Human-Led. AI-Operated.</span>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: 'Playfair', data: playfair500, style: 'normal', weight: 500 },
        { name: 'PlayfairItalic', data: playfair500Italic, style: 'italic', weight: 500 },
        { name: 'Inter', data: inter400, style: 'normal', weight: 400 },
      ],
    },
  );
}
