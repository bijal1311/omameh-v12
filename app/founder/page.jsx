import RouteShell from '../_components/RouteShell';

export const metadata = {
  title: 'Founder',
  description:
    'Bijal Sejpal · founder of Omameh. Two decades inside the architecture of large institutions. Why I built this — Transformation Strategy is the discipline almost no one writes down.',
};

/**
 * Founder · V11 Final Build · 29 May 2026
 *
 * Why eleven paragraphs verbatim from Omameh_Founder_Why_V11_Canonical.md.
 * Identity hero + name origin + RBG quote per mockup §6.
 */

const __MARKUP = String.raw`
  <div class="container">
    <div class="route__header"><span class="route__index">06</span><span class="route__name">/founder · Founder</span><span class="route__issue">Vol. I · Issue 01 · Q2 2026</span></div>
    <div class="fo-hero">
      <div class="fo-hero__portrait" role="img" aria-label="Bijal Sejpal, founder of Omameh — editorial portrait">
        <img src="/founder-portrait.png" alt="Bijal Sejpal · founder of Omameh" style="width: 100%; height: 100%; object-fit: cover; display: block;">
        <div class="portrait-credit" aria-hidden="true">
          <span class="portrait-credit__name">Bijal Sejpal</span>
          <span class="portrait-credit__meta">Founder · Omameh</span>
        </div>
      </div>
      <div class="fo-hero__body">
        <span class="eyebrow">Founder · the first door</span>
        <h1 class="fo-hero__name">Bijal Sejpal.</h1>
        <div class="fo-hero__meta">
          <span class="role">Founder of Omameh.</span>
          <span>Sydney · Australia → India passage</span>
        </div>
        <p class="fo-hero__lede">Two decades inside the architecture of large institutions — financial services, healthcare, government, media, and technology. I've seen what scales, what stalls, and what it takes to move either.</p>
        <a class="fo-hero__link" href="https://www.linkedin.com/in/bijal-sejpal/" target="_blank" rel="noopener noreferrer">linkedin.com/in/bijal-sejpal ↗</a>
      </div>
    </div>

    <aside class="fo-name">
      <h2 class="fo-name__brand">Om<em>a</em>meh</h2>
      <p class="fo-name__pron">(O · Ma · Meh)</p>
      <p class="fo-name__tag">— the name</p>
      <p class="fo-name__body">Omameh is my mother's name, woven with my two daughters'. The <em>Om</em> at the front is for infinity. I named the practice for the three women who define my why — the one who taught me what boldness looks like, and the two who remind me every day what I am building towards.</p>
    </aside>

    <div class="fo-why-head">
      <span class="eyebrow">Why</span>
      <h2>Why I <em>built this.</em></h2>
    </div>

    <div class="why">
      <div class="why__portrait">
        <img src="/founder-portrait.png" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; display: block;">
        <div class="portrait-credit" aria-hidden="true">
          <span class="portrait-credit__name">Bijal Sejpal</span>
          <span class="portrait-credit__meta">Founder · Omameh</span>
        </div>
      </div>
      <div class="why__paragraphs">
        <p>What I do is structural. Why I do it is the people inside it.</p>
        <p>Boards know business strategy. They know execution. The strategy of how you transform — how you sequence the shifts, calibrate ambition against appetite, work with the maturity the organisation actually carries — is the conversation that should happen before the budget is approved. It rarely does.</p>
        <p>Most AI-era ambitions fail in that gap.</p>
        <p>What organisations reach for instead are tools. Heatmaps. Interlocks. Prioritisation sessions of great art and little science. The same three questions surface every year — how much, why, what's the benefit. The answers get written down. The benefits rarely land.</p>
        <p>Organisations are ecosystems running through silos, and the connective tissue between them is improvised every time. When the architecture fails, the people running the work carry weight that should be held for them. Strategy gets the credit. They carry the loss. And the loss compounds — the invoice arrives in three years.</p>

        <div class="why__break" role="separator" aria-label="Chapter break">
          <span class="why__break-num">Q · 002</span>
        </div>

        <p>The discipline behind sequencing transformation has a name almost no one writes down: <em>Transformation Strategy.</em></p>
        <p>That is the gap I built Omameh to work in. The architecture between strategy and execution. The operating model that can carry the ambition. The governance that holds at 7am to a regulator. The capability that compounds because the people inside it are ready, equipped, and trusted.</p>
        <p>Most consultancies sell the strategy. Most platforms sell the tools. <strong>Almost no one does the architectural work in between.</strong></p>
        <p>The leaders who define the next generation are the ones whose organisations are more capable, more confident, and more humane after they have gone.</p>
        <p class="why__close"><em>Human-Led. AI-Operated.</em> Built for the era we are actually in.</p>
      </div>
    </div>

    <figure class="fo-quote">
      <blockquote class="fo-quote__text">Fight for the things that you care about, but do it in a way that will lead others to join you.</blockquote>
      <figcaption class="fo-quote__attr">
        <span class="name">Ruth Bader Ginsburg</span>
        <span>Associate Justice · U.S. Supreme Court</span>
      </figcaption>
    </figure>

    <hr class="rule" style="margin-block: var(--space-8);">
    <p class="tag" style="text-align:center;">Continue reading → <em>The case that made the practice.</em> · Next · 07 · Case 00</p>
  </div>
`;

export default function FounderPage() {
  return <RouteShell id="founder" label="06 · Founder" markup={__MARKUP} />;
}
