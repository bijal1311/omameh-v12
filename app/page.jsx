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
<section class="deep hero">
  <span class="arc" aria-hidden="true"></span>
  <div class="w">
    <p class="eyebrow">Est. 2026</p>
    <div class="hero-split">
      <div class="hero-words">
        <h1 class="hero-h1">Everyone got the technology. Almost nobody got <em>their time back.</em></h1>
        <p class="lede">Omameh helps people understand AI, adopt it, build with it and scale it. Enterprises, owner-led businesses, software platforms, and people with an idea of their own.</p>
        <p class="lede hero-kicker">Safely, and without the theatre.</p>
        <div class="cta"><a class="btn" href="/contact">Let&rsquo;s talk</a></div>
      </div>
      <figure class="fr portrait hero-portrait" style="--ar:880/1179">
        <img src="/about/bijal-seated-teal.jpg" alt="Bijal Sejpal, founder and chief executive of Omameh" width="880" height="1179" loading="eager" fetchpriority="high" decoding="async">
      </figure>
    </div>
  </div>
</section>

<section><div class="w">
  <div class="shead" data-reveal>
    <p class="eyebrow">01 · The reframe</p>
    <h2>The technology was almost never the problem. It was almost never the people.</h2>
    <p class="lede">Twenty years inside large regulated organisations, watching the same thing happen. A good strategy, a well-run pilot, then nothing — because the way the work happened underneath it never changed.</p>
  </div>

  <p class="eyebrow evidence-k">And it is not just us saying it</p>
  <div class="grid three" data-reveal-group>
${EVIDENCE.map(([n, l]) => String.raw`    <div class="card"><span class="statnum">${n}</span><p>${l}</p></div>`).join('\n')}
  </div>
  <p class="lede aftergrid"><b class="strongink">Not one of those is a technology problem.</b></p>
  <p class="srcnote">National AI Centre · SME AI Pulse · December 2025 &ndash; February 2026</p>
</div></section>

<section class="dark">
  <span class="arc left" aria-hidden="true"></span>
  <div class="w">
    <div class="shead" data-reveal>
      <p class="eyebrow">02 · What we do</p>
      <h2>Understand it. Adopt it. Build with it. Scale it.</h2>
      <p class="lede">Four things a buyer does, in that order. Each one has something behind it.</p>
    </div>

    <div class="grid four" data-reveal-group>
${VERBS.map(([k, head, body, href]) => String.raw`    <div class="card"><span class="k">${k}</span><h3 class="card-h">${head}</h3><p>${body}</p><a class="link cardlink" href="${href}">More &rarr;</a></div>`).join('\n')}
    </div>

    <p class="lede aftergrid">One delivery team, two companies. Architecture in Sydney, engineering in Hyderabad, no handoff. Two products in market, each its own company and its own site: <b class="strongink">Intuka</b> runs operations. <b class="strongink">GovernVeil</b> checks every AI request before it leaves your perimeter. Omameh runs on Intuka — the demo on this site is our live instance.</p>
  </div>
</section>

<section class="warm"><div class="w">
  <div class="shead" data-reveal>
    <p class="eyebrow">Rooms</p>
    <h2>Rooms we have been trusted to run.</h2>
    <p class="lede">Moderating, keynotes, panels and webinars — for the organisations whose rooms they were.</p>
  </div>
  <p class="roomstrip" data-reveal>${ROOMS.join(' &nbsp;·&nbsp; ')}</p>
  <div class="cta"><a class="link" href="/rooms">Every room, and how to book one &rarr;</a></div>
</div></section>

<section><div class="w">
  <div class="shead" data-reveal>
    <p class="eyebrow">04 · Who should call us, and why</p>
    <h2>You will know the moment when you read it.</h2>
    <p class="lede">Twelve reasons people pick up the phone. You do not have to work out which kind of organisation you are first — find the sentence that sounds like your week, and the rest sorts itself out.</p>
  </div>

  <div class="triggers" data-reveal>
