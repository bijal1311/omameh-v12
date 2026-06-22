import RouteShell from '../_components/RouteShell';

export const metadata = {
  title: 'Contact',
  description: 'Tell us the situation, the team, and the question that keeps coming back. We read every note carefully and reply within 48 hours.',
};

const __MARKUP = String.raw`
  <div class="container">
    <div class="route__header"><span class="route__index">09</span><span class="route__name">/contact · Contact</span><span class="route__issue">Vol. I · Issue 01 · Q2 2026</span></div>
    <div class="hero">
      <span class="eyebrow">Contact · Omameh</span>
      <h1 style="margin-top: var(--space-4)">Let's <em>talk.</em></h1>
      <p class="lede">Tell us about the situation, the team, and the question that keeps coming back. We read every note carefully and reply within 48 hours.</p>
    </div>

    <div class="section">
      <form class="contact-form" action="mailto:contact@omameh.com.au" method="post" enctype="text/plain">
        <div class="contact-form__row contact-form__row--split">
          <label class="contact-form__field">
            <span class="contact-form__label">First name</span>
            <input type="text" name="first-name" required autocomplete="given-name" />
          </label>
          <label class="contact-form__field">
            <span class="contact-form__label">Last name</span>
            <input type="text" name="last-name" required autocomplete="family-name" />
          </label>
        </div>

        <label class="contact-form__field">
          <span class="contact-form__label">Email</span>
          <input type="email" name="email" required autocomplete="email" placeholder="you@organisation.com" />
        </label>

        <div class="contact-form__row contact-form__row--split">
          <label class="contact-form__field">
            <span class="contact-form__label">Organisation</span>
            <input type="text" name="organisation" autocomplete="organization" />
          </label>
          <label class="contact-form__field">
            <span class="contact-form__label">Role</span>
            <input type="text" name="role" autocomplete="organization-title" />
          </label>
        </div>

        <label class="contact-form__field">
          <span class="contact-form__label">The situation in one paragraph</span>
          <textarea name="situation" rows="6" required placeholder="What's the question that keeps coming back? What's been tried? What's the deadline behind it? Plain English is fine."></textarea>
        </label>

        <div class="contact-form__footer">
          <button type="submit" class="cta cta--primary">Send to Omameh →</button>
          <span class="contact-form__note">We read every note carefully and reply within 48 hours.</span>
        </div>
      </form>
    </div>

    <hr class="rule" style="margin-block: var(--space-8);">

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">Or write to a specific door</span>
        <h2>The seven <em>aliases.</em></h2>
        <p class="strap">If your question fits one of these, write directly. Reply window is the same — 48 hours.</p>
      </div>

      <div class="grid-4 contact-doors">
        <div>
          <h4 class="tag" style="color: var(--accent-warm);">Boards</h4>
          <p style="font-family: var(--font-mono); font-size: 12px; margin-top: var(--space-2);"><a href="mailto:boards@omameh.com.au">Boards@omameh.com.au</a></p>
          <p style="color: var(--fg2); font-size: 13px; margin-top: var(--space-2);">Chair and CEO conversations. NEDs welcome.</p>
        </div>
        <div>
          <h4 class="tag" style="color: var(--accent-warm);">Partner</h4>
          <p style="font-family: var(--font-mono); font-size: 12px; margin-top: var(--space-2);"><a href="mailto:partner@omameh.com.au">Partner@omameh.com.au</a></p>
          <p style="color: var(--fg2); font-size: 13px; margin-top: var(--space-2);">Delivery firms and embedded teams.</p>
        </div>
        <div>
          <h4 class="tag" style="color: var(--accent-warm);">Press</h4>
          <p style="font-family: var(--font-mono); font-size: 12px; margin-top: var(--space-2);"><a href="mailto:press@omameh.com.au">Press@omameh.com.au</a></p>
          <p style="color: var(--fg2); font-size: 13px; margin-top: var(--space-2);">Interviews, briefings, off-the-record.</p>
        </div>
        <div>
          <h4 class="tag" style="color: var(--accent-warm);">Speak</h4>
          <p style="font-family: var(--font-mono); font-size: 12px; margin-top: var(--space-2);"><a href="mailto:speak@omameh.com.au">Speak@omameh.com.au</a></p>
          <p style="color: var(--fg2); font-size: 13px; margin-top: var(--space-2);">Keynotes, panels, off-the-record sessions.</p>
        </div>
        <div>
          <h4 class="tag" style="color: var(--accent-warm);">Field Notes</h4>
          <p style="font-family: var(--font-mono); font-size: 12px; margin-top: var(--space-2);"><a href="mailto:fieldnotes@omameh.com.au">FieldNotes@omameh.com.au</a></p>
          <p style="color: var(--fg2); font-size: 13px; margin-top: var(--space-2);">Subscribe to the quarterly dispatch.</p>
        </div>
        <div>
          <h4 class="tag" style="color: var(--accent-warm);">Community</h4>
          <p style="font-family: var(--font-mono); font-size: 12px; margin-top: var(--space-2);"><a href="https://www.linkedin.com/company/omameh/" target="_blank" rel="noopener noreferrer">linkedin.com/company/omameh ↗</a></p>
          <p style="color: var(--fg2); font-size: 13px; margin-top: var(--space-2);">For leaders rebuilding the work. Lives on LinkedIn.</p>
        </div>
        <div>
          <h4 class="tag" style="color: var(--accent-warm);">General</h4>
          <p style="font-family: var(--font-mono); font-size: 12px; margin-top: var(--space-2);"><a href="mailto:contact@omameh.com.au">Contact@omameh.com.au</a></p>
          <p style="color: var(--fg2); font-size: 13px; margin-top: var(--space-2);">Anything that doesn't fit the six above.</p>
        </div>
        <div>
          <h4 class="tag" style="color: var(--accent-warm);">Foundation</h4>
          <p style="font-family: var(--font-mono); font-size: 12px; margin-top: var(--space-2);"><a href="mailto:foundation@omameh.com.au">Foundation@omameh.com.au</a></p>
          <p style="color: var(--fg2); font-size: 13px; margin-top: var(--space-2);">Partnership for the giving arm of the practice.</p>
        </div>
      </div>
    </div>
  </div>
`;

export default function ContactPage() {
  return <RouteShell id="contact" label="09 · Contact" markup={__MARKUP} />;
}
