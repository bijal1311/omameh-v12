import { pageMeta } from '@/lib/seo/page-meta';
import RouteShell from '../_components/RouteShell';
import IntukaDemo from '../_components/IntukaDemo';

/**
 * Platforms · /products
 *
 * Rebuilt 18 October 2026 from WIREFRAME — platforms.html.
 * Copy is final and is reproduced exactly. Do not improve it.
 *
 * THE LABEL IS PLATFORMS AND THE URL IS /products. Deliberate — the URL
 * is indexed and it is what people search. Do not align them.
 *
 * WHAT CHANGED, AND WHY
 *
 * Eight platforms became two. Intuka and GovernVeil are the ones with
 * their own companies, their own sites and their own customers. The rest
 * are accelerators and they now sit at the bottom, where they stop
 * competing with the two real platforms for attention.
 *
 * Channel is its own section, which is why /partners was never built. A
 * buyer does not want the partnership model explained; they want to know
 * what they can buy and whose it is. "Where the platform is not ours,
 * the page says whose it is" is the independence position, and it was
 * the only line on /partners doing real work.
 *
 * EVERY FINANCIAL METRIC IS GONE — $780k, $2–5M per facility, $72k per
 * 1,000 users, 97% faster, 95% accuracy. They were live on this page
 * until today. Working rule 5 and open item 2: they need written
 * sign-off from Jay and Manish, and some are attributable to their
 * clients. Bijal decided on 18 October to publish without them rather
 * than wait. If sign-off lands they go back and this page gets
 * materially stronger.
 *
 * Client-identifying detail is gone too and stays gone — "Texas",
 * "200+ locations", "35+ carriers", "one of America's largest
 * home-improvement platforms". Sector plus geography plus scale
 * identifies a client without naming one.
 *
 * THE BLOCKED CHANNEL CARD IS NOT IN THE MARKUP AT ALL. It was a
 * commented-out block here, which still ships inside the HTML and is
 * readable in view-source — that discloses the very thing §8 blocks.
 * The card is three lines of the same shape as Evaluetor: a name, one
 * line, a pillar foot and a CTA. Build it when the contract is signed.
 *
 * THE SECOND CHANNEL CARD IS NOT RENDERED. §8 blocks the name, the logo and
 * the description until the contract is signed and logo use is granted.
 * The wireframe's placeholder text — "Reserved. Name, logo and
 * description go in when the contract is signed" — is an instruction to
 * the builder, not page copy; publishing it would disclose an unsigned
 * negotiation. The markup is kept directly below the Evaluetor card,
 * commented, so landing it really is a fifteen-minute change.
 *
 * The Intuka deep link is untouched: the Book a demo control keeps its
 * data-intuka-demo attribute and <IntukaDemo /> still mounts, which is
 * Karthik's lead capture. Do not change either.
 *
 * GOVERNVEIL GETS THE SAME TREATMENT, added 18 October. Its CTA carries
 * data-demo-product="GovernVeil", which opens the same modal against the
 * same Intuka WebForm and tags the lead by product. No second
 * integration, no second key, and Karthik's control is unchanged.
 *
 * The CTA reads "Book a design-partner pilot" — the ask governveil.com
 * itself makes — rather than the wireframe's "Ask for the product
 * diagnostic". Bijal's call on 18 October.
 *
 * GovernVeil is set in type, not a logo. It has no wordmark: its site
 * sets the name in type and ships only a generic square favicon, and
 * blowing a favicon up next to the real Intuka wordmark would look like
 * a mistake. When the HoldCo brand lands, this is where the asset goes.
 *
 * THE TWO IMAGES ARE REAL AND NEITHER HAS A CUSTOMER IN IT.
 *
 * None of the three product sites carries a single image file — Intuka,
 * GovernVeil and Evaluetor are all type, SVG and CSS — so there was
 * nothing to download and both of these are captures.
 *
 * GovernVeil: the hero's own redaction panel, at 2x.
 *
 * Intuka: the digital workforce panel from Bijal's live instance. The
 * rest of that instance was not used and should not be — the sales view
 * already carries a named lead, and every module fills up with real
 * people as the business runs on it. This panel holds no records at
 * all, and "Nothing sends without you" is Human-Led. AI-Operated. in
 * the product's own words.
 *
 * Seeded demo numbers were offered and declined. An invented dashboard
 * sitting beside "Omameh runs on Intuka" would be a fabricated claim
 * about her own operation, and the wireframe says no mockups.
 */

