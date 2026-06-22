import RouteShell from '../_components/RouteShell';

export const metadata = {
  title: 'Atlas',
  description:
    'What we learn inside the work, published — Field Notes from the architecture, Industry Outlooks, and a community for leaders rebuilding how the work gets done.',
};

const __MARKUP = String.raw`
  <div class="container">
    <div class="route__header"><span class="route__index">04</span><span class="route__name">/atlas · Atlas</span><span class="route__issue">Vol. I · Issue 01 · Q2 2026 · Editorial</span></div>
    <div class="hero">
      <span class="eyebrow eyebrow--display" style="color: var(--accent-warm);">FIELD NOTES · OUTLOOKS · COMMUNITY</span>
      <h1 style="margin-top: var(--space-4); font-family: var(--font-edit-serif);">The <em>Atlas.</em></h1>
      <p class="lede">What we learn inside the work, published — Field Notes from the architecture, industry outlooks, and a community for leaders rebuilding how the work gets done.</p>
    </div>

    <div class="section">
      <div class="streams">
        <div class="stream">
          <span class="stream__num">01 · Stream</span>
          <h3 class="stream__title">Field Notes</h3>
          <p class="stream__body">Quarterly dispatches from inside the architecture. Long-form, by the founder. FN001 lands July 2026.</p>
        </div>
        <div class="stream">
          <span class="stream__num">02 · Stream</span>
          <h3 class="stream__title">Industry <em>Outlooks</em></h3>
          <p class="stream__body">One sector a quarter: the structural call we're making, and why. Written for boards and the people running the work.</p>
        </div>
        <div class="stream">
          <span class="stream__num">03 · Stream</span>
          <h3 class="stream__title"><em>Community</em></h3>
          <p class="stream__body">A LinkedIn community for leaders rebuilding how the work gets done. Convened by Omameh. Open, not gated.</p>
        </div>
      </div>
    </div>

    <div class="section section--space-8b">
      <div class="atlas-cta">
        <div class="atlas-cta__col">
          <img class="atlas-qr" src="/qr/subscribe-fieldnotes.svg" alt="QR · scan to subscribe to Field Notes" width="100" height="100" />
          <span class="eyebrow" style="color: var(--accent-warm);">Subscribe</span>
          <h3 style="font-family: var(--font-edit-serif); font-size: 28px; line-height: var(--lh-tight); margin: var(--space-3) 0 var(--space-5);">Field Notes and Industry Outlooks, <em>straight to your inbox.</em></h3>
          <form class="subscribe" action="mailto:fieldnotes@omameh.com.au" method="post" enctype="text/plain">
            <input type="email" name="email" placeholder="your.email@org.com.au" aria-label="Email for Atlas subscription" required>
            <button type="submit">Subscribe →</button>
          </form>
          <p class="subscribe__hint">One list · quarterly cadence · FieldNotes@omameh.com.au</p>
        </div>
        <div class="atlas-cta__divider" aria-hidden="true"></div>
        <div class="atlas-cta__col">
          <img class="atlas-qr" src="/qr/linkedin-company.svg" alt="QR · scan to join the community on LinkedIn" width="100" height="100" />
          <span class="eyebrow" style="color: var(--accent-warm);">Community</span>
          <h3 style="font-family: var(--font-edit-serif); font-size: 28px; line-height: var(--lh-tight); margin: var(--space-3) 0 var(--space-5);">For leaders <em>rebuilding how the work gets done.</em></h3>
          <a class="cta cta--primary" href="https://www.linkedin.com/company/omameh/" target="_blank" rel="noopener noreferrer">Join the community ↗</a>
          <p class="subscribe__hint" style="margin-top: var(--space-4);">Convened on LinkedIn · linkedin.com/company/omameh</p>
        </div>
      </div>
    </div>

    <hr class="rule" style="margin-block: var(--space-8);">
    <p class="tag" style="text-align:center; color: var(--fg3);"><a href="/doors">Continue reading → <em>Where do you want to come in?</em> · Next · 05 · Doors</a></p>
  </div>
`;

export default function AtlasPage() {
  return <RouteShell id="atlas" label="04 · Atlas" markup={__MARKUP} register="editorial" />;
}
