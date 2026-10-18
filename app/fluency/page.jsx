import { pageMeta } from '@/lib/seo/page-meta';
import RouteShell from '../_components/RouteShell';
import IntukaDemo from '../_components/IntukaDemo';

/**
 * AI-Era Fluency · /fluency
 *
 * Rebuilt 18 October 2026 from WIREFRAME — fluency.html.
 *
 * THE PUBLIC SEAT MODEL IS GONE. No calendar, no ten seats, no
 * applications, no pilots, no prices, no durations. Corporate and team
 * programmes only, scoped and quoted. One action on the page and it is
 * a conversation.
 *
 * Gone with it, and verified absent: The Independent Practice · AI
 * Fluency · Leader-Led AI · Operating Model for the AI Era · The
 * Academy · ten seats · by application · Join a cohort. Operating
 * Model work now sits in Advisory, where it is an engagement rather
 * than a course.
 *
 * NO DURATIONS ANYWHERE. "One day" and "two days" were per-seat
 * artefacts; naming a length invites a per-day price comparison this
 * offer does not want.
 *
 * GOVERNANCE LEADS, reordered 18 October. A board or CRO with an
 * accountability gap is not shopping, they are solving — and it comes
 * out of risk budget rather than discretionary L&D.
 *
 * CPS 230, CPS 234 AND FAR ARE NAMED, and were checked on 18 October
 * before publishing: CPS 230 commenced 1 July 2025 with its transition
 * ending 1 July 2026, CPS 234 has been in force since 2019 and is
 * unamended, FAR is operational. Checked against secondary sources —
 * APRA's own register is the authority, so re-check before this text
 * is reused in anything regulator-facing.
 *
 * Mindset by Design is the METHOD, named inside programme 03, not a
 * product in its own right.
 *
 * Both controls route to the CRM as "Fluency", not to a mailto.
 *
 * STILL OPEN: the image under the three programmes — a room with
 * people working. It must be her own session, because the standing
 * rule is that no stock photograph of people is ever presented as her
 * room. Not placed.
 *
 * NOTE: this page contradicts CLAUDE.md §9, which still describes the
 * Phase 1 per-seat offer with published prices. §9 is now out of date.
 */

export const metadata = pageMeta({
  title: 'Unlearn. Relearn. Reinvent.',
  description:
    'Three programmes, built for your organisation and run with your people. Your decisions as the material, not worked examples.',
  path: '/fluency',
});

const MAILTO = (subject) =>
  `mailto:contact@omameh.com.au?subject=${encodeURIComponent(subject)}`;

const PROGRAMMES = [
  [
    '01',
    'AI Governance',
    'How to implement AI safely, and prove it. Who is accountable, what evidence exists, and what the obligations already are — CPS 230, CPS 234 and FAR, and what a regulator will ask for before it asks.',
    'An accountability map for your own organisation, and the ability to answer what your organisation asked an AI last quarter.',
    'Boards, company secretaries, chief risk officers and the executives who carry an accountability obligation.',
  ],
  [
    '02',
    'AI Adoption and Enablement',
    'The move from pilots into real operations — what has to change in the way the work happens, who needs to be able to do what, and how adoption is sequenced so it holds. Inside your control framework, not around it.',
    'A sequenced adoption plan your people wrote, and the capability in-house to run it without us.',
    'Functions and delivery teams going from trial to operations. The ones carrying it once the pilot is signed off.',
  ],
  [
    '03',
    'Leading in the AI Era',
    'The instincts that got your leaders here were formed under a different set of conditions. This surfaces them, tests them, and redesigns one real decision loop while everyone who has to live with it is in the room. Delivered through <b style="color:var(--ink)">Mindset by Design</b>, our method.',
    'Leaders who can name the assumption underneath a decision, and a decision loop that has been rebuilt rather than described.',
    'Executive teams and senior leadership. The people whose judgement is the organisation’s operating system.',
  ],
];

const RUNS = [
  ['One organisation', 'Every programme runs closed. Everyone in the room works for you, so nobody is performing for a competitor.'],
  ['Your material', 'We build it from your decisions, your constraints and your regulatory position — not from worked examples.'],
  ['In person or online', 'At your place or across your region. Length and format follow what you are trying to change.'],
];

