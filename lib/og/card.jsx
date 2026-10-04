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
import { portrait } from './portrait';

const NAVY = '#06102C';
const CREAM = '#F4F0E6';
const GOLD = '#C9A84C';
const TEAL = '#00B5AD';
const SOFT = 'rgba(244,240,230,0.55)';

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

const { width: W, height: H } = OG_SIZE;


/** 0 degrees is north, angles run clockwise — the convention the motif system uses. */
const polar = (cx, cy, r) => (a) => [
  (cx + r * Math.sin((a * Math.PI) / 180)).toFixed(2),
  (cy - r * Math.cos((a * Math.PI) / 180)).toFixed(2),
];
const arc = (pt, r) => (a1, a2) => {
  const [x1, y1] = pt(a1);
  const [x2, y2] = pt(a2);
  return `M ${x1} ${y1} A ${r} ${r} 0 ${a2 - a1 > 180 ? 1 : 0} 1 ${x2} ${y2}`;
};

/** Three open arcs, 20 degree gap at north, cap-compensated as elsewhere. */
function Ring({ size = 300, stroke = 26 }) {
  const r = 150;
  const cap = ((stroke / 2) / r) * (180 / Math.PI);
  const gap = 20 + 2 * cap;
  const seg = arc(polar(200, 200, r), r);
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
 * The hairline sweep used on the portrait cards.
 *
 * The full ring fights a photograph — it is a 420px object at half opacity
 * and the portrait is already the loudest thing on the card. This is the
 * device from the LinkedIn banner instead: one large-radius gold hairline,
 * mostly off-canvas, broken once where it crosses the headline.
 *
 * The break is not decoration. A circle this brand draws is never closed,
 * and the gap is placed where it can be seen rather than hidden off the
 * edge, which would satisfy the geometry and not the law.
 */
function Sweep() {
  const r = 470;
  const seg = arc(polar(1120, 300, r), r);
  return (
    <svg width={1200} height={630} viewBox="0 0 1200 630">
      <g fill="none" stroke={GOLD} strokeWidth="2" opacity="0.45">
        <path d={seg(150, 285)} />
        <path d={seg(300, 311)} />
      </g>
    </svg>
  );
}

/** The portrait column is pre-cropped to exactly this, so nothing is scaled. */
const PANEL = 400;

/**
 * @param eyebrow  small mono label — the section or stream
 * @param title    the headline, cream
 * @param accent   optional trailing phrase, gold italic
 * @param withPortrait  a face belongs on the first-person surfaces and
 *                      nowhere else — opt in, route by route
 */
export function ogCard({ eyebrow, title, accent, withPortrait = false }) {
  const len = title.length + (accent ? accent.length + 1 : 0);
  const size = withPortrait
    ? (len > 44 ? 52 : len > 24 ? 60 : 72)
    : (len > 64 ? 62 : 76);

  return new ImageResponse(
    (
      /*
       * The root carries no padding. Satori resolves an absolutely
       * positioned child against the content box rather than the padding
       * box, so a padded root silently shifts every overlay by the padding
       * — which is how the portrait first rendered in the middle of the
       * card. The padding lives on the text column instead, and every
       * absolute here is given left/top rather than right/bottom, which
       * Satori does not resolve reliably on an img.
       */
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: NAVY,
          position: 'relative',
        }}
      >
        {withPortrait ? (
          <>
            <img src={portrait} width={PANEL} height={H} style={{ position: 'absolute', left: W - PANEL, top: 0 }} />
            {/*
              The seam. The photograph is lit against a pale wall, so butted
              straight onto navy it reads as a pasted-on rectangle. The
              gradient carries the ground across the first third of the panel
              and the edge disappears.
            */}
            <div
              style={{
                position: 'absolute',
                left: W - PANEL,
                top: 0,
                width: PANEL,
                height: H,
                display: 'flex',
                background: `linear-gradient(90deg, ${NAVY} 0%, rgba(6,16,44,0.78) 22%, rgba(6,16,44,0.3) 48%, rgba(6,16,44,0) 72%)`,
              }}
            />
            <div style={{ position: 'absolute', left: 0, top: 0, display: 'flex' }}>
              <Sweep />
            </div>
          </>
        ) : (
          <div style={{ position: 'absolute', left: 850, top: 150, display: 'flex', opacity: 0.5 }}>
            <Ring size={420} stroke={22} />
          </div>
        )}

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: withPortrait ? W - PANEL + 40 : W,
            height: H,
            padding: withPortrait ? '68px 60px 68px 80px' : '72px 80px',
          }}
        >
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
            {withPortrait ? null : (
              <div style={{ fontFamily: 'Playfair', fontSize: 34, color: CREAM, display: 'flex' }}>
                Om<span style={{ color: TEAL }}>a</span>meh
              </div>
            )}
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              /*
                The word space between the title and the accent is a column
                gap, not a character. Satori drops a leading &nbsp; inside a
                span — which ran "Carrying" into "enough." on the one card
                where the accent did not fall to its own line — and a left
                margin would indent the accent on the cards where it does.
              */
              columnGap: 20,
              fontFamily: 'Playfair',
              fontSize: size,
              lineHeight: 1.12,
              color: CREAM,
            }}
          >
            {title}
            {accent ? (
              <span style={{ color: GOLD, fontFamily: 'PlayfairItalic', fontStyle: 'italic' }}>
                {accent}
              </span>
            ) : null}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              fontFamily: 'Inter',
              fontSize: 21,
              color: SOFT,
            }}
          >
            <span>omameh.com.au</span>
            {/*
              The wordmark moves down here on the portrait cards — at the top
              it would sit a few pixels off her shoulder, and the strapline
              has nothing to say on a card that is already a person.
            */}
            {withPortrait ? (
              <span style={{ fontFamily: 'Playfair', fontSize: 28, color: CREAM, display: 'flex' }}>
                Om<span style={{ color: TEAL }}>a</span>meh
              </span>
            ) : (
              <span>Human-Led. AI-Operated.</span>
            )}
          </div>
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
