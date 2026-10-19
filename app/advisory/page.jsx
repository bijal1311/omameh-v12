import { pageMeta } from '@/lib/seo/page-meta';
import RouteShell from '../_components/RouteShell';
import IntukaDemo from '../_components/IntukaDemo';

/**
 * Advisory · /advisory
 *
 * Rebuilt 18 October 2026 from WIREFRAME — advisory.html.
 * Copy is final and reproduced exactly. Do not improve it. In particular
 * do not touch "The honest part" — it is the only paragraph on the site
 * that acknowledges what a redesign costs the people inside it, and it
 * is why a CHRO trusts her.
 *
 * THE TWO PILLAR RENAMES, settled 18 October:
 *   03  Right Talent in the Right Place  ->  Workforce Architecture
 *   05  AI-Era Innovation                ->  Innovation & What Comes Next
 * and 01 gains "the operating system beneath it, and the data the
 * decisions rest on", which closes the Data & Intelligence gap without a
 * sixth pillar.
 *
 * Renaming a pillar is allowed. RENUMBERING IS NOT — 03 stays 03
 * everywhere. The eight dimensions are untouched and never change.
 *
 * These renames also live outside this repo: both diagnostic HTML files,
 * the curriculum, the media-kit bios. This page does not reach them —
 * see PENDING — who has to do what.md.
 *
 * "How we work" moved here from the homepage. Advisory had the what (the
 * five pillars) and the who (what changes, by organisation) and was
 * missing the how. The homepage does not need method to answer "should
 * I call".
 *
 * THE WORD "ROOMS" IS DELIBERATELY ABSENT from the Fluency card. /rooms
 * now means speaking and moderating, and the same word meaning two
 * things in one nav is how a site stops being trusted.
 *
 * ENQUIRIES GO TO THE CRM, not to a mailto. Both service controls open
 * the same modal that Intuka and GovernVeil use, tagged by category, so
 * an Advisory enquiry lands as a lead rather than in an inbox. The
 * mailto stays on the href as the no-JS fallback.
 *
 * STILL OPEN: the image slot between the pillars and How we work.
 * Abstract or architectural, no people. Not placed yet — the handover
 * asks for one option per page to be seen before six go in at once.
 */

export const metadata = pageMeta({
  title: 'We work out what is actually in the way.',
  description:
    'Most of what slows an organisation down was a sensible fix at the time. We find the ones that have earned a redesign, and do it with the people who live inside them.',
  path: '/advisory',
});

const MAILTO = (subject) =>
  `mailto:contact@omameh.com.au?subject=${encodeURIComponent(subject)}`;

/** Numbering is locked. Renaming a pillar is allowed; renumbering is not. */
const PILLARS = [
  [
    '01',
    'Operating Model',
    'The model, the operating system beneath it, and the data the decisions rest on — how work moves, who decides, and what the structure can actually carry.',
    'Can your 2015 operating model carry a 2030 strategy?',
    'sequence',
  ],
  [
    '02',
    'Workforce, Skills &amp; Culture',
    'What your people will need to be good at, and how the culture has to change for them to get there.',
    'Do you know what skills you will need in three years?',
    'readiness',
  ],
  [
    '03',
    'Workforce Architecture',
    'Which work needs a person, which is better done by an agent, where each of them sits, and which of it sits with a partner. Decided deliberately, and redesigned as it moves — because it will.',
    'Is your workforce designed, or is it whoever was available?',
    'bearings',
  ],
  [
    '04',
    'AI Governance',
    'Accountability, evidence and the obligations you are already under. You are responsible for what your organisation asks an AI, whether or not anyone has said so out loud.',
    'Who is accountable for AI, and do they have what they need?',
    'governance',
  ],
  [
    '05',
    'Innovation &amp; What Comes Next',
    'A system for finding and building the next thing — which is where our own platforms and builds come in, when the answer is something that does not exist yet.',
    'Is your next breakthrough luck, or is there a system behind it?',
    'compound-tight',
  ],
];

