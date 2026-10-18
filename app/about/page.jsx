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
 * THIS PAGE ABSORBS /founder. The founder note and the name story move
 * here under #founder, and /founder 301s to /about#founder — the old
 * URL carries her name and is indexed, so it forwards rather than dies.
 *
 * "8 platforms in production" is now "8 platforms built by our own
 * team". Eight were built; several are in production. The live page
 * overstated it, and it is the exact claim a diligent CIO checks.
 *
 * "Our engineering company" is "our engineering partner" here as well
 * as in the footer. Omameh holds a minority stake in Syntegreti and
 * should not claim to own it.
 *
 * THE NAME STORY IS NOT ON THE PAGE YET. The wireframe carries the
 * heading — "The name is my mother's, woven with my daughters'" — and
 * marks the body NEEDS YOUR WORDS. It is the one thing on this site
 * nobody else could write, so it is not being invented or paraphrased
 * from a LinkedIn line. The section is below, commented, and goes live
 * the moment Bijal sends two or three sentences.
 *
 * The partner story lands here rather than on a page of its own, which
 * is why /partners is not built. Who does the work is an About
 * question; the partnership model is not a page.
 *
 * Her titles are past tense and dated, with no "currently" and no
 * "interim" — that withdrawal is permanent.
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

const HOW = [
  ['Build first, pitch second', 'We build a working proof and let the result decide.'],
  ['Everyone ships', 'The person who talks to you on day one deploys it later.'],
  ['Stay small, go deep', 'We would rather go further into fewer problems.'],
  ['Own the outcome', 'Nothing is handed off.'],
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
      <h3 style="margin:0;font-size:clamp(18px,2.2vw,22px)">${head}</h3>
      <p>${body}</p>
    </div>`;

const __MARKUP = String.raw`
<section class="hero"><div class="w">
  <p class="eyebrow">About</p>
  <h1>The people who design it are the people who <em>build it.</em></h1>
  <p class="lede">One team, two countries, and the same agenda from the first conversation to the last deployment.</p>

  <div class="grid four" style="margin-top:var(--s5)">
${STATS.map(([n, l]) => String.raw`    <div class="card"><span style="font-family:var(--display);font-size:clamp(34px,4.5vw,46px);line-height:1;color:var(--navy)">${n}</span><p>${l}</p></div>`).join('\n')}
  </div>
</div></section>

<!--
  THE NAME · needs Bijal's words, two or three sentences.
  Heading is hers; the body is the one thing on this site nobody else
  could write, so it is not being invented. Uncomment and fill.

  <section><div class="w">
    <p class="eyebrow">The name</p>
    <h2>The name is my mother&rsquo;s, woven with my daughters&rsquo;.</h2>
    <p class="lede">[two or three sentences]</p>
  </div></section>
-->

<section id="founder"><div class="w">
  <p class="eyebrow">From the founder</p>
  <h2>Why there is a team.</h2>

  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(28px,4vw,56px);align-items:start;margin-top:var(--s4)">
    <div style="display:flex;flex-direction:column;gap:var(--s2);min-width:0">
      <p class="lede">I spent twenty years inside large regulated organisations watching the same thing happen. A good strategy, a well-run pilot, then nothing — not because the technology failed, but because the way the work happened underneath it never changed.</p>
      <p class="lede" style="font-style:italic;color:var(--navy)">As an adviser you can name that problem precisely. Naming it was never what I wanted to do. I wanted to be accountable for fixing it.</p>
      <p class="lede">Twenty people and growing — architecture, engineering, data, cloud, clinical and domain specialists. None of it gets designed alone. The team is in the room for the design, not only the build.</p>
      <p style="margin:0;font-family:var(--mono);font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;color:var(--gold)">— Bijal Sejpal · Founder &amp; CEO</p>
      <p style="margin:0;font-size:14px;line-height:1.6;color:var(--ink-soft)">Formerly Chief Operating Officer, Technology, Bupa Asia-Pacific (2025&ndash;2026). Formerly Group Chief Operating Officer, Data, Analytics and AI, QBE (2019&ndash;2025). Earlier: NSW Department of Customer Service, the ABC, NSW Police. MBA (Executive), AGSM.</p>
    </div>
    <img src="/about/bijal-seated-teal.jpg" alt="Bijal Sejpal" width="880" height="1179" loading="lazy" decoding="async" style="width:100%;max-width:420px;height:auto;display:block;justify-self:center;border-radius:3px">
  </div>
</div></section>

<section><div class="w">
  <p class="eyebrow">The team</p>
  <h2>Small on purpose. Not small in the room.</h2>
  <p class="lede">One team across Sydney and Hyderabad, led from Sydney. Advisory is founder-led; the engineering is Syntegreti, our engineering partner. The people who sit in your solution design are the people who build it — same meeting, same specification, no translation layer.</p>

  <p style="margin:var(--s4) 0 0;display:flex;flex-wrap:wrap;gap:10px">
${DISCIPLINES.map((d) => String.raw`    <span class="chip">${d}</span>`).join('\n')}
  </p>

  <div class="grid four" style="margin-top:var(--s4)">${HOW.map(card).join('')}
  </div>
</div></section>

<section><div class="w">
  <p class="eyebrow">And who we work with</p>
  <h2>Three directions, and we say which one applies.</h2>

  <div class="grid three">${PARTNERS.map(card).join('')}
  </div>

  <p class="lede" style="margin-top:var(--s4)">We do not take every partner. It has to sit inside one of the five pillars, be complementary rather than competing, and be a product we would put our own name next to. We have said no.</p>
</div></section>

<section><div class="w">
  <p class="eyebrow">Where we play</p>
  <h2>Deep where it is regulated. Open where it is not.</h2>
  <p class="lede">Enterprise work concentrates in regulated, complex industries — that is where we started and where the lens is sharpest. Everything else, we take on any field.</p>

  <div class="grid four">${SECTORS.map(card).join('')}
  </div>

  <p class="lede" style="margin-top:var(--s4)"><b style="color:var(--ink)">Everyone else · any field.</b> Owner-led businesses, platform vendors and independent operators come to us from every industry there is. A roadmap that will not scale looks the same in construction as it does in law.</p>
</div></section>

<section><div class="w">
  <p class="eyebrow">The work</p>
  <h2>We are the first case.</h2>
  <p class="lede">Everything on this site, we did to ourselves first — and in this order.</p>

  <div class="grid four">${FIRSTCASE.map(titled).join('')}
  </div>

  <div class="cta"><a class="link" href="/products">See what we have built &rarr;</a></div>
</div></section>

<section><div class="w">
  <p class="eyebrow">What people ask us</p>
  <h2>The questions we actually get.</h2>
  <p class="lede">These are the awkward ones, so they are the ones on the page.</p>

  <div class="grid two">${ASKED.map(titled).join('')}
  </div>

  <div class="feature" style="margin-top:var(--s4)">
    <h3 style="margin:0;font-size:clamp(19px,2.4vw,24px)">And the one nobody asks out loud — have you ever told a client to stop?</h3>
    <p class="lede">Yes, more than once. We would rather protect your budget than protect our next phase. It is the same reason our clients come back.</p>
  </div>
</div></section>
`;

export default function AboutPage() {
  return <RouteShell id="about" label="About" markup={__MARKUP} />;
}
