import { pageMeta } from '@/lib/seo/page-meta';
import RouteShell from '../_components/RouteShell';

/**
 * About · /about
 *
 * Rebuilt 18 October 2026 from WIREFRAME — about.html. Copy reproduced
 * exactly. Two paragraphs are not to be touched: the founder note, and
 * "have you ever told a client to stop" — the wireframe calls the
 * second one the best paragraph on the site and the reason a reader
 * believes the rest, which is right.
 *
 * THIS PAGE ABSORBS /founder. /founder 301s to /about#founder — the old
 * URL carries her name and is indexed, so it forwards rather than dies.
 *
 * ── 19 OCTOBER · THE WRITING IS BACK ───────────────────────────────
 * The 18 October rebuild read "folded into /about" as "replaced with a
 * summary". It was not. /founder carried an eleven-paragraph essay,
 * "Why I built this", and a name-origin aside, and both were deleted
 * and replaced with a three-paragraph note. That was wrong.
 *
 * Both are restored below, verbatim from app/founder/page.jsx at commit
 * 607f4bc~1. Nothing is paraphrased, nothing is trimmed. What changed
 * is only the markup: the original used the V11 legacy stylesheet
 * (.fo-hero, .fo-name, .why, --space-8) and this page is V12, so the
 * same words now run on .w-narrow, .pq and the craft layer's frames.
 *
 * THE NAME STORY NEEDED NO NEW WORDS. The previous version of this file
 * carried a commented-out section marked "NEEDS YOUR WORDS" and asked
 * Bijal for two or three sentences. She had already written them, in
 * 2026, on the page that was then deleted — which is exactly what she
 * meant by "there is already a mention of what the name means, so you
 * can just leave it". Asking again for something she had already
 * written and we had removed is the failure, not the missing copy.
 *
 * "8 platforms in production" is now "8 platforms built by our own
 * team". Eight were built; several are in production. The live page
 * overstated it, and it is the exact claim a diligent CIO checks.
 *
 * "Our engineering company" is "our engineering partner" here as well
 * as in the footer. Omameh holds a minority stake in Syntegreti and
 * should not claim to own it.
 *
 * The partner story lands here rather than on a page of its own, which
 * is why /partners is not built. Who does the work is an About
 * question; the partnership model is not a page.
 *
 * Her titles are past tense and dated, with no "currently" and no
 * "interim" — that withdrawal is permanent.
 *
 * BAND RHYTHM · plain · warm · plain · warm · dark · plain · warm ·
 * plain · dark. Nothing adjacent repeats. The essay sits on warm at
 * .w-narrow because it is the longest read on the site and needs a
 * measure, not a column of a grid.
 */

export const metadata = pageMeta({
  title: 'The people who design it are the people who build it.',
  description:
    'One team, two countries, and the same agenda from the first conversation to the last deployment.',
  path: '/about',
});

const STATS = [
  ['8', 'platforms built by our own team'],
  ['20+', 'specialists across architecture, engineering, data and cloud'],
  ['4', 'ways in, one method behind all of them'],
  ['2', 'countries, no handoff'],
];

const DISCIPLINES = [
  'AI / ML engineers', 'Full-stack developers', 'Cloud architects',
  'Data scientists', 'Clinical specialists', 'Domain specialists', 'DevOps',
];

/** Four of the six sanctioned icons. Six is the ceiling and no set is
 *  ever installed — these ship in /public/icons and had been used on no
 *  page at all. Each is decorative: the heading carries the meaning. */
const HOW = [
  ['diagnose', 'Build first, pitch second', 'We build a working proof and let the result decide.'],
  ['sequence', 'Everyone ships', 'The person who talks to you on day one deploys it later.'],
  ['readiness', 'Stay small, go deep', 'We would rather go further into fewer problems.'],
  ['compound-tight', 'Own the outcome', 'Nothing is handed off.'],
];

const PARTNERS = [
  ['We deliver for them', 'Platform vendors with customers in Asia-Pacific and no team here. We stand up the delivery and hold it with one engagement lead.'],
  ["We carry each other's software", 'Their products into Asia-Pacific, ours into the US, UK and Europe. Where the software is not ours, we say whose it is.'],
  ['We are someone else’s bench', 'For firms that own the client and have no engineering. You keep the client, the contract and the credit.'],
];

