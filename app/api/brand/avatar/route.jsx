import { ImageResponse } from 'next/og';
import { playfair500Italic } from '@/lib/og/fonts';

/**
 * The Unlearning · master avatar, rendered rather than exported.
 *
 * Design's brand kit holds the geometry but nothing exported a file, so
 * there was no avatar to upload to Substack. Generating it from the
 * geometry means it cannot drift from the kit, and it can be re-exported
 * at any size when LinkedIn, the podcast or a book cover wants one.
 *
 * GET /api/brand/avatar            → 300x300 PNG
 * GET /api/brand/avatar?size=1080  → any square size
 *
 * Under /api so robots.txt already disallows it. This is an export
 * endpoint, not a page.
 *
 * GEOMETRY, from Unlearning Card.dc.html as corrected on 5 October:
 * three arcs on r=70 of a 200 box, 7px round-capped, dasharray 115 of a
 * 439.82 circumference — 94.13 degrees drawn, 120 apart. That leaves
 * 25.87 between paths, and round caps give back 2.865 at each end, so the
 * gap a reader sees is 20.14 degrees. The Open Circle Law wants 20.
 *
 * The arcs are paths, not dashed circles, and the U is HTML text rather
 * than SVG <text>. Satori supports neither stroke-dasharray nor SVG text
 * reliably, and both would have failed silently — a closed ring and a
 * missing letter.
 */

export const runtime = 'edge';

const VB = 200;
const R = 70;
const STROKE = 7;
const DRAWN = 94.13;
const STARTS = [-86, 34, 154];
const COLOURS = ['#00B5AD', '#7B9EF0', '#C9A84C'];
const GROUND = '#0D1F4E';

/* SVG dash offsets start at three o'clock and run clockwise. */
const pt = (deg) => {
  const r = ((deg + 90) * Math.PI) / 180;
  return [(100 + R * Math.sin(r)).toFixed(3), (100 - R * Math.cos(r)).toFixed(3)];
};
const arc = (from) => {
  const [x1, y1] = pt(from);
  const [x2, y2] = pt(from + DRAWN);
  return `M ${x1} ${y1} A ${R} ${R} 0 0 1 ${x2} ${y2}`;
};

export async function GET(request) {
  const raw = Number(new URL(request.url).searchParams.get('size')) || 300;
  const size = Math.min(Math.max(raw, 48), 2048);

  return new ImageResponse(
    (
      <div style={{ width: size, height: size, display: 'flex', position: 'relative', background: GROUND }}>
        <svg width={size} height={size} viewBox={`0 0 ${VB} ${VB}`} style={{ position: 'absolute', left: 0, top: 0 }}>
          <g fill="none" strokeWidth={STROKE} strokeLinecap="round">
            {STARTS.map((s, i) => (
              <path key={s} d={arc(s)} stroke={COLOURS[i]} />
            ))}
          </g>
        </svg>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: size,
            height: size,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'PlayfairItalic',
            fontStyle: 'italic',
            /* 66 of a 200 box, and nudged up by the same proportion as
               design's baseline at y=122 rather than the box centre. */
            fontSize: Math.round(size * 0.33),
            lineHeight: 1,
            paddingBottom: Math.round(size * 0.015),
            color: '#FFFFFF',
          }}
        >
          U
        </div>
      </div>
    ),
    {
      width: size,
      height: size,
      fonts: [{ name: 'PlayfairItalic', data: playfair500Italic, style: 'italic', weight: 500 }],
    },
  );
}
