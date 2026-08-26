import RouteShell from '../_components/RouteShell';

export const metadata = {
  title: 'Practice',
  description:
    'Five pillars. Three phases. One architecture. The architecture between strategy and execution — Sense, Shift, Scale.',
};

/**
 * Practice — v12 · 24 Aug 2026 · reordered per content brief §4.
 *
 * Surfaces / Four lanes now sits above The Five Pillars. Rationale: L01
 * Pressure-test is the only thing on the page a reader can say yes to.
 * Renumbered so 01 · Surfaces · 02 · The Five Pillars · 03 · The Spine
 * reads clean in the new order (brief said "no copy changes" but keeping
 * the old 03 · 01 · 02 numbering after the move reads as a bug — using
 * judgement here per Bijal's Q3 answer, revert if she prefers).
 *
 * L01 Pressure-test's expanded body now carries a mailto CTA so the tile
 * is actionable, not just readable. Tap-to-expand still works (the click
 * handler in wire-interactions.js skips inner <a> clicks).
 *
 * Pillar descriptions are LOCKED V11 content from CLAUDE.md. Mockup had
 * scaffolded short descriptions; v12 uses CLAUDE.md prose + key question
 * per pillar.
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
        <span class="eyebrow">01 · Surfaces</span>
        <h2>Four lanes of <em>engagement.</em></h2>
      </div>

      <div class="grid-4">
        <div class="card card--reveal" tabindex="0">
          <div class="card__face">
            <div class="card__eyebrow"><span class="num">L01</span><span>Sense</span></div>
            <h3 class="card__title">Pressure-test</h3>
            <p class="card__strap">A short engagement. Six weeks. Six conversations.</p>
            <span class="card__read">Read →</span>
          </div>
          <div class="card__expanded">
            <p class="card__body">Surfaces the gap between strategy and execution — and the architectural work that closes it. Format: six conversations across six weeks · chair, CEO, executive committee, observer. Output: architecture map · gap analysis · readiness score on the eight dimensions.</p>
            <p class="card__foot">Leads to · Modernisation · or a parked decision with clarity</p>
            <p class="card__cta-row"><a class="cta cta--primary" href="mailto:contact@omameh.com.au?subject=Pressure-test enquiry&body=Hi Bijal,%0D%0A%0D%0AI would like to start with a Pressure-test.%0D%0A%0D%0AMy organisation:%0D%0AMy role:%0D%0AThe question the board is holding:%0D%0A%0D%0AThank you.">Book a Pressure-test →</a></p>
          </div>
        </div>

        <div class="card card--reveal" tabindex="0">
          <div class="card__face">
            <div class="card__eyebrow"><span class="num">L02</span><span>Shift</span></div>
            <h3 class="card__title">Modernisation</h3>
            <p class="card__strap">A longer engagement. Rebuilds the architecture for AI-era load.</p>
            <span class="card__read">Read →</span>
          </div>
          <div class="card__expanded">
            <p class="card__body">Embedded, then handed over. The shape of most board mandates. We redesign the operating model, capability placement, governance cadence, and AI architecture. Capability stays inside the organisation — we step out the moment it compounds.</p>
            <p class="card__foot">Typical · 6 to 12 months · embedded · handover by design</p>
          </div>
        </div>

        <div class="card card--reveal" tabindex="0">
          <div class="card__face">
            <div class="card__eyebrow"><span class="num">L03</span><span>Scale</span></div>
            <h3 class="card__title">Advisory</h3>
            <p class="card__strap">Recurring counsel for the leader inside the transition.</p>
            <span class="card__read">Read →</span>
          </div>
          <div class="card__expanded">
            <p class="card__body">A standing room — boardroom, off-site, late-evening call. Strategy stress-tests, escalations, regulator-readiness reviews, and talent decisions. Annual partnership · monthly cadence by default · scaled to the work.</p>
            <p class="card__foot">Cadence · Monthly board · off-site · 24/7 escalation</p>
          </div>
        </div>

        <div class="card card--reveal" tabindex="0">
          <div class="card__face">
            <div class="card__eyebrow"><span class="num">L04</span><span>Bench</span></div>
            <h3 class="card__title">Partners <em>&amp; Collaborations</em></h3>
            <p class="card__strap">Embedded delivery with our vetted bench — Australia and India.</p>
            <span class="card__read">Read →</span>
          </div>
          <div class="card__expanded">
            <p class="card__body">The right talent in the right place, complementary to ours. Delivery firms, embedded teams, industry advisors whose capability complements the bench. Right-shoring as design, not labour arbitrage. A small bench, kept small on purpose.</p>
            <p class="card__foot">Process · 30-min conversation → reference check → trial → annual agreement</p>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">02 · The Five Pillars</span>
        <h2>What we modernise.</h2>
      </div>

      <div class="pillars">
        <div class="pillar pillar--reveal" tabindex="0">
          <span class="pillar__num">P01</span>
          <div>
            <h3 class="pillar__title">Operating Model</h3>
            <p style="color: var(--fg2); margin: var(--space-2) 0 0; font-size: 15px;">The structure that lets AI-era ambition land — accountability, decision rights, and the wiring between functions. Where the org chart ends and the architecture begins.</p>
          </div>
          <span class="pillar__cta">Read →</span>
          <div class="pillar__expanded">
            <div class="pillar__prov"><em>Can your 2015 operating model carry a 2030 strategy?</em></div>
            <div class="pillar__sub-grid">
              <div class="pillar__sub"><div class="pillar__sub-label">Architecture</div><p>How work flows, how decisions get made, and how value is created when human-to-machine intelligence ratios shift every quarter. The interlinking layer between strategy and execution.</p></div>
              <div class="pillar__sub"><div class="pillar__sub-label">Diagnostic</div><p>Decision loops, accountability lines, capability placement, governance cadence. We map the operating model against the ambition it has to carry.</p></div>
            </div>
            <div class="pillar__spine-row"><span class="pillar__spine-label">Across the spine</span></div>
            <div class="pillar__spine-grid">
              <div><span class="pillar__phase">Sense</span><p>Diagnose where the operating model bottlenecks the strategy.</p></div>
              <div><span class="pillar__phase">Shift</span><p>Redesign decision loops, accountabilities, and capability placement.</p></div>
              <div><span class="pillar__phase">Scale</span><p>Embed the new operating rhythm and watch it compound.</p></div>
            </div>
            <div class="pillar__meta-grid">
              <div><div class="pillar__meta-label">Signal</div><p>Decisions taking 8 weeks that need 8 days. <em>Strategy that doesn't move.</em></p></div>
              <div><div class="pillar__meta-label">What compounds</div><p>Speed of decision. Quality of execution. Trust between layers of the org.</p></div>
            </div>
          </div>
        </div>

        <div class="pillar pillar--reveal" tabindex="0">
          <span class="pillar__num">P02</span>
          <div>
            <h3 class="pillar__title">Workforce, Skills <em>&amp; Culture</em></h3>
            <p style="color: var(--fg2); margin: var(--space-2) 0 0; font-size: 15px;">The people side of the transition. What roles change. What skills compound. What culture has to hold while the model shifts beneath it.</p>
          </div>
          <span class="pillar__cta">Read →</span>
          <div class="pillar__expanded">
            <div class="pillar__prov"><em>Do you know what skills your organisation will need in three years — and are you building toward them?</em></div>
            <div class="pillar__sub-grid">
              <div class="pillar__sub"><div class="pillar__sub-label">Architecture</div><p>Skills are becoming the new currency of the global economy. The three-stranded rope: capability, culture, and the mindset the work runs on.</p></div>
              <div class="pillar__sub"><div class="pillar__sub-label">Diagnostic</div><p>Where the workforce is now. Where it needs to be by 2028. The skills you can build internally, the ones you have to bring in, the ones you have to retire.</p></div>
            </div>
            <div class="pillar__spine-row"><span class="pillar__spine-label">Across the spine</span></div>
            <div class="pillar__spine-grid">
              <div><span class="pillar__phase">Sense</span><p>Read the gap between current capability and 2028 capability.</p></div>
              <div><span class="pillar__phase">Shift</span><p>Design the skills strategy — build, buy, partner.</p></div>
              <div><span class="pillar__phase">Scale</span><p>Capability programmes that compound — Mindset by Design, Decision Literacy.</p></div>
            </div>
            <div class="pillar__meta-grid">
              <div><div class="pillar__meta-label">Signal</div><p>Critical roles taking 9 months to fill. <em>Capability the org can't see itself losing.</em></p></div>
              <div><div class="pillar__meta-label">What compounds</div><p>Internal capability. Retention. The org's ability to see its own next decade.</p></div>
            </div>
          </div>
        </div>

        <div class="pillar pillar--reveal" tabindex="0">
          <span class="pillar__num">P03</span>
          <div>
            <h3 class="pillar__title">Right Talent in the <em>Right Place</em></h3>
            <p style="color: var(--fg2); margin: var(--space-2) 0 0; font-size: 15px;">Where work is done, by whom, on what economics — by design, not by labour arbitrage. Vetted partnership. AU + IN bench.</p>
          </div>
          <span class="pillar__cta">Read →</span>
          <div class="pillar__expanded">
            <div class="pillar__prov"><em>Are you building global capability with intention — or just moving cost to a different geography?</em></div>
            <div class="pillar__sub-grid">
              <div class="pillar__sub"><div class="pillar__sub-label">Architecture</div><p>The India and Middle East opportunity is real and accelerating. Right-shoring, not outsourcing. The right talent, in the right place, by design.</p></div>
              <div class="pillar__sub"><div class="pillar__sub-label">Diagnostic</div><p>Where capability sits, where it should sit, and what the geography of the next operating model looks like — cost, reach, risk, cultural alignment.</p></div>
            </div>
            <div class="pillar__spine-row"><span class="pillar__spine-label">Across the spine</span></div>
            <div class="pillar__spine-grid">
              <div><span class="pillar__phase">Sense</span><p>Audit the capability map — onshore, near-shore, offshore.</p></div>
              <div><span class="pillar__phase">Shift</span><p>Design the Global Capability Centres (GCC) strategy — what stays here, what moves, what gets built.</p></div>
              <div><span class="pillar__phase">Scale</span><p>Stand up the centre. Govern it. Make it compound.</p></div>
            </div>
            <div class="pillar__meta-grid">
              <div><div class="pillar__meta-label">Signal</div><p>Capability silent at 7am Sydney time. <em>Talent strategy that is really a cost strategy.</em></p></div>
              <div><div class="pillar__meta-label">What compounds</div><p>Reach. Resilience. The org's ability to operate across time zones with single accountability.</p></div>
            </div>
          </div>
        </div>

        <div class="pillar pillar--reveal" tabindex="0">
          <span class="pillar__num">P04</span>
          <div>
            <h3 class="pillar__title">AI Governance</h3>
            <p style="color: var(--fg2); margin: var(--space-2) 0 0; font-size: 15px;">The guard rails that satisfy the regulator before the regulator asks. Risk, ethics, audit, control — built into the operating model, not bolted on.</p>
          </div>
          <span class="pillar__cta">Read →</span>
          <div class="pillar__expanded">
            <div class="pillar__prov"><em>Who is accountable for AI in your organisation — and do they have what they need?</em></div>
            <div class="pillar__sub-grid">
              <div class="pillar__sub"><div class="pillar__sub-label">Architecture</div><p>Boards and executives are being asked to govern something they barely understand. Frameworks, policies, and capability that allow leadership to guide AI adoption — without slowing it down.</p></div>
              <div class="pillar__sub"><div class="pillar__sub-label">Diagnostic</div><p>Where AI accountability sits, who decides what gets deployed, and how risk and reward are balanced in real-time.</p></div>
            </div>
            <div class="pillar__spine-row"><span class="pillar__spine-label">Across the spine</span></div>
            <div class="pillar__spine-grid">
              <div><span class="pillar__phase">Sense</span><p>Map current AI use, governance gaps, and regulator-readiness.</p></div>
              <div><span class="pillar__phase">Shift</span><p>Stand up the AI governance framework — accountability, cadence, escalation.</p></div>
              <div><span class="pillar__phase">Scale</span><p>Embed it as a council that actually decides — not one that just meets.</p></div>
            </div>
            <div class="pillar__meta-grid">
              <div><div class="pillar__meta-label">Signal</div><p>A council that meets and does not decide. <em>AI being deployed without anyone holding the line.</em></p></div>
              <div><div class="pillar__meta-label">What compounds</div><p>Trust with the regulator. Speed of authorised deployment. Board confidence.</p></div>
            </div>
          </div>
        </div>

        <div class="pillar pillar--reveal" tabindex="0">
          <span class="pillar__num">P05</span>
          <div>
            <h3 class="pillar__title">AI-Era <em>Innovation</em></h3>
            <p style="color: var(--fg2); margin: var(--space-2) 0 0; font-size: 15px;">How the organisation learns to ship new things at AI speed without losing the architecture beneath it. Weeks, not quarters.</p>
          </div>
          <span class="pillar__cta">Read →</span>
          <div class="pillar__expanded">
            <div class="pillar__prov"><em>Is your next breakthrough dependent on luck — or does it have a system behind it?</em></div>
            <div class="pillar__sub-grid">
              <div class="pillar__sub"><div class="pillar__sub-label">Architecture</div><p>A permanent internal capability, not a department. The structures, culture, and rhythm that make innovation repeatable in the AI era.</p></div>
              <div class="pillar__sub"><div class="pillar__sub-label">Diagnostic</div><p>Where ideas come from, what survives the pipeline, and whether the next breakthrough has architecture behind it or is hoping for luck.</p></div>
            </div>
            <div class="pillar__spine-row"><span class="pillar__spine-label">Across the spine</span></div>
            <div class="pillar__spine-grid">
              <div><span class="pillar__phase">Sense</span><p>Audit innovation rhythm, pipeline, and where it dies.</p></div>
              <div><span class="pillar__phase">Shift</span><p>Design the lab — permanent capability with a delivery network.</p></div>
              <div><span class="pillar__phase">Scale</span><p>MVPs shipped in weeks. Real product, not pilots.</p></div>
            </div>
            <div class="pillar__meta-grid">
              <div><div class="pillar__meta-label">Signal</div><p>Innovation that lives in a deck. <em>The next breakthrough planned for the year after next.</em></p></div>
              <div><div class="pillar__meta-label">What compounds</div><p>Pipeline velocity. The org's ability to ship without external scaffolding.</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section section--space-8b">
      <div class="section__head">
        <span class="eyebrow">03 · The Spine</span>
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

    <hr class="rule">
    <p class="tag" style="text-align:center"><a href="/products">Continue reading → <em>We build the things we advise on.</em> · Next · 04 · Products</a></p>
  </div>
`;

export default function PracticePage() {
  return <RouteShell id="practice" label="03 · Practice" markup={__MARKUP} className="page-practice" />;
}