export const metadata = pageMeta({
  title: 'We build the things we advise on.',
  description:
    'Two platforms of our own. Partner software we take to market here. And accelerators built once and configured for you.',
  path: '/products',
});

const MAILTO = (subject) =>
  `mailto:contact@omameh.com.au?subject=${encodeURIComponent(subject)}`;

/** Accelerators — name and the one line that says what it is. */
const ACCELERATORS = [
  ['Document intelligence', 'Confidence-scored extraction with human review. Auditable, not black-box.'],
  ['Regulatory reporting', 'Regulation as a knowledge graph, the graph as filing schemas.'],
  ['Agent platform', 'Specialised agents under a supervisor, querying your systems in parallel and returning one synthesised answer.'],
  ['AI-assisted delivery', 'Structured phases replacing ad-hoc prompting, every line traceable to the requirement that asked for it.'],
  ['Datacenter thermal', 'Thermal forecasting on real operational data, with a digital twin for what-if.'],
  ['Something that does not exist yet', 'Most of what an organisation needs sits between three systems nobody joined up. We build those.'],
];

const PROMISES = [
  ['Never from a blank page', 'We start from something proven.'],
  ['Deployed in your cloud', 'Under your controls, not ours.'],
  ['Yours at the end', 'You own everything you build with us.'],
];

/** Patterns already running. No metrics, and nothing that identifies a client. */
const PATTERNS = [
  ['AI-assisted insurance sales', 'Carrier comparison, quoting workflow and the sales conversation in one place, across a retail network.'],
  ['AI IT support assistant', 'Multi-agent orchestration resolving first-line tickets, with escalation that carries full context.'],
  ['AI scheduling assistant', 'Voice, chat and SMS replacing manual field-service scheduling, weather-aware, with a full audit trail.'],
  ['Licence and compliance backbone', 'Jurisdiction monitoring, AI document verification and pre-computed compliance status across a contractor network.'],
];

const cards = (rows) =>
  rows
    .map(
      ([name, line]) => String.raw`
    <div class="card">
      <span class="k">${name}</span>
      <p>${line}</p>
    </div>`,
    )
    .join('');