${TRIGGERS.map((t) => String.raw`    <p>&mdash; ${t}</p>`).join('\n')}
  </div>
</div></section>

<section class="dark">
  <span class="arc" aria-hidden="true"></span>
  <div class="w">
    <div class="shead" data-reveal>
      <h2>Four shapes, not four industries.</h2>
      <p class="lede">A roadmap that will not scale looks the same in construction as it does in law. Whichever sentence you recognised, you are one of four shapes — and each one starts somewhere small.</p>
    </div>

    <div class="grid four" data-reveal-group>
${SHAPES.map(([k, who, role, starts]) => String.raw`    <div class="card"><span class="k">${k}</span><p>${who}</p><p class="rolep">${role}</p><span class="foot">${starts}</span></div>`).join('\n')}
    </div>

    <div class="cta">
      <a class="btn" data-intuka-demo data-demo-product="Roundtable" href="${MAILTO('Start with a conversation')}">Recognise one of those? Start with a conversation</a>
    </div>
    <p class="srcnote">Ninety minutes · no slides · no selling</p>
  </div>
</section>

<section class="warm"><div class="w">
  <div class="w-narrow unlearning" data-reveal>
    <p class="eyebrow">The writing</p>
    <h2>The Unlearning</h2>
    <p class="lede">For anyone who has outgrown the version of themselves that got them here.</p>
    <p class="lede">No gate, no email address, no lead magnet. If it is useful it should be readable.</p>
    <div class="cta"><a class="link" href="https://atlas.omameh.com.au" target="_blank" rel="noopener">atlas.omameh.com.au &rarr;</a></div>
  </div>
</div></section>

<!-- The closing band. Portrait opens the page, the mark closes it —
     the one is who you call, the other is what it is. dark rather than
     deep so it steps DOWN into the navy-ink footer instead of merging
     with it, and .dark::after lays the gold hairline across the join. -->
