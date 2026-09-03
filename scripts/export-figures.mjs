/**
 * Export every article figure as a PNG.
 *
 * Substack cannot take inline SVG. Without exports the format fails on
 * article two and the figures end up as screenshots, so each one ships as a
 * matched pair: inline SVG for the web route, PNG for the platform.
 *
 * Output: public/figures/fig-<article>-<n>.png, 1600px wide on cream.
 *
 * Run:  npm run figures
 *
 * Two things this has to do that a plain rasteriser will not:
 *   1 · the figures are styled by classes in globals.css, not inline
 *       attributes, so the matching rules are inlined into each SVG
 *   2 · those rules use CSS custom properties, which resvg does not
 *       resolve, so every var(--token) is replaced with its literal value
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { Resvg } from '@resvg/resvg-js';

const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const OUT_DIR = `${ROOT}public/figures`;
const WIDTH = 1600;
const CREAM = '#F4F0E6';
const PAD = 22;              // user units of margin around a standalone figure

const ARTICLES = [{ slug: 'case-00', file: 'app/_articles/case-00.js' }];

/* ---- token map from :root ------------------------------------------- */
const css = readFileSync(`${ROOT}styles/globals.css`, 'utf8');
const rootBlock = css.slice(css.indexOf(':root{'), css.indexOf('}', css.indexOf(':root{')));
const TOKENS = {};
for (const [, name, value] of rootBlock.matchAll(/--([a-z0-9-]+)\s*:\s*([^;]+);/g)) {
  TOKENS[name] = value.trim();
}
// the editorial faces resolve through next/font at runtime; for a static
// raster we substitute families a rasteriser can actually find
TOKENS['ed-display'] = 'Georgia, serif';
TOKENS['ed-mono'] = 'Consolas, monospace';
TOKENS['display'] = 'Georgia, serif';
TOKENS['mono'] = 'Consolas, monospace';
TOKENS['body'] = 'Georgia, serif';

function resolve(text, depth = 0) {
  if (depth > 6) return text;
  const next = text.replace(/var\(--([a-z0-9-]+)(?:\s*,\s*([^()]*))?\)/g, (m, name, fallback) =>
    TOKENS[name] !== undefined ? TOKENS[name] : (fallback ?? m),
  );
  return next === text ? next : resolve(next, depth + 1);
}

/* ---- the figure rules ------------------------------------------------ */
// everything between the Case 00 banner and the end of the stylesheet block
// that styles figures; @media is dropped since the raster has one width
const figCssStart = css.indexOf('CASE 00 · the editorial essay');
const figCss = css
  .slice(figCssStart)
  .split('\n')
  .filter((l) => /^\s*\.(rl-|lf-|g-|rail|lightfig|art)/.test(l))
  .filter((l) => !l.includes('@media'))
  .join('\n');

/* ---- export ---------------------------------------------------------- */
mkdirSync(OUT_DIR, { recursive: true });
let total = 0;

for (const { slug, file } of ARTICLES) {
  const source = readFileSync(`${ROOT}${file}`, 'utf8');
  const svgs = source.match(/<svg[\s\S]*?<\/svg>/g) || [];
  if (!svgs.length) {
    console.warn(`  ${slug}: no figures found`);
    continue;
  }

  svgs.forEach((svg, i) => {
    const n = i + 1;
    const viewBox = (svg.match(/viewBox="([^"]+)"/) || [])[1] || '0 0 460 240';
    const [, , vbW, vbH] = viewBox.split(/\s+/).map(Number);

    // inline SVG in HTML carries no namespace; a standalone document needs one
    const withNs = svg.includes('xmlns=')
      ? svg
      : svg.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');

    // On the page the reading column supplies the breathing room. A
    // standalone export has none, so the figures run to the edge and the
    // labels clip. Pad the viewBox and shift the content into it.
    const openTag = withNs.match(/<svg[^>]*?>/)[0];
    const inner = withNs.slice(openTag.length, withNs.lastIndexOf('</svg>'));
    const padded = `${openTag
      .replace(/viewBox="[^"]*"/, `viewBox="0 0 ${vbW + PAD * 2} ${vbH + PAD * 2}"`)
      .replace(/\s(width|height)="[^"]*"/g, '')}` +
      `<style>${resolve(figCss)}</style>` +
      `<rect x="0" y="0" width="${vbW + PAD * 2}" height="${vbH + PAD * 2}" fill="${CREAM}"/>` +
      `<g transform="translate(${PAD} ${PAD})">${inner}</g></svg>`;

    const styled = padded;

    const png = new Resvg(resolve(styled), {
      background: CREAM,
      fitTo: { mode: 'width', value: WIDTH },
      font: { loadSystemFonts: true, defaultFontFamily: 'Georgia' },
    })
      .render()
      .asPng();

    const name = `fig-${slug}-${n}.png`;
    writeFileSync(`${OUT_DIR}/${name}`, png);
    console.log(
      `  ${name}  ${WIDTH}px  ${(png.length / 1024).toFixed(0)} KB  (viewBox ${vbW}×${vbH})`,
    );
    total += 1;
  });
}

console.log(`\n${total} figure${total === 1 ? '' : 's'} exported to public/figures/`);
