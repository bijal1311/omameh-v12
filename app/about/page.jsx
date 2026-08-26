import RouteShell from '../_components/RouteShell';

export const metadata = {
  title: 'About',
  description:
    'One team, two flags. Architecture in Sydney. Engineering in Hyderabad. The market we are built for and the way we work.',
};

/**
 * About · V13 rebuild · 26 Aug 2026 · per V13_SITE_BUILD_for_Code.md §3.
 *
 * Section order:
 *   Hero + numbers strip
 *   Why there is a team · founder note (first person)
 *   The team · collective, no bio cards, no headshots
 *   How we work · four principles, one sentence each
 *   What we believe · V/M/B
 *   The market · nine shifts (all coral except CPS 230)
 *   Where we play · four sectors
 *   Foundation strip · one quiet line
 *   Close · 'Got a hard problem?'
 *
 * Deleted from About (per brief §3):
 *   · Six-layer stack + Framework diagram
 *   · Four-column architecture diagram
 *   · Eight dimensions listing
 *   · Five pillars listing
 *   · Partners & Collaborations section
 *   · The entire 'How we hold ourselves' / independence block
 *     (per ten rules · nothing about equity or conflict disclosure anywhere)
 *   · Every abstract 'what we stake' passage
 *   · The word 'bench' anywhere
 *   · The three principal cards (Bijal + Jay + Manish avatars) —
 *     brief §3 · 'The team · collective. No bio cards, no headshots.'
 *
 * Ten rules held throughout · no timelines, no equity mentions,
 * numbers over adjectives, Australian English, no emoji.
 */

