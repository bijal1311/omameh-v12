import RouteShell from '../_components/RouteShell';

export const metadata = {
  title: 'AI-Era Fluency',
  description:
    'Ten people in a room, and the decisions you actually have to make. Not a lecture, not a certificate, and nothing you could have read.',
};

/**
 * Fluency · V13 rebuild · 26 Aug 2026.
 * Full brief · AI-Era Fluency/V13_Fluency_Page_Brief_for_Code.md
 *
 * Supersedes the V12 Fluency Code Prompt and §5A addendum (C06/C07 dropped).
 *
 * Five courses: C01 AI Fluency (Opening first · absorbs Buying AI as
 * the afternoon), C02 Leader-Led AI, C03 AI Governance, C04 Mindset by
 * Design, C05 Operating Model for the AI Era.
 *
 * NO PRICES anywhere. Shape carried by 'Per seat. Ten to a room. We
 * travel — fees reflect it.' Numbers arrive in conversation.
 *
 * CTA state machine · three states per course. Only two in use at launch:
 *   · Opening first · teal chip · Request a seat →     (C01)
 *   · Interest      · no chip   · Register interest →  (C02–C05)
 *   · Open          · gold chip · Book a seat →         (none yet · adding
 *     a date is a content change, not code)
 *
 * Section order:
 *   Hero
 *   §3  Why this exists (dark band, coral eyebrow)
 *   §4  Q·001 Unlearning + Q·002 Reverse knowledge transfer
 *   §5  The room (4 cards)
 *   §6  Who is in it (2×2 personas)
 *   §7  Open rooms · 5 courses (C01 flagship + C02–C05 2×2)
 *   §8  Closed rooms (dark band, 3 cards)
 *   §9  Outlooks (4-step Bearing diagram + 4 series cards)
 *   §10 Start for nothing (3 cols, Rise motif)
 *   §11 What it is not (dark band, coral accent)
 *   §12 Close
 */

const REQUEST_SEAT_MAILTO = 'mailto:contact@omameh.com.au?subject=Request a seat · Fluency&body=Hi Bijal,%0D%0A%0D%0AI would like to request a seat.%0D%0A%0D%0ACourse:%0D%0AMy name and organisation:%0D%0APreferred city:%0D%0A%0D%0AThank you.';
const RUN_CLOSED_MAILTO = 'mailto:contact@omameh.com.au?subject=Closed session enquiry&body=Hi Bijal,%0D%0A%0D%0AI want to explore running a closed Fluency room for my organisation.%0D%0A%0D%0AMy organisation:%0D%0AMy role:%0D%0AThe team we are considering it for:%0D%0AWhat we are trying to shift:%0D%0A%0D%0AThank you.';