/** The tags are the join — they show what each move is actually made of. */
const MOVES = [
  ['01 · Sense', 'Where you actually are.', 'An honest read of the operation as it runs today — not the one in the strategy deck — and whether it can carry where you say you are going.', 'Diagnostic · Discovery · Gap analysis · Advisory'],
  ['02 · Shift', 'Redesigned with your people.', 'Not around them, and not by us alone. The people who live inside it help rebuild it.', 'Operating model · Operating system · Products · Accelerators'],
  ['03 · Scale', 'Yours to run.', 'Embedded until it holds on its own. We do not disappear at handover.', 'Delivery · Fluency · Partners · Standing counsel'],
];

const SHAPES = [
  ['Enterprise', 'Phased, with governance around each phase and a board-visible read at every gate. We embed, and our engineers work inside your teams for as long as the build needs them.'],
  ['Owner-led business', 'One or two pillars at a time, sized to what you can absorb while still running the business. The first one has to pay for the second.'],
  ['Platforms', "We work alongside your regional team on your customers' implementations, to your method and under your name. You keep the customer, the contract and the credit."],
  ['An idea of your own', 'Design sessions with you rather than a report to you, then a squad stood up to build what you designed.'],
];

const LEADS = [
  ['When the answer is a build', 'We build it', 'Our own engineers, on our own platforms where they fit, and something new where they do not. The team that designed it is the team that ships it.', '/products', 'See what we have built'],
  ['When the answer is fluency', 'AI-Era Fluency', 'Three programmes for boards, executive teams and function leadership — built from your decisions, so the next one does not need us in it.', '/fluency', 'See the programmes'],
];

/**
 * The pillar row. This is .pillars/.pillar from globals.css — the real
 * component, which had been sitting unused while a worse hand-rolled
 * copy ran on seven inline styles per row. The grid, the gold numeral,
 * the italic question with its gold left rule are all in the system.
 *
 * One of the six sanctioned icons leads each row. Six is the ceiling,
 * no set is ever installed, and each is decorative — the pillar name
 * carries the meaning, so alt is empty and the icon is never the only
 * signal of anything.
 */
const pillar = ([n, name, body, question, icon]) => String.raw`
    <div class="pillar has-icon">
      <img class="ic48" src="/icons/${icon}.svg" alt="" aria-hidden="true" width="48" height="48" loading="lazy" decoding="async">
      <span class="n">${n}</span>
      <div class="pillar-body">
        <span class="t">${name}</span>
        <span class="do">${body}</span>
      </div>
      <p class="q">${question}</p>
    </div>`;

const move = ([n, head, body, tags]) => String.raw`
    <div class="card">
      <span class="k">${n}</span>
      <h3 class="card-h">${head}</h3>
      <p>${body}</p>
      <span class="foot">${tags}</span>
    </div>`;

const shape = ([name, body]) => String.raw`
    <div class="card">
      <span class="k">${name}</span>
      <p>${body}</p>
    </div>`;

const lead = ([k, head, body, href, label]) => String.raw`
    <div class="card">
      <span class="k">${k}</span>
      <h3 class="card-h">${head}</h3>
      <p>${body}</p>
      <a class="link cardlink" href="${href}">${label} &rarr;</a>
    </div>`;

