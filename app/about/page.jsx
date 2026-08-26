import RouteShell from '../_components/RouteShell';

export const metadata = {
  title: 'About',
  description:
    'One team, two flags. Architecture in Sydney. Engineering in Hyderabad. The people who design it are the people who build it — and the market we are built for.',
};

/**
 * About · V13 rebuild · 26 Aug 2026.
 * Full brief · Venture Architecture/V13_Home_and_About_Brief_for_Code.md
 *
 * About answers 'who are you, and why should I believe you?' It is the
 * proof page. Home is the pitch.
 *
 * Deleted from About in this rebuild:
 *   · Six-layer stack + Framework diagram
 *   · Eight dimensions listing
 *   · Five pillars listing
 *   · Partners & Collaborations section
 *   · The old Media sector card
 *   · The word 'bench' anywhere
 *   · Old Foundation full-section treatment (now a small strip)
 *
 * Added:
 *   · New hero · 'One team. Two flags.'
 *   · Who we are · Syntegreti named, three principal cards (Bijal + Jay + Manish)
 *   · What we believe · Vision · Mission · Belief moved from Home
 *   · The market we are built for · full nine-shift grid moved from /practice
 *   · Where we play · 4 sectors (Media removed, Healthcare = flagship weight)
 *   · How we hold ourselves · independence, reworded per brief §B7
 *   · Foundation · small strip, not section, mono disclaimer
 *   · Close · 'The rest is on the record.' + route links + Let's talk
 *
 * BLOCKERS honoured with clear placeholders:
 *   · Jay + Manish bios · [ Full bio pending from Bijal ] markers
 *   · Photos for principals · open-ring avatars with initials
 *     (per Open Circle Law · swap when real photos land)
 *   · Five † directional shift figures kept with the marker convention
 *
 * Frameworks (6-layer, 8 dimensions, 5 pillars) move to /practice in a
 * later build — NOT rendered on About in any form per brief §B1.
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

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">01 · Who we are</span>
        <h2>The people <em>building this.</em></h2>
        <p class="strap">Omameh is small on purpose. The advisory work is founder-led. The engineering is a team of specialists in Hyderabad who have shipped eight platforms and run several of them in production today. Two companies, one delivery team, and equity between them that we disclose rather than manage.</p>
      </div>

      <div class="principals-grid">

        <article class="principal">
          <div class="principal__avatar" aria-hidden="true">
            <svg viewBox="0 0 400 400" fill="none">
              <path d="M 230.9,24.7 A 178,178 0 1,1 169.1,24.7" stroke="#00B5AD" stroke-width="14" stroke-linecap="round" fill="none" />
              <text x="200" y="240" text-anchor="middle" font-family="'Playfair Display', serif" font-size="130" font-weight="700" fill="rgba(255,255,255,0.85)">BS</text>
            </svg>
          </div>
          <div class="principal__meta">
            <h3 class="principal__name">Bijal Sejpal</h3>
            <p class="principal__role">Founder &amp; CEO, Omameh · Managing Partner, Syntegreti</p>
          </div>
          <p class="principal__bio">Twenty years running data, AI and operations inside two of Australia's largest regulated organisations. Former Group COO Data &amp; AI, QBE. Former COO Technology and interim CIO, Bupa Asia-Pacific.</p>
        </article>

        <article class="principal">
          <div class="principal__avatar" aria-hidden="true">
            <svg viewBox="0 0 400 400" fill="none">
              <path d="M 230.9,24.7 A 178,178 0 1,1 169.1,24.7" stroke="#C9A84C" stroke-width="14" stroke-linecap="round" fill="none" />
              <text x="200" y="240" text-anchor="middle" font-family="'Playfair Display', serif" font-size="130" font-weight="700" fill="rgba(255,255,255,0.85)">JJ</text>
            </svg>
          </div>
          <div class="principal__meta">
            <h3 class="principal__name">Jay Jayakeerthy</h3>
            <p class="principal__role">Co-founder, Syntegreti</p>
          </div>
          <p class="principal__bio principal__bio--pending"><em>[ Two-line bio pending from Bijal. ]</em></p>
        </article>

        <article class="principal">
          <div class="principal__avatar" aria-hidden="true">
            <svg viewBox="0 0 400 400" fill="none">
              <path d="M 230.9,24.7 A 178,178 0 1,1 169.1,24.7" stroke="#7B9EF0" stroke-width="14" stroke-linecap="round" fill="none" />
              <text x="200" y="240" text-anchor="middle" font-family="'Playfair Display', serif" font-size="130" font-weight="700" fill="rgba(255,255,255,0.85)">MD</text>
            </svg>
          </div>
          <div class="principal__meta">
            <h3 class="principal__name">Manish Davda</h3>
            <p class="principal__role">Co-founder, Syntegreti</p>
          </div>
          <p class="principal__bio principal__bio--pending"><em>[ Two-line bio pending from Bijal. ]</em></p>
        </article>

      </div>

      <p class="principals-foot">Hyderabad → global delivery · AWS and Microsoft Azure partners.</p>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">02 · What we believe</span>
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
        <span class="eyebrow">03 · The market we are built for</span>
        <h2>Nine shifts on every board's <em>agenda.</em></h2>
        <p class="strap">The signals a board should be reading now. Three under board pressure, three under delivery friction, three under operating drag. Nine reasons the ground has moved underneath the strategy.</p>
      </div>

      <div class="shifts-group">
        <div class="shifts-group__head">
          <span class="shifts-group__label shifts-group__label--board">BOARD PRESSURE</span>
        </div>
        <div class="shifts-grid">
          <article class="shift-card shift-card--board">
            <div class="shift-card__figure">78%</div>
            <p class="shift-card__line">of ASX-listed insurance boards now carry AI as a standing quarterly agenda item — up from 12% two years ago.</p>
            <p class="shift-card__source">KPMG ASX AI Adoption 2026 †</p>
          </article>
          <article class="shift-card shift-card--board">
            <div class="shift-card__figure">63%</div>
            <p class="shift-card__line">of AI investments have no measurable ROI. CFOs describe AI spend as increasingly indefensible.</p>
            <p class="shift-card__source">Gartner AI in FS 2026 †</p>
          </article>
          <article class="shift-card shift-card--board">
            <div class="shift-card__figure">20%</div>
            <p class="shift-card__line">only, of AU insurance boards have signed an AI risk appetite statement.</p>
            <p class="shift-card__source">APRA CPG 234 Feedback 2026</p>
          </article>
        </div>
      </div>

      <div class="shifts-group">
        <div class="shifts-group__head">
          <span class="shifts-group__label shifts-group__label--drag">DELIVERY FRICTION</span>
        </div>
        <div class="shifts-grid">
          <article class="shift-card shift-card--drag">
            <div class="shift-card__figure">82%</div>
            <p class="shift-card__line">of enterprise AI pilots never ship to production. Momentum stalls between demo and deployment.</p>
            <p class="shift-card__source">MIT Sloan / BCG State of AI 2026</p>
          </article>
          <article class="shift-card shift-card--drag">
            <div class="shift-card__figure">70%</div>
            <p class="shift-card__line">of AI projects stall at data-readiness. Governance debt shows up as delivery drag.</p>
            <p class="shift-card__source">Gartner Data &amp; AI Barriers 2026 †</p>
          </article>
          <article class="shift-card shift-card--drag">
            <div class="shift-card__figure">$4.4M</div>
            <p class="shift-card__line">average waste per stalled AI initiative.</p>
            <p class="shift-card__source">IBM / Ponemon 2026 †</p>
          </article>
        </div>
      </div>

      <div class="shifts-group">
        <div class="shifts-group__head">
          <span class="shifts-group__label shifts-group__label--ops">OPERATING DRAG</span>
        </div>
        <div class="shifts-grid">
          <article class="shift-card shift-card--ops">
            <div class="shift-card__figure">20%</div>
            <p class="shift-card__line">only, of AU insurers have operating-model changes actually underway.</p>
            <p class="shift-card__source">McKinsey State of Organizations 2026</p>
          </article>
          <article class="shift-card shift-card--ops">
            <div class="shift-card__figure">2 in 3</div>
            <p class="shift-card__line">insurance leaders describe their organisation as too complex to move at AI speed.</p>
            <p class="shift-card__source">Deloitte AI in FS 2026 †</p>
          </article>
          <article class="shift-card shift-card--ops">
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
        <span class="eyebrow">04 · Where we play</span>
        <h2>Regulated, complex, <em>and under a clock.</em></h2>
        <p class="strap">We go deep where the stakes are highest and the regulator is closest. Insurance is where we started — richest domain, sharpest regulatory lens. Everything else extends from it.</p>
      </div>

      <div class="sectors-grid">

        <article class="sector">
          <div class="sector__head">
            <span class="sector__code">S/01 · FLAGSHIP</span>
            <h3 class="sector__name">Banking, Financial Services &amp; Insurance</h3>
          </div>
          <div class="sector__meta">
            <div class="sector__row"><span class="sector__label">Regulators</span><span class="sector__value">APRA · ASIC · AFCA</span></div>
            <div class="sector__row"><span class="sector__label">Where we work</span><span class="sector__value">Claims · underwriting · complaints · fraud · KYC and AML · third-party resilience</span></div>
          </div>
        </article>

        <article class="sector">
          <div class="sector__head">
            <span class="sector__code">S/02</span>
            <h3 class="sector__name">Healthcare &amp; Clinical</h3>
          </div>
          <div class="sector__meta">
            <div class="sector__row"><span class="sector__label">Regulators</span><span class="sector__value">TGA · ADHA · state health</span></div>
            <div class="sector__row"><span class="sector__label">Where we work</span><span class="sector__value">Clinical governance · care navigation · patient pathways · digital health platforms · clinical AI assurance</span></div>
          </div>
        </article>

        <article class="sector">
          <div class="sector__head">
            <span class="sector__code">S/03</span>
            <h3 class="sector__name">Government &amp; Public Sector</h3>
          </div>
          <div class="sector__meta">
            <div class="sector__row"><span class="sector__label">Regulators</span><span class="sector__value">Commonwealth and state</span></div>
            <div class="sector__row"><span class="sector__label">Where we work</span><span class="sector__value">Service delivery · shared services · citizen-facing platforms · public accountability</span></div>
          </div>
        </article>

        <article class="sector">
          <div class="sector__head">
            <span class="sector__code">S/04</span>
            <h3 class="sector__name">Technology &amp; Operations</h3>
          </div>
          <div class="sector__meta">
            <div class="sector__row"><span class="sector__label">Regulators</span><span class="sector__value">Sector-dependent</span></div>
            <div class="sector__row"><span class="sector__label">Where we work</span><span class="sector__value">Operating model · engineering capability · platform modernisation · global capability centres</span></div>
          </div>
        </article>

      </div>
    </div>

    <div class="section" id="independence">
      <div class="section__head">
        <span class="eyebrow">05 · How we hold ourselves</span>
        <h2>We advise, we build, and <em>we tell you which is which.</em></h2>
      </div>
      <div style="max-width: 78ch;">
        <p style="color: var(--fg1); font-size: 18px; line-height: 1.6;">Omameh holds equity in the company that builds our platforms. You should know that before you read anything else here.</p>
        <p style="color: var(--fg2); font-size: 16px; line-height: 1.7; margin-top: var(--space-4);">Two rules hold, and they are not negotiable. <strong>The advisory arm never recommends an Omameh product without disclosing the interest, in writing, at the time of the recommendation. We never charge for a recommendation that leads to a related sale.</strong></p>
        <p style="color: var(--fg2); font-size: 16px; line-height: 1.7; margin-top: var(--space-4);">We also recommend technology we do not build, and we walk away from work we cannot do well. <em>Ask us to put any of it in the engagement letter. We will.</em></p>
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
        <p class="foundation-strip__disclaimer">A commitment of our own time and capability, not a registered charity. No funds are solicited or held.</p>
      </div>
    </div>

    <div class="section">
      <div class="about-close">
        <h2 class="about-close__lead">The rest is <em>on the record.</em></h2>
        <div class="about-close__routes">
          <a href="/practice">Practice →</a>
          <a href="/products">Products →</a>
          <a href="/fluency">Fluency →</a>
          <a href="/case-00">Case 00 →</a>
        </div>
        <div class="about-close__cta">
          <a class="cta cta--primary" href="/contact">Let's talk →</a>
        </div>
      </div>
    </div>

    <hr class="rule">
    <p class="tag" style="text-align:center"><a href="/practice">Continue reading → A framework is one thing. <em>How does it become the work?</em> · Next · 03 · Practice</a></p>
  </div>
`;

export default function AboutPage() {
  return <RouteShell id="about" label="02 · About" markup={__MARKUP} />;
}
