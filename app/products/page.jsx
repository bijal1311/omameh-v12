import RouteShell from '../_components/RouteShell';

export const metadata = {
  title: 'Products',
  description:
    'We build the things we advise on. One team, eight platforms. Architecture out of Sydney. Engineering out of Hyderabad. Several already running in production — not a roadmap.',
};

/**
 * Products · v12 · content brief 24 Aug 2026.
 * Practice register (navy / white / Playfair / Inter / JetBrains Mono).
 * Motif system v1.0 — Open Ring field at 26%, Rise on close, Bearing for §04.
 * Every closed circle is deliberate content (SVG bearing dots, favicon-style
 * gold origins). Nothing on this page uses border-radius: 50% on chrome.
 */

const __MARKUP = String.raw`
  <div class="container">
    <div class="route__header"><span class="route__index">04</span><span class="route__name">/products · Products</span><span class="route__issue">Vol. I · Issue 01 · Q3 2026</span></div>

    <div class="hero">
      <div>
        <span class="eyebrow" style="color: var(--accent-warm);">One team · two time zones</span>
        <h1 style="margin-top: var(--space-4);">We build the things <em>we advise on.</em></h1>
        <p class="lede">One team, eight platforms. <em>Architected end-to-end</em> — Sydney to Hyderabad, boardroom to build. No handoff between them. Several already running in production — not a roadmap.</p>
      </div>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow"><img src="/icons/bearings.svg" alt="" width="14" height="14" style="vertical-align:-2px; margin-right:8px; opacity:0.85;">01 · The claim</span>
        <h2>One team. <em>Two time zones.</em></h2>
      </div>
      <div style="max-width: 78ch;">
        <p style="color: var(--fg2); font-size: 17px; line-height: 1.65;">Most advisory practices stop at the recommendation. The board gets a view, then finds someone else to make it real — usually the firm that sold them the software in the first place.</p>
        <p style="color: var(--fg2); font-size: 17px; line-height: 1.65; margin-top: var(--space-4);">We hold both ends. Architecture is done here. Engineering is done in Hyderabad by Syntegreti, where we hold an equity partnership and where every platform below was built. Your lead talks to the architect who designs it and the engineers who build it. There is no relay.</p>
        <p style="color: var(--fg2); font-size: 17px; line-height: 1.65; margin-top: var(--space-4);">We built it this way deliberately. Pillar 03 of this practice is <em>Right Talent in the Right Place</em> — the right capability, in the right geography, by design rather than by arbitrage. This is that pillar applied to ourselves, before we recommend it to anyone else.</p>
        <p style="color: var(--fg2); font-size: 17px; line-height: 1.65; margin-top: var(--space-4);">Australia and Asia-Pacific are where we start. They are not where we stop. <em>End-to-end architecture, wherever the work lands.</em></p>
        <p style="color: var(--fg3); font-size: 15px; margin-top: var(--space-5);">That is also why the next section exists.</p>
      </div>
    </div>

    <hr class="om-rule" style="margin-block: var(--space-8);">

    <div class="section">
      <div class="section__head">
        <span class="eyebrow"><img src="/icons/governance.svg" alt="" width="14" height="14" style="vertical-align:-2px; margin-right:8px; opacity:0.85;">02 · Independence · Q · 001 · The disclosure</span>
        <h2>We advise, we build, and <em>we tell you which is which.</em></h2>
      </div>
      <div style="max-width: 78ch;">
        <p style="color: var(--fg1); font-size: 18px; line-height: 1.6;">One delivery team, two companies. Omameh holds equity in the one that builds these platforms. You should know that before anything else on this page.</p>
        <p style="color: var(--fg2); font-size: 16px; margin-top: var(--space-5);">Two rules hold, and they are not negotiable:</p>
        <ol style="color: var(--fg2); font-size: 16px; line-height: 1.7; padding-left: var(--space-5); margin-top: var(--space-3);">
          <li style="margin-bottom: var(--space-3);">The advisory arm never recommends an Omameh product without disclosing the interest, in writing, at the time of the recommendation.</li>
          <li>We never charge for a recommendation that leads to a related sale. You pay for the advice or you pay for the build. Never both on the same decision.</li>
        </ol>
        <p style="color: var(--fg3); font-size: 15px; margin-top: var(--space-5);"><em>Ask us to put it in the engagement letter. We will.</em></p>
      </div>
    </div>

    <hr class="om-rule" style="margin-block: var(--space-8);">

    <div class="section">
      <div class="section__head">
        <span class="eyebrow"><img src="/icons/readiness.svg" alt="" width="14" height="14" style="vertical-align:-2px; margin-right:8px; opacity:0.85;">03 · Two ways in</span>
        <h2>Products <em>and</em> Solutions.</h2>
        <p class="strap">Same team, same architecture, same equity partnership with Syntegreti — two different starting shapes.</p>
      </div>

      <div class="ways-in">
        <div class="ways-in__col">
          <span class="ways-in__label">Products</span>
          <p class="ways-in__lead"><em>If what you need is on the bench.</em></p>
          <p class="ways-in__body">Eight platforms, built once, deployable to your environment. Multi-tenant. AWS or Azure. In your cloud, under your controls. Several already running in production — the roster is below.</p>
        </div>
        <div class="ways-in__col ways-in__col--alt">
          <span class="ways-in__label">Solutions</span>
          <p class="ways-in__lead"><em>If it isn't.</em></p>
          <p class="ways-in__body">Bespoke pieces, built for one client, for one problem. Same architects. Same engineers in Hyderabad. Same disclosure rules. Some become the next platform on the bench. Most stay yours.</p>
          <p class="ways-in__cta"><a href="mailto:contact@omameh.com.au?subject=Solutions enquiry&body=Hi Bijal,%0D%0A%0D%0AI want to talk about a bespoke Solution.%0D%0A%0D%0AMy organisation:%0D%0AMy role:%0D%0AThe problem I am trying to solve:%0D%0A%0D%0AThank you.">Talk to us about a Solution →</a></p>
        </div>
      </div>

      <div class="section__subhead">
        <span class="eyebrow" style="color: var(--fg3);">03 · A · Products · the bench</span>
        <h3 class="section__subhead-h">Three at full weight. <em>Five on the bench.</em></h3>
        <p class="strap">The three most relevant to ANZ boards first. The rest of the roster beneath.</p>
      </div>

      <div class="platforms-grid">

        <article class="platform-card">
          <header class="platform-card__head">
            <span class="platform-card__code">PL01</span>
            <h3 class="platform-card__name">Contract Intelligence</h3>
            <p class="platform-card__one-line">Contract lifecycle intelligence — every obligation extracted, risk-scored, and tracked end-to-end.</p>
          </header>
          <p class="platform-card__question"><em>You negotiated hard for six weeks. Who has read it since?</em></p>
          <ul class="platform-card__spec">
            <li>Nine specialised agents extract, risk-score and track every obligation in a supplier agreement.</li>
            <li>A relationship-governance layer scores each vendor against the KPIs you actually agreed.</li>
            <li>Multi-tenant, fully audit-traced.</li>
          </ul>
          <p class="platform-card__why">Why it matters here. APRA CPS 230 made service provider management a prudential obligation, and the transition period for existing material agreements has closed. Boards are accountable for obligations nobody is reading.</p>
          <p class="platform-card__outcome"><span class="platform-card__outcome-dot" aria-hidden="true"></span>Nine specialised agents · full audit trace · deployable in your cloud.</p>
          <footer class="platform-card__foot">
            <span class="platform-card__status platform-card__status--live"><span class="platform-card__status-bead" aria-hidden="true"></span>Live · demo-ready</span>
            <span class="platform-card__ctas">
              <a class="platform-card__cta" href="mailto:contact@omameh.com.au?subject=Book a demo · PL01 Contract Intelligence&body=Hi Bijal,%0D%0A%0D%0AI would like to book a demo of Contract Intelligence.%0D%0A%0D%0AMy organisation:%0D%0AMy role:%0D%0AThe problem I am trying to solve:%0D%0A%0D%0AThank you.">Book a demo →</a>
              <a class="platform-card__cta platform-card__cta--secondary" href="#pl01-detail">Learn more →</a>
            </span>
          </footer>
        </article>

        <article class="platform-card">
          <header class="platform-card__head">
            <span class="platform-card__code">PL02</span>
            <h3 class="platform-card__name">AI Governance</h3>
            <p class="platform-card__one-line">Every LLM call in your enterprise, intercepted, policed, and evidenced.</p>
          </header>
          <p class="platform-card__question"><em>Can you show a regulator what your organisation asked an AI last quarter?</em></p>
          <ul class="platform-card__spec">
            <li>Policy enforcement at the point of the call.</li>
            <li>Local ML-based data-loss prevention.</li>
            <li>A complete audit log of all AI traffic across the enterprise.</li>
          </ul>
          <p class="platform-card__why">Why it matters here. A control that cannot be evidenced is not a control — it is an intention. This is the evidence layer.</p>
          <p class="platform-card__outcome"><span class="platform-card__outcome-dot" aria-hidden="true"></span>In hardening · first regulated-industry reference under NDA.</p>
          <footer class="platform-card__foot">
            <span class="platform-card__status platform-card__status--built"><span class="platform-card__status-bead" aria-hidden="true"></span>Built · reference in progress</span>
            <span class="platform-card__ctas">
              <a class="platform-card__cta" href="mailto:contact@omameh.com.au?subject=Book a demo · PL02 AI Governance&body=Hi Bijal,%0D%0A%0D%0AI would like to book a demo of AI Governance.%0D%0A%0D%0AMy organisation:%0D%0AMy role:%0D%0AThe problem I am trying to solve:%0D%0A%0D%0AThank you.">Book a demo →</a>
              <a class="platform-card__cta platform-card__cta--secondary" href="#pl02-detail">Learn more →</a>
            </span>
          </footer>
        </article>

        <article class="platform-card">
          <header class="platform-card__head">
            <span class="platform-card__code">PL03</span>
            <h3 class="platform-card__name">Business Operations</h3>
            <p class="platform-card__one-line">Seven back-office systems, replaced by one — with 160 AI actions built in.</p>
          </header>
          <p class="platform-card__question"><em>How much of your team's week goes to work no one would miss?</em></p>
          <ul class="platform-card__spec">
            <li>A multi-tenant operations platform with a built-in assistant.</li>
            <li>160 AI actions across four graduated autonomy levels — so AI does as much, or as little, as you allow.</li>
            <li>Built for organisations too small to carry seven systems and too serious to run on spreadsheets.</li>
          </ul>
          <p class="platform-card__why">Why it matters here. One platform replaces the seven-tool stack that eats a small ops team's week.</p>
          <p class="platform-card__outcome"><span class="platform-card__outcome-dot" aria-hidden="true"></span>In trial · 60% fewer tickets · 4 hours to 2 minutes on the L1 service desk.</p>
          <footer class="platform-card__foot">
            <span class="platform-card__status platform-card__status--trial"><span class="platform-card__status-bead" aria-hidden="true"></span>Live · in client trial</span>
            <span class="platform-card__ctas">
              <a class="platform-card__cta" href="mailto:contact@omameh.com.au?subject=Book a demo · PL03 Business Operations&body=Hi Bijal,%0D%0A%0D%0AI would like to book a demo of Business Operations.%0D%0A%0D%0AMy organisation:%0D%0AMy role:%0D%0AThe problem I am trying to solve:%0D%0A%0D%0AThank you.">Book a demo →</a>
              <a class="platform-card__cta platform-card__cta--secondary" href="#pl03-detail">Learn more →</a>
            </span>
          </footer>
        </article>

      </div>

      <div class="platform-details">
        <p class="platform-details__eyebrow">Learn more · the three at full weight.</p>

        <article id="pl01-detail" class="platform-detail">
          <header class="platform-detail__head">
            <span class="platform-detail__code">PL01 · Contract Intelligence</span>
            <h3 class="platform-detail__name">Contract lifecycle intelligence — <em>every obligation, seen.</em></h3>
          </header>
          <p class="platform-detail__lede">Enterprises negotiate every supplier agreement to the point of exhaustion, then never read it again. Contract Intelligence closes the gap between what was agreed and what is actually being delivered.</p>
          <div class="platform-detail__cols">
            <div>
              <h4>What it does</h4>
              <p>Nine specialised agents ingest a supplier agreement and extract every obligation, service level, price clause, exit right and renewal trigger. Each item is risk-scored, calendared, and assigned to a named owner. Vendors are then scored continuously against the KPIs you actually agreed — not the ones you assumed.</p>
            </div>
            <div>
              <h4>Where it fits</h4>
              <p>APRA CPS 230 turned service-provider oversight into a prudential obligation. This is the evidence layer for it. Any regulated buyer with more than fifty material supplier agreements, in a single tenanted deployment inside your own cloud.</p>
            </div>
          </div>
          <p class="platform-detail__foot">Fully audit-traced. Deployable in AWS or Azure, under your controls.</p>
        </article>

        <article id="pl02-detail" class="platform-detail">
          <header class="platform-detail__head">
            <span class="platform-detail__code">PL02 · AI Governance</span>
            <h3 class="platform-detail__name">The evidence layer <em>for every AI call.</em></h3>
          </header>
          <p class="platform-detail__lede">A control you cannot evidence is not a control — it is an intention. AI Governance sits between the enterprise and the LLM at the point of the call, so what a regulator asks for is already recorded.</p>
          <div class="platform-detail__cols">
            <div>
              <h4>What it does</h4>
              <p>Policy enforcement at the point of the call. Local ML-based data-loss prevention that keeps sensitive content inside the perimeter. A complete audit log of every LLM interaction across the enterprise, structured so a regulator, an internal auditor, or a board committee can query it without a specialist.</p>
            </div>
            <div>
              <h4>Where it fits</h4>
              <p>Every enterprise now has AI usage it cannot see. Board risk committees, chief risk officers, chief data officers, chief information security officers — this is the surface they can point at when the question comes up in a review.</p>
            </div>
          </div>
          <p class="platform-detail__foot">Multi-tenant or single-tenant. In your cloud. Integrations with the major LLM providers and enterprise identity systems.</p>
        </article>

        <article id="pl03-detail" class="platform-detail">
          <header class="platform-detail__head">
            <span class="platform-detail__code">PL03 · Business Operations · Intuka</span>
            <h3 class="platform-detail__name">Seven back-office systems, <em>replaced by one.</em></h3>
          </header>
          <p class="platform-detail__lede">Growing organisations stitch Sales, Marketing, HR, Finance, Projects, Recruitment and IT support together with spreadsheets and integrations that nobody quite owns. Intuka is the alternative — one platform, one data model, one place decisions get made.</p>
          <div class="platform-detail__cols">
            <div>
              <h4>What it does</h4>
              <p>A multi-tenant operations platform with a built-in assistant. 160 AI actions across four graduated autonomy levels, so AI does as much, or as little, as the operator allows. Quote to invoice to payment, employee onboarding, sales pipeline, project delivery and service desk — one system, one view.</p>
            </div>
            <div>
              <h4>Where it fits</h4>
              <p>Businesses that are too small for seven separate systems and too serious for the spreadsheets that stitch them together. Independent operators using it as the operating layer for a business one person could not otherwise run. Boutique consultancies giving it to clients as an off-the-shelf ops backbone.</p>
            </div>
          </div>
          <p class="platform-detail__foot">Live in client trial. 60% fewer tickets, 4 hours to 2 minutes on the L1 service desk in one deployment.</p>
        </article>
      </div>

      <div class="platforms-bench">
        <p class="platforms-bench__eyebrow">The rest of the bench — name and one line each.</p>
        <div class="platforms-bench__grid">
          <div class="platforms-bench__item"><h4>Regulatory Reporting</h4><p>Regulation PDFs become a knowledge graph, and the graph becomes executable filing schemas. Texas and Florida already built.</p></div>
          <div class="platforms-bench__item"><h4>Document Intelligence</h4><p>Confidence-scored extraction with human review and approval by design — auditable, not black-box.</p></div>
          <div class="platforms-bench__item"><h4>Agent Platform</h4><p>Enterprise agents for support deflection and enterprise intelligence, with OpenTelemetry tracing built in.</p></div>
          <div class="platforms-bench__item"><h4>AI-Assisted SDLC</h4><p>AI-guided delivery across five roles, where every generated artefact carries a compliance audit trail.</p></div>
          <div class="platforms-bench__item"><h4>Datacenter Thermal</h4><p>Thermal intelligence for data centre operators.</p></div>
        </div>
      </div>

      <aside class="solutions-callout">
        <div class="solutions-callout__eyebrow"><span>03 · B · Solutions · off the bench</span></div>
        <p class="solutions-callout__body"><em>If what you need is not on the bench,</em> the same team builds it — for one client, for one problem. Bespoke pieces, engineered end-to-end on the same architecture as the platforms above. Some become the next platform. Most stay yours.</p>
        <p class="solutions-callout__cta"><a class="cta cta--primary" href="mailto:contact@omameh.com.au?subject=Solutions enquiry&body=Hi Bijal,%0D%0A%0D%0AI want to talk about a bespoke Solution.%0D%0A%0D%0AMy organisation:%0D%0AMy role:%0D%0AThe problem I am trying to solve:%0D%0A%0D%0AThank you.">Talk to us about a Solution →</a></p>
      </aside>
    </div>

    <hr class="om-rule" style="margin-block: var(--space-8);">

    <div class="section">
      <div class="section__head">
        <span class="eyebrow"><img src="/icons/sequence.svg" alt="" width="14" height="14" style="vertical-align:-2px; margin-right:8px; opacity:0.85;">04 · How it starts · Q · 002 · The on-ramp</span>
        <h2>Four to six weeks. One problem. <em>A working proof.</em></h2>
        <p class="strap">No open-ended engagements and no twelve-month build cycles. One problem, two or three systems, four to six weeks to something that runs.</p>
      </div>

      <div class="on-ramp">
        <div class="on-ramp__diagram" aria-hidden="true">
          <svg viewBox="0 0 720 220" fill="none" style="width:100%; height:auto; max-height:220px;">
            <g fill="none" stroke="rgba(201,168,76,0.32)" stroke-width="1" stroke-dasharray="2 6">
              <circle cx="120" cy="110" r="46"></circle>
              <circle cx="120" cy="110" r="86"></circle>
              <circle cx="120" cy="110" r="126"></circle>
              <circle cx="120" cy="110" r="166"></circle>
            </g>
            <g fill="#C9A84C" opacity="0.9">
              <circle cx="166" cy="110" r="4"></circle>
              <circle cx="206" cy="110" r="4"></circle>
              <circle cx="246" cy="110" r="4"></circle>
              <circle cx="286" cy="110" r="4"></circle>
            </g>
            <g fill="none" stroke="rgba(0,212,203,0.55)" stroke-width="1" stroke-dasharray="3 4">
              <circle cx="120" cy="64" r="6"></circle>
            </g>
            <circle cx="120" cy="110" r="6" fill="#C9A84C"></circle>
            <g font-family="'JetBrains Mono', ui-monospace, monospace" font-size="10" letter-spacing="1.5" fill="rgba(255,255,255,0.72)">
              <text x="166" y="140" text-anchor="middle">01 · FRAME</text>
              <text x="206" y="155" text-anchor="middle">02 · ARCHITECT</text>
              <text x="246" y="170" text-anchor="middle">03 · BUILD</text>
              <text x="286" y="185" text-anchor="middle">04 · DECIDE</text>
            </g>
          </svg>
        </div>
        <div class="on-ramp__steps">
          <div class="on-ramp__step"><span class="on-ramp__num">01</span><h4>Frame</h4><p>The problem, the stakeholders, the benefit worth chasing.</p></div>
          <div class="on-ramp__step"><span class="on-ramp__num">02</span><h4>Architect</h4><p>The stack, the integration surface, the deployment shape.</p></div>
          <div class="on-ramp__step"><span class="on-ramp__num">03</span><h4>Build</h4><p>Accelerated prototyping against your real systems.</p></div>
          <div class="on-ramp__step"><span class="on-ramp__num">04</span><h4>Decide</h4><p>A working proof, real numbers, and an honest recommendation. <em>If it will not work, we say so.</em></p></div>
        </div>
        <div class="on-ramp__meta">
          <p><em>Fixed scope. Fixed fee.</em> Your lead works directly with our architect — no relay.</p>
          <p style="color: var(--fg3); font-size: 14px; margin-top: var(--space-3);">Deploys in your cloud, under your controls. AWS and Azure partners.</p>
        </div>
      </div>
    </div>

    <hr class="om-rule" style="margin-block: var(--space-8);">

    <div class="section" id="receipts">
      <div>
        <div class="section__head">
          <span class="eyebrow"><img src="/icons/compound.svg" alt="" width="14" height="14" style="vertical-align:-2px; margin-right:8px; opacity:0.85;">05 · Receipts</span>
          <h2>We keep <em>receipts.</em></h2>
          <p class="strap">Patterns, not one-off experiments. Each one is deployable at your organisation.</p>
        </div>
        <div class="receipts">
          <article class="receipt">
            <h4 class="receipt__case">Insurance sales platform · Texas</h4>
            <p class="receipt__nums">35+ carriers shopped · 200+ locations · in production</p>
            <p class="receipt__replicable">Replicable at: any multi-carrier agency, panel or aggregator network.</p>
          </article>
          <article class="receipt">
            <h4 class="receipt__case">AI service desk</h4>
            <p class="receipt__nums">60% fewer tickets · 4 hours to 2 minutes · $72k annual saving</p>
            <p class="receipt__replicable">Replicable at: any IT support function with 500+ tickets a month.</p>
          </article>
          <article class="receipt">
            <h4 class="receipt__case">Field services scheduling · US</h4>
            <p class="receipt__nums">Zero wait time · four channels · in production</p>
            <p class="receipt__replicable">Replicable at: any scheduling-heavy operation with 200+ daily calls.</p>
          </article>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="close-block close-block--watermarked">
        <img class="om-watermark" src="/omameh-watermark.svg" alt="" aria-hidden="true" />
        <p class="close-block__line">The platforms are built. The architecture question is <em>whether yours can carry them.</em></p>
        <div class="close-block__ctas">
          <a class="cta cta--primary" href="mailto:contact@omameh.com.au?subject=Let's talk · Products&body=Hi Bijal,%0D%0A%0D%0AI want to talk about the platforms.%0D%0A%0D%0AMy organisation:%0D%0AMy role:%0D%0AThe problem I am trying to solve:%0D%0A%0D%0AThank you.">Let's talk →</a>
          <a class="cta" href="/practice">See the practice →</a>
        </div>
      </div>
    </div>

    <hr class="rule" style="margin-block: var(--space-8);">
    <p class="tag" style="text-align:center;"><a href="/fluency">Continue reading → <em>Capability for the seat you hold.</em> · Next · 05 · Fluency</a></p>
  </div>
`;

export default function ProductsPage() {
  return <RouteShell id="products" label="04 · Products" markup={__MARKUP} />;
}
