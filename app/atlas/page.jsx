import { pageMeta } from '@/lib/seo/page-meta';
import AtlasBody from './AtlasBody';

/**
 * 06 · Atlas — an index, not a library.
 *
 * Rebuilt 16 October 2026 to "WEBSITE — the one brief, 16 October" §3.
 * The writing has moved to atlas.omameh.com.au, a Substack custom domain
 * that went live today, so this page stops hosting articles and becomes
 * a list of what exists with links out to it.
 *
 * WHAT WENT, AND WHY
 *
 * The four series — The Standing Item, Any Other Business, Month End
 * Close, The Board Pack — are retired and nothing replaces them. Three of
 * the four cards held no articles and said "the first one lands soon",
 * which is a promise of something that does not exist. Their cadence
 * labels went with them: weekly, monthly, month end, quarterly were a
 * commitment the publication was not making.
 *
 * The list grows by itself. A new piece is one more entry in PIECES, in
 * publication order, and nothing else on this page changes — plus its
 * cover in public/atlas/, rendered from design's Editorial Cover
 * component at 728 x 524, which is half the Substack master. Render it
 * at that size rather than resizing the master: Playfair's thin strokes
 * go soft when a 1456px export is scaled down in the browser.
 *
 * WHAT STAYED, DELIBERATELY
 *
 * Unlearn · Relearn · Reinvent is not on this page but remains everywhere
 * it already appears on the site — it is the trademarked line, and §2 of
 * the brief reverses an earlier instruction to strip it.
 *
 * The eyebrow and the next-page card are gone, and that reverses what
 * this comment said yesterday. §2 of the brief says Vol. I / Issue 01 is
 * on all ten pages and should be left until they are all done together,
 * so it was kept here. Measured against the live site rather than the
 * brief, that is only half true: the global strip carries "Vol. I" on
 * every page, but "06 / 08 · ATLAS · VOL. I · ISSUE 01" and
 * "NEXT · 07 · CONTACT" appear on this route and nowhere else. They were
 * not a site pattern, they were leftovers from the retired design. The
 * global strip is untouched, so §2 still holds.
 *
 * It also read badly: an eyebrow saying ATLAS above a masthead saying
 * The Unlearning gives the same page two names, and a card inviting you
 * to an inbox sat directly under a box asking for your email.
 *
 * The subscribe form stays. It is not a gate and it is now the only place
 * on the site where a reader can start following the writing. Its heading
 * changed: "One a month" was both a cadence promise and a string the
 * brief asks to be gone from this page.
 *
 * FONT FAMILIES ARE VARIABLES, NOT NAMES. next/font serves each face
 * under a hashed family, so writing 'Playfair Display' literally matches
 * nothing and the page silently falls back to Georgia. That bug shipped
 * on this route once already.
 */

export const metadata = pageMeta({
  title: 'The Unlearning — For anyone who has outgrown the version of themselves that got them here.',
  description:
    'For anyone who has outgrown the version of themselves that got them here. No gate, no email address, no lead magnet.',
  path: '/atlas',
  absoluteTitle: true,
});

const DISPLAY = "var(--font-playfair),'Playfair Display',Georgia,serif";
const BODY = "var(--font-inter),Inter,-apple-system,sans-serif";
const MONO = "var(--font-jetbrains),'JetBrains Mono',ui-monospace,monospace";

/**
 * Publication order across the publication, not within anything. The blank
 * month published in September and Carrying enough in October.
 */
const PIECES = [
  {
    n: '01',
    title: 'You do not get a blank month',
    line: 'Four months, month by month, including what did not work.',
    date: 'September 2026',
    cover: '/atlas/blank-month.jpg',
    href: 'https://atlas.omameh.com.au/p/you-do-not-get-a-blank-month',
  },
  {
    n: '02',
    title: 'Carrying enough',
    line: 'After 7,629 days in corporate, why build your own?',
    date: 'October 2026',
    cover: '/atlas/carrying-enough.jpg',
    href: 'https://atlas.omameh.com.au/p/carrying-enough',
  },
];

/**
 * The cover is the one on Substack, so a reader meets the same image in
 * the feed, in the inbox and here. alt is empty on purpose: the title
 * sits beside it inside the same link, and a screen reader announcing
 * both says everything twice.
 */
const entry = (p) => String.raw`
    <a class="atlas2__piece" href="${p.href}" target="_blank" rel="noopener">
      <span style="font:500 12px/1 ${MONO};letter-spacing:.2em;color:#8a6d22">${p.n}</span>
      <img class="atlas2__cover" src="${p.cover}" alt="" width="728" height="524" loading="lazy" decoding="async">
      <span style="display:flex;flex-direction:column;gap:10px;min-width:0">
        <span class="atlas2__t" style="font:500 clamp(26px,3.4vw,38px)/1.15 ${DISPLAY};letter-spacing:-.015em">${p.title}</span>
        <span style="font:400 17px/1.6 ${BODY};color:rgba(26,26,24,.7);text-wrap:pretty">${p.line}</span>
      </span>
      <span style="font:500 10px/1 ${MONO};letter-spacing:.2em;color:rgba(26,26,24,.5);white-space:nowrap">${p.date.toUpperCase()}</span>
    </a>`;

const list = PIECES.map(entry).join('\n');

const HEAD = String.raw`
<div class="atlas2">

<header style="max-width:1180px;margin:0 auto;padding:clamp(48px,7vw,96px) clamp(20px,4vw,56px) clamp(32px,5vw,56px);display:flex;flex-direction:column;gap:30px">
  <h1 style="margin:0;font:500 clamp(44px,8vw,88px)/1.02 ${DISPLAY};letter-spacing:-.025em">The <span style="font-style:italic;font-weight:500;color:#8a6d22">Unlearning</span></h1>
  <p style="margin:0;max-width:620px;font:400 clamp(19px,2.2vw,23px)/1.55 ${BODY};color:rgba(26,26,24,.8);text-wrap:pretty">For anyone who has outgrown the version of themselves that got them here.</p>
  <p style="margin:0;max-width:520px;font:400 16px/1.6 ${BODY};color:rgba(26,26,24,.6);text-wrap:pretty">No gate, no email address, no lead magnet. If it is useful it should be readable.</p>
</header>

<section style="max-width:1180px;margin:0 auto;padding:0 clamp(20px,4vw,56px) clamp(16px,3vw,32px);display:flex;flex-direction:column">
${list}
</section>

</div>`;

export default function AtlasPage() {
  return <AtlasBody id="atlas" label="06 · Atlas" top={HEAD} />;
}
