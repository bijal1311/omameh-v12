/**
 * The Unlearning · series card generator.
 *
 * One image, three jobs: the og:image when a piece is shared, the
 * thumbnail on /atlas, and the cover uploaded to Substack. Generated from
 * the piece's own title and series, so it cannot go stale and a new piece
 * gets one for nothing.
 *
 * Layout is the brand kit's `post` format — text column left, portrait
 * column right with the ground faded across its left edge. Values are read
 * from Unlearning Card.dc.html.
 *
 * THE DEVICES ARE OPEN. The kit draws the arc and the orbit as
 * `border-radius:50%` with a full border — closed rings, in a brand whose
 * first law is that no circle is ever closed, on the same card as a logo
 * that obeys it. They are arcs here, with the canonical 20 degree gap,
 * cap-compensated: a round stroke cap adds half the stroke width at each
 * end, which on the favicon once turned a 20 degree gap into minus 1.4.
 *
 * Satori renders a restricted CSS subset — flexbox only, no filters, and
 * every element with more than one child needs an explicit display:flex.
 * The mono treatment the kit specifies is baked into the photos in
 * lib/og/photos/*.js for exactly that reason — one module per series, so
 * a card inlines only the panel it draws.
 */

import { ImageResponse } from 'next/og';
import { playfair500, playfair500Italic, inter400, jetbrains700 } from './fonts';
import { SERIES } from './series';

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

const W = 1200;
const H = 630;
const PANEL = 460;

/** 0 is north, angles run clockwise — the convention the motif system uses. */
const polar = (cx, cy, r) => (a) => [
  (cx + r * Math.sin((a * Math.PI) / 180)).toFixed(2),
  (cy - r * Math.cos((a * Math.PI) / 180)).toFixed(2),
];
const arcPath = (pt, r) => (a1, a2) => {
  const [x1, y1] = pt(a1);
  const [x2, y2] = pt(a2);
  return 'M ' + x1 + ' ' + y1 + ' A ' + r + ' ' + r + ' 0 ' + (a2 - a1 > 180 ? 1 : 0) + ' 1 ' + x2 + ' ' + y2;
};
/** The gap to draw so that the gap you SEE is `visible`, after round caps. */
const capGap = (visible, stroke, r) => visible + ((stroke / 2) / r) * (180 / Math.PI) * 2;

/**
 * One open ring. `at` places the gap, in degrees, so it falls somewhere a
 * reader can see rather than off the edge of the card — a gap that is
 * cropped away satisfies the geometry and not the law.
 */
function OpenRing({ size, r, stroke, colour, at = 0, dash }) {
  const c = size / 2;
  const seg = arcPath(polar(c, c, r), r);
  const gap = capGap(20, stroke, r);
  return (
    <svg width={size} height={size} viewBox={'0 0 ' + size + ' ' + size}>
      <path
        d={seg(at + gap / 2, at + 360 - gap / 2)}
        fill="none"
        stroke={colour}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={dash}
      />
    </svg>
  );
}

