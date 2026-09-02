import RouteShell from '../_components/RouteShell';

/**
 * 03 · Products · V16
 *
 * Markup ported verbatim from 02_CONTENT_SOURCE.html. Content is locked —
 * not a word changes. The only edits are technical: the document's
 * #anchors become real routes, and the shared .vol bar, <nav> and
 * <footer> are lifted into GlobalNav and GlobalFooter.
 */

export const metadata = {
  title: "We build the things we advise on.",
  description: "Eight platforms built by our own team. Or something new, for the part nobody sells off the shelf.",
};

const __MARKUP = String.raw`
<section class="hero"><div class="w">
  <p class="eyebrow">Products</p>
  <h1>We build the things we <em>advise on.</em></h1>
  <p class="lede">Eight platforms built by our own team. Or something new, for the part nobody sells off the shelf.</p>
</div></section>

<section><div class="w">
  <p class="eyebrow">Part one · The platforms</p>

  <div class="feature lead">
    <div class="top"><span class="eyebrow" style="margin:0">P01 · Evaluetor</span><span class="chip live">Live</span></div>
    <h3>Contract Intelligence</h3>
    <p class="lede">Nine agents read every supplier agreement you hold, score the risk and track every obligation inside it.</p>
    <a class="link" href="mailto:contact@omameh.com.au?subject=Demo%20request%20-%20Evaluetor">Book a demo</a>
  </div>

  <div class="feature lead">
    <div class="top">
      <div><span class="eyebrow" style="margin:0">P02</span><h3 style="margin:2px 0 0">Intuka</h3></div>
      <span class="phase">In trial</span>
    </div>
    <h4 style="color:var(--ink-soft);font-family:var(--body);font-size:14px;font-weight:500;letter-spacing:.08em;text-transform:uppercase">Business Operations</h4>
    <p class="lede">Seven things a business runs on, in one platform, with AI in every one of them.</p>
    <div class="apply" style="margin-top:var(--s2)">
      <span class="eyebrow" style="margin:0;color:#8A7228">Trial phase · fourteen days</span>
      <h4>Fourteen days of early access, on your real operation.</h4>
      <p style="font-size:14.5px;color:var(--ink-soft)">Not a sandbox and not a demo environment — your business, your data, for a fortnight. It costs nothing. What we ask for in return is your time and your honest read, including what you would change.</p>
      <div class="cols" style="grid-template-columns:1fr">
        <div class="seq" style="margin-top:0">
          <div class="step"><span class="n">01 · Ask</span><span>Tell us what your business runs on today. Two minutes.</span></div>
          <div class="step"><span class="n">02 · The read</span><span>We send you the operations diagnostic. Fifteen minutes, and the number is yours to keep either way.</span></div>
          <div class="step"><span class="n">03 · Decide</span><span>If what it finds is worth fixing, we set you up. If your time is better spent elsewhere, we will tell you that too.</span></div>
        </div>
      </div>
      <div class="cta" style="margin-top:0"><a class="btn" href="/contact">Book a demo</a><a class="btn ghost" href="/contact">Learn more</a></div>
    </div>
  </div>

  <div class="feature">
    <div class="top"><h3 style="margin:0">Agent Platform</h3><span class="chip live">In production</span></div>
    <p class="lede">Specialised agents coordinated by a supervisor, querying your systems in parallel and returning a synthesised answer in thirty seconds instead of fifteen minutes.</p>
    <div class="figs">
      <div class="fig"><b>97%</b><span>faster context gathering</span></div>
      <div class="fig"><b>40–60%</b><span>ticket reduction</span></div>
      <div class="fig"><b>$72k</b><span>saved per 1,000 users, annually</span></div>
    </div>
    <div class="tags"><span>Multi-agent orchestration</span><span>Enterprise RAG</span><span>Voice + chat</span><span>Smart escalation</span></div>
    <a class="link" href="mailto:contact@omameh.com.au?subject=Demo%20request%20-%20Agent%20Platform">Book a demo</a>
  </div>

  <div class="feature">
    <div class="top"><h3 style="margin:0">AI-Assisted SDLC</h3><span class="chip live">In production</span></div>
    <p class="lede">Structured questionnaires replacing ad-hoc prompting across five roles. Context flows between phases automatically, and every line of code traces back to the requirement that asked for it.</p>
    <div class="figs">
      <div class="fig"><b>40%</b><span>less rework</span></div>
      <div class="fig"><b>60%</b><span>faster onboarding</span></div>
      <div class="fig"><b>$780k</b><span>saved annually, 50-developer team</span></div>
    </div>
    <div class="tags"><span>Five role-based phases</span><span>Context threading</span><span>Compliance audit trail</span><span>Model-agnostic</span></div>
    <a class="link" href="mailto:contact@omameh.com.au?subject=Demo%20request%20-%20AI-Assisted%20SDLC">Book a demo</a>
  </div>

  <div class="feature">
    <div class="top"><h3 style="margin:0">Datacenter Thermal</h3><span class="chip live">In production</span></div>
    <p class="lede">Thermal intelligence built on real exascale operational data. Five forecasting algorithms predicting thermal state thirty to sixty minutes ahead, with a digital twin for what-if simulation.</p>
    <div class="figs">
      <div class="fig"><b>95%</b><span>prediction accuracy</span></div>
      <div class="fig"><b>15%</b><span>lower cooling cost</span></div>
      <div class="fig"><b>$2–5M</b><span>saved per facility, annually</span></div>
    </div>
    <div class="tags"><span>Ensemble ML</span><span>Digital twin</span><span>Heat recovery</span><span>Carbon and ESG</span></div>
    <a class="link" href="mailto:contact@omameh.com.au?subject=Demo%20request%20-%20Datacenter%20Thermal">Book a demo</a>
  </div>

  <p class="eyebrow" style="margin-top:var(--s5)">Also in the estate</p>
  <div class="grid three">
    <div class="card"><h4>AI Governance</h4><p>Every AI call intercepted, policy enforced, logged.</p></div>
    <div class="card"><h4>Regulatory Reporting</h4><p>Regulation as a knowledge graph, the graph as filing schemas.</p></div>
    <div class="card"><h4>Document Intelligence</h4><p>Confidence-scored extraction with human review. Auditable, not black-box.</p></div>
  </div>
</div></section>

<section class="warm"><div class="w">
  <p class="eyebrow">Part two · Solutions</p>
  <h2>When the thing you need does not <em>exist yet.</em></h2>
  <p class="lede">Most of what an organisation actually needs is not something anyone sells. It sits between three systems nobody joined up, inside a process only two people understand. We build those.</p>
  <div class="grid three">
    <div class="card"><h4>Never from a blank page</h4><p>Eight platforms of foundations underneath, so we start from something proven rather than an empty repository.</p></div>
    <div class="card"><h4>Deployed in your cloud</h4><p>Under your controls, not ours.</p></div>
    <div class="card"><h4>Yours at the end</h4><p>You own everything you build with us.</p></div>
  </div>
</div></section>

<section><div class="w">
  <p class="eyebrow">Built and running</p>
  <h2>Patterns, not <em>experiments.</em></h2>
  <p class="lede">Four builds our team has running today. Each one is deployable at your organisation.</p>
  <div class="grid two">
    <div class="card">
      <div class="top" style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap"><span class="k">Insurance aggregator · Texas</span><span class="chip live">In production</span></div>
      <h4>AI-assisted insurance sales</h4>
      <p>Carrier comparison, quoting workflow and the sales conversation in one place — across a retail network shopping dozens of carriers per customer.</p>
      <div class="figs" style="border-bottom:0;padding-bottom:0"><div class="fig"><b>200+</b><span>locations</span></div><div class="fig"><b>35+</b><span>carriers per customer</span></div></div>
    </div>
    <div class="card">
      <div class="top" style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap"><span class="k">Enterprise IT</span><span class="chip live">In production</span></div>
      <h4>AI IT support assistant</h4>
      <p>Multi-agent orchestration resolving first-line tickets on its own, across ServiceNow and Salesforce, with escalation carrying full context.</p>
      <div class="figs" style="border-bottom:0;padding-bottom:0"><div class="fig"><b>60%</b><span>of L1 resolved automatically</span></div><div class="fig"><b>2 min</b><span>resolution time</span></div></div>
    </div>
    <div class="card">
      <div class="top" style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap"><span class="k">Field services · US</span><span class="chip live">In production</span></div>
      <h4>AI scheduling assistant</h4>
      <p>Voice, web chat and SMS replacing manual field-service scheduling, with weather-aware automation and a full audit trail.</p>
      <div class="tags" style="margin-top:auto;padding-top:var(--s2);border-top:1px solid var(--rule)"><span>Voice AI</span><span>Omni-channel</span><span>Weather-aware</span></div>
    </div>
    <div class="card">
      <div class="top" style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap"><span class="k">Home improvement · US</span><span class="chip next">In delivery</span></div>
      <h4>Licence and contractor compliance</h4>
      <p>The compliance backbone for one of America's largest home-improvement platforms — jurisdiction monitoring, AI document verification, pre-computed compliance status.</p>
      <div class="tags" style="margin-top:auto;padding-top:var(--s2);border-top:1px solid var(--rule)"><span>Jurisdiction monitoring</span><span>Document AI</span><span>Milestone delivery</span></div>
    </div>
  </div>
</div></section>

<section class="deep"><div class="w">
  <h2>Bring us the problem, not the <em>specification.</em></h2>
  <p class="lede">We will tell you whether it needs a platform, a build, or neither.</p>
  <div class="cta"><a class="btn" href="/contact">Request a demo</a><a class="btn ghost" href="/contact">Let's talk</a></div>
</div></section>

<div class="next"><div class="w"><a href="/fluency">
  <div><span class="k">Continue</span><span class="t">So the next decision does not need us in the room.</span></div>
  <span class="r">Next · 04 · Fluency →</span>
</a></div></div>
`;

export default function ProductsPage() {
  return <RouteShell id="products" label="03 · Products" markup={__MARKUP} />;
}