const __MARKUP = String.raw`
<section class="hero">
  <span class="arc top" aria-hidden="true"></span>
  <div class="w">
    <p class="eyebrow">Advisory</p>
    <h1>We work out what is <em>actually in the way.</em></h1>
    <p class="lede">Most of what slows an organisation down was a sensible fix at the time. We find the ones that have earned a redesign, and do it with the people who live inside them.</p>
  </div>
</section>

<section class="warm">
  <span class="arc left" aria-hidden="true"></span>
  <div class="w">
  <div class="shead" data-reveal>
    <p class="eyebrow">Start here</p>
    <h2>The Pressure-test.</h2>
    <p class="lede">Where the gap sits between what your strategy assumes and what the organisation can actually carry. Most engagements begin here, and some end here.</p>
  </div>

  <div class="grid three" data-reveal-group>
    <div class="card">
      <span class="k">What happens</span>
      <p>Conversations with the chair, the chief executive and the executive team — separately, so people say the true thing.</p>
      <p>We read what you already have: the strategy, the operating model, the last two board packs.</p>
      <p>The diagnostic goes to the leadership group, scored against eight dimensions.</p>
      <p>We sit in on how decisions actually get made, rather than how the process says they do.</p>
    </div>
    <div class="card">
      <span class="k">What you hold at the end</span>
      <p>An honest read of where the organisation sits, and where it thinks it sits.</p>
      <p>The three things costing you most, in order, with the working shown.</p>
      <p>A scored position against the eight dimensions, to be re-scored in a year.</p>
      <p>A clear recommendation — including whether to do nothing.</p>
    </div>
    <div class="card">
      <span class="k">What it is not</span>
      <p>Not a proposal in disguise. The read is the deliverable, and it is yours whether we work together afterwards or not.</p>
      <p>If nothing needs changing, we will tell you that — and it has happened.</p>
    </div>
  </div>

  <div class="cta"><a class="btn" data-intuka-demo data-demo-product="Advisory — Pressure-test" href="${MAILTO('Pressure-test enquiry')}">Start a Pressure-test</a></div>
</div></section>

<section class="deep">
  <span class="arc left" aria-hidden="true"></span>
  <div class="w">
  <div class="shead" data-reveal>
    <p class="eyebrow">Five pillars</p>
    <h2>What we modernise.</h2>
    <p class="lede">The same five, whether you are a bank or a practice of twelve. Only one of them is governance.</p>
  </div>

  <div class="pillars" data-reveal-group>${PILLARS.map(pillar).join('')}
  </div>
</div></section>

<section>
  <div class="w">
    <div class="shead" data-reveal>
      <p class="eyebrow">How we work</p>
      <h2>The same three moves. Every time.</h2>
    </div>

    <div class="grid three" data-reveal-group>${MOVES.map(move).join('')}
    </div>
  </div>
</section>

<section class="warm"><div class="w">
  <div class="shead" data-reveal>
    <p class="eyebrow">What changes</p>
    <h2>The five are constant. The shape is not.</h2>
    <p class="lede">Every organisation needs all five. What differs is the sequence, the depth, and how long it takes — and that depends entirely on who you are.</p>
  </div>

  <div class="grid two" data-reveal-group>${SHAPES.map(shape).join('')}
  </div>

  <p class="lede aftergrid">How long depends on which of these you are. A practice of twelve and a bank do not get the same calendar, and pretending otherwise is how engagements go wrong. We will tell you the shape and the sequence in the first conversation.</p>
</div></section>

<!-- The honest part. Given a reading measure and its own warm ground
     rather than a column, because it is the paragraph that makes a CHRO
     trust the rest of the page. -->
<section>
  <span class="arc left sm" aria-hidden="true"></span>
  <div class="w">
    <div class="w-narrow" data-reveal>
      <p class="eyebrow">The honest part</p>
      <h2>A redesign asks something of people.</h2>
      <p class="lede honest">Someone built the process you are about to change, and defended it, and was right to. Someone else has done a job for nine years that is about to look different. We do not pretend that part is easy, and we do not do it to them from a slide — they are in the room, and they help decide. It takes longer that way. It is the only version that holds after we go.</p>
    </div>
  </div>
</section>

<section class="dark">
  <span class="arc" aria-hidden="true"></span>
  <div class="w">
    <div class="shead" data-reveal>
      <p class="eyebrow">Where it leads</p>
      <h2>Sometimes the answer is not more advice.</h2>
    </div>

    <div class="grid three" data-reveal-group>${LEADS.map(lead).join('')}
      <div class="card">
        <span class="k">When you want us close</span>
        <h3 class="card-h">Standing counsel</h3>
        <p>A retained room for the leader inside the transition. Strategy stress-tests, escalations, regulator readiness, and the call you cannot make out loud yet. Ongoing, not a project.</p>
        <a class="link cardlink" data-intuka-demo data-demo-product="Advisory — Standing counsel" href="${MAILTO('Standing counsel enquiry')}">Explore standing counsel &rarr;</a>
      </div>
    </div>
  </div>
</section>
`;

export default function AdvisoryPage() {
  return (
    <>
      <RouteShell id="advisory" label="Advisory" markup={__MARKUP} />
      <IntukaDemo />
    </>
  );
}