const NOTS = [
  ['Not a certificate.', 'Proof is the difference between the score walking in and the score a year later.'],
  ['Not e-learning.', 'Nothing is recorded. The value is the other people in the room.'],
  ['Not delegable.', 'The shift has to land in the person making the decision.'],
];

const programme = ([n, name, body, outcome, who]) => String.raw`
    <div style="display:grid;grid-template-columns:auto minmax(0,1fr);gap:clamp(18px,3vw,38px);padding:clamp(26px,3.2vw,38px) 0;border-top:1px solid var(--rule)">
      <span style="font-family:var(--mono);font-size:11px;letter-spacing:.2em;color:var(--gold)">${n}</span>
      <div style="display:flex;flex-direction:column;gap:14px;min-width:0">
        <h3 style="margin:0;font-size:clamp(21px,2.6vw,27px)">${name}</h3>
        <p style="margin:0;font-size:15.5px;line-height:1.6;color:var(--ink-soft)">${body}</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:18px;margin-top:4px">
          <div><span class="k" style="display:block;font-family:var(--mono);font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);margin-bottom:7px">The outcome</span><p style="margin:0;font-size:14.5px;line-height:1.55;color:var(--ink-soft)">${outcome}</p></div>
          <div><span class="k" style="display:block;font-family:var(--mono);font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);margin-bottom:7px">Who it is for</span><p style="margin:0;font-size:14.5px;line-height:1.55;color:var(--ink-soft)">${who}</p></div>
        </div>
      </div>
    </div>`;

const card = ([k, body]) => String.raw`
    <div class="card"><span class="k">${k}</span><p>${body}</p></div>`;

const __MARKUP = String.raw`
<section class="hero"><div class="w">
  <p class="eyebrow">AI-Era Fluency · Corporate and team programmes</p>
  <h1>Unlearn. Relearn. <em>Reinvent.</em></h1>
  <p class="lede">Three programmes, built for your organisation and run with your people. Your decisions as the material, not worked examples.</p>
  <div class="cta"><a class="btn" data-intuka-demo data-demo-product="Fluency" href="${MAILTO('AI-Era Fluency programme enquiry')}">Talk to us about a programme</a></div>
</div></section>

<section><div class="w">
  <p class="eyebrow">Why this exists</p>
  <h2>Your people will keep making these decisions after we leave.</h2>
  <p class="lede">The next tool, the next proposal, the next person selling you something. Fluency is where your people learn to tell a real capability from a good demo, and a solid answer from a plausible one — including ours.</p>
  <p class="lede" style="margin-top:var(--s3)">Tools change every six months. What these programmes teach does not, which is why what your team leaves with keeps its value.</p>
</div></section>

<section><div class="w">
  <p class="eyebrow">The programmes</p>
  <h2>Govern it. Adopt it. Lead it.</h2>
  <p class="lede">Each one is shaped to your organisation before it runs. Format, length and depth follow what you are trying to change.</p>

  <div style="margin-top:var(--s4);border-bottom:1px solid var(--rule)">${PROGRAMMES.map(programme).join('')}
  </div>
</div></section>

<section><div class="w">
  <p class="eyebrow">How it runs</p>
  <h2>Closed. Yours. Your decisions as the material.</h2>

  <div class="grid three">${RUNS.map(card).join('')}
  </div>
</div></section>

<section><div class="w">
  <p class="eyebrow">What it is not</p>

  <div class="grid three">${NOTS.map(card).join('')}
  </div>
</div></section>

<section><div class="w">
  <h2>Tell us what you are trying to change.</h2>
  <p class="lede">We will tell you which programme fits, what it would take, and whether you need one at all.</p>
  <div class="cta"><a class="btn" data-intuka-demo data-demo-product="Fluency" href="${MAILTO('AI-Era Fluency enquiry')}">Start a conversation</a></div>
</div></section>
`;

export default function FluencyPage() {
  return (
    <>
      <RouteShell id="fluency" label="Fluency" markup={__MARKUP} />
      <IntukaDemo />
    </>
  );
}
