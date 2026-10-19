import { pageMeta } from '@/lib/seo/page-meta';
import RouteShell from '../_components/RouteShell';
import IntukaDemo from '../_components/IntukaDemo';

/**
 * Products · /products
 *
 * Copy replaced in full on 19 October 2026 from "PRODUCTS PAGE — FINAL
 * REPLACEMENT COPY". That brief supersedes the 18 October wireframe
 * copy and "PRODUCTS — Intuka and GovernVeil repositioning". Copy is
 * reproduced exactly. Do not improve it.
 *
 * THREE NAMES, DELIBERATELY NOT ALIGNED. The URL is /products, the nav
 * label is "Platforms", and this page's eyebrow now reads "Products".
 * The URL is indexed and is what people search; the nav label is
 * Bijal's; the eyebrow is what the 19 October brief specifies. All
 * three are intentional. Do not align them.
 *
 * WHAT CHANGED ON 19 OCTOBER
 *
 * The Intuka thesis is restored. The previous body was a feature list —
 * "CRM, finance, HR, projects on one data platform". The differentiated
 * idea was missing: organisations are built in verticals, the work
 * happens in the workflows that cross them, and holding those together
 * is the chief operating officer's job. It is the one claim on this
 * page nobody else can make, because it is the function Bijal ran
 * twice.
 *
 * Every PILLAR 01 / PILLAR 04 foot is gone. Do not reinstate them.
 *
 * Intuka is set in TEXT, not the wordmark SVG. Explicit in the brief.
 * The product screenshots stay — they are captures of real instances.
 *
 * NO PRICING ANYWHERE, and this is a decision rather than an omission.
 * The draft carried "From $149 a month, unlimited users on every plan".
 * It is not settled with Karthik, and a price here that contradicts
 * intuka.com is worse than no price at all. Unlimited users is a real
 * differentiator against per-seat SaaS and should lead the moment it is
 * agreed. The cost is real: Intuka's buyer asks "how much" second, and
 * an unanswered question loses the lead — so intuka.com has to answer
 * it even while this page does not.
 *
 * "AUSTRALIAN-FOUNDED AND AUSTRALIAN-LED", not "Australian company,
 * Australian IP". GovernVeil Pty Ltd does not exist yet — the name is
 * undecided and the jurisdiction is open between Singapore, Australia
 * and India. The ACE application was careful about exactly this and
 * used the future tense. Sovereignty is the whole proposition here, so
 * it is the one place a claim a procurement officer can disprove costs
 * everything. Change it the day the company exists.
 *
 * EVALUETOR HAS NO POINT-IN-CASE LINE while both Ours cards do. Kept as
 * Bijal had it, and it is deliberate: channel products carry less
 * weight than our own, and a reader should feel that difference without
 * being told.
 *
 * EVERY FINANCIAL METRIC REMAINS GONE — $780k, $2–5M per facility, $72k
 * per 1,000 users, 97% faster, 95% accuracy. Working rule 5 and open
 * item 2: written sign-off from Jay and Manish, and some are
 * attributable to their clients. Client-identifying detail stays gone
 * too: sector plus geography plus scale identifies a client without
 * naming one.
 *
 * THE BLOCKED CHANNEL CARD IS NOT IN THE MARKUP AT ALL — not even
 * commented. An HTML comment still ships and is readable in
 * view-source, which would disclose the very thing §8 blocks. It is
 * three lines of the same shape as Evaluetor. Build it when the
 * contract is signed and logo use is granted.
 *
 * The Intuka deep link is untouched: the Book a demo control keeps its
 * data-intuka-demo attribute and <IntukaDemo /> still mounts, which is
 * Karthik's lead capture. GovernVeil's CTA carries
 * data-demo-product="GovernVeil" against the same WebForm.
 *
 * NOTHING ON THIS PAGE SAYS A CUSTOMER USES ANY OF IT. Omameh running
 * on Intuka is the only named user. Scott has volunteered Primary Way
 * as a reference; the day that lands it belongs here, because one real
 * customer outweighs every line of description above it.
 */

export const metadata = pageMeta({
  title: 'We build the things we advise on.',
  description:
    'Two products of our own. Partner software we take to market here. And accelerators built once and configured for you.',
  path: '/products',
});

const MAILTO = (subject) =>
  `mailto:contact@omameh.com.au?subject=${encodeURIComponent(subject)}`;

const ACCELERATORS = [
  ['Document intelligence', 'Confidence-scored extraction with human review. Auditable, not black-box.'],
  ['Regulatory reporting', 'Regulation as a knowledge graph, the graph as filing schemas.'],
  ['Agent platform', 'Specialised agents under a supervisor, querying your systems in parallel and returning one synthesised answer.'],
  ['AI-assisted delivery', 'Structured phases replacing ad-hoc prompting, every line traceable to the requirement that asked for it.'],
  ['Datacenter thermal', 'Thermal forecasting on real operational data, with a digital twin for what-if.'],
  ['Something that does not exist yet', 'Most of what an organisation needs sits between three systems nobody joined up. We build those.'],
];

/** Three, not four. "Patterns, not experiments" became the heading over
 *  the four examples instead — see the brief. */
const PRINCIPLES = [
  ['Never from a blank page', 'We start from something proven.'],
  ['Deployed in your cloud', 'Under your controls, not ours.'],
  ['Yours at the end', 'You own everything you build with us.'],
];