<section class="dark closemark">
  <div class="w">
    <div class="closestage" data-reveal>
      <div class="markstage"><span class="mr mr1"></span><span class="mr mr2"></span><span class="mr mr3"></span>
      <svg class="mark" viewBox="0 0 400 400" fill="none" role="img" aria-label="Omameh">
      <defs>
        <radialGradient id="g-centre" cx="42%" cy="34%" r="65%">
          <stop offset="0%" stop-color="#F1DA8C"/><stop offset="35%" stop-color="#E5C56F"/>
          <stop offset="70%" stop-color="#C9A84C"/><stop offset="100%" stop-color="#B8941F"/>
        </radialGradient>
        <linearGradient id="g-teal" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#00B5AD" stop-opacity=".30"/><stop offset="50%" stop-color="#00B5AD" stop-opacity="1"/><stop offset="100%" stop-color="#00D4CB" stop-opacity=".50"/></linearGradient>
        <linearGradient id="g-white" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FFFFFF" stop-opacity=".40"/><stop offset="50%" stop-color="#FFFFFF" stop-opacity="1"/><stop offset="100%" stop-color="#FFFFFF" stop-opacity=".55"/></linearGradient>
        <linearGradient id="g-gold" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#C9A84C" stop-opacity=".45"/><stop offset="50%" stop-color="#C9A84C" stop-opacity="1"/><stop offset="100%" stop-color="#E5C56F" stop-opacity=".60"/></linearGradient>
        <path id="orbit-path" d="M 200,200 m -178,0 a 178,178 0 1,1 356,0 a 178,178 0 1,1 -356,0"/>
      </defs>
      <g class="m-orbitring"><circle cx="200" cy="200" r="194" stroke="rgba(255,255,255,0.10)" stroke-width=".75" stroke-dasharray="1.5 9" fill="none"/></g>
      <g class="m-compass">
        <circle class="halo" cx="394" cy="200" r="6.5" fill="#C9A84C" opacity=".18"/><circle cx="394" cy="200" r="3.5" fill="#C9A84C" opacity=".92"/>
        <circle class="halo" cx="200" cy="394" r="6.5" fill="#C9A84C" opacity=".18"/><circle cx="200" cy="394" r="3.5" fill="#C9A84C" opacity=".92"/>
        <circle class="halo" cx="6" cy="200" r="6.5" fill="#C9A84C" opacity=".18"/><circle cx="6" cy="200" r="3.5" fill="#C9A84C" opacity=".92"/>
      </g>
      <g class="m-orbittext"><text><textPath href="#orbit-path" startOffset="0">UNLEARN · RELEARN · REINVENT · UNLEARN · RELEARN · REINVENT ·</textPath></text></g>
      <g class="m-tick"><g transform="translate(200 200)" stroke="rgba(201,168,76,0.55)" stroke-width="1" stroke-linecap="round">
        <line y1="-92" y2="-86"/><line y1="-92" y2="-86" transform="rotate(30)"/><line y1="-92" y2="-86" transform="rotate(60)"/><line y1="-92" y2="-86" transform="rotate(90)"/>
        <line y1="-92" y2="-86" transform="rotate(120)"/><line y1="-92" y2="-86" transform="rotate(150)"/><line y1="-92" y2="-86" transform="rotate(180)"/><line y1="-92" y2="-86" transform="rotate(210)"/>
        <line y1="-92" y2="-86" transform="rotate(240)"/><line y1="-92" y2="-86" transform="rotate(270)"/><line y1="-92" y2="-86" transform="rotate(300)"/><line y1="-92" y2="-86" transform="rotate(330)"/>
        <circle r="86" fill="none" stroke="rgba(201,168,76,0.16)" stroke-width=".6"/>
      </g></g>
      <circle cx="200" cy="200" r="148" stroke="rgba(0,212,203,0.13)" stroke-width=".75" fill="none"/>
      <line x1="200" y1="60" x2="200" y2="180" stroke="rgba(255,255,255,0.10)" stroke-width=".75"/>
      <g class="m-arcs"><g transform="translate(200 200)">
        <path d="M 22.57,-128.03 A 130,130 0 0,1 112.6,65" stroke="url(#g-teal)" stroke-width="14" stroke-linecap="round" fill="none"/>
        <path d="M 112.6,65 A 130,130 0 0,1 -112.6,65" stroke="url(#g-white)" stroke-width="14" stroke-linecap="round" fill="none"/>
        <path d="M -112.6,65 A 130,130 0 0,1 -22.57,-128.03" stroke="url(#g-gold)" stroke-width="14" stroke-linecap="round" fill="none"/>
        <circle cx="22.57" cy="-128.03" r="3.5" fill="#E5C56F" opacity=".18"/><circle cx="22.57" cy="-128.03" r="2" fill="#E5C56F"/>
        <circle cx="-22.57" cy="-128.03" r="3.5" fill="#E5C56F" opacity=".18"/><circle cx="-22.57" cy="-128.03" r="2" fill="#E5C56F"/>
      </g></g>
      <g><circle class="spark a" cx="200" cy="54" r="3.5" fill="#00D4CB"/><circle class="spark b" cx="200" cy="54" r="3" fill="#00D4CB"/><circle class="spark c" cx="200" cy="54" r="2.5" fill="#00D4CB"/></g>
      <g class="m-centre" transform="translate(200 200)"><circle r="12" fill="url(#g-centre)"/><circle cx="-1.8" cy="-1.8" r="3" fill="#FFF6D9" opacity=".7"/></g>
      </svg></div>
      <p class="closeline">Human-Led. <em>AI-Operated.</em></p>
      <p class="closesub">Built to last. Built to lead.</p>
    </div>
  </div>
</section>

`;

export default function HomePage() {
  return (
    <>
      <RouteShell id="home" label="Omameh" markup={__MARKUP} />
      <IntukaDemo />
    </>
  );
}
