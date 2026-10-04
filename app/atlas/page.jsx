import RouteShell from '../_components/RouteShell';

/**
 * 06 · Atlas
 *
 * Rebuilt to design's Atlas Page Redesign handoff (5 Oct 2026). Their
 * scope was design only — every string here is copy that was already
 * live, and no link or route changed.
 *
 * Values are inline because the handoff carries them inline and said to
 * read them from there. Lifting a hundred one-off values into globals.css
 * would mean transcribing each one, which is the step where a 16px radius
 * quietly becomes 12.
 *
 * FONT FAMILIES ARE VARIABLES, NOT NAMES. The handoff writes
 * 'Playfair Display' literally, which is correct in a standalone file and
 * silently wrong here: next/font serves each face under a hashed family,
 * so the literal name matches nothing and the page falls back to Georgia.
 * That exact bug shipped on this route once already.
 *
 * The .vol strip, the nav and the footer in design's reference are page
 * chrome we already render globally, so they are not repeated. Their nav
 * is cream where ours is navy — that is every page on the site, not this
 * route, so it is raised rather than done.
 *
 * Issue numbers run in order of publication across the publication, not
 * within a series. The blank month published in September and Carrying
 * enough in October, so they are 01 and 02. The handoff had them the other
 * way round, which put issue 02 a month before issue 01.
 */

export const metadata = {
  title: 'What we learn inside the work, written down.',
  description:
    'No gate, no email address, no lead magnet. If it is useful it should be readable.',
};

const DISPLAY = "var(--font-playfair),'Playfair Display',Georgia,serif";
const BODY = "var(--font-inter),Inter,-apple-system,sans-serif";
const MONO = "var(--font-jetbrains),'JetBrains Mono',ui-monospace,monospace";

/**
 * How far through each cycle the published work has got. Design's rule is
 * that these come from data so they move with each issue rather than being
 * redrawn — one number each, here.
 */
const MONTHS_CLOSED = 4;
const QUARTERS_DONE = 1;

const ARTICLE = {
  blankMonth: {
    href: '/atlas/case-00',
    meta: '01 · SEPTEMBER 2026 · 6 MIN',
    title: 'You do not get a blank month',
    dek: 'I built a business and its operating model at the same time.',
  },
  carryingEnough: {
    href: '/atlas/carrying-enough',
    meta: '02 · OCTOBER 2026 · 5 MIN',
    title: 'Carrying enough',
    dek: 'After twenty years in corporate, why build your own?',
  },
};

/** A published issue inside a series card: its own share card, then the meta. */
const row = (a, ink, border, accent, ground, dekInk) => String.raw`
    <a href="${a.href}" style="display:grid;grid-template-columns:minmax(0,150px) minmax(0,1fr);gap:18px;align-items:center;padding:12px;border-radius:12px;background:${ground};border:1px solid ${border};color:${ink}">
      <img src="${a.href}/opengraph-image" alt="" loading="lazy" style="width:100%;aspect-ratio:1200/630;object-fit:cover;border-radius:8px;display:block">
      <span style="display:flex;flex-direction:column;gap:8px">
        <span style="font:600 10px/1.3 ${MONO};letter-spacing:.18em;color:${accent}">${a.meta}</span>
        <span style="font:500 21px/1.2 ${DISPLAY}">${a.title}</span>
        <span style="font:400 14px/1.45 ${BODY};color:${dekInk}">${a.dek}</span>
        <span style="font:600 13px/1 ${BODY};color:${accent}">Continue reading &rarr;</span>
      </span>
    </a>`;

/** A series with nothing published says so, rather than taking a placeholder. */
const soon = (border, dot, ink) => String.raw`
    <div style="display:flex;align-items:center;gap:14px;padding:18px 20px;border:1px dashed ${border};border-radius:12px">
      <span style="width:8px;height:8px;border-radius:50%;background:${dot}"></span>
      <span style="font:600 11px/1.3 ${MONO};letter-spacing:.2em;color:${ink};text-transform:uppercase">The first one lands soon.</span>
    </div>`;

const months = Array.from(
  { length: 12 },
  (_, i) =>
    `<span style="width:14px;height:4px;background:${i < MONTHS_CLOSED ? '#E0C67A' : 'rgba(244,240,230,.25)'}"></span>`,
).join('');

