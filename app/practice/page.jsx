import RouteShell from '../_components/RouteShell';

export const metadata = {
  title: 'Practice',
  description:
    'Five pillars. Three phases. One architecture. The architecture between strategy and execution — Sense, Shift, Scale.',
};

/**
 * Practice — V11 Final Build · 29 May 2026
 *
 * Pillar descriptions are LOCKED V11 content from CLAUDE.md (the
 * canonical source). Mockup had scaffolded short descriptions; v12
 * uses CLAUDE.md prose + key question per pillar.
 *
 * H1 ceiling 56px via .page-practice scope (founder call D · 28 May).
 */

const __MARKUP = String.raw`
  <div class="container">
    <div class="route__header"><span class="route__index">03</span><span class="route__name">/practice · Practice</span><span class="route__issue">Vol. I · Issue 01 · Q2 2026</span></div>
    <div class="hero">
      <span class="eyebrow">Practice · Omameh</span>
      <h1 style="margin-top: var(--space-4)">Five pillars. Three phases. <em>One architecture.</em></h1>
      <p class="lede">A framework is one thing. How it becomes the work is another. The five pillars are what we modernise. The three phases — Sense, Shift, Scale — are how we get there.</p>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">01 · The Five Pillars</span>
        <h2>What we modernise.</h2>
      </div>

      <div class="pillars">
        <div class="pillar">
          <span class="pillar__num">P01</span>
          <div>
            <h3 class="pillar__title">Operating Model</h3>
            <p style="color: var(--fg2); margin: var(--space-2) 0 0; font-size: 15px;">The structure that lets AI-era ambition land — accountability, decision rights, and the wiring between functions. Where the org chart ends and the architecture begins.</p>
          </div>
          <span class="pillar__cta">Read →</span>
        </div>
        <div class="pillar">
          <span class="pillar__num">P02</span>
          <div>
            <h3 class="pillar__title">Workforce, Skills <em>&amp; Culture</em></h3>
            <p style="color: var(--fg2); margin: var(--space-2) 0 0; font-size: 15px;">The people side of the transition. What roles change. What skills compound. What culture has to hold while the model shifts beneath it.</p>
          </div>
          <span class="pillar__cta">Read →</span>
        </div>
        <div class="pillar">
          <span class="pillar__num">P03</span>
          <div>
            <h3 class="pillar__title">Right Talent in the <em>Right Place</em></h3>
            <p style="color: var(--fg2); margin: var(--space-2) 0 0; font-size: 15px;">Where work is done, by whom, on what economics — by design, not by labour arbitrage. Vetted partnership. AU + IN bench.</p>
          </div>
          <span class="pillar__cta">Read →</span>
        </div>
        <div class="pillar">
          <span class="pillar__num">P04</span>
          <div>
            <h3 class="pillar__title">AI Governance</h3>
            <p style="color: var(--fg2); margin: var(--space-2) 0 0; font-size: 15px;">The guard rails that satisfy the regulator before the regulator asks. Risk, ethics, audit, control — built into the operating model, not bolted on.</p>
          </div>
          <span class="pillar__cta">Read →</span>
        </div>
        <div class="pillar">
          <span class="pillar__num">P05</span>
          <div>
            <h3 class="pillar__title">AI-Era <em>Innovation</em></h3>
            <p style="color: var(--fg2); margin: var(--space-2) 0 0; font-size: 15px;">How the organisation learns to ship new things at AI speed without losing the architecture beneath it. Weeks, not quarters.</p>
          </div>
          <span class="pillar__cta">Read →</span>
        </div>
      </div>
    </div>

    <div class="section section--space-8b">
      <div class="section__head">
        <span class="eyebrow">02 · The Spine</span>
        <h2><em>Sense.</em> Shift. <em>Scale.</em></h2>
        <p class="strap">Three phases. One engagement. The architecture moves with you.</p>
      </div>

      <div class="spine">
        <div class="spine__phase">
          <span class="spine__num">Q · 001 · Sense</span>
          <h3 class="spine__title">Pressure-test.</h3>
          <p class="spine__body">Where the architecture holds. Where it breaks. The diagnostic that surfaces what the strategy assumes about the operating model — and whether the operating model can carry it.</p>
        </div>
        <div class="spine__phase">
          <span class="spine__num">Q · 002 · Shift</span>
          <h3 class="spine__title">Design <em>&amp; embed.</em></h3>
          <p class="spine__body">Design the change in the architecture. Embed it into the operating model. Stay long enough that it carries — and out the moment it does.</p>
        </div>
        <div class="spine__phase">
          <span class="spine__num">Q · 003 · Scale</span>
          <h3 class="spine__title">Compound.</h3>
          <p class="spine__body">Hand it to the team. The capability compounds inside the organisation after the engagement ends. Not training. Capability.</p>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">03 · Surfaces</span>
        <h2>Four lanes of <em>engagement.</em></h2>
      </div>

      <div class="grid-4">
        <div class="card">
          <div class="card__eyebrow"><span class="num">L01</span></div>
          <h3 class="card__title">Pressure-test</h3>
          <p class="card__body">A short engagement. Six weeks. Six conversations. Surfaces the gap between strategy and execution — and the architectural work that closes it.</p>
          <span class="card__read">Read →</span>
        </div>
        <div class="card">
          <div class="card__eyebrow"><span class="num">L02</span></div>
          <h3 class="card__title">Modernisation</h3>
          <p class="card__body">A longer engagement. Rebuilds the architecture for AI-era load. Embedded, then handed over. The shape of most board mandates.</p>
          <span class="card__read">Read →</span>
        </div>
        <div class="card">
          <div class="card__eyebrow"><span class="num">L03</span></div>
          <h3 class="card__title">Advisory</h3>
          <p class="card__body">Recurring counsel for the leader inside the transition. A standing room — boardroom, off-site, late-evening call.</p>
          <span class="card__read">Read →</span>
        </div>
        <div class="card">
          <div class="card__eyebrow"><span class="num">L04</span></div>
          <h3 class="card__title">Partners <em>&amp; Collaborations</em></h3>
          <p class="card__body">Embedded delivery with our vetted bench — Australia and India. The right talent in the right place, complementary to ours.</p>
          <span class="card__read">Read →</span>
        </div>
      </div>
    </div>

    <hr class="rule">
    <p class="tag" style="text-align:center">Continue reading → <em>What does the work look like in the open?</em> · Next · 04 · Atlas</p>
  </div>
`;

export default function PracticePage() {
  return <RouteShell id="practice" label="03 · Practice" markup={__MARKUP} className="page-practice" />;
}
