import { pageMeta } from '@/lib/seo/page-meta';
import RouteShell from './_components/RouteShell';
import IntukaDemo from './_components/IntukaDemo';

/**
 * Homepage · /
 *
 * Rebuilt 18 October 2026 from WIREFRAME — homepage.html.
 *
 * The headline is untouched. So are the two lines under it and
 * "Safely, and without the theatre", which is the sharpest
 * differentiator on the site.
 *
 * THE STATISTICS WERE CHECKED BEFORE PUBLISHING, 18 October, against
 * the National AI Centre's SME AI Pulse (ai.gov.au, "AI adoption
 * insights: December 2025 to February 2026"; monthly tracking survey
 * run by Fifth Quadrant, 400+ SME decision-makers per wave):
 *
 *   65%  trust / preference for human control   confirmed
 *   54%  cannot see the relevance               confirmed — and this
 *        figure is specific to NON-ADOPTERS, which is why the framing
 *        above the three numbers says "not adopting AI". The headline
 *        all-business figure is lower. Do not drop that qualifier.
 *   19%  do not know where to start             confirmed
 *
 * They are the strongest evidence on the site because they are the
 * government's own: the three barriers are trust, relevance and not
 * knowing where to start, and not one of them is technology.
 *
 * THE PODCAST NAME IS NOT ON THE PAGE. The wireframe carries it as
 * "[podcast — name to confirm]" because it was only known
 * phonetically, and an approximation of a real organisation does not
 * go on a page under her name. Four confirmed rooms are listed; the
 * fifth goes in when the spelling is confirmed.
 *
 * ROOM NAMES ARE PROSE, NEVER LOGOS. Stating a fact about an event she
 * ran is not the same as displaying a trademark, and Stripe and SAP
 * both restrict third-party mark use. Do not turn these into logos.
 *
 * "No gate, no email address, no lead magnet" is attached to the
 * writing, not to the site. The diagnostics are deliberately gated —
 * sent, not self-served — so as a site-wide claim it would be untrue.
 *
 * "How we work" (SENSE / SHIFT / SCALE) moved off this page to
 * /advisory. A homepage does not need method to answer "should I
 * call".
 */

export const metadata = pageMeta({
  title: 'Omameh · Everyone got the technology. Almost nobody got their time back.',
  description:
    'Omameh helps people understand AI, adopt it, build with it and scale it. Enterprises, owner-led businesses, software platforms, and people with an idea of their own. Safely, and without the theatre.',
  path: '/',
  absoluteTitle: true,
});

const MAILTO = (subject) =>
  `mailto:contact@omameh.com.au?subject=${encodeURIComponent(subject)}`;

const EVIDENCE = [
  ['65%', 'of Australian small and medium businesses not adopting AI say it is because they distrust the decisions, or want to keep people in control.'],
  ['54%', 'cannot see how it is relevant to a business like theirs.'],
  ['19%', 'say they simply do not know where to start.'],
];

const VERBS = [
  ['Understand it · Fluency', 'Tell a real capability from a good demo.', 'Corporate, team and cohort programmes. Your people learn to tell a solid answer from a plausible one — including ours.', '/fluency'],
  ['Adopt it · Advisory', 'What is in the way, and what replaces it.', 'Worked out with your people, not handed to them. Pressure-test, modernisation, standing counsel.', '/advisory'],
  ['Build with it · Products &amp; accelerators', 'The same team that designed it.', 'No handoff, no translation layer, no second contract. Intuka, GovernVeil, and accelerators built once and configured for you.', '/products'],
  ['Scale it · Delivery', 'Yours to run, on a bench that already exists.', 'Blended onshore–offshore delivery with one engagement lead holding the client, the partner and the delivery team together.', '/about'],
];

/** Confirmed only. The podcast is absent until its name is spelled right. */
const ROOMS = ['Stripe', 'SAP, Asia-Pacific', 'W Media', 'AICD'];

const TRIGGERS = [
  'The pilot worked. Nothing actually changed.',
  'Everyone is busier and nothing is faster.',
  'Someone asked who is accountable for AI and the room went quiet.',
  'Everyone says you should be using AI. Nobody has told you whether you actually need it.',
  'The strategy says one thing. The operation does another. Nobody owns the gap.',
  'You bought the tools. You are still the one answering everything.',
  'You cannot take two weeks off without it showing.',
  'Nothing looks broken. You would rather find out for certain than assume.',
  'You are winning work here faster than you can deliver it.',
  'You want a partner in this region who will own the delivery, not just staff it.',
  'You have solved it fifty times and it still only works when you are in the room.',
  'You know exactly what to build. You do not know who to trust with it.',
];

const SHAPES = [
  ['Enterprise', 'Large, regulated, and answering to a board.', 'Your solution owner.', 'Starts with · Deep Scan'],
  ['Owner-led business', 'You own it or you run it, and it runs through you.', 'Your growth and operations partner.', 'Starts with · Pressure-test'],
  ['Platforms', 'Software companies with customers in Asia-Pacific.', 'Your go-to-market and delivery partner in region.', 'Starts with · Go-to-market plan'],
  ['An idea of your own', 'Founders and operators with something only they can do.', 'Your build partner.', 'Starts with · Build partnership'],
];