const __MARKUP = String.raw`
  <div class="container">
    <div class="route__header"><span class="route__index">02</span><span class="route__name">/about · About</span><span class="route__issue">Vol. I · Issue 01 · Q3 2026</span></div>

    <div class="hero">
      <img class="om-watermark" src="/omameh-watermark.svg" alt="" aria-hidden="true" />
      <div>
        <span class="eyebrow">About · Omameh</span>
        <h1 style="margin-top: var(--space-4);">One team. <em>Two flags.</em></h1>
        <p class="lede">Architecture in Sydney. Engineering in Hyderabad. The people who design it are the people who build it, and there is no handoff in between.</p>
      </div>
    </div>

    <div class="numbers-strip">
      <div class="number-stat">
        <div class="number-stat__figure">8</div>
        <p class="number-stat__label">platforms built in-house</p>
      </div>
      <div class="number-stat">
        <div class="number-stat__figure">20+</div>
        <p class="number-stat__label">people and growing</p>
      </div>
      <div class="number-stat">
        <div class="number-stat__figure">4</div>
        <p class="number-stat__label">markets, one method</p>
      </div>
      <div class="number-stat">
        <div class="number-stat__figure">100+</div>
        <p class="number-stat__label">years combined leadership</p>
      </div>
    </div>

    <div class="founder-note-band">
      <div class="founder-note-band__inner">
        <div class="section__head">
          <span class="eyebrow" style="color: var(--accent-warm);">FROM THE FOUNDER</span>
          <h2>Why there is <em>a team.</em></h2>
        </div>
        <div class="founder-note">
          <p>I spent twenty years inside large regulated organisations, and I kept watching the same thing happen. A good strategy, a well-run pilot, and then nothing. Not because the technology failed — because the way the work happened underneath it never changed.</p>
          <p>As an adviser you can name that problem precisely. Naming it was never what I wanted to do.</p>
          <p>I wanted to be accountable for fixing it. Not to hand a client a diagnosis and a recommended vendor, but to stay in it until the thing worked — and to carry the consequence if it did not.</p>
          <p><em>One team, two countries.</em> I am accountable for all of it.</p>
          <p>Twenty people and growing — architecture, engineering, data, cloud, clinical and domain specialists — working to the same agenda I have. That the client succeeds. Not that a phase closes.</p>
          <p>I sit closest to the client: their growth model, their governance, the architecture underneath it. None of it gets designed alone. The team is in the room for the design, not only the build.</p>
          <p class="founder-note__sign">— <strong>Bijal</strong></p>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">01 · The team</span>
        <h2>Small on <em>purpose.</em></h2>
        <p class="strap">The advisory work is founder-led out of Sydney. The engineering is a team of specialists in Hyderabad — Syntegreti — who have built eight platforms and run several of them in production today. Everyone here chose to be here.</p>
      </div>

      <div class="role-tags">
        <span class="role-tag">AI / ML ENGINEERS</span>
        <span class="role-tag">FULL-STACK DEVELOPERS</span>
        <span class="role-tag">CLOUD ARCHITECTS</span>
        <span class="role-tag">DATA SCIENTISTS</span>
        <span class="role-tag">CLINICAL SPECIALISTS</span>
        <span class="role-tag">DOMAIN SPECIALISTS</span>
        <span class="role-tag">DEVOPS</span>
      </div>

      <div class="team-foot">
        <p>Founded by <strong>Bijal Sejpal</strong> — former Group COO Data &amp; AI at QBE, former COO Technology and interim CIO at Bupa Asia-Pacific. <a href="/founder">More on the founder →</a></p>
        <p class="team-foot__location">SYDNEY · HYDERABAD · GLOBAL DELIVERY · AWS AND MICROSOFT AZURE PARTNERS</p>
      </div>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">02 · How we work</span>
        <h2>Four <em>principles.</em></h2>
      </div>
      <div class="principles-grid">
        <article class="principle">
          <h3 class="principle__name">Build first, pitch second.</h3>
          <p class="principle__body">We do not sell decks — we build a working proof and let the result decide.</p>
        </article>
        <article class="principle">
          <h3 class="principle__name">Everyone ships.</h3>
          <p class="principle__body">The person who talks to you on day one is the person deploying it later.</p>
        </article>
        <article class="principle">
          <h3 class="principle__name">Stay small, go deep.</h3>
          <p class="principle__body">We could hire two hundred people and dilute. We would rather go further into fewer problems.</p>
        </article>
        <article class="principle">
          <h3 class="principle__name">Own the outcome.</h3>
          <p class="principle__body">Nothing is handed off.</p>
        </article>
      </div>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">03 · What we believe</span>
      </div>
      <div class="grid-3">
        <div class="card">
          <div class="card__eyebrow"><span class="num">V/01</span><span>Vision</span></div>
          <p class="card__strap"><em>Organisations ready to lead the AI era</em> — by architecture, not by accident.</p>
        </div>
        <div class="card">
          <div class="card__eyebrow"><span class="num">M/02</span><span>Mission</span></div>
          <p class="card__strap">Pressure-test, design, and deliver the architecture between <strong>strategy and execution.</strong></p>
        </div>
        <div class="card">
          <div class="card__eyebrow"><span class="num">B/03</span><span>Belief</span></div>
          <p class="card__strap"><em>Human-Led. AI-Operated.</em> Built to last. Built to lead.</p>
        </div>
      </div>
    </div>

    <div class="section" id="nine-shifts">
      <div class="section__head">
        <span class="eyebrow">04 · The market we are built for</span>
        <h2>Nine shifts on every board's <em>agenda.</em></h2>
      </div>

      <div class="shifts-group">
        <div class="shifts-group__head">
          <span class="shifts-group__label shifts-group__label--coral">BOARD PRESSURE</span>
        </div>
        <div class="shifts-grid">
          <article class="shift-card shift-card--coral">
            <div class="shift-card__figure">78%</div>
            <p class="shift-card__line">of ASX-listed insurance boards now carry AI as a standing quarterly agenda item — up from 12% two years ago.</p>
            <p class="shift-card__source">KPMG ASX AI Adoption 2026 †</p>
          </article>
          <article class="shift-card shift-card--coral">
            <div class="shift-card__figure">63%</div>
            <p class="shift-card__line">of AI investments have no measurable ROI. CFOs describe AI spend as increasingly indefensible.</p>
            <p class="shift-card__source">Gartner AI in FS 2026 †</p>
          </article>
          <article class="shift-card shift-card--coral">
            <div class="shift-card__figure">20%</div>
            <p class="shift-card__line">only, of AU insurance boards have signed an AI risk appetite statement.</p>
            <p class="shift-card__source">APRA CPG 234 Feedback 2026</p>
          </article>
        </div>
      </div>

      <div class="shifts-group">
        <div class="shifts-group__head">
          <span class="shifts-group__label shifts-group__label--coral">DELIVERY FRICTION</span>
        </div>
        <div class="shifts-grid">
          <article class="shift-card shift-card--coral">
            <div class="shift-card__figure">82%</div>
            <p class="shift-card__line">of enterprise AI pilots never ship to production. Momentum stalls between demo and deployment.</p>
            <p class="shift-card__source">MIT Sloan / BCG State of AI 2026</p>
          </article>
          <article class="shift-card shift-card--coral">
            <div class="shift-card__figure">70%</div>
            <p class="shift-card__line">of AI projects stall at data-readiness. Governance debt shows up as delivery drag.</p>
            <p class="shift-card__source">Gartner Data &amp; AI Barriers 2026 †</p>
          </article>
          <article class="shift-card shift-card--coral">
            <div class="shift-card__figure">$4.4M</div>
            <p class="shift-card__line">average waste per stalled AI initiative.</p>
            <p class="shift-card__source">IBM / Ponemon 2026 †</p>
          </article>
        </div>
      </div>

      <div class="shifts-group">
        <div class="shifts-group__head">
          <span class="shifts-group__label shifts-group__label--coral">OPERATING DRAG</span>
        </div>
        <div class="shifts-grid">
          <article class="shift-card shift-card--coral">
            <div class="shift-card__figure">20%</div>
            <p class="shift-card__line">only, of AU insurers have operating-model changes actually underway.</p>
            <p class="shift-card__source">McKinsey State of Organizations 2026</p>
          </article>
          <article class="shift-card shift-card--coral">
            <div class="shift-card__figure">2 in 3</div>
            <p class="shift-card__line">insurance leaders describe their organisation as too complex to move at AI speed.</p>
            <p class="shift-card__source">Deloitte AI in FS 2026 †</p>
          </article>
          <article class="shift-card shift-card--teal-fact">
            <div class="shift-card__figure">CPS 230</div>
            <p class="shift-card__line">In force with CPS 234, CPG 234 and APS 233. The July 2026 APRA letter names attested action.</p>
            <p class="shift-card__source">APRA Letter to Industry, July 2026</p>
          </article>
        </div>
      </div>

      <p class="shifts-footnote">† directional analyst research — sourced but not primary-verified. Marked, not hidden.</p>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">05 · Where we play</span>
        <h2>Regulated, complex, <em>and under a clock.</em></h2>
        <p class="strap">We go deep where the stakes are highest and the regulator is closest. Insurance is where we started — richest domain, sharpest regulatory lens. Everything else extends from it.</p>
      </div>

      <div class="sectors-grid">
        <article class="sector">
          <div class="sector__head">
            <span class="sector__code">S/01</span>
            <h3 class="sector__name">Banking, Financial Services &amp; Insurance</h3>
          </div>
          <div class="sector__meta">
            <div class="sector__row"><span class="sector__label">Regulators</span><span class="sector__value">APRA · ASIC · AFCA</span></div>
            <div class="sector__row"><span class="sector__label">Work</span><span class="sector__value">Claims · underwriting · complaints · fraud · KYC and AML · third-party resilience</span></div>
          </div>
        </article>
        <article class="sector">
          <div class="sector__head">
            <span class="sector__code">S/02</span>
            <h3 class="sector__name">Healthcare &amp; Clinical</h3>
          </div>
          <div class="sector__meta">
            <div class="sector__row"><span class="sector__label">Regulators</span><span class="sector__value">TGA · ADHA · state health</span></div>
            <div class="sector__row"><span class="sector__label">Work</span><span class="sector__value">Clinical governance · care navigation · patient pathways · digital health · clinical AI assurance</span></div>
          </div>
        </article>
        <article class="sector">
          <div class="sector__head">
            <span class="sector__code">S/03</span>
            <h3 class="sector__name">Government &amp; Public Sector</h3>
          </div>
          <div class="sector__meta">
            <div class="sector__row"><span class="sector__label">Regulators</span><span class="sector__value">Commonwealth · state</span></div>
            <div class="sector__row"><span class="sector__label">Work</span><span class="sector__value">Service delivery · shared services · citizen-facing platforms · public accountability</span></div>
          </div>
        </article>
        <article class="sector">
          <div class="sector__head">
            <span class="sector__code">S/04</span>
            <h3 class="sector__name">Technology &amp; Operations</h3>
          </div>
          <div class="sector__meta">
            <div class="sector__row"><span class="sector__label">Regulators</span><span class="sector__value">Sector-dependent</span></div>
            <div class="sector__row"><span class="sector__label">Work</span><span class="sector__value">Operating model · engineering capability · platform modernisation · global capability centres</span></div>
          </div>
        </article>
      </div>
    </div>

    <div class="foundation-strip" id="pledge">
      <div class="foundation-strip__inner">
        <span class="maa-gloss foundation-strip__mark" role="img" aria-label="माँ Foundation">
          <span class="maa-mark" aria-hidden="true">माँ</span>
          <span class="foundation-strip__key">[ mā ]</span>
          <span class="foundation-strip__sep" aria-hidden="true" />
          <span class="foundation-strip__fdn">Foundation</span>
        </span>
        <p class="foundation-strip__body">A standing share of the practice — time, capacity, capability — directed toward helping and education.</p>
        <p class="foundation-strip__disclaimer">A COMMITMENT OF OUR OWN TIME AND CAPABILITY, NOT A REGISTERED CHARITY. NO FUNDS ARE SOLICITED OR HELD.</p>
      </div>
    </div>

    <div class="section">
      <div class="about-close">
        <h2 class="about-close__lead">Got a hard <em>problem?</em></h2>
        <p class="about-close__body">We are small, so we are picky about what we take on. If yours is interesting, we will move faster than you expect.</p>
        <div class="about-close__cta">
          <a class="cta cta--primary" href="/contact">Let's talk →</a>
        </div>
      </div>
    </div>

    <hr class="rule">
    <p class="tag" style="text-align:center"><a href="/advisory">Continue reading → <em>We work out what is actually wrong.</em> · Next · 03 · Advisory</a></p>
  </div>
`;

export default function AboutPage() {
  return <RouteShell id="about" label="02 · About" markup={__MARKUP} />;
}