const SECTORS = [
  ['Banking, financial services &amp; insurance', 'APRA · ASIC · AFCA'],
  ['Healthcare &amp; clinical', 'TGA · ADHA · State health'],
  ['Government &amp; public sector', 'Commonwealth · State'],
  ['Technology &amp; operations', 'Sector-dependent'],
];

const FIRSTCASE = [
  ['01 · Advisory', 'Positioned it', 'The practice, the brand, the legals, the architecture underneath. Before a single client, the thing itself had to be designed.'],
  ['02 · The bench', 'Built the team', 'Engineering, deliberately — because advice you cannot deliver is only a recommendation.'],
  ['03 · Fluency', 'Made it teachable', 'If it only works when we are holding it, it is not a method.'],
  ['04 · Products', 'Built the products', 'Two in market, each its own company with its own customers — and we run the business on one of them.'],
];

/** The awkward questions, which is the point of putting them here. */
const ASKED = [
  ['Enterprise', 'What happens when you leave?', 'Your team runs it. That is the whole design — we build with your people rather than around them, and the handover is a phase with a date on it, not a document at the end.'],
  ['Owner-led business', 'We can’t afford a transformation.', 'You do not need one. We find the single thing that will return the most, fix that, and stop. You decide whether there is a second one.'],
  ['Platforms', 'Why would we hand our customers to you?', 'You keep them. The relationship, the contract and the invoice stay yours — we are the delivery team behind you, and we appear only when you want us to.'],
  ['An idea of your own', 'Who owns what we build?', 'You do. Written in before the first line of code, not negotiated at the end.'],
  ['Everyone, quietly', 'How big are you?', 'One delivery team, two companies. Architecture in Sydney, engineering in Hyderabad, no handoff. You get the people who designed it, and a bench that does not have to be recruited first.'],
];

const card = ([k, body]) => String.raw`
    <div class="card"><span class="k">${k}</span><p>${body}</p></div>`;

const titled = ([k, head, body]) => String.raw`
    <div class="card">
      <span class="k">${k}</span>
      <h3 class="card-h">${head}</h3>
      <p>${body}</p>
    </div>`;

const howCard = ([icon, head, body]) => String.raw`
    <div class="card">
      <img class="ic48" src="/icons/${icon}.svg" alt="" aria-hidden="true" width="48" height="48" loading="lazy" decoding="async">
      <h3 class="card-h">${head}</h3>
      <p>${body}</p>
    </div>`;