const quarters = ['Q1', 'Q2', 'Q3', 'Q4']
  .map(
    (q, i) =>
      `<span style="display:flex;flex-direction:column;gap:6px;width:36px;color:${i < QUARTERS_DONE ? '#00D4CB' : 'rgba(255,255,255,.4)'}"><span style="height:4px;background:${i < QUARTERS_DONE ? '#00B5AD' : 'rgba(0,181,173,.28)'}"></span>${q}</span>`,
  )
  .join('');

const contents = [
  ['#standing', 'background:#f4f0e6;box-shadow:inset 0 0 0 1.5px #8a6d22', 'The Standing Item', 'WEEKLY'],
  ['#aob', 'background:#C9A84C', 'Any Other Business', 'MONTHLY'],
  ['#mec', 'background:#5f9a72', 'Month End Close', 'MONTH END'],
  ['#board', 'background:#00B5AD', 'The Board Pack', 'QUARTERLY'],
]
  .map(
    ([href, dot, name, cad], i) =>
      `      <a href="${href}" style="display:grid;grid-template-columns:14px 1fr auto;gap:14px;align-items:center;padding:13px 0;border-top:1px solid rgba(26,26,24,.1);${i === 3 ? 'border-bottom:1px solid rgba(26,26,24,.1);' : ''}color:#1a1a18"><span style="width:10px;height:10px;border-radius:50%;${dot}"></span><span style="font:500 19px/1.2 ${DISPLAY}">${name}</span><span style="font:600 10px/1 ${MONO};letter-spacing:.2em;color:rgba(26,26,24,.5)">${cad}</span></a>`,
  )
  .join('\n');

