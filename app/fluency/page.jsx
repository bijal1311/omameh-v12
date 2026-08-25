import RouteShell from '../_components/RouteShell';

export const metadata = {
  title: 'AI-Era Fluency',
  description:
    'One and two-day courses for the people who have to decide. Boards, executives, and anyone being asked to lead through a change they did not train for.',
};

/**
 * Fluency · v12 · Cowork brief V12_Fluency_Page_Code_Prompt.md · 24 Aug 2026.
 * Phase 1 · course catalogue per seat (supersedes the earlier roundtable-first
 * frame from V12_Products_and_Fluency_Content_Brief.md §2).
 *
 * Five courses (C01-C05) · $1,500 to $2,800 per seat · Sydney + Melbourne.
 * Booking CTA reads "Request a seat →" and mailto's contact@ until Stripe
 * is live.
 *
 * Practice register only. Open Ring at 26% on grounds. Rise motif on §7
 * (How a day runs) and §10 (Close) — the human surfaces. Bearing composition
 * on §7 Before / On the day / After sequence. Six sanctioned icons only.
 */

const __MARKUP = String.raw`
  <div class="container">
    <div class="route__header"><span class="route__index">05</span><span class="route__name">/fluency · AI-Era Fluency</span><span class="route__issue">Vol. I · Issue 01 · Q3 2026</span></div>

    <div class="hero">
      <div>
        <span class="eyebrow" style="color: var(--accent-warm);">05 · Fluency · Phase 1</span>
        <h1 style="margin-top: var(--space-4);">Unlearn. Relearn. <em>Reinvent.</em></h1>
        <p class="lede">One and two-day courses for the people who have to decide. Boards, executives, and anyone being asked to lead through a change they did not train for.</p>
        <p style="color: var(--fg3); font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.22em; text-transform: uppercase; margin-top: var(--space-4);">Sydney and Melbourne · open enrolment · closed sessions on request</p>
        <div class="hero__ctas" style="margin-top: var(--space-5); display:inline-flex; gap: var(--space-3); flex-wrap: wrap;">
          <a class="cta cta--primary" href="#courses">See the courses →</a>
          <a class="cta" href="mailto:contact@omameh.com.au?subject=Fluency enquiry&body=Hi Bijal,%0D%0A%0D%0AI want to talk about Fluency courses.%0D%0A%0D%0AMy organisation:%0D%0AMy role:%0D%0AWhat I am hoping to work out:%0D%0A%0D%0AThank you.">Talk to us →</a>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section__head">
        <h2>You are being asked to decide things <em>nobody trained you for.</em></h2>
      </div>
      <div style="max-width: 78ch;">
        <p style="color: var(--fg2); font-size: 17px; line-height: 1.65;">Most AI training teaches tools. Six months later the tool has changed and the training is worthless.</p>
        <p style="color: var(--fg2); font-size: 17px; line-height: 1.65; margin-top: var(--space-4);">The decisions do not change that fast. What to commit to. What to hold. What stays human. What you are accountable for when a machine got it wrong. Nobody is teaching that, because almost everyone teaching is also selling something.</p>
        <p style="color: var(--fg1); font-size: 17px; line-height: 1.65; margin-top: var(--space-4);"><em>That is the gap these courses sit in.</em></p>
      </div>
    </div>

    <hr class="om-rule" style="margin-block: var(--space-8);">

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">Q · 001</span>
        <h2>Unlearning is the <em>hard part.</em></h2>
      </div>
      <div style="max-width: 78ch;">
        <p style="color: var(--fg2); font-size: 17px; line-height: 1.65;">Everyone talks about relearning. Almost nobody talks about what has to go first.</p>
        <p style="color: var(--fg2); font-size: 17px; line-height: 1.65; margin-top: var(--space-4);">Relearning is additive and it feels good — a new tool, a new framework, a new vocabulary. Unlearning is subtractive and it costs something. It asks a leader to put down the judgement that got them promoted, the instinct that has been right for twenty years, the process they personally built and defended.</p>
        <p style="color: var(--fg2); font-size: 17px; line-height: 1.65; margin-top: var(--space-4);">That is why AI courses stall in senior rooms. Not because the material is hard. Because the material is easy and the letting go is not.</p>
        <p style="color: var(--fg2); font-size: 17px; line-height: 1.65; margin-top: var(--space-4);">We start there. Every course opens with what has to be unlearned at that seat — named specifically, not gestured at.</p>
        <p style="color: var(--fg1); font-size: 17px; line-height: 1.65; margin-top: var(--space-4);"><em>Reinvention is what is left when both have happened.</em> Not a third module. The evidence that the first two landed.</p>
      </div>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">Q · 002</span>
        <h2>We believe in <em>reverse knowledge transfer.</em></h2>
      </div>
      <div style="max-width: 78ch;">
        <p style="color: var(--fg2); font-size: 17px; line-height: 1.65;">In most organisations the people most fluent with these tools have the least authority, and the people with the most authority are the least fluent. Any course that ignores that is teaching in the wrong direction.</p>
        <p style="color: var(--fg2); font-size: 17px; line-height: 1.65; margin-top: var(--space-4);">So we build the channel deliberately. Senior leaders learn from the people doing the work with these tools every day — structured and reciprocal, not a reverse-mentoring photo opportunity.</p>
        <p style="color: var(--fg1); font-size: 17px; line-height: 1.65; margin-top: var(--space-4);"><em>It is also the only version that survives us leaving.</em></p>
      </div>
    </div>

    <hr class="om-rule" style="margin-block: var(--space-8);">

    <div class="section" id="courses">
      <div class="section__head">
        <span class="eyebrow"><img src="/icons/readiness.svg" alt="" width="14" height="14" style="vertical-align:-2px; margin-right:8px; opacity:0.85;">05 · The courses</span>
        <h2>Seven courses. <em>Per seat.</em></h2>
        <p class="strap">Open enrolment. Anyone can buy. What each course does, what you leave with, what it costs, where it runs.</p>
      </div>

      <div class="courses-grid">

        <article id="c01" class="course-card">
          <header class="course-card__head">
            <span class="course-card__code">C01 · one day</span>
            <h3 class="course-card__name">Leader-Led AI</h3>
          </header>
          <p class="course-card__question"><em>You have delegated AI to people who cannot make the decisions it requires.</em></p>
          <div class="course-card__block">
            <div class="course-card__label">Why now</div>
            <p>Your organisation is already spending on AI and someone is already making the calls. If it is not you, it is a technologist choosing your risk appetite for you.</p>
          </div>
          <div class="course-card__block">
            <div class="course-card__label">You leave with</div>
            <p>A scored read on your own organisation across eight dimensions · the four decisions you cannot delegate, written down · a ninety-day plan you signed.</p>
          </div>
          <footer class="course-card__foot">
            <span class="course-card__format"><span class="course-card__format-bead" aria-hidden="true"></span>1 day · $1,500 per seat · Sydney and Melbourne</span>
          </footer>
        </article>

        <article id="c02" class="course-card">
          <header class="course-card__head">
            <span class="course-card__code">C02 · one day</span>
            <h3 class="course-card__name">Buying AI</h3>
          </header>
          <p class="course-card__question"><em>You will be shown an AI business case this quarter. What do you believe?</em></p>
          <div class="course-card__block">
            <div class="course-card__label">Why now</div>
            <p>Every executive is sold to weekly and almost nobody has a framework for it. The word "pilot" is doing a lot of hiding.</p>
          </div>
          <div class="course-card__block">
            <div class="course-card__label">You leave with</div>
            <p>A vendor interrogation framework · the questions that separate a real capability from a demo · what a defensible business case has in it.</p>
          </div>
          <footer class="course-card__foot">
            <span class="course-card__format"><span class="course-card__format-bead" aria-hidden="true"></span>1 day · $1,500 per seat · Sydney and Melbourne</span>
          </footer>
        </article>

        <article id="c03" class="course-card">
          <header class="course-card__head">
            <span class="course-card__code">C03 · one day</span>
            <h3 class="course-card__name">AI Governance for Boards</h3>
          </header>
          <p class="course-card__question"><em>You are accountable for decisions you cannot yet see or evidence.</em></p>
          <div class="course-card__block">
            <div class="course-card__label">Why now</div>
            <p>Australian boards are already accountable for AI and third-party oversight. Almost none can evidence it. The obligation did not wait for readiness.</p>
          </div>
          <div class="course-card__block">
            <div class="course-card__label">You leave with</div>
            <p>An accountability map for your own board · the questions to put to management · what a regulator will actually ask for.</p>
          </div>
          <footer class="course-card__foot">
            <span class="course-card__format"><span class="course-card__format-bead" aria-hidden="true"></span>1 day · $2,200 per seat · Sydney</span>
          </footer>
        </article>

        <article id="c04" class="course-card">
          <header class="course-card__head">
            <span class="course-card__code">C04 · two days</span>
            <h3 class="course-card__name">Mindset by Design</h3>
          </header>
          <p class="course-card__question"><em>What has to change in how you think, decide and design?</em></p>
          <div class="course-card__block">
            <div class="course-card__label">Why now</div>
            <p>The technology is not the constraint. The mental models built for a different era are, and they are load-bearing until someone names them.</p>
          </div>
          <div class="course-card__block">
            <div class="course-card__label">You leave with</div>
            <p>Your own assumptions surfaced and tested · a redesign of one real decision loop from your business · a ninety-day plan with a peer holding you to it.</p>
          </div>
          <footer class="course-card__foot">
            <span class="course-card__format"><span class="course-card__format-bead" aria-hidden="true"></span>2 days · $2,800 per seat · Sydney and Melbourne</span>
          </footer>
        </article>

        <article id="c05" class="course-card">
          <header class="course-card__head">
            <span class="course-card__code">C05 · two days</span>
            <h3 class="course-card__name">Operating Model for the AI Era</h3>
          </header>
          <p class="course-card__question"><em>Can your 2015 operating model carry a 2030 strategy?</em></p>
          <div class="course-card__block">
            <div class="course-card__label">Why now</div>
            <p>Most AI programmes stall after the pilot. The technology usually works. It cannot survive contact with how the organisation actually operates.</p>
          </div>
          <div class="course-card__block">
            <div class="course-card__label">You leave with</div>
            <p>A map of your own operating model against the ambition it has to carry · the three bottlenecks costing you most · what to change first.</p>
          </div>
          <footer class="course-card__foot">
            <span class="course-card__format"><span class="course-card__format-bead" aria-hidden="true"></span>2 days · $2,800 per seat · Sydney and Melbourne</span>
          </footer>
        </article>

        <article id="c06" class="course-card">
          <header class="course-card__head">
            <span class="course-card__code">C06 · one day</span>
            <h3 class="course-card__name">The Independent Practice</h3>
          </header>
          <p class="course-card__question"><em>You are the business, and there are no more hours in the week.</em></p>
          <div class="course-card__block">
            <div class="course-card__label">Why now</div>
            <p>Every hour you sell is an hour you worked. AI changes that arithmetic for the first time, and most independent operators are using it to type faster rather than to run differently.</p>
          </div>
          <div class="course-card__block">
            <div class="course-card__label">You leave with</div>
            <p>A map of what only you can do and what you have been doing out of habit · three systems built for your practice rather than a generic stack · what your week looks like when the operations run without you.</p>
          </div>
          <footer class="course-card__foot">
            <span class="course-card__format"><span class="course-card__format-bead" aria-hidden="true"></span>1 day · $1,500 per seat · Sydney and Melbourne</span>
          </footer>
        </article>

        <article id="c07" class="course-card">
          <header class="course-card__head">
            <span class="course-card__code">C07 · one day</span>
            <h3 class="course-card__name">From Method to Product</h3>
          </header>
          <p class="course-card__question"><em>You have solved the same problem five times. That is worth something.</em></p>
          <div class="course-card__block">
            <div class="course-card__label">Why now</div>
            <p>The fifth time you solve a problem you stop learning and start repeating. Most expertise never gets captured, and it leaves when you do.</p>
          </div>
          <div class="course-card__block">
            <div class="course-card__label">You leave with</div>
            <p>Your method written down as something repeatable · an honest read on whether it can be productised or should stay a service · the first version of something a client could buy without you in the room.</p>
          </div>
          <footer class="course-card__foot">
            <span class="course-card__format"><span class="course-card__format-bead" aria-hidden="true"></span>1 day · $1,500 per seat · Sydney and Melbourne</span>
          </footer>
        </article>

      </div>

      <div class="course-map">
        <div class="course-map__head">
          <h3>Four starting points. <em>Seven courses.</em></h3>
        </div>
        <div class="course-map__row">
          <div class="course-map__market">
            <h4>Enterprise</h4>
            <p>Carrying complexity at scale</p>
          </div>
          <div class="course-map__codes">
            <a href="#c01">C01 Leader-Led AI</a><span class="sep" aria-hidden="true">·</span>
            <a href="#c03">C03 AI Governance for Boards</a><span class="sep" aria-hidden="true">·</span>
            <a href="#c04">C04 Mindset by Design</a><span class="sep" aria-hidden="true">·</span>
            <a href="#c05">C05 Operating Model</a>
          </div>
        </div>
        <div class="course-map__row">
          <div class="course-map__market">
            <h4>Growing business</h4>
            <p>Ready for the next stage</p>
          </div>
          <div class="course-map__codes">
            <a href="#c01">C01 Leader-Led AI</a><span class="sep" aria-hidden="true">·</span>
            <a href="#c02">C02 Buying AI</a><span class="sep" aria-hidden="true">·</span>
            <a href="#c05">C05 Operating Model</a>
          </div>
        </div>
        <div class="course-map__row">
          <div class="course-map__market">
            <h4>Independent operator</h4>
            <p>Expertise, and not enough hours</p>
          </div>
          <div class="course-map__codes">
            <a href="#c06">C06 The Independent Practice</a><span class="sep" aria-hidden="true">·</span>
            <a href="#c02">C02 Buying AI</a>
          </div>
        </div>
        <div class="course-map__row">
          <div class="course-map__market">
            <h4>Expertise becoming a product</h4>
            <p>The same problem, solved five times</p>
          </div>
          <div class="course-map__codes">
            <a href="#c07">C07 From Method to Product</a><span class="sep" aria-hidden="true">·</span>
            <a href="#c04">C04 Mindset by Design</a>
          </div>
        </div>
      </div>

      <div class="courses-cta">
        <a class="cta cta--primary" href="mailto:contact@omameh.com.au?subject=Request a seat · Fluency&body=Hi Bijal,%0D%0A%0D%0AI would like to request a seat.%0D%0A%0D%0ACourse (C01 Leader-Led AI %2F C02 Buying AI %2F C03 AI Governance for Boards %2F C04 Mindset by Design %2F C05 Operating Model for the AI Era):%0D%0AMy name and organisation:%0D%0APreferred city (Sydney %2F Melbourne):%0D%0A%0D%0AThank you.">Request a seat →</a>
        <a class="cta" href="mailto:contact@omameh.com.au?subject=Fluency dates&body=Hi Bijal,%0D%0A%0D%0APlease send me the upcoming Fluency course dates.%0D%0A%0D%0AMy name and organisation:%0D%0APreferred city:%0D%0AWhich courses I am considering:%0D%0A%0D%0AThank you.">Contact us for dates →</a>
      </div>
    </div>

    <hr class="om-rule" style="margin-block: var(--space-8);">

    <div class="section">
      <div class="section__head">
        <h2>Run it <em>for your team.</em></h2>
      </div>
      <div style="max-width: 78ch;">
        <p style="color: var(--fg2); font-size: 17px; line-height: 1.65;">Every course above runs closed, for a single organisation, using your own decisions as the material rather than worked examples.</p>
        <p style="color: var(--fg2); font-size: 17px; line-height: 1.65; margin-top: var(--space-4);">Boards. Executive teams. Function leadership. Delivered in your office or somewhere better.</p>
        <div style="margin-top: var(--space-5);">
          <a class="cta cta--primary" href="mailto:contact@omameh.com.au?subject=Closed session enquiry&body=Hi Bijal,%0D%0A%0D%0AI want to explore running a closed Fluency session for my organisation.%0D%0A%0D%0AMy organisation:%0D%0AMy role:%0D%0AThe team we are considering it for:%0D%0AWhat we are trying to shift:%0D%0A%0D%0AThank you.">Contact us for content, dates and pricing →</a>
        </div>
      </div>
    </div>

    <hr class="om-rule" style="margin-block: var(--space-8);">

    <div class="section">
      <div>
        <div class="section__head">
          <span class="eyebrow"><img src="/icons/diagnose.svg" alt="" width="14" height="14" style="vertical-align:-2px; margin-right:8px; opacity:0.85;">07 · How a day actually runs</span>
          <h2>No slides. No lectures. <em>Your problems.</em></h2>
        </div>

        <div class="day-runs">
          <div class="day-runs__diagram" aria-hidden="true">
            <svg viewBox="0 0 720 220" fill="none" style="width:100%; height:auto; max-height:220px;">
              <g fill="none" stroke="rgba(201,168,76,0.32)" stroke-width="1" stroke-dasharray="2 6">
                <circle cx="360" cy="110" r="48"></circle>
                <circle cx="360" cy="110" r="88"></circle>
                <circle cx="360" cy="110" r="128"></circle>
              </g>
              <g fill="#C9A84C" opacity="0.9">
                <circle cx="408" cy="110" r="4"></circle>
                <circle cx="448" cy="110" r="4"></circle>
                <circle cx="488" cy="110" r="4"></circle>
              </g>
              <g fill="none" stroke="rgba(0,212,203,0.55)" stroke-width="1" stroke-dasharray="3 4">
                <circle cx="360" cy="62" r="6"></circle>
              </g>
              <circle cx="360" cy="110" r="6" fill="#C9A84C"></circle>
            </svg>
          </div>
          <div class="day-runs__steps">
            <div class="day-step">
              <span class="day-step__label">Before</span>
              <p>You score your own organisation. Fifteen minutes. It is yours whether you come or not, and we read it before you arrive.</p>
            </div>
            <div class="day-step">
              <span class="day-step__label">On the day</span>
              <p>Short input, long working. You bring a real decision you face this quarter and we work it in the room, with people in the same position.</p>
            </div>
            <div class="day-step">
              <span class="day-step__label">After</span>
              <p>One page. What you said you would do, and when.</p>
            </div>
          </div>
          <p class="day-runs__meta"><em>Twelve to twenty-four people. Chatham House rule. No vendors in the room and nothing being sold from the front.</em></p>
        </div>
      </div>
    </div>

    <hr class="om-rule" style="margin-block: var(--space-8);">

    <div class="section">
      <div class="section__head">
        <span class="eyebrow"><img src="/icons/governance.svg" alt="" width="14" height="14" style="vertical-align:-2px; margin-right:8px; opacity:0.85;">08 · What it is not</span>
        <h2>Not a certificate. Not e-learning. <em>Not delegable.</em></h2>
      </div>
      <div class="not-grid">
        <article class="not-card">
          <h4>Not a certificate.</h4>
          <p>A certificate is something you are given. Proof here is the difference between your score on the way in and your score a year later. <em>Evidence, not a credential.</em></p>
        </article>
        <article class="not-card">
          <h4>Not e-learning.</h4>
          <p>Nothing is recorded and nothing is watched alone. The value is the room.</p>
        </article>
        <article class="not-card">
          <h4>Not delegable.</h4>
          <p>Sending someone in your place defeats the point. The shift has to land in the person making the decisions.</p>
        </article>
      </div>
    </div>

    <hr class="om-rule" style="margin-block: var(--space-8);">

    <div class="section">
      <div class="section__head">
        <span class="eyebrow"><img src="/icons/compound.svg" alt="" width="14" height="14" style="vertical-align:-2px; margin-right:8px; opacity:0.85;">09 · Coming</span>
        <h2>Industry <em>tables.</em></h2>
      </div>
      <div style="max-width: 72ch;">
        <p style="color: var(--fg2); font-size: 17px; line-height: 1.65;">The future of your industry, in a room of twelve, convened with a named adviser from that sector. Financial services. Insurance. Healthcare. Government.</p>
        <p style="color: var(--fg3); font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.22em; text-transform: uppercase; margin-top: var(--space-4);">2027 · by invitation</p>
        <div style="margin-top: var(--space-4);">
          <a class="cta" href="mailto:contact@omameh.com.au?subject=Register interest · Industry tables 2027&body=Hi Bijal,%0D%0A%0D%0AI would like to register interest in the 2027 Industry tables.%0D%0A%0D%0AMy organisation:%0D%0AMy role:%0D%0AIndustry:%0D%0A%0D%0AThank you.">Register interest →</a>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="close-block close-block--watermarked">
        <img class="om-watermark" src="/omameh-watermark.svg" alt="" aria-hidden="true" />
        <p class="close-block__line">The next room <em>is being set.</em></p>
        <div class="close-block__ctas">
          <a class="cta cta--primary" href="mailto:contact@omameh.com.au?subject=Request a seat · Fluency&body=Hi Bijal,%0D%0A%0D%0AI would like to request a seat.%0D%0A%0D%0ACourse:%0D%0AMy name and organisation:%0D%0APreferred city:%0D%0A%0D%0AThank you.">Request a seat →</a>
          <a class="cta" href="mailto:contact@omameh.com.au?subject=Fluency conversation&body=Hi Bijal,%0D%0A%0D%0AI want to talk about Fluency.%0D%0A%0D%0AMy organisation:%0D%0AMy role:%0D%0AWhat I am hoping to work out:%0D%0A%0D%0AThank you.">Talk to us →</a>
        </div>
      </div>
    </div>

    <hr class="rule" style="margin-block: var(--space-8);">
    <p class="tag" style="text-align:center;"><a href="/atlas">Continue reading → <em>What we learn inside the work, published.</em> · Next · 06 · Atlas</a></p>
  </div>
`;

export default function FluencyPage() {
  return <RouteShell id="fluency" label="05 · Fluency" markup={__MARKUP} />;
}
