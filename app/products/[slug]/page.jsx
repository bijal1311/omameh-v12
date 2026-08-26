import RouteShell from '../../_components/RouteShell';
import { notFound } from 'next/navigation';

/**
 * Product detail template · V13 · per V13_SITE_BUILD_for_Code.md §6.
 *
 * Eight pages, one skeleton. All CTAs route to Omameh · never to Syntegreti.
 *
 * Sections:
 *   1. Chips · PLATFORM · P0x + status chip
 *   2. Brand label (mono, teal) where settled + Name (Playfair) + italic promise
 *   3. Paragraph · what it is, plainly
 *   4. Two CTAs · Request a demo · Talk to us
 *   5. The problem · coral eyebrow, headline, six plain pain statements in two cols
 *   6. What is in it · capability grid
 *   7. The distinctive mechanic
 *   8. Who it is for
 *   9. Close · one CTA + All platforms →
 *
 * Reference implementation: /products/business-operations (full copy per brief).
 * Other seven get scaffolded copy pending Bijal's detail sign-off per platform.
 */

const PLATFORMS = {
  'contract-intelligence': {
    code: 'P01',
    brand: 'EVALUETOR',
    name: 'Contract Intelligence',
    status: 'live',
    statusLabel: 'LIVE · DEMO READY',
    promise: 'Every obligation, seen. Every vendor, scored.',
    para: 'Nine specialised agents ingest every supplier agreement you hold, extract every obligation, risk-score each one, and track it against what your vendor actually did. What was negotiated in six weeks stops living in a filing cabinet.',
    problems: [
      'Contracts read once at signing, then never again',
      'Obligations spread across teams with no owner',
      'Vendor performance measured against the KPIs you assumed, not the KPIs you agreed',
      'Renewal windows missed because nobody was watching the calendar',
      'CPS 230 obligations you cannot evidence to APRA',
      'A vendor scorecard the board asks for and nobody produces',
    ],
    capabilities: [
      { h: 'Nine-agent extraction', b: 'Each agent specialises in one clause type — obligations, service levels, price mechanics, exit rights, renewal triggers, IP, liability, indemnity, warranties.' },
      { h: 'Risk scoring, per clause', b: 'Each obligation risk-scored on impact, likelihood and evidence quality. Aggregated to vendor level for board reporting.' },
      { h: 'Continuous vendor scoring', b: 'Against the KPIs you actually agreed. Not the ones you assumed. Live traffic-light dashboards for procurement and risk.' },
      { h: 'Full audit trace', b: 'Every extraction, every score, every alert. Time-stamped. Regulator-ready.' },
    ],
    mechanic: 'The relationship governance layer',
    mechanicBody: 'Most contract intelligence tools stop at extraction. Contract Intelligence goes further — it scores the ongoing relationship against the terms you signed, continuously. You do not have to ask whether a vendor is meeting obligations. The system tells you when they are not.',
    who: 'Regulated buyers with more than fifty material supplier agreements. Boards and executives newly accountable for third-party resilience under APRA CPS 230. Chief risk officers and heads of procurement carrying obligations across hundreds of vendors and no time to read them.',
  },
  'business-operations': {
    code: 'P02',
    brand: 'INTUKA',
    name: 'Business Operations',
    status: 'early',
    statusLabel: 'EARLY ACCESS',
    promise: 'Seven things a business runs on, in one platform.',
    para: 'Sales, marketing, HR, finance, projects, recruitment and service desk. Seven back-office systems replaced by one, with AI in every one of them. Built for the businesses that are too small for seven separate tools and too serious for the spreadsheets that stitch them together.',
    problems: [
      'Seven systems, three of them barely used, and none of them talking to each other',
      'The founder is the reporting system',
      'New hires onboard differently every time',
      'Quote to invoice to payment involves four tools and a chase',
      'AI features bolted on top of legacy tooling that never worked properly',
      'A service desk that eats a full-time person to run',
    ],
    capabilities: [
      { h: 'Seven modules, one platform', b: 'Sales · Marketing · HR · Finance · Projects · Recruitment · IT service desk. Same data model, same interface, same rules.' },
      { h: '160 AI actions', b: 'Across the four autonomy levels below. From lightweight suggestions to full autonomous execution — you choose which.' },
      { h: 'End-to-end workflows', b: 'Quote → contract → invoice → payment, running without chasing. Applicant → offer → onboarded, the same way every time.' },
      { h: 'Multi-tenant SaaS', b: 'In your cloud. AWS or Microsoft Azure. Configurable per operator without engineering effort.' },
    ],
    mechanic: 'Four autonomy levels',
    mechanicBody: 'Every AI action in Intuka sits at one of four levels, and you set the level per action. **L1 Observe** — AI watches, logs and reports; humans decide everything. **L2 Suggest** — AI proposes a next action; the human approves before it runs. **L3 Act with approval** — AI executes routine actions; a human is notified with the option to reverse. **L4 Autonomous** — AI executes and reports back at cadence; humans intervene only when an alert triggers. The autonomy dial is per-action. Humans stay in charge of judgement; machines run the routine.\n\n**Human-Led. AI-Operated.** This is that belief, written into a product rather than a slide.',
    who: 'Businesses that are too small for seven separate systems and too serious for the spreadsheets that stitch them together. Independent operators using it as the operating layer for a business one person could not otherwise run. Boutique consultancies giving it to their clients as an off-the-shelf ops backbone.',
  },
  'ai-governance': {
    code: 'P03',
    brand: '',
    name: 'AI Governance',
    status: 'built',
    statusLabel: 'BUILT',
    promise: 'Every AI call in your enterprise intercepted, policy enforced, and logged.',
    para: 'A control you cannot evidence is not a control — it is an intention. AI Governance sits at the point of every LLM call and every agent action, enforces the policy, prevents the leak, and logs the trace.',
    problems: [
      'Employees using AI you have no visibility of',
      'Sensitive data leaving the perimeter through prompts',
      'No log a regulator would accept as evidence',
      'AI policy that lives in a document nobody reads',
      'Vendor LLMs training on your data by default',
      'A board question you cannot answer: what did our AI do last quarter?',
    ],
    capabilities: [
      { h: 'Point-of-call enforcement', b: 'Policy applied at the request, not after. Blocked prompts, redacted prompts, allowed prompts — logged with rationale.' },
      { h: 'Local ML DLP', b: 'Data loss prevention against your own model, on your own hardware. No external inspection of your prompts.' },
      { h: 'Full audit trace', b: 'Every LLM call, every agent action, every model response. Structured for board committee and regulator query.' },
      { h: 'Identity-aware', b: 'Integrated with your enterprise identity. Right person, right model, right data — enforced.' },
    ],
    mechanic: 'The evidence layer',
    mechanicBody: 'Most AI governance tools produce dashboards. AI Governance produces evidence — the specific query, the specific model, the specific enforcement decision, the specific person, at a specific time. Enough for a regulator to accept, and small enough to fit in a board pack.',
    who: 'Regulated enterprises with existing AI usage that cannot see it clearly. Chief risk officers, chief data officers, chief information security officers. Board risk committees who now have to explain AI to the audit committee.',
  },
  'regulatory-reporting': {
    code: 'P04',
    brand: '',
    name: 'Regulatory Reporting',
    status: 'built',
    statusLabel: 'BUILT',
    promise: 'Regulation becomes a knowledge graph. The graph becomes an executable filing schema.',
    para: 'Regulators publish long documents. Regulated entities file structured data. The gap between them is where most reporting cost lives. Regulatory Reporting closes that gap — a regulation goes in, a filing schema comes out, and the same input never gets re-interpreted differently by two teams.',
    problems: [
      'Every regulation re-interpreted by every function that touches it',
      'Filing errors from schema drift no one caught',
      'Six months of engineering time per new regulation',
      'Deadlines missed because the change was not tracked',
      'Reports that cannot be reproduced when the regulator asks',
      'Compliance teams reading PDFs into spreadsheets',
    ],
    capabilities: [
      { h: 'Regulation → knowledge graph', b: 'The document becomes a queryable structure. Every obligation, every threshold, every reference to another regulation, linked.' },
      { h: 'Graph → executable schema', b: 'The filing template generated from the graph. Not written by hand. Not re-written when the reg changes.' },
      { h: 'Change tracking', b: 'When the regulator updates the source, the graph updates, and the delta is presented to the compliance team.' },
      { h: 'Reproducibility', b: 'Every filing preserves the exact regulatory state at filing time. If the reg changes tomorrow, yesterday\\\'s filing still verifies.' },
    ],
    mechanic: 'The graph in the middle',
    mechanicBody: 'Every other reporting tool takes the schema as given and helps you fill it in. Regulatory Reporting generates the schema from the regulation. When the regulation moves, the schema moves. Your reporting stays right.',
    who: 'Regulated entities filing to multiple jurisdictions. Insurance carriers reporting under APRA and its US state equivalents. Banks reporting under APRA, BIS and their offshore analogues. Compliance functions carrying schema drift as an unmanaged risk.',
  },
  'document-intelligence': {
    code: 'P05',
    brand: '',
    name: 'Document Intelligence',
    status: 'built',
    statusLabel: 'BUILT',
    promise: 'Confidence-scored extraction with human review built in. Auditable, not black-box.',
    para: 'Document Intelligence extracts structured data from unstructured documents — claims forms, applications, medical records, invoices — and scores its own confidence on every field. A human reviews the low-confidence ones. A regulator can inspect any of them.',
    problems: [
      'Extraction models that guess without saying so',
      'Manual review that is either 100% or 0%',
      'Downstream systems using extracted data with no lineage',
      'A regulator asking why your model chose what it chose',
      'PII in documents you did not know was there',
      'Human reviewers rekeying what the model got right',
    ],
    capabilities: [
      { h: 'Confidence-scored fields', b: 'Every extracted field carries a probability. Anything below your threshold routes to human review. Anything above routes straight through.' },
      { h: 'Human review by design', b: 'Not an escape hatch — a first-class component. Reviewers see the source alongside the extraction, decide, and their decision feeds back to the model.' },
      { h: 'Full lineage', b: 'From pixel to database row. Every downstream use of an extracted field can be traced back to the exact source region.' },
      { h: 'PII detection', b: 'Sensitive fields flagged, masked or extracted-with-consent per your rules.' },
    ],
    mechanic: 'Confidence as a first-class citizen',
    mechanicBody: 'Every extraction tool has a confidence score inside it. Most hide it. Document Intelligence surfaces it, thresholds it, and routes on it — so the humans do the humans\\\' work and the machines do the machines\\\' work, and the split is visible to anyone who looks.',
    who: 'Any function that processes documents at scale. Claims handlers. Underwriters. Medical records teams. Accounts payable. Any operator carrying regulatory obligation for what gets extracted.',
  },
  'agent-platform': {
    code: 'P06',
    brand: '',
    name: 'Agent Platform',
    status: 'built',
    statusLabel: 'BUILT',
    promise: 'Enterprise agents for support deflection and intelligence, fully traced.',
    para: 'Agent Platform builds and runs the AI agents your enterprise actually needs — support deflection, internal search, back-office assistance — with OpenTelemetry tracing on every step. Because when an agent gets it wrong (and one will), you have to be able to say exactly what happened.',
    problems: [
      'Agents that work in a demo and break in production',
      'No trace when a customer complains about what an agent told them',
      'Every team building agents differently, with no reuse',
      'Model vendors changing behaviour under you, silently',
      'Support tickets your agents could deflect, but do not',
      'A board that wants to know what your agents are actually doing',
    ],
    capabilities: [
      { h: 'Trace every step', b: 'OpenTelemetry-native. Every prompt, every tool call, every decision, logged.' },
      { h: 'Multi-model', b: 'Swap between OpenAI, Anthropic, Google, Meta and your own models per action. Cost, latency and quality tracked per swap.' },
      { h: 'Tool library', b: 'Your CRM, ticketing, knowledge base, calendar, code repo — as native tools your agents can call.' },
      { h: 'Rollout controls', b: 'A/B rollout per agent, per action. Roll back in one click when a new model behaves worse.' },
    ],
    mechanic: 'Trace, not trust',
    mechanicBody: 'Enterprise agents fail. That is not a bug — that is what happens when you deploy statistical systems into deterministic processes. The question is what you do when they fail. Agent Platform assumes failure and instruments for it. When the ticket lands, you can answer the customer.',
    who: 'Support functions swamped by volume. IT service desks deflecting tier-one. Marketing teams running content agents. Any function considering agents but responsible for what those agents produce.',
  },
  'ai-sdlc': {
    code: 'P07',
    brand: '',
    name: 'AI-Assisted SDLC',
    status: 'built',
    statusLabel: 'BUILT',
    promise: 'AI-guided delivery across five roles, every artefact carrying an audit trail.',
    para: 'AI-Assisted SDLC brings AI into every stage of the software delivery lifecycle — product management, design, engineering, testing, deployment — while keeping the compliance trail regulated environments need. What was generated by AI is labelled. What was reviewed by a human is signed. Auditors get a clean view either way.',
    problems: [
      'AI-generated code shipped without provenance',
      'AI-generated docs that no one signed off',
      'Test coverage that looks great and misses the critical path',
      'Deployment gates that AI can bypass by accident',
      'Compliance functions blocking AI adoption for lack of a trail',
      'Five different tools for five roles with no shared context',
    ],
    capabilities: [
      { h: 'Five roles, one platform', b: 'PM, Designer, Engineer, QA, DevOps. Same context, same tooling, same audit trail.' },
      { h: 'Provenance on everything', b: 'Every artefact labelled with what generated it, when, and against which prompt. Every human review signed and stored.' },
      { h: 'Guarded deployment', b: 'AI-generated code cannot ship without human sign-off at the gates you define. Configurable per risk tier.' },
      { h: 'Compliance-native', b: 'Full trail exportable in the formats internal audit, SOC 2 and regulator ask for.' },
    ],
    mechanic: 'Compliance-by-construction',
    mechanicBody: 'Most AI-assisted development tools bolt compliance on afterward — usually via a scanner that catches problems after they ship. AI-Assisted SDLC bakes it in. Provenance is the artefact. The trail is the workflow. Compliance stops being a phase and starts being a property.',
    who: 'Engineering functions inside regulated organisations. Compliance functions who now have to say yes or no to AI-assisted delivery and want a defensible position. CIOs measuring output per engineer without measuring output per hour of review.',
  },
  'datacenter': {
    code: 'P08',
    brand: '',
    name: 'Datacenter Thermal',
    status: 'built',
    statusLabel: 'BUILT',
    promise: 'Thermal intelligence and cooling optimisation against live plant data.',
    para: 'Datacenter Thermal is the outlier in this list — the only platform in the eight that talks to physical plant. It reads sensor data from a live datacenter, models the thermal envelope, and optimises cooling in real time. Written for operators who have exhausted static cooling design.',
    problems: [
      'Cooling designed for peak, running at peak all year',
      'Hot spots the design did not anticipate',
      'Energy bills climbing faster than compute demand',
      'ESG targets the current cooling regime cannot meet',
      'Sensor data no one is reading',
      'Operators running blind between quarterly thermal audits',
    ],
    capabilities: [
      { h: 'Live thermal model', b: 'Every rack, every aisle, every CRAC unit — modelled in real time from sensor data.' },
      { h: 'Predictive control', b: 'Adjusts cooling ahead of thermal load, not after. Fewer thermal events, lower average energy draw.' },
      { h: 'ESG reporting', b: 'PUE, WUE and carbon intensity reported at operator, facility and rack level. Regulator-ready.' },
      { h: 'BMS integration', b: 'Reads and writes to the Building Management System without ripping and replacing it.' },
    ],
    mechanic: 'Physics-aware, not statistics-only',
    mechanicBody: 'Most thermal optimisation tools are statistical — they learn from historical operation and interpolate. Datacenter Thermal is physics-aware — it models the thermodynamics of your specific plant and predicts, not just infers. When your load pattern changes, it does not need to re-learn.',
    who: 'Colocation operators. Hyperscaler regional teams. Any datacenter operator carrying an ESG obligation the current thermal regime cannot meet.',
  },
};