/** No metrics, and nothing that identifies a client. */
const BUILT = [
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
<section class="hero">
  <span class="arc top" aria-hidden="true"></span>
  <div class="w">
    <p class="eyebrow">Products</p>
    <h1>We build the things we <em>advise on.</em></h1>
    <p class="lede">Two products of our own. Partner software we take to market here. And accelerators built once and configured for you.</p>
  </div>
</section>

<section class="warm">
  <span class="arc left" aria-hidden="true"></span>
  <div class="w">
    <div class="shead" data-reveal>
      <p class="eyebrow">Ours</p>
      <h2>Built by our own team.</h2>
      <p class="lede">Each one is its own company, with its own site and its own customers. Built by an operator &mdash; Chief Operating Officer for technology and digital at Bupa across Asia-Pacific, and for group data, analytics and AI at QBE across twenty-seven countries.</p>
    </div>

    <div class="feature lead" data-reveal>
      <p class="k-sm">Ours · Operating Model</p>
      <h3 class="prodname">Intuka</h3>
      <p class="pointcase">The operations function most businesses cannot afford to hire.</p>
      <div class="splitgrid">
        <div class="stack2">
          <p class="lede">Businesses are organised in verticals. Work happens in the workflows that cross them &mdash; and in most organisations those are held together by somebody remembering.</p>
          <p class="lede">Intuka is sales, finance, HR and projects on one platform and one set of data, with AI in each of them. Configured against how your organisation actually works, rather than the organisation adapting to the software.</p>
          <p class="body-sm"><b class="strongink">Omameh runs on Intuka.</b> The demo is our live instance, not a sandbox.</p>
          <p class="status">Early access.</p>
        </div>
        <figure class="fr zoom shot" style="--ar:392/514"><img src="/platforms/intuka-digital-workforce.png" alt="The digital workforce panel in Intuka: a sales, a finance and a projects assistant, each drafting work for approval, under the line Nothing sends without you." width="392" height="514" loading="lazy" decoding="async"></figure>
      </div>
      <div class="cta mt0"><a class="btn" data-intuka-demo href="${MAILTO('Demo request - Intuka')}">Book a demo</a><a class="btn ghost" href="https://www.intuka.com" target="_blank" rel="noopener">Learn more about Intuka &rarr;</a></div>
    </div>

    <div class="feature" data-reveal>
      <p class="k-sm">Ours · Sovereign AI Governance</p>
      <h3 class="prodname">GovernVeil</h3>
      <p class="pointcase">Governance should never be the reason you say no to AI.</p>
      <div class="splitgrid">
        <div class="stack2">
          <p class="lede">An independent layer across every AI tool your people use &mdash; not inside any one of them, because a vendor cannot govern its own agents. Every request is checked against your own policies before it goes anywhere, control effectiveness is measured rather than asserted, and the evidence a regulator asks for is already written down.</p>
          <p class="body-sm"><b class="strongink">Runs inside your own environment.</b> Your audit data stays yours, in Australia or in your own tenancy. Australian-founded and Australian-led.</p>
        </div>
        <figure class="fr zoom shot-wide" style="--ar:942/534"><img src="/platforms/governveil-redaction@2x.png" alt="A request leaving an application with a customer PAN in it, the redacted version the model provider actually receives, and the audit line recording the verdict." width="942" height="534" loading="lazy" decoding="async"></figure>
      </div>
      <div class="cta mt0"><a class="btn" data-intuka-demo data-demo-product="GovernVeil" href="${MAILTO('Design-partner pilot - GovernVeil')}">Book a design-partner pilot</a><a class="btn ghost" href="https://governveil.com" target="_blank" rel="noopener">Learn more about GovernVeil &rarr;</a></div>
    </div>
  </div>
</section>

<section><div class="w">
  <div class="shead" data-reveal>
    <p class="eyebrow">Channel</p>
    <h2>Partner software, taken to market here.</h2>
    <p class="lede">Software we did not build, that we distribute across Asia-Pacific. Where the platform is not ours, the page says whose it is.</p>
  </div>

  <div class="feature" data-reveal>
    <p class="k-sm">Channel · Contract Intelligence</p>
    <h3 class="prodname">Evaluetor</h3>
    <p class="lede">Monitors obligations, service levels, risks and renewals after a contract is signed, so value is not leaked during delivery.</p>
    <div class="cta mt0"><a class="btn" href="${MAILTO('Demo request - Evaluetor')}">Book a demo</a></div>
  </div>

  <p class="lede aftergrid">We also take our own products the other way &mdash; our partners carry them into the US, UK and Europe.</p>
</div></section>

<section class="dark">
  <span class="arc" aria-hidden="true"></span>
  <div class="w">
    <div class="shead" data-reveal>
      <p class="eyebrow">Accelerators</p>
      <h2>Built once. Configured for you.</h2>
      <p class="lede">Working software in weeks, not a programme. Not bought off a shelf, and not started from a blank repository either &mdash; foundations our own team has shipped, shaped to your problem.</p>
    </div>

    <div class="grid three" data-reveal-group>${cards(ACCELERATORS)}
    </div>

    <div class="grid three mt0" data-reveal-group>${cards(PRINCIPLES)}
    </div>
  </div>
</section>

<section><div class="w">
  <div class="shead" data-reveal>
    <h2>Four we have already built. Currently in play, and deployable at yours.</h2>
  </div>

  <div class="grid two" data-reveal-group>${cards(BUILT)}
  </div>
</div></section>

<section class="warm"><div class="w">
  <div class="w-narrow" data-reveal>
    <h2>Bring us the problem, not the specification.</h2>
    <p class="lede">We will tell you whether it needs a platform, an accelerator, a build &mdash; or none of them.</p>
    <div class="cta"><a class="btn" href="/contact">Let&rsquo;s talk</a></div>
  </div>
</div></section>
`;

export default function ProductsPage() {
  return (
    <>
      <RouteShell id="products" label="Products" markup={__MARKUP} />
      <IntukaDemo />
    </>
  );
}
