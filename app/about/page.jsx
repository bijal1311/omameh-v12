import RouteShell from '../_components/RouteShell';

export const metadata = {
  title: 'About',
  description:
    'Business architecture for the AI era. One framework: six layers, five pillars, eight dimensions. Markets across financial services, healthcare, government, media, and technology.',
};

const __MARKUP = String.raw`
  <div class="container">
    <div class="route__header"><span class="route__index">02</span><span class="route__name">/about · About</span><span class="route__issue">Vol. I · Issue 01 · Q2 2026</span></div>
    <div class="hero">
      <span class="eyebrow">About · Omameh</span>
      <h1 style="margin-top: var(--space-4)">Business architecture for the <em>AI era.</em></h1>
      <p class="lede">Redesign the gap between strategy and execution — operating model, the governance, and the capability that let AI-era ambition actually land.</p>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">01 · Our Framework</span>
        <h2>One architecture. <em>Read as one.</em></h2>
        <p class="strap">Six layers, five pillars, eight dimensions. Hover any layer — or any pillar — to see how it sits in the system.</p>
      </div>

      <div class="framework">
        <img class="framework__watermark" src="/omameh-watermark.svg" alt="" aria-hidden="true" />
        <div class="framework__inner">
          <p class="tag" style="text-align:center; color: var(--accent);">Working Zone · L02 → L05</p>
          <div class="framework__layers">
            <div class="framework__layer"><span class="num">L01</span><span class="label">Bookend · In · Business Strategy</span><span class="pin">IN</span></div>
            <div class="framework__layer working"><span class="num">L02</span><span class="label">Business Architecture</span><span class="pin">—</span></div>
            <div class="framework__layer working"><span class="num">L03</span><span class="label">Data &amp; Intelligence</span><span class="pin">—</span></div>
            <div class="framework__layer working"><span class="num">L04</span><span class="label">Enabling Functions</span><span class="pin">—</span></div>
            <div class="framework__layer working"><span class="num">L05</span><span class="label">Business Operations</span><span class="pin">—</span></div>
            <div class="framework__layer"><span class="num">L06</span><span class="label">Bookend · Out · Outcomes</span><span class="pin">OUT</span></div>
          </div>
          <div class="framework__pillars">
            <span class="framework__pillar"><span class="num">P01</span> Operating Model</span>
            <span class="framework__pillar"><span class="num">P02</span> Workforce, Skills &amp; Culture</span>
            <span class="framework__pillar"><span class="num">P03</span> Right Talent in the Right Place</span>
            <span class="framework__pillar"><span class="num">P04</span> AI Governance</span>
            <span class="framework__pillar"><span class="num">P05</span> AI-Era Innovation</span>
          </div>
          <p class="tag" style="margin-top: var(--space-6); text-align:center;">Eight Dimensions · The Diagnostic · Readiness, scored beneath the architecture.</p>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section__head" style="text-align: center; align-items: center;">
        <span class="eyebrow">02 · The Reframe</span>
        <h2 style="margin-inline: auto;">The AI era doesn't reward the fastest mover. <em>It rewards the most structurally ready.</em></h2>
      </div>
      <div class="container--narrow" style="padding: 0; margin-inline: auto; text-align: center;">
        <p>Most leaders we meet are buying AI tools and laying them over operating models built in 2015. The deck looks confident. The org doesn't move. Three years in, the invoice arrives — <em>and it is not zero.</em></p>
        <p>Most consultancies sell the strategy. Most platforms sell the tools. <strong>Almost no one does the architectural work in between</strong> — the layer where ambition either lands or it doesn't.</p>
        <p><em>Sense the architecture. Shift the work. Scale the capability.</em> The relationship is collaborative. The transformation is yours.</p>
      </div>
    </div>

    <div class="section section--space-8b">
      <div class="section__head">
        <span class="eyebrow">03 · Markets · five sectors of depth</span>
        <h2>Five sectors of <em>depth.</em></h2>
        <p class="strap">Five sectors where the AI era is forcing structural choices. Where Omameh has bench, currency, and pattern recognition built from two decades inside.</p>
      </div>

      <div class="grid-5">
        <div class="card card--reveal" tabindex="0">
          <div class="card__face">
            <div class="card__eyebrow"><span class="num">S/01</span><span>FS&amp;I</span></div>
            <h3 class="card__title">Financial Services <em>&amp; Insurance</em></h3>
            <p class="card__strap">The operating model that holds at 7am to APRA.</p>
            <span class="card__read">Read →</span>
          </div>
          <div class="card__expanded">
            <p class="card__body">Where AI governance has to satisfy the regulator before the regulator asks. Big four, regional banks, GI, life, super — the architecture between AI ambition and prudential standards.</p>
            <p class="card__foot">Big four · Regional banks · GI · Life · Super</p>
          </div>
        </div>

        <div class="card card--reveal" tabindex="0">
          <div class="card__face">
            <div class="card__eyebrow"><span class="num">S/02</span><span>Healthcare</span></div>
            <h3 class="card__title">Healthcare <em>&amp; Health Insurance</em></h3>
            <p class="card__strap">Three loads, one architecture.</p>
            <span class="card__read">Read →</span>
          </div>
          <div class="card__expanded">
            <p class="card__body">Clinical, claims, member experience — the three loads the architecture has to carry at the same time, on the same operating model, in the same release cycle.</p>
            <p class="card__foot">Insurers · Networks · Digital health</p>
          </div>
        </div>

        <div class="card card--reveal" tabindex="0">
          <div class="card__face">
            <div class="card__eyebrow"><span class="num">S/03</span><span>Government</span></div>
            <h3 class="card__title">Government <em>&amp; Public Sector</em></h3>
            <p class="card__strap">Procurement is the operating model.</p>
            <span class="card__read">Read →</span>
          </div>
          <div class="card__expanded">
            <p class="card__body">Where AI capability has to be built without selling the citizen short. Federal, state, regulators — the architecture that lets policy ambition land inside what the contract actually permits.</p>
            <p class="card__foot">Federal · State · Regulators</p>
          </div>
        </div>

        <div class="card card--reveal" tabindex="0">
          <div class="card__face">
            <div class="card__eyebrow"><span class="num">S/04</span><span>Media</span></div>
            <h3 class="card__title">Media</h3>
            <p class="card__strap">The value chain rewritten weekly.</p>
            <span class="card__read">Read →</span>
          </div>
          <div class="card__expanded">
            <p class="card__body">Where the operating model that worked last quarter has already aged out. Broadcast, publishing, platform — architecture that has to flex faster than the business case behind it.</p>
            <p class="card__foot">Broadcast · Publishing · Platform</p>
          </div>
        </div>

        <div class="card card--reveal" tabindex="0">
          <div class="card__face">
            <div class="card__eyebrow"><span class="num">S/05</span><span>Technology</span></div>
            <h3 class="card__title">Technology</h3>
            <p class="card__strap">AI-native and legacy, same architecture.</p>
            <span class="card__read">Read →</span>
          </div>
          <div class="card__expanded">
            <p class="card__body">Where the AI-native and the legacy enterprise are both customers. Platform, SaaS, scale-ups — the architecture that lets one product surface scale across both reader registers.</p>
            <p class="card__foot">Platform · SaaS · Scale-ups</p>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">04 · Where we work</span>
        <h2>What we work <em>on.</em></h2>
        <p class="strap">domains and the connective tissue between them is the architecture.</p>
      </div>

      <div class="domains">
        <div class="domain">
          <div class="domain__head"><span>01 · Growth</span><span class="badge">++</span></div>
          <h3 class="domain__title">Growth</h3>
          <ul class="domain__list"><li>· Business</li><li>· Customer-Led</li><li>· Product &amp; Distribution</li></ul>
        </div>
        <div class="domain">
          <div class="domain__head"><span>02 · Technology</span><span class="badge">++</span></div>
          <h3 class="domain__title">Technology</h3>
          <ul class="domain__list"><li>· Digital</li><li>· AI</li><li>· Data</li></ul>
        </div>
        <div class="domain">
          <div class="domain__head"><span>03 · Operations</span><span class="badge">++</span></div>
          <h3 class="domain__title">Operations</h3>
          <ul class="domain__list"><li>· Operating Model</li><li>· Partner</li><li>· Capability &amp; Sourcing</li></ul>
        </div>
      </div>
    </div>

    <div class="section section--space-8b">
      <div class="section__head">
        <span class="eyebrow">05 · Our Partners</span>
        <h2>The bench grows by <em>vetted partnership</em> and <em>active collaborations.</em></h2>
      </div>
      <div class="container--narrow" style="padding: 0;">
        <p class="tag">Delivery · Australia · India</p>
        <p>Delivery firms, industry advisors, embedded teams whose capability complements ours. The right talent, in the right place, by design — <strong>not by labour arbitrage.</strong> A small bench, kept small on purpose.</p>
        <p>Process line — 30-min conversation → reference check → trial engagement → <strong>annual partnership agreement.</strong></p>
        <a class="cta" href="mailto:partner@omameh.com.au">Partner with Omameh →</a>
      </div>
    </div>

    <div class="section" id="pledge">
      <div class="section__head">
        <span class="eyebrow">06 · The Three Percent Pledge · Year Three Foundation</span>
        <h2>Three percent of the practice.</h2>
      </div>
      <p class="strap" style="max-width: 60ch;"><em>Time, capacity, capability</em> — committed to <strong>second-act leaders rebuilding after a redundancy.</strong> Pro bono. Same rigour as any board engagement. <em>The signal of a Year Three Foundation ambition.</em></p>
    </div>

    <hr class="rule">
    <p class="tag" style="text-align:center">Continue reading → A framework is one thing. <em>How does it become the work?</em> · Next · 03 · Practice</p>
  </div>
`;

export default function AboutPage() {
  return <RouteShell id="about" label="02 · About" markup={__MARKUP} />;
}