export async function generateStaticParams() {
  return Object.keys(PLATFORMS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const platform = PLATFORMS[params.slug];
  if (!platform) return { title: 'Product not found' };
  return {
    title: `${platform.name} · Products`,
    description: platform.promise,
  };
}

export default function PlatformDetailPage({ params }) {
  const p = PLATFORMS[params.slug];
  if (!p) notFound();

  const problemsHtml = p.problems
    .map((line) => `<p class="platform-detail-problem__item">— ${line}</p>`)
    .join('');
  const capabilitiesHtml = p.capabilities
    .map((c) => `<article class="capability-card"><h4 class="capability-card__h">${c.h}</h4><p class="capability-card__b">${c.b}</p></article>`)
    .join('');
  const brandLine = p.brand ? `<span class="platform-detail__brand">${p.brand}</span>` : '';

  const markup = `
    <div class="container">
      <div class="route__header"><span class="route__index">04</span><span class="route__name">/products/${params.slug} · Product</span><span class="route__issue">Vol. I · Issue 01 · Q3 2026</span></div>

      <div class="hero">
        <div class="platform-detail__chips">
          <span class="platform-detail__chip">PLATFORM · ${p.code}</span>
          <span class="platform-detail__chip platform-detail__chip--status">${p.statusLabel}</span>
        </div>
        ${brandLine}
        <h1 style="margin-top: var(--space-3);">${p.name}</h1>
        <p class="platform-detail__promise"><em>${p.promise}</em></p>
        <p class="lede">${p.para}</p>
        <div class="platform-detail__ctas">
          <a class="cta cta--primary" href="mailto:contact@omameh.com.au?subject=Request a demo · ${p.name}&body=Hi Bijal,%0D%0A%0D%0AI would like to book a demo of ${p.name}.%0D%0A%0D%0AMy organisation:%0D%0AMy role:%0D%0AThe problem I am trying to solve:%0D%0A%0D%0AThank you.">Request a demo →</a>
          <a class="cta" href="/contact">Talk to us →</a>
        </div>
      </div>

      <div class="section">
        <div class="section__head">
          <span class="eyebrow eyebrow--coral">01 · The problem</span>
          <h2>What ${p.name.toLowerCase()} <em>is for.</em></h2>
        </div>
        <div class="platform-detail-problems">${problemsHtml}</div>
      </div>

      <div class="section">
        <div class="section__head">
          <span class="eyebrow">02 · What is in it</span>
          <h2>The <em>capability.</em></h2>
        </div>
        <div class="capabilities-grid">${capabilitiesHtml}</div>
      </div>

      <div class="section">
        <div class="section__head">
          <span class="eyebrow">03 · The distinctive mechanic</span>
          <h2>${p.mechanic}<em>.</em></h2>
        </div>
        <div class="platform-detail-mechanic">${p.mechanicBody.replace(/\\n\\n/g, '</p><p>').replace(/\\*\\*(.+?)\\*\\*/g, '<strong>$1</strong>').replace(/^/, '<p>').replace(/$/, '</p>')}</div>
      </div>

      <div class="section">
        <div class="section__head">
          <span class="eyebrow">04 · Who it is for</span>
        </div>
        <p class="platform-detail-who">${p.who}</p>
      </div>

      <div class="section">
        <div class="close-block close-block--watermarked">
          <img class="om-watermark" src="/omameh-watermark.svg" alt="" aria-hidden="true" />
          <p class="close-block__line">Ready to <em>see it?</em></p>
          <div class="close-block__ctas">
            <a class="cta cta--primary" href="mailto:contact@omameh.com.au?subject=Request a demo · ${p.name}&body=Hi Bijal,%0D%0A%0D%0AI would like to book a demo of ${p.name}.%0D%0A%0D%0AMy organisation:%0D%0AMy role:%0D%0AThe problem I am trying to solve:%0D%0A%0D%0AThank you.">Request a demo →</a>
            <a class="cta" href="/products">All platforms →</a>
          </div>
        </div>
      </div>

      <hr class="rule" style="margin-block: var(--space-8);">
      <p class="tag" style="text-align:center;"><a href="/products">← All platforms</a></p>
    </div>
  `;

  return <RouteShell id={`platform-${params.slug}`} label={`04 · ${p.name}`} markup={markup} />;
}