const __MARKUP = String.raw`
  <div class="container">
    <div class="route__header"><span class="route__index">05</span><span class="route__name">/fluency · AI-Era Fluency</span><span class="route__issue">Vol. I · Issue 01 · Q3 2026</span></div>

    <div class="hero hero--watermarked">
      <img class="om-watermark" src="/omameh-watermark.svg" alt="" aria-hidden="true" />
      <div>
        <span class="eyebrow">05 · Fluency</span>
        <h1 style="margin-top: var(--space-4);">Unlearn. Relearn. <em>Reinvent.</em></h1>
        <p class="lede">Ten people in a room, and the decisions you actually have to make. Not a lecture, not a certificate, and nothing you could have read.</p>
        <div class="hero__ctas" style="margin-top: var(--space-5); display: inline-flex; gap: var(--space-3); flex-wrap: wrap;">
          <a class="cta cta--primary" href="${REQUEST_SEAT_MAILTO}">Request a seat →</a>
          <a class="cta" href="${RUN_CLOSED_MAILTO}">Run it for your team →</a>
        </div>
      </div>
    </div>

    <div class="why-band">
      <div class="why-band__inner">
        <div class="section__head">
          <span class="eyebrow eyebrow--coral">WHY THIS EXISTS</span>
          <h2>You are being asked to decide things <em>nobody trained you for.</em></h2>
        </div>
        <p class="why-lede">Most AI training teaches tools. Six months later the tool has changed and the training is worthless. The decisions do not change that fast — what to commit to, what to hold, what stays human, what you answer for when a machine got it wrong. Almost nobody teaches that, because almost everyone teaching is also selling something.</p>
      </div>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">Q · 001</span>
        <h2>Unlearning is the <em>hard part.</em></h2>
      </div>
      <div style="max-width: 78ch;">
        <p style="color: var(--fg2); font-size: 17px; line-height: 1.65;">Everyone talks about relearning. Almost nobody talks about what has to go first.</p>
        <p style="color: var(--fg2); font-size: 17px; line-height: 1.65; margin-top: var(--space-4);">Relearning is additive and it feels good — a new tool, a new framework, a new vocabulary. Unlearning is subtractive and it costs something. It asks a leader to put down the judgement that got them promoted, the instinct that has been right for twenty years, the process they personally built and defended.</p>
        <p style="color: var(--fg2); font-size: 17px; line-height: 1.65; margin-top: var(--space-4);">That is why AI courses stall in senior rooms. Not because the material is hard. Because the material is easy and the letting go is not.</p>
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
      </div>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">THE ROOM</span>
        <h2>Ten people. <em>No slides.</em></h2>
        <p class="strap">Ten is deliberate. Above that people stop saying the true thing. Below it there is not enough disagreement to be useful.</p>
      </div>
      <div class="room-grid">
        <article class="room-card">
          <h4 class="room-card__name">Ten seats</h4>
          <p class="room-card__body">Never more than twelve. That is the whole room.</p>
        </article>
        <article class="room-card">
          <h4 class="room-card__name">In person</h4>
          <p class="room-card__body">A proper room, in a city we announce. Not a hotel suite.</p>
        </article>
        <article class="room-card">
          <h4 class="room-card__name">Online</h4>
          <p class="room-card__body">Where distance makes the room impossible. Not as the default.</p>
        </article>
        <article class="room-card">
          <h4 class="room-card__name">Chatham House</h4>
          <p class="room-card__body">No vendors. Nothing sold from the front.</p>
        </article>
      </div>
      <p class="room-foot"><em>We travel. Fees reflect it.</em></p>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">WHO IS IN IT</span>
        <h2>Four people who <em>keep turning up.</em></h2>
      </div>
      <div class="personas-grid">
        <article class="persona">
          <h4 class="persona__name">The one about to sit in the C-suite</h4>
          <p class="persona__body">First time in the seat, and the first thing on the agenda is a decision about AI nobody prepared you for.</p>
        </article>
        <article class="persona">
          <h4 class="persona__name">The one redesigning their own function</h4>
          <p class="persona__body">You have been handed a transformation and a budget, and told to work out the rest.</p>
        </article>
        <article class="persona">
          <h4 class="persona__name">The leader who wants to actually understand it</h4>
          <p class="persona__body">Not the demo, not the hype. What it does, what it cannot, and where the judgement still has to be yours.</p>
        </article>
        <article class="persona">
          <h4 class="persona__name">The director who wants better questions</h4>
          <p class="persona__body">You are accountable for it. You would like to interrogate what you are told, in your own industry's language.</p>
        </article>
      </div>
    </div>

    <div class="section" id="rooms">
      <div class="section__head">
        <span class="eyebrow">OPEN ROOMS</span>
        <h2>Five rooms. <em>Ten seats each.</em></h2>
        <p class="strap">Sold per seat — you do not need an organisation behind you to sit in one. Rooms open city by city. Tell us which one you want and we will tell you when it runs.</p>
      </div>

      <article class="room-flagship">
        <div class="room-flagship__head">
          <span class="course-eyebrow">C01 · ONE DAY · START HERE</span>
          <span class="course-chip course-chip--opening"><span class="course-chip__bead" aria-hidden="true"></span>OPENING FIRST</span>
        </div>
        <h3 class="room-flagship__name">AI Fluency</h3>
        <p class="room-flagship__promise"><em>You are making decisions about something nobody has explained to you properly.</em></p>
        <div class="room-flagship__body">
          <p>What the models actually are and how they differ. What an agent is, and how it is not a chatbot. Where the tools sit, what they cost, what they are genuinely good at and what they reliably get wrong. The shape of the whole landscape — so when the next thing arrives you can place it instead of starting again.</p>
          <p><strong>The afternoon turns to what is being sold to you.</strong> Every demo works. Every business case is optimistic. What separates a real capability from a good deck, and the questions to put to the next vendor who walks in.</p>
          <p><strong>You leave with</strong> — the ability to look at any AI tool and say what it is, what it would replace, and what could go wrong with it. Plus a written framework for interrogating the next proposal you are shown. <em>Every other room assumes this one.</em></p>
        </div>
        <div class="room-flagship__cta">
          <a class="cta cta--primary" href="${REQUEST_SEAT_MAILTO}">Request a seat →</a>
        </div>
      </article>

      <div class="rooms-grid">

        <article class="room-course room-course--teal">
          <div class="room-course__head">
            <span class="course-eyebrow">C02 · ONE DAY</span>
          </div>
          <h3 class="room-course__name">Leader-Led AI</h3>
          <p class="room-course__q"><em>You have delegated AI to people who cannot make the decisions it requires.</em></p>
          <p class="room-course__leave"><strong>You leave with</strong> — a scored read on your own organisation, the four decisions you cannot delegate written down, and a ninety-day plan you signed.</p>
          <a class="room-course__cta" href="${REQUEST_SEAT_MAILTO.replace('Course:', 'Course: C02 Leader-Led AI')}">Register interest →</a>
        </article>

        <article class="room-course room-course--gold">
          <div class="room-course__head">
            <span class="course-eyebrow">C03 · ONE DAY</span>
          </div>
          <h3 class="room-course__name">AI Governance</h3>
          <p class="room-course__q"><em>You are accountable for decisions you cannot yet see or evidence.</em></p>
          <p class="room-course__leave"><strong>You leave with</strong> — an accountability map for your own organisation, the questions to put to the people building it, and what a regulator will actually ask for. Calibrated to your industry.</p>
          <a class="room-course__cta" href="${REQUEST_SEAT_MAILTO.replace('Course:', 'Course: C03 AI Governance')}">Register interest →</a>
        </article>

        <article class="room-course room-course--shift">
          <div class="room-course__head">
            <span class="course-eyebrow">C04 · TWO DAYS</span>
          </div>
          <h3 class="room-course__name">Mindset by Design</h3>
          <p class="room-course__q"><em>What has to change in how you think, decide and design?</em></p>
          <p class="room-course__leave"><strong>You leave with</strong> — your assumptions surfaced and tested, a redesign of one real decision loop from your business, and a peer holding you to it.</p>
          <a class="room-course__cta" href="${REQUEST_SEAT_MAILTO.replace('Course:', 'Course: C04 Mindset by Design')}">Register interest →</a>
        </article>

        <article class="room-course room-course--shift">
          <div class="room-course__head">
            <span class="course-eyebrow">C05 · TWO DAYS</span>
          </div>
          <h3 class="room-course__name">Operating Model for the AI Era</h3>
          <p class="room-course__q"><em>Can your 2015 operating model carry a 2030 strategy?</em></p>
          <p class="room-course__leave"><strong>You leave with</strong> — a map of your operating model against the ambition it carries, the three bottlenecks costing you most, and what to change first.</p>
          <a class="room-course__cta" href="${REQUEST_SEAT_MAILTO.replace('Course:', 'Course: C05 Operating Model for the AI Era')}">Register interest →</a>
        </article>

      </div>

      <div class="rooms-help">
        <p><em>Not sure which room?</em> Tell us the decision in front of you and we will tell you which one fits — or that none of them do. <a href="mailto:contact@omameh.com.au?subject=Which room · Fluency&body=Hi Bijal,%0D%0A%0D%0AThe decision I am facing:%0D%0A%0D%0AMy role and organisation:%0D%0A%0D%0AThank you.">Talk to us →</a></p>
      </div>

      <div class="rooms-shape">
        <p><em>Per seat. Ten to a room. We travel — fees reflect it.</em></p>
        <a class="cta cta--primary" href="${REQUEST_SEAT_MAILTO}">Request a seat →</a>
      </div>
    </div>

    <div class="closed-band">
      <div class="closed-band__inner">
        <div class="section__head">
          <span class="eyebrow" style="color: var(--accent-warm);">CLOSED ROOMS</span>
          <h2>Or bring <em>your own ten.</em></h2>
        </div>
        <div class="closed-lede">
          <p>Every room above runs closed, for one organisation. Same format, same ten people — except they all work for you, and the material is your decisions instead of worked examples.</p>
          <p><em>This is where most of the work happens. An executive team gets further in a day together than five of them get separately over a year.</em></p>
        </div>
        <div class="closed-grid">
          <article class="closed-card">
            <h4 class="closed-card__name">Boards</h4>
            <p class="closed-card__body">Governance, accountability and the questions to put to management. Calibrated to your industry and your regulator.</p>
          </article>
          <article class="closed-card">
            <h4 class="closed-card__name">Executive teams</h4>
            <p class="closed-card__body">One room, one decision loop, everybody who has to live with the answer already in it.</p>
          </article>
          <article class="closed-card">
            <h4 class="closed-card__name">Function leadership</h4>
            <p class="closed-card__body">The people running the work, with the workflows they actually run rather than a case study.</p>
          </article>
        </div>
        <div class="closed-cta">
          <a class="cta cta--primary" href="${RUN_CLOSED_MAILTO}">Contact us for content, dates and pricing →</a>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">OUTLOOKS · A SERIES</span>
        <h2>Where this goes <em>next.</em></h2>
        <p class="strap">One theme at a time, with someone who has spent a career inside it. Not a trend report — a view on where this thing is in five years, in ten, and in 2050, and what someone living it should be doing about that now.</p>
        <p class="strap"><em>Each runs the same way, and each step decides whether the next one is worth taking.</em></p>
      </div>

      <div class="bearing-row bearing-row--four" aria-hidden="true">
        <svg viewBox="0 0 800 170" fill="none" preserveAspectRatio="xMidYMid meet" style="width:100%; height:auto; max-height:190px;">
          <line x1="20" y1="110" x2="780" y2="110" stroke="rgba(255,255,255,0.14)" stroke-dasharray="3 5" stroke-width="1" />

          <g>
            <path d="M 108.68,60.72 A 50,50 0 1,1 91.32,60.72" stroke="#00B5AD" stroke-width="2.5" stroke-linecap="round" fill="none" />
            <text x="100" y="68" text-anchor="middle" fill="rgba(255,255,255,0.88)" font-family="'Playfair Display', serif" font-size="22" font-weight="700">01</text>
            <circle cx="100" cy="110" r="3.5" fill="#C9A84C" opacity="0.9" />
          </g>

          <g>
            <path d="M 340.68,60.72 A 50,50 0 1,1 323.32,60.72" stroke="#7B9EF0" stroke-width="2.5" stroke-linecap="round" fill="none" />
            <text x="332" y="68" text-anchor="middle" fill="rgba(255,255,255,0.88)" font-family="'Playfair Display', serif" font-size="22" font-weight="700">02</text>
            <circle cx="332" cy="110" r="3.5" fill="#C9A84C" opacity="0.9" />
          </g>

          <g>
            <path d="M 570.68,60.72 A 50,50 0 1,1 553.32,60.72" stroke="#C9A84C" stroke-width="2.5" stroke-linecap="round" fill="none" />
            <text x="562" y="68" text-anchor="middle" fill="rgba(255,255,255,0.88)" font-family="'Playfair Display', serif" font-size="22" font-weight="700">03</text>
            <circle cx="562" cy="110" r="3.5" fill="#C9A84C" opacity="0.9" />
          </g>

          <g opacity="0.5">
            <path d="M 762.68,60.72 A 50,50 0 1,1 745.32,60.72" stroke="rgba(255,255,255,0.4)" stroke-width="2" stroke-dasharray="4 5" stroke-linecap="round" fill="none" />
            <text x="754" y="68" text-anchor="middle" fill="rgba(255,255,255,0.45)" font-family="'Playfair Display', serif" font-size="22" font-weight="700">04</text>
            <circle cx="754" cy="110" r="3.5" fill="rgba(201,168,76,0.4)" />
          </g>
        </svg>
      </div>

      <div class="bearing-labels bearing-labels--four">
        <div class="bearing-label">
          <h4>The conversation</h4>
          <p>Podcast, with the specialist</p>
        </div>
        <div class="bearing-label">
          <h4>The Outlook</h4>
          <p>Written. Five, ten, 2050.</p>
        </div>
        <div class="bearing-label">
          <h4>The table</h4>
          <p>Ten people living it</p>
        </div>
        <div class="bearing-label bearing-label--conditional">
          <h4>A room</h4>
          <p>Only if the table asks</p>
        </div>
      </div>

      <div class="section__head" style="margin-top: var(--space-8);">
        <span class="eyebrow">IN THE SERIES</span>
      </div>
      <div class="series-grid">
        <article class="series-card">
          <h4 class="series-card__name">An industry</h4>
          <p class="series-card__body">Insurance first. Then wherever the specialist is better than us.</p>
        </article>
        <article class="series-card">
          <h4 class="series-card__name">Founders</h4>
          <p class="series-card__body">Building something now, with tools that did not exist when the playbook was written.</p>
        </article>
        <article class="series-card">
          <h4 class="series-card__name">Second acts</h4>
          <p class="series-card__body">People who left the seat and built something of their own. What actually happened.</p>
        </article>
        <article class="series-card">
          <h4 class="series-card__name">Who gets to decide</h4>
          <p class="series-card__body">Who holds authority in the AI era, who does not yet, and what changes that.</p>
        </article>
      </div>

      <p class="series-foot"><em>The series opens shortly.</em> <a href="mailto:contact@omameh.com.au?subject=Register interest · Outlooks series&body=Hi Bijal,%0D%0A%0D%0AI would like to register interest in an Outlook theme.%0D%0A%0D%0ATheme (industry %2F founders %2F second acts %2F who gets to decide):%0D%0AMy name and organisation:%0D%0A%0D%0AThank you.">Register interest in a theme →</a></p>
    </div>

    <div class="section" style="position:relative;">
      <div class="section__head">
        <span class="eyebrow">START FOR NOTHING</span>
        <h2>Before you buy a seat, <em>read the room.</em></h2>
      </div>
      <div class="start-grid">
        <article class="start-card">
          <div class="om-field-rise om-field-layer" style="opacity:0.14;" aria-hidden="true"></div>
          <div style="position: relative;">
            <h4 class="start-card__name">The roundtable</h4>
            <p class="start-card__body">Ninety minutes, the same ten people, no charge and nothing sold. The diagnostic goes out beforehand and the result is yours either way.</p>
          </div>
        </article>
        <article class="start-card">
          <div class="om-field-rise om-field-layer" style="opacity:0.14;" aria-hidden="true"></div>
          <div style="position: relative;">
            <h4 class="start-card__name">The podcast</h4>
            <p class="start-card__body">Conversations with the people who actually answer for this, not the people selling it.</p>
            <p class="start-card__note"><em>Coming.</em></p>
          </div>
        </article>
        <article class="start-card">
          <div class="om-field-rise om-field-layer" style="opacity:0.14;" aria-hidden="true"></div>
          <div style="position: relative;">
            <h4 class="start-card__name">Field Notes</h4>
            <p class="start-card__body">What we learn inside the work, written down. Free, and nobody has to give us an email address to read it.</p>
            <p class="start-card__note"><a href="/atlas">Read Atlas →</a></p>
          </div>
        </article>
      </div>
    </div>

    <div class="not-band">
      <div class="not-band__inner">
        <div class="section__head">
          <h2>What it is <em class="not-band__accent">not.</em></h2>
        </div>
        <div class="not-grid not-grid--v13">
          <article class="not-card">
            <h4>Not a certificate.</h4>
            <p>A certificate is something you are given. Proof here is the difference between your score walking in and your score a year later.</p>
          </article>
          <article class="not-card">
            <h4>Not e-learning.</h4>
            <p>Nothing is recorded and nothing is watched alone. The value is the other nine people.</p>
          </article>
          <article class="not-card">
            <h4>Not delegable.</h4>
            <p>Sending someone in your place defeats the point. The shift has to land in the person making the decision.</p>
          </article>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="close-block close-block--watermarked">
        <img class="om-watermark" src="/omameh-watermark.svg" alt="" aria-hidden="true" />
        <p class="close-block__line">Ten seats. <em>Then the room is full.</em></p>
        <p style="color: var(--fg2); font-size: 17px; margin: 0 auto var(--space-5); max-width: 60ch; line-height: 1.55;">Tell us which city, or bring your own ten.</p>
        <div class="close-block__ctas">
          <a class="cta cta--primary" href="${REQUEST_SEAT_MAILTO}">Request a seat →</a>
          <a class="cta" href="${RUN_CLOSED_MAILTO}">Run it for your team →</a>
        </div>
        <p class="close-block__belief" style="font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.32em; color: var(--accent-warm); margin: var(--space-6) 0 0;">UNLEARN · RELEARN · REINVENT</p>
      </div>
    </div>

    <hr class="rule" style="margin-block: var(--space-8);">
    <p class="tag" style="text-align:center;"><a href="/atlas">Continue reading → <em>What we learn inside the work, published.</em> · Next · 06 · Atlas</a></p>
  </div>
`;

export default function FluencyPage() {
  return <RouteShell id="fluency" label="05 · Fluency" markup={__MARKUP} />;
}