const __MARKUP = String.raw`
<div class="atlas2">

<header style="max-width:1180px;margin:0 auto;padding:clamp(48px,7vw,96px) clamp(20px,4vw,56px) clamp(40px,6vw,72px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:clamp(40px,6vw,80px);align-items:end">
  <div style="display:flex;flex-direction:column;gap:28px">
    <div style="display:flex;align-items:center;gap:14px;font:600 11px/1 ${MONO};letter-spacing:.28em;color:#00807a"><span style="color:rgba(26,26,24,.4)">06 / 08</span><span style="width:28px;height:1px;background:rgba(26,26,24,.25)"></span><span>ATLAS · VOL. I · ISSUE 01</span></div>
    <h1 style="margin:0;font:700 clamp(44px,6.2vw,80px)/1.02 ${DISPLAY};letter-spacing:-.02em;text-wrap:balance">What we learn inside the work, <span style="font-style:italic;font-weight:500;color:#8a6d22">written down.</span></h1>
    <p style="margin:0;max-width:520px;font:400 19px/1.6 ${BODY};color:rgba(26,26,24,.74);text-wrap:pretty">No gate, no email address, no lead magnet. If it is useful it should be readable.</p>
  </div>
  <div style="display:flex;flex-direction:column;gap:22px;padding:28px;border:1px solid rgba(26,26,24,.14);border-radius:16px;background:rgba(255,255,255,.55)">
    <div style="font:600 10px/1 ${MONO};letter-spacing:.28em;color:rgba(26,26,24,.5)">IN THIS PUBLICATION</div>
    <div style="display:flex;flex-direction:column">
${contents}
    </div>
    <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px">
      <p style="margin:0;font:400 14px/1.5 ${BODY};color:rgba(26,26,24,.7)"><b style="color:#1a1a18;font-weight:600">Four series, one list.</b> Free, and nothing is sold in any of them.</p>
      <a href="https://bijalsejpal.substack.com" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;padding:13px 20px;border-radius:999px;background:#00B5AD;color:#081335;font:600 14px/1 ${BODY}">Subscribe on Substack &rarr;</a>
    </div>
  </div>
</header>

<section style="max-width:1180px;margin:0 auto;padding:clamp(48px,7vw,88px) clamp(20px,4vw,56px);border-top:1px solid rgba(26,26,24,.1);display:flex;flex-direction:column;gap:44px">
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,380px),1fr));gap:24px 64px;align-items:end">
    <div style="display:flex;flex-direction:column;gap:18px"><div style="font:600 11px/1 ${MONO};letter-spacing:.28em;color:#00807a">THE FOUR SERIES</div><h2 style="margin:0;font:700 clamp(34px,4.4vw,52px)/1.08 ${DISPLAY};letter-spacing:-.015em">One publication, four <span style="font-style:italic;font-weight:500;color:#00807a">different jobs.</span></h2></div>
    <p style="margin:0;font:400 17px/1.6 ${BODY};color:rgba(26,26,24,.7);max-width:440px">They share a masthead and nothing else. Follow one and ignore the rest.</p>
  </div>

  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,500px),1fr));gap:20px">

  <article id="standing" style="position:relative;overflow:hidden;border-radius:16px;background:#ebe4d2;border:1px solid rgba(138,109,34,.3);color:#1a1a18;padding:clamp(24px,3vw,36px);display:flex;flex-direction:column;gap:22px;min-height:360px">
    <svg width="160" height="160" viewBox="0 0 200 200" style="position:absolute;right:-28px;top:-28px;display:block" aria-hidden="true"><circle cx="100" cy="100" r="70" fill="none" stroke="#C9A84C" stroke-width="5" stroke-linecap="round" stroke-dasharray="330 109.8" transform="rotate(135 100 100)"></circle></svg>
    <div style="font:700 11px/1 ${MONO};letter-spacing:.24em;color:#8a6d22">WEEKLY · MONDAY</div>
    <div style="display:flex;flex-direction:column;gap:12px;max-width:420px"><h3 style="margin:0;font:500 34px/1.1 ${DISPLAY};letter-spacing:-.01em">The <span style="font-style:italic">Standing Item</span></h3><p style="margin:0;font:400 16px/1.6 ${BODY};color:rgba(26,26,24,.72)">The question I was asked most this week, and the one nobody raised.</p></div>
    <div style="flex:1"></div>
${soon('rgba(138,109,34,.45)', '#C9A84C', '#8a6d22')}
  </article>

  <article id="aob" style="color:#ffffff;position:relative;overflow:hidden;border-radius:16px;background:#081335;border:1px solid rgba(201,168,76,.28);padding:clamp(24px,3vw,36px);display:flex;flex-direction:column;gap:22px;min-height:360px">
    <svg width="160" height="160" viewBox="0 0 200 200" style="position:absolute;right:-28px;top:-28px;display:block" aria-hidden="true"><circle cx="100" cy="100" r="70" fill="none" stroke="#C9A84C" stroke-width="2.5" stroke-dasharray="5 9"></circle><circle cx="50.5" cy="149.5" r="7" fill="#00D4CB"></circle></svg>
    <div style="font:700 11px/1 ${MONO};letter-spacing:.24em;color:#C9A84C">MONTHLY</div>
    <div style="display:flex;flex-direction:column;gap:12px;max-width:420px"><h3 style="margin:0;font:500 34px/1.1 ${DISPLAY};letter-spacing:-.01em">Any Other <span style="font-style:italic;color:#C9A84C">Business</span></h3><p style="margin:0;font:400 16px/1.6 ${BODY};color:rgba(255,255,255,.74)">What building this has actually required, written from inside it.</p></div>
    <div style="flex:1"></div>
${row(ARTICLE.carryingEnough, '#ffffff', 'rgba(255,255,255,.12)', '#C9A84C', 'rgba(255,255,255,.05)', 'rgba(255,255,255,.7)')}
  </article>

  <article id="mec" style="position:relative;overflow:hidden;border-radius:16px;background:#2d5a3d;color:#f4f0e6;padding:clamp(24px,3vw,36px);display:flex;flex-direction:column;gap:22px;min-height:360px">
    <div style="display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap"><div style="font:700 11px/1 ${MONO};letter-spacing:.24em;color:#E0C67A">MONTH END</div><div style="display:flex;gap:4px">${months}</div></div>
    <div style="display:flex;flex-direction:column;gap:12px;max-width:420px"><h3 style="margin:0;font:500 34px/1.1 ${DISPLAY};letter-spacing:-.01em">Month End <span style="font-style:italic;color:#E0C67A">Close</span></h3><p style="margin:0;font:400 16px/1.6 ${BODY};color:rgba(244,240,230,.82)">Work that was actually done, written up in full. The numbers are real.</p></div>
    <div style="flex:1"></div>
${row(ARTICLE.blankMonth, '#f4f0e6', 'rgba(244,240,230,.16)', '#E0C67A', 'rgba(0,0,0,.16)', 'rgba(244,240,230,.76)')}
  </article>

  <article id="board" style="color:#ffffff;position:relative;overflow:hidden;border-radius:16px;background:#0D1F4E;border:1px solid rgba(0,181,173,.3);padding:clamp(24px,3vw,36px);display:flex;flex-direction:column;gap:22px;min-height:360px">
    <div style="display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap"><div style="font:700 11px/1 ${MONO};letter-spacing:.24em;color:#00D4CB">QUARTERLY</div><div style="display:flex;gap:6px;font:600 9px/1 ${MONO};letter-spacing:.16em">${quarters}</div></div>
    <div style="display:flex;flex-direction:column;gap:12px;max-width:420px"><h3 style="margin:0;font:500 34px/1.1 ${DISPLAY};letter-spacing:-.01em">The Board <span style="font-style:italic;color:#00D4CB">Pack</span></h3><p style="margin:0;font:400 16px/1.6 ${BODY};color:rgba(255,255,255,.74)">One decision a board is facing, taken apart. Nothing is sold in it.</p></div>
    <div style="flex:1"></div>
${soon('rgba(0,181,173,.45)', '#00B5AD', '#00D4CB')}
  </article>

  </div>
</section>

<section style="max-width:1180px;margin:0 auto;padding:clamp(48px,7vw,88px) clamp(20px,4vw,56px);border-top:1px solid rgba(26,26,24,.1);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr));gap:40px 64px;align-items:start">
  <div style="display:flex;flex-direction:column;gap:18px"><div style="font:600 11px/1 ${MONO};letter-spacing:.28em;color:#00807a">WHERE TO FIND IT</div><h2 style="margin:0;font:700 clamp(34px,4.4vw,52px)/1.08 ${DISPLAY};letter-spacing:-.015em">Read it, or come and <span style="font-style:italic;font-weight:500;color:#8a6d22">argue with it.</span></h2></div>
  <div style="display:flex;flex-direction:column;gap:12px">
    <a href="https://www.linkedin.com/in/bijal-sejpal" target="_blank" rel="noopener" style="display:grid;grid-template-columns:minmax(0,1fr) auto;gap:20px;align-items:center;padding:24px;border-radius:14px;border:1px solid rgba(26,26,24,.14);background:rgba(255,255,255,.55);color:#1a1a18"><span style="display:flex;flex-direction:column;gap:8px"><span style="font:600 17px/1.2 ${BODY}">Follow on LinkedIn</span><span style="font:400 14px/1.5 ${BODY};color:rgba(26,26,24,.66)">Where most of this surfaces first, and where the conversation actually happens.</span></span><span style="display:flex;align-items:center;gap:8px;font:600 10px/1 ${MONO};letter-spacing:.22em;color:#00807a"><span style="width:7px;height:7px;border-radius:50%;background:#00807a;box-shadow:0 0 10px rgba(0,212,203,.7)"></span>LIVE</span></a>
    <a href="https://bijalsejpal.substack.com" target="_blank" rel="noopener" style="display:grid;grid-template-columns:minmax(0,1fr) auto;gap:20px;align-items:center;padding:24px;border-radius:14px;border:1px solid rgba(26,26,24,.14);background:rgba(255,255,255,.55);color:#1a1a18"><span style="display:flex;flex-direction:column;gap:8px"><span style="font:600 17px/1.2 ${BODY}">Subscribe on Substack</span><span style="font:400 14px/1.5 ${BODY};color:rgba(26,26,24,.66)">All four series, in your inbox.</span></span><span style="display:flex;align-items:center;gap:8px;font:600 10px/1 ${MONO};letter-spacing:.22em;color:#00807a"><span style="width:7px;height:7px;border-radius:50%;background:#00807a;box-shadow:0 0 10px rgba(0,212,203,.7)"></span>LIVE</span></a>
  </div>
</section>

<div style="max-width:1180px;margin:0 auto;padding:0 clamp(20px,4vw,56px) clamp(48px,7vw,88px)">
  <a href="/contact" style="display:flex;justify-content:space-between;align-items:center;gap:24px;flex-wrap:wrap;padding:clamp(26px,3.5vw,40px);border-radius:16px;background:linear-gradient(90deg,rgba(0,181,173,.14),rgba(201,168,76,.08));border:1px solid rgba(0,181,173,.3);color:#1a1a18">
    <span style="display:flex;flex-direction:column;gap:10px"><span style="font:600 11px/1 ${MONO};letter-spacing:.28em;color:#00807a">CONTINUE</span><span style="font:500 clamp(26px,3vw,34px)/1.15 ${DISPLAY}">One inbox, and it <span style="font-style:italic;color:#8a6d22">reaches me.</span></span></span>
    <span style="font:600 12px/1 ${MONO};letter-spacing:.22em;color:rgba(26,26,24,.8)">NEXT · 07 · CONTACT &rarr;</span>
  </a>
</div>

</div>
`;

export default function AtlasPage() {
  return <RouteShell id="atlas" label="06 · Atlas" markup={__MARKUP} />;
}