const __MARKUP = String.raw`
<section class="hero"><div class="w">
  <p class="eyebrow">Platforms</p>
  <h1>We build the things we <em>advise on.</em></h1>
  <p class="lede">Two platforms of our own. Partner software we take to market here. And accelerators built once and configured for you.</p>
</div></section>

<section><div class="w">
  <p class="eyebrow">Ours</p>
  <h2>Built by our own team.</h2>
  <p class="lede">Each one is its own company, with its own site and its own customers.</p>

  <div class="feature lead">
    <div class="top">
      <h3 style="margin:0;display:flex;align-items:center"><img src="/brand/intuka-wordmark.svg" alt="Intuka" style="height:30px;width:auto;display:block"></h3>
      <span class="chip live">Ours</span>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:clamp(20px,3vw,36px);align-items:center">
      <div style="display:flex;flex-direction:column;gap:var(--s2);min-width:0">
        <p class="lede">Connected business operations — CRM, finance, HR, projects — on one data platform with AI in each of them. Configured against how your organisation actually works, rather than the organisation adapting to the software.</p>
        <p style="font-size:14.5px;color:var(--ink-soft);line-height:1.55;margin:0"><b style="color:var(--ink)">Omameh runs on Intuka.</b> The demo is our live instance, not a sandbox.</p>
      </div>
      <img src="/platforms/intuka-digital-workforce.png" alt="The digital workforce panel in Intuka: a sales, a finance and a projects assistant, each drafting work for approval, under the line Nothing sends without you." width="392" height="514" loading="lazy" decoding="async" style="width:100%;max-width:340px;height:auto;display:block;justify-self:center;border:1px solid var(--rule);border-radius:3px">
    </div>
    <div class="foot" style="margin-top:var(--s2);padding-top:var(--s2);border-top:1px solid var(--rule);font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-soft)">Pillar 01 · Operating Model</div>
    <div class="cta" style="margin-top:0"><a class="btn" data-intuka-demo href="${MAILTO('Demo request - Intuka')}">Book a demo</a><a class="btn ghost" href="https://www.intuka.com" target="_blank" rel="noopener">Learn more about Intuka →</a></div>
  </div>

  <div class="feature">
    <div class="top">
      <h3 style="margin:0">GovernVeil</h3>
      <span class="chip live">Ours</span>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:clamp(20px,3vw,36px);align-items:center">
      <div style="display:flex;flex-direction:column;gap:var(--s2);min-width:0">
        <p class="lede">A self-hosted control gateway that checks every AI request before it reaches an external model — enforcing your data rules and recording the decision for audit.</p>
        <p style="font-size:14.5px;color:var(--ink-soft);line-height:1.55;margin:0"><b style="color:var(--ink)">Runs inside your own environment.</b> Nothing leaves your perimeter in order to be governed.</p>
      </div>
      <img src="/platforms/governveil-redaction@2x.png" alt="A request leaving an application with a customer PAN in it, the redacted version the model provider actually receives, and the audit line recording the verdict." width="942" height="534" loading="lazy" decoding="async" style="width:100%;height:auto;display:block;border:1px solid var(--rule);border-radius:3px">
    </div>
    <div class="foot" style="margin-top:var(--s2);padding-top:var(--s2);border-top:1px solid var(--rule);font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-soft)">Pillar 04 · AI Governance</div>
    <div class="cta" style="margin-top:0"><a class="btn" data-intuka-demo data-demo-product="GovernVeil" href="${MAILTO('Design-partner pilot - GovernVeil')}">Book a design-partner pilot</a><a class="btn ghost" href="https://governveil.com" target="_blank" rel="noopener">Learn more about GovernVeil →</a></div>
  </div>
</div></section>

<section><div class="w">
  <p class="eyebrow">Channel</p>
  <h2>Partner software, taken to market here.</h2>
  <p class="lede">Software we did not build, that we distribute across Asia-Pacific. Where the platform is not ours, the page says whose it is.</p>

  <div class="feature">
    <div class="top">
      <h3 style="margin:0">Evaluetor</h3>
      <span class="chip">Channel</span>
    </div>
    <p class="lede">Contract intelligence — monitors obligations, service levels, risks and renewals after a contract is signed, so value is not leaked during delivery.</p>
    <div class="foot" style="margin-top:var(--s2);padding-top:var(--s2);border-top:1px solid var(--rule);font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-soft)">Pillar 04 · AI Governance</div>
    <div class="cta" style="margin-top:0"><a class="btn" href="${MAILTO('Demo request - Evaluetor')}">Book a demo</a></div>
  </div>


  <p class="lede" style="margin-top:var(--s4)">We also take our own platforms the other way — our partners carry them into the US, UK and Europe.</p>
</div></section>

<section><div class="w">
  <p class="eyebrow">Accelerators</p>
  <h2>Built once. Configured for you.</h2>
  <p class="lede">Working software in weeks, not a programme. Not bought off a shelf, and not started from a blank repository either — foundations our own team has shipped, shaped to your problem.</p>

  <div class="grid three">${cards(ACCELERATORS)}
  </div>

  <div class="grid three" style="margin-top:1px">${cards(PROMISES)}
  </div>
</div></section>

<section><div class="w">
  <p class="eyebrow">Patterns, not experiments</p>
  <h2>Running now, and deployable at yours.</h2>

  <div class="grid two">${cards(PATTERNS)}
  </div>
</div></section>

<section><div class="w">
  <h2>Bring us the problem, not the specification.</h2>
  <p class="lede">We will tell you whether it needs a platform, an accelerator, a build — or none of them.</p>
  <div class="cta"><a class="btn" href="/contact">Let's talk</a></div>
</div></section>
`;

export default function PlatformsPage() {
  return (
    <>
      <RouteShell id="products" label="Platforms" markup={__MARKUP} />
      <IntukaDemo />
    </>
  );
}
