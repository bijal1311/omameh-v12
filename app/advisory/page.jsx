import RouteShell from '../_components/RouteShell';

export const metadata = {
  title: 'Advisory',
  description:
    'We work out what is actually wrong. Four ways in. Five pillars. Every engagement sits under one, or a combination.',
};

/**
 * Advisory · V13 rebuild · 26 Aug 2026 (was /practice · renamed).
 * Per Venture Architecture/V13_SITE_BUILD_for_Code.md §4.
 *
 * ~3000 words down to ~600. Compact.
 *
 * Order:
 *   Hero · 'We work out what is actually wrong.'
 *   Four ways in (L01–L04) · description only · no 'you get' summaries · no durations
 *   Five pillars · number/name/question only · sub-blocks removed (~2000 words cut)
 *   Close
 *
 * Deleted:
 *   · The Spine (Sense/Shift/Scale) — moved to Home with the Bearing
 *   · Every 'you get' summary line under the four lanes
 *   · Every duration/timeline (six weeks, 6-12 months, monthly, etc)
 *   · Every pillar sub-block (Architecture / Diagnostic / Sense-Shift-Scale row /
 *     Signal / What compounds) — ~2000 words gone
 *   · The word 'bench' anywhere (L04 renamed Embedded Delivery, no 'bench' in body)
 *
 * H1 ceiling 56px via .page-practice scope (kept, same class name).
 */

const __MARKUP = String.raw`
  <div class="container">
    <div class="route__header"><span class="route__index">03</span><span class="route__name">/advisory · Advisory</span><span class="route__issue">Vol. I · Issue 01 · Q3 2026</span></div>
    <div class="hero">
      <span class="eyebrow">Advisory · Omameh</span>
      <h1 style="margin-top: var(--space-4);">We work out what is <em>actually wrong.</em></h1>
      <p class="lede">Most of what slows an organisation down was a sensible fix at the time. We find the ones that have stopped being sensible, and redesign them with the people who live inside them.</p>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">01 · Four ways in</span>
        <h2>Four lanes of <em>engagement.</em></h2>
      </div>

      <div class="grid-4">
        <div class="card card--reveal" tabindex="0">
          <div class="card__face">
            <div class="card__eyebrow"><span class="num">L01</span><span>Sense</span></div>
            <h3 class="card__title">Pressure-test</h3>
            <span class="card__read">Read →</span>
          </div>
          <div class="card__expanded">
            <p class="card__body">A short engagement that surfaces the gap between what the strategy assumes and what the organisation can actually carry. Conversations with the chair, the CEO and the executive team.</p>
            <p class="card__cta-row"><a class="cta cta--primary" href="mailto:contact@omameh.com.au?subject=Pressure-test enquiry&body=Hi Bijal,%0D%0A%0D%0AI would like to start with a Pressure-test.%0D%0A%0D%0AMy organisation:%0D%0AMy role:%0D%0AThe question the board is holding:%0D%0A%0D%0AThank you.">Book a Pressure-test →</a></p>
          </div>
        </div>

        <div class="card card--reveal" tabindex="0">
          <div class="card__face">
            <div class="card__eyebrow"><span class="num">L02</span><span>Shift</span></div>
            <h3 class="card__title">Modernisation</h3>
            <span class="card__read">Read →</span>
          </div>
          <div class="card__expanded">
            <p class="card__body">The longer piece. We rebuild the operating model, capability placement, governance cadence and AI architecture for the load they now have to carry. Embedded, then handed over.</p>
          </div>
        </div>

        <div class="card card--reveal" tabindex="0">
          <div class="card__face">
            <div class="card__eyebrow"><span class="num">L03</span><span>Scale</span></div>
            <h3 class="card__title">Standing counsel</h3>
            <span class="card__read">Read →</span>
          </div>
          <div class="card__expanded">
            <p class="card__body">A standing room for the leader inside the transition. Strategy stress-tests, escalations, regulator-readiness reviews, the talent call you cannot make out loud yet.</p>
          </div>
        </div>

        <div class="card card--reveal" tabindex="0">
          <div class="card__face">
            <div class="card__eyebrow"><span class="num">L04</span><span>Delivery</span></div>
            <h3 class="card__title">Embedded <em>delivery</em></h3>
            <span class="card__read">Read →</span>
          </div>
          <div class="card__expanded">
            <p class="card__body">Our own engineering team working inside yours. Right talent in the right place, by design rather than by cost arbitrage.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">02 · The five pillars</span>
        <h2>What we modernise.</h2>
        <p class="strap">Every engagement sits under one of these, or a combination. <em>Only one of the five is governance.</em></p>
      </div>

      <div class="pillars-compact">
        <div class="pillar-compact">
          <span class="pillar-compact__num">P01</span>
          <h3 class="pillar-compact__name">Operating Model</h3>
          <p class="pillar-compact__q"><em>Can your 2015 operating model carry a 2030 strategy?</em></p>
        </div>
        <div class="pillar-compact">
          <span class="pillar-compact__num">P02</span>
          <h3 class="pillar-compact__name">Workforce, Skills &amp; Culture</h3>
          <p class="pillar-compact__q"><em>Do you know what skills you will need in three years?</em></p>
        </div>
        <div class="pillar-compact">
          <span class="pillar-compact__num">P03</span>
          <h3 class="pillar-compact__name">Right Talent in the Right Place</h3>
          <p class="pillar-compact__q"><em>Building global capability with intention, or moving cost?</em></p>
        </div>
        <div class="pillar-compact">
          <span class="pillar-compact__num">P04</span>
          <h3 class="pillar-compact__name">AI Governance</h3>
          <p class="pillar-compact__q"><em>Who is accountable for AI — and do they have what they need?</em></p>
        </div>
        <div class="pillar-compact">
          <span class="pillar-compact__num">P05</span>
          <h3 class="pillar-compact__name">AI-Era Innovation</h3>
          <p class="pillar-compact__q"><em>Is your next breakthrough luck, or is there a system behind it?</em></p>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="advisory-close">
        <h2 class="advisory-close__lead">Start with a <em>Pressure-test.</em></h2>
        <p class="advisory-close__body">A handful of conversations and an honest read. If nothing is broken, we will tell you that too.</p>
        <div class="advisory-close__cta">
          <a class="cta cta--primary" href="mailto:contact@omameh.com.au?subject=Pressure-test enquiry&body=Hi Bijal,%0D%0A%0D%0AI would like to start with a Pressure-test.%0D%0A%0D%0AMy organisation:%0D%0AMy role:%0D%0AThe question the board is holding:%0D%0A%0D%0AThank you.">Let's talk →</a>
        </div>
      </div>
    </div>

    <hr class="rule">
    <p class="tag" style="text-align:center"><a href="/products">Continue reading → <em>We build the things we advise on.</em> · Next · 04 · Products</a></p>
  </div>
`;

export default function AdvisoryPage() {
  return <RouteShell id="advisory" label="03 · Advisory" markup={__MARKUP} className="page-practice" />;
}
