import RouteShell from '../_components/RouteShell';

export const metadata = {
  title: 'Products',
  description:
    'Eight platforms, built by our own team. Or something new, for the part nobody sells off the shelf.',
};

/**
 * Products · V13 rebuild · 26 Aug 2026 · per V13_SITE_BUILD_for_Code.md §5.
 *
 * Deleted from the current page:
 *   · 'One team, two flags' claim (now on About)
 *   · The independence / disclosure block (removed everywhere per ten rules)
 *   · The four-stage Frame · Architect · Build · Decide on-ramp
 *   · Every duration/timeline (4-6 weeks etc)
 *   · The 'Two ways in' band + Solutions callout (from a prior V12 pass)
 *   · Every 'See on Syntegreti' link
 *
 * New structure:
 *   Hero · 'We build the things we advise on.'
 *   Part one · The platforms (8 cards, P01–P08, each links to /products/[slug])
 *   Part two · Solutions (3 short cards)
 *   Receipts (3 cases, on-page)
 *   Close
 *
 * Naming settled per brief §5:
 *   · P01 Evaluetor · Contract Intelligence
 *   · P02 Intuka · Business Operations
 *   · P03–P08 · no brand label until settled (ControlPlane/RegAssure NOT used)
 */

const __MARKUP = String.raw`
  <div class="container">
    <div class="route__header"><span class="route__index">04</span><span class="route__name">/products · Products</span><span class="route__issue">Vol. I · Issue 01 · Q3 2026</span></div>

    <div class="hero">
      <div>
        <span class="eyebrow" style="color: var(--accent-warm);">04 · Products</span>
        <h1 style="margin-top: var(--space-4);">We build the things <em>we advise on.</em></h1>
        <p class="lede">Eight platforms, built by our own team. Or something new, for the part nobody sells off the shelf.</p>
      </div>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">01 · The platforms</span>
        <h2>Eight. <em>Built by our own team.</em></h2>
        <p class="strap">Each opens a full specification — the problem it solves, how it works, what it needs from you.</p>
      </div>

      <div class="platforms-flagship">
        <a class="platform-tile platform-tile--flagship" href="/products/contract-intelligence">
          <div class="platform-tile__head">
            <span class="platform-tile__code">P01</span>
            <span class="platform-tile__brand">EVALUETOR</span>
            <span class="platform-tile__status platform-tile__status--live"><span class="platform-tile__bead" aria-hidden="true"></span>LIVE · DEMO READY</span>
          </div>
          <h3 class="platform-tile__name">Contract Intelligence</h3>
          <p class="platform-tile__line">Nine agents read every supplier agreement you hold, score the risk and track every obligation inside it.</p>
          <span class="platform-tile__cta">See the platform →</span>
        </a>
        <a class="platform-tile platform-tile--flagship" href="/products/business-operations">
          <div class="platform-tile__head">
            <span class="platform-tile__code">P02</span>
            <span class="platform-tile__brand">INTUKA</span>
            <span class="platform-tile__status platform-tile__status--early"><span class="platform-tile__bead" aria-hidden="true"></span>EARLY ACCESS</span>
          </div>
          <h3 class="platform-tile__name">Business Operations</h3>
          <p class="platform-tile__line">Seven things a business runs on, in one platform, with AI in every one of them.</p>
          <span class="platform-tile__cta">See the platform →</span>
        </a>
      </div>

      <div class="platforms-grid-3">
        <a class="platform-tile" href="/products/ai-governance">
          <div class="platform-tile__head">
            <span class="platform-tile__code">P03</span>
            <span class="platform-tile__status platform-tile__status--built"><span class="platform-tile__bead" aria-hidden="true"></span>BUILT</span>
          </div>
          <h3 class="platform-tile__name">AI Governance</h3>
          <p class="platform-tile__line">Every AI call in your enterprise intercepted, policy enforced, and logged.</p>
          <span class="platform-tile__cta">See the platform →</span>
        </a>
        <a class="platform-tile" href="/products/regulatory-reporting">
          <div class="platform-tile__head">
            <span class="platform-tile__code">P04</span>
            <span class="platform-tile__status platform-tile__status--built"><span class="platform-tile__bead" aria-hidden="true"></span>BUILT</span>
          </div>
          <h3 class="platform-tile__name">Regulatory Reporting</h3>
          <p class="platform-tile__line">Regulation becomes a knowledge graph; the graph becomes executable filing schemas.</p>
          <span class="platform-tile__cta">See the platform →</span>
        </a>
        <a class="platform-tile" href="/products/document-intelligence">
          <div class="platform-tile__head">
            <span class="platform-tile__code">P05</span>
            <span class="platform-tile__status platform-tile__status--built"><span class="platform-tile__bead" aria-hidden="true"></span>BUILT</span>
          </div>
          <h3 class="platform-tile__name">Document Intelligence</h3>
          <p class="platform-tile__line">Confidence-scored extraction with human review built in. Auditable, not black-box.</p>
          <span class="platform-tile__cta">See the platform →</span>
        </a>
      </div>

      <div class="platforms-grid-3">
        <a class="platform-tile" href="/products/agent-platform">
          <div class="platform-tile__head">
            <span class="platform-tile__code">P06</span>
            <span class="platform-tile__status platform-tile__status--built"><span class="platform-tile__bead" aria-hidden="true"></span>BUILT</span>
          </div>
          <h3 class="platform-tile__name">Agent Platform</h3>
          <p class="platform-tile__line">Enterprise agents for support deflection and intelligence, fully traced.</p>
          <span class="platform-tile__cta">See the platform →</span>
        </a>
        <a class="platform-tile" href="/products/ai-sdlc">
          <div class="platform-tile__head">
            <span class="platform-tile__code">P07</span>
            <span class="platform-tile__status platform-tile__status--built"><span class="platform-tile__bead" aria-hidden="true"></span>BUILT</span>
          </div>
          <h3 class="platform-tile__name">AI-Assisted SDLC</h3>
          <p class="platform-tile__line">AI-guided delivery across five roles, every artefact carrying an audit trail.</p>
          <span class="platform-tile__cta">See the platform →</span>
        </a>
        <a class="platform-tile" href="/products/datacenter">
          <div class="platform-tile__head">
            <span class="platform-tile__code">P08</span>
            <span class="platform-tile__status platform-tile__status--built"><span class="platform-tile__bead" aria-hidden="true"></span>BUILT</span>
          </div>
          <h3 class="platform-tile__name">Datacenter Thermal</h3>
          <p class="platform-tile__line">Thermal intelligence and cooling optimisation against live plant data.</p>
          <span class="platform-tile__cta">See the platform →</span>
        </a>
      </div>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">02 · Solutions</span>
        <h2>When the thing you need <em>does not exist yet.</em></h2>
        <p class="strap">Most of what an organisation actually needs is not something anyone sells. It sits between three systems nobody joined up, inside a process only two people understand. We build those, using the platforms above as foundations.</p>
      </div>

      <div class="solutions-triad">
        <article class="solution-card">
          <h3 class="solution-card__name">Built on what exists.</h3>
          <p class="solution-card__body">Every solution sits on top of the eight. Faster to ship, cheaper to run, sharper because the foundations were already tested.</p>
        </article>
        <article class="solution-card">
          <h3 class="solution-card__name">Deployed in your cloud.</h3>
          <p class="solution-card__body">Under your controls. AWS and Microsoft Azure partners. Your data never leaves your perimeter.</p>
        </article>
        <article class="solution-card">
          <h3 class="solution-card__name">Yours at the end.</h3>
          <p class="solution-card__body">You own what we build. Source, deployment, documentation, and the person on your team who can run it after we leave.</p>
        </article>
      </div>
    </div>

    <div class="section" id="receipts">
      <div class="section__head">
        <span class="eyebrow"><img src="/icons/compound.svg" alt="" width="14" height="14" style="vertical-align:-2px; margin-right:8px; opacity:0.85;">03 · Receipts</span>
        <h2>Patterns, not <em>experiments.</em></h2>
        <p class="strap">Each of these is deployable at your organisation.</p>
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

    <div class="section">
      <div class="close-block close-block--watermarked">
        <img class="om-watermark" src="/omameh-watermark.svg" alt="" aria-hidden="true" />
        <p class="close-block__line">Bring us the problem, not the <em>specification.</em></p>
        <p style="color: var(--fg2); font-size: 16px; margin: 0 auto var(--space-5); max-width: 60ch; line-height: 1.55;">We will tell you whether it needs a platform, a build, or neither.</p>
        <div class="close-block__ctas">
          <a class="cta cta--primary" href="mailto:contact@omameh.com.au?subject=Request a demo&body=Hi Bijal,%0D%0A%0D%0AI would like to book a demo.%0D%0A%0D%0AWhich platform:%0D%0AMy organisation:%0D%0AMy role:%0D%0AThe problem I am trying to solve:%0D%0A%0D%0AThank you.">Request a demo →</a>
          <a class="cta" href="/contact">Let's talk →</a>
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