const __MARKUP = String.raw`
<section class="hero">
  <span class="arc top" aria-hidden="true"></span>
  <div class="w">
    <p class="eyebrow">About</p>
    <h1>The people who design it are the people who <em>build it.</em></h1>
    <p class="lede">One team, two countries, and the same agenda from the first conversation to the last deployment.</p>

    <div class="grid four statgrid" data-reveal-group>
${STATS.map(([n, l]) => String.raw`      <div class="card"><span class="statnum">${n}</span><p>${l}</p></div>`).join('\n')}
    </div>
  </div>
</section>

<!-- THE NAME moved to /founder on 19 October, not deleted.
     It was on both pages for about an hour, which meant a reader going
     About -> Founder met the same paragraph twice. It belongs on
     /founder: it is first person, it is her account of naming the
     practice after her mother and daughters, and it is part of the
     write-up she meant when she said "there is already a mention of
     what the name means". /about links there. -->
<section id="founder">
  <div class="w">
    <div class="fo-split">
      <div class="fo-words" data-reveal>
        <p class="eyebrow">From the founder</p>
        <h2>Why there is a team.</h2>
        <p class="lede">I spent twenty years inside large regulated organisations watching the same thing happen. A good strategy, a well-run pilot, then nothing &mdash; not because the technology failed, but because the way the work happened underneath it never changed.</p>
        <p class="pq">As an adviser you can name that problem precisely. Naming it was never what I wanted to do. I wanted to be accountable for fixing it.</p>
        <p class="lede">Twenty people and growing &mdash; architecture, engineering, data, cloud, clinical and domain specialists. None of it gets designed alone. The team is in the room for the design, not only the build.</p>
        <p class="signature">&mdash; Bijal Sejpal · Founder &amp; CEO</p>
        <p class="credentials">Formerly Chief Operating Officer, Technology, Bupa Asia-Pacific (2025&ndash;2026). Formerly Group Chief Operating Officer, Data, Analytics and AI, QBE (2019&ndash;2025). Earlier: NSW Department of Customer Service, the ABC, NSW Police. MBA (Executive), AGSM.</p>
        <div class="cta">
          <a class="btn" href="/founder">Read why I built this &rarr;</a>
          <a class="link" href="https://www.linkedin.com/in/bijal-sejpal/" target="_blank" rel="noopener noreferrer">linkedin.com/in/bijal-sejpal &nearr;</a>
        </div>
      </div>
      <figure class="fr portrait" style="--ar:880/1179" data-reveal>
        <img src="/about/bijal-seated-teal.jpg" alt="Bijal Sejpal, founder and chief executive of Omameh" width="880" height="1179" loading="lazy" decoding="async">
      </figure>
    </div>
  </div>
</section>

<section class="dark">
  <span class="arc left" aria-hidden="true"></span>
  <div class="w">
    <div class="shead" data-reveal>
      <p class="eyebrow">The team</p>
      <h2>Small on purpose. Not small in the room.</h2>
      <p class="lede">One team across Sydney and Hyderabad, led from Sydney. Advisory is founder-led; the engineering is Syntegreti, our engineering partner. The people who sit in your solution design are the people who build it &mdash; same meeting, same specification, no translation layer.</p>
    </div>

    <p class="chiprow">
${DISCIPLINES.map((d) => String.raw`      <span class="chip">${d}</span>`).join('\n')}
    </p>

    <div class="grid four" data-reveal-group>${HOW.map(howCard).join('')}
    </div>
  </div>
</section>

<section><div class="w">
  <div class="shead" data-reveal>
    <p class="eyebrow">And who we work with</p>
    <h2>Three directions, and we say which one applies.</h2>
  </div>

  <div class="grid three" data-reveal-group>${PARTNERS.map(card).join('')}
  </div>

  <p class="lede aftergrid">We do not take every partner. It has to sit inside one of the five pillars, be complementary rather than competing, and be a product we would put our own name next to. We have said no.</p>
</div></section>

<section class="warm"><div class="w">
  <div class="shead" data-reveal>
    <p class="eyebrow">Where we play</p>
    <h2>Deep where it is regulated. Open where it is not.</h2>
    <p class="lede">Enterprise work concentrates in regulated, complex industries &mdash; that is where we started and where the lens is sharpest. Everything else, we take on any field.</p>
  </div>

  <div class="grid four" data-reveal-group>${SECTORS.map(card).join('')}
  </div>

  <p class="lede aftergrid"><b class="strongink">Everyone else · any field.</b> Owner-led businesses, platform vendors and independent operators come to us from every industry there is. A roadmap that will not scale looks the same in construction as it does in law.</p>
</div></section>

<section><div class="w">
  <div class="shead" data-reveal>
    <p class="eyebrow">The work</p>
    <h2>We are the first case.</h2>
    <p class="lede">Everything on this site, we did to ourselves first &mdash; and in this order.</p>
  </div>

  <div class="grid four" data-reveal-group>${FIRSTCASE.map(titled).join('')}
  </div>

  <div class="cta"><a class="link" href="/products">See what we have built &rarr;</a></div>
</div></section>

<section class="dark">
  <span class="arc" aria-hidden="true"></span>
  <div class="w">
    <div class="shead" data-reveal>
      <p class="eyebrow">What people ask us</p>
      <h2>The questions we actually get.</h2>
      <p class="lede">These are the awkward ones, so they are the ones on the page.</p>
    </div>

    <div class="grid two" data-reveal-group>${ASKED.map(titled).join('')}
    </div>

    <div class="feature lastword" data-reveal>
      <h3>And the one nobody asks out loud &mdash; have you ever told a client to stop?</h3>
      <p class="lede">Yes, more than once. We would rather protect your budget than protect our next phase. It is the same reason our clients come back.</p>
    </div>
  </div>
</section>
`;

export default function AboutPage() {
  return <RouteShell id="about" label="About" markup={__MARKUP} />;
}