/** A rail of ticks — twelve months, or four quarters. */
function Rail({ items, lit, t, width, gap }) {
  return (
    <div style={{ display: 'flex', gap, marginBottom: 30 }}>
      {items.map((label, i) => (
        <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 8, width }}>
          <div style={{ display: 'flex', height: 4, background: i < lit ? t.acc : t.faint }} />
          <div
            style={{
              fontFamily: 'Mono',
              fontSize: 11,
              letterSpacing: label.length > 2 ? 1 : 2,
              color: i < lit ? t.acc : t.sub,
            }}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

/** The Omameh mark — three open arcs, the gap already in the geometry. */
function Mark({ size, colour }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <circle cx="30" cy="30" r="3" fill={colour} />
      <path d="M30 8 A 22 22 0 0 1 49 19" stroke="#00B5AD" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M49 41 A 22 22 0 0 1 30 52" stroke={colour} strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M11 41 A 22 22 0 0 1 11 19" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/**
 * @param series   standing · aob · mec · board
 * @param n        issue number across the publication, e.g. '01'
 * @param title    headline, in the ground's ink
 * @param accent   trailing phrase, italic, in the series' emphasis colour
 * @param dek      one line under the headline
 * @param closed   months closed (mec) or quarters reached (board)
 * @param photo    the series' own inlined panel, imported by the route so
 *                 a card never carries the three photos it will not draw
 */
export function unlearningCard({ series, n, title, accent, dek, closed, photo }) {
  const t = SERIES[series];
  if (!t) throw new Error('unknown series: ' + series);
  const len = title.length + (accent ? accent.length + 1 : 0);

  return new ImageResponse(
    (
      <div style={{ width: W, height: H, display: 'flex', background: t.bg, position: 'relative' }}>
        {/*
          Both columns are placed absolutely, with explicit boxes. Laid out
          as flex children the text column kept claiming 668px of the 1200
          rather than 620 — content-box width plus padding, and a min-content
          floor that minWidth:0 did not lift — which pushed the photo off the
          right edge and left a black strip down every card. An absolute box
          has no negotiation to get wrong.
        */}
        {t.motif === 'arc' && (
          <div style={{ position: 'absolute', left: -125, top: -35, display: 'flex' }}>
            <OpenRing size={750} r={367} stroke={16} colour={t.accSoft} at={58} />
          </div>
        )}
        {t.motif === 'orbit' && (
          <>
            <div style={{ position: 'absolute', left: -125, top: -35, display: 'flex' }}>
              <OpenRing size={750} r={374} stroke={2} colour={t.accSoft} at={58} dash="7 9" />
            </div>
            <div style={{ position: 'absolute', left: -55, top: 35, display: 'flex' }}>
              <OpenRing size={610} r={304} stroke={1} colour={t.accFaint} at={126} />
            </div>
            <div
              style={{
                position: 'absolute',
                left: 509,
                top: 575,
                width: 12,
                height: 12,
                display: 'flex',
                borderRadius: 6,
                background: t.acc,
              }}
            />
          </>
        )}

        {/*
          The text column stays in flow. Positioning it absolutely with a
          fixed height made the children overlap — the dek printed over the
          headline and the ledger over both. Only the photo needs taking
          out of flow, and only so the text column's content-box padding
          cannot push it off the right edge.
        */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: W - PANEL - 72,
            height: H,
            padding: '64px 0 58px 72px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: 72 }}>
            <div style={{ fontFamily: 'Mono', fontSize: 15, letterSpacing: 4.5, color: t.acc }}>
              {'THE UNLEARNING · ' + n}
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                fontFamily: 'Mono',
                fontSize: 13,
                letterSpacing: 3.9,
                color: t.ink,
              }}
            >
              OMAMEH
              <Mark size={34} colour={t.ink} />
            </div>
          </div>

          <div style={{ display: 'flex', width: 120, height: 3, background: t.acc, margin: '22px 0 26px' }} />

          <div style={{ display: 'flex', gap: 14, fontFamily: 'Mono', fontSize: 16, letterSpacing: 3.8, color: t.ink }}>
            <span>{t.name}</span>
            <span style={{ color: t.acc }}>{'· ' + t.cadence}</span>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              columnGap: 16,
              marginTop: 46,
              fontFamily: 'Playfair',
              fontSize: len > 44 ? 42 : len > 28 ? 50 : 58,
              lineHeight: 1.12,
              color: t.ink,
              maxWidth: 600,
            }}
          >
            {title}
            {accent ? (
              <span style={{ fontFamily: 'PlayfairItalic', fontStyle: 'italic', color: t.emph }}>{accent}</span>
            ) : null}
          </div>

          {dek ? (
            <div
              style={{
                display: 'flex',
                marginTop: 16,
                maxWidth: 520,
                fontFamily: 'Inter',
                fontSize: 20,
                lineHeight: 1.45,
                color: t.sub,
              }}
            >
              {dek}
            </div>
          ) : null}

          <div style={{ display: 'flex', flexGrow: 1 }} />

          {t.motif === 'months' && (
            <Rail
              items={Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'))}
              lit={closed ?? 4}
              t={t}
              width={38}
              gap={6}
            />
          )}
          {t.motif === 'quarters' && (
            <Rail items={['Q1', 'Q2', 'Q3', 'Q4']} lit={closed ?? 4} t={t} width={110} gap={8} />
          )}

          <div style={{ display: 'flex', fontFamily: 'Mono', fontSize: 14, letterSpacing: 2.8, color: t.ink }}>
            BIJAL SEJPAL · FOUNDER &amp; CEO · OMAMEH
          </div>
          <div style={{ display: 'flex', marginTop: 18, fontFamily: 'Mono', fontSize: 14, letterSpacing: 3.4, color: t.acc }}>
            UNLEARN · RELEARN · REINVENT
          </div>
        </div>

        {/*
          The photo is a background, not an <img>. Satori rendered the img
          at 479px inside its 580px column however it was sized — attribute,
          style, objectFit, absolute or in flow — leaving a black strip down
          the right edge of every card. backgroundSize:cover sizes to the
          box and has no such opinion.
        */}
        <div
          style={{
            position: 'absolute',
            left: W - PANEL,
            top: 0,
            display: 'flex',
            width: PANEL,
            height: H,
            background: t.bg,
            backgroundImage: 'url(' + photo + ')',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/*
            The seam. The photograph is lit against a pale ground, so butted
            straight onto the series colour it reads as a pasted-on panel.
          */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: PANEL,
              height: H,
              display: 'flex',
              background:
                'linear-gradient(90deg, rgb(' + t.fade + ') 0%, rgba(' + t.fade + ',.9) 10%, rgba(' + t.fade + ',0) 50%)',
            }}
          />
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: 'Playfair', data: playfair500, style: 'normal', weight: 500 },
        { name: 'PlayfairItalic', data: playfair500Italic, style: 'italic', weight: 500 },
        { name: 'Inter', data: inter400, style: 'normal', weight: 400 },
        { name: 'Mono', data: jetbrains700, style: 'normal', weight: 700 },
      ],
    },
  );
}