const __MARKUP = String.raw`
<section class="hero"><div class="w">
  <p class="eyebrow">Est. 2026</p>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(28px,4vw,64px);align-items:center">
    <div style="display:flex;flex-direction:column;gap:var(--s3);min-width:0">
      <h1 style="margin:0">Everyone got the technology. Almost nobody got <em>their time back.</em></h1>
      <p class="lede">Omameh helps people understand AI, adopt it, build with it and scale it. Enterprises, owner-led businesses, software platforms, and people with an idea of their own.</p>
      <p class="lede" style="color:var(--navy);font-style:italic">Safely, and without the theatre.</p>
      <div class="cta" style="margin-top:var(--s2)"><a class="btn" href="/contact">Let&rsquo;s talk</a></div>
    </div>
    <img src="/about/bijal-seated-teal.jpg" alt="Bijal Sejpal" width="880" height="1179" loading="eager" fetchpriority="high" decoding="async" style="width:100%;max-width:400px;height:auto;display:block;justify-self:center;border-radius:3px">
  </div>
</div></section>

<section><div class="w">
  <p class="eyebrow">01 · The reframe</p>
  <h2>The technology was almost never the problem. It was almost never the people.</h2>
  <p class="lede">Twenty years inside large regulated organisations, watching the same thing happen. A good strategy, a well-run pilot, then nothing — because the way the work happened underneath it never changed.</p>

  <p class="eyebrow" style="margin-top:var(--s5)">And it is not just us saying it</p>
  <div class="grid three">
${EVIDENCE.map(([n, l]) => String.raw`    <div class="card"><span style="font-family:var(--display);font-size:clamp(34px,4.5vw,46px);line-height:1;color:var(--navy)">${n}</span><p>${l}</p></div>`).join('\n')}
  </div>
  <p class="lede" style="margin-top:var(--s3)"><b style="color:var(--ink)">Not one of those is a technology problem.</b></p>
  <p style="margin:var(--s2) 0 0;font-family:var(--mono);font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-soft)">National AI Centre · SME AI Pulse · December 2025 &ndash; February 2026</p>
</div></section>

<section><div class="w">
  <p class="eyebrow">02 · What we do</p>
  <h2>Understand it. Adopt it. Build with it. Scale it.</h2>
  <p class="lede">Four things a buyer does, in that order. Each one has something behind it.</p>

  <div class="grid four">
${VERBS.map(([k, head, body, href]) => String.raw`    <div class="card"><span class="k">${k}</span><h3 style="margin:0;font-size:clamp(18px,2.1vw,21px)">${head}</h3><p>${body}</p><a class="link" style="margin-top:auto" href="${href}">More &rarr;</a></div>`).join('\n')}
  </div>

  <p class="lede" style="margin-top:var(--s4)">One delivery team, two companies. Architecture in Sydney, engineering in Hyderabad, no handoff. Two products in market, each its own company and its own site: <b style="color:var(--ink)">Intuka</b> runs operations. <b style="color:var(--ink)">GovernVeil</b> checks every AI request before it leaves your perimeter. Omameh runs on Intuka — the demo on this site is our live instance.</p>
</div></section>

<section><div class="w">
  <p class="eyebrow">Rooms</p>
  <h2>Rooms we have been trusted to run.</h2>
  <p class="lede">Moderating, keynotes, panels and webinars — for the organisations whose rooms they were.</p>
  <p style="margin:var(--s4) 0 0;font-family:var(--display);font-size:clamp(19px,2.4vw,26px);line-height:1.5;color:var(--navy)">${ROOMS.join(' &nbsp;·&nbsp; ')}</p>
  <div class="cta"><a class="link" href="/rooms">Every room, and how to book one &rarr;</a></div>
</div></section>

<section><div class="w">
  <p class="eyebrow">04 · Who should call us, and why</p>
  <h2>You will know the moment when you read it.</h2>
  <p class="lede">Twelve reasons people pick up the phone. You do not have to work out which kind of organisation you are first — find the sentence that sounds like your week, and the rest sorts itself out.</p>

  <div class="triggers">
${TRIGGERS.map((t) => String.raw`    <p>&mdash; ${t}</p>`).join('\n')}
  </div>
</div></section>

<section><div class="w">
  <h2>Four shapes, not four industries.</h2>
  <p class="lede">A roadmap that will not scale looks the same in construction as it does in law. Whichever sentence you recognised, you are one of four shapes — and each one starts somewhere small.</p>

  <div class="grid four">
${SHAPES.map(([k, who, role, starts]) => String.raw`    <div class="card"><span class="k">${k}</span><p>${who}</p><p style="color:var(--navy)">${role}</p><span class="foot">${starts}</span></div>`).join('\n')}
  </div>

  <div class="cta" style="margin-top:var(--s4)">
    <a class="btn" data-intuka-demo data-demo-product="Roundtable" href="${MAILTO('Start with a conversation')}">Recognise one of those? Start with a conversation</a>
  </div>
  <p style="margin:var(--s2) 0 0;font-family:var(--mono);font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-soft)">Ninety minutes · no slides · no selling</p>
</div></section>

<section><div class="w">
  <p class="eyebrow">The writing</p>
  <h2>The Unlearning</h2>
  <p class="lede">For anyone who has outgrown the version of themselves that got them here.</p>
  <p class="lede" style="margin-top:var(--s2)">No gate, no email address, no lead magnet. If it is useful it should be readable.</p>
  <div class="cta"><a class="link" href="https://atlas.omameh.com.au" target="_blank" rel="noopener">atlas.omameh.com.au &rarr;</a></div>
</div></section>
`;

export default function HomePage() {
  return (
    <>
      <RouteShell id="home" label="Omameh" markup={__MARKUP} />
      <IntukaDemo />
    </>
  );
}
