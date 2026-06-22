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
          <span class="contact-form__field-head">
            <span class="contact-form__label">The situation in one paragraph</span>
            <button type="button" data-speech aria-pressed="false" class="contact-form__speech-btn" hidden>
              <span class="contact-form__speech-dot" aria-hidden="true"></span>
              <span class="contact-form__speech-text">Speak</span>
            </button>
          </span>
          <textarea name="situation" rows="6" required placeholder="What's the question that keeps coming back? What's been tried? What's the deadline behind it? Plain English is fine — or click Speak to dictate."></textarea>
        </label>

        <div class="contact-form__footer">
          <button type="submit" class="cta cta--primary">Send to Omameh →</button>
          <span class="contact-form__note">We read every note carefully and reply within 48 hours.</span>
        </div>
      </form>
    </div>

    <hr class="rule" style="margin-block: var(--space-7);">

    <div class="section" style="text-align: center; padding-block: var(--space-7);">
      <p class="tag" style="color: var(--fg2);">Prefer a specific door?</p>
      <p style="font-family: var(--font-serif); font-style: italic; font-size: clamp(22px, 2.2vw, 28px); line-height: var(--lh-snug); color: var(--fg1); max-width: 36ch; margin: var(--space-3) auto 0;">Boards, partners, press, speaking, Field Notes, community, or the Mā Foundation — each has its own door.</p>
      <div class="ctas" style="margin-top: var(--space-5); justify-content: center;">
        <a class="cta" href="/doors">See the eight doors →</a>
      </div>
    </div>
  </div>
`;

export default function ContactPage() {
  return <RouteShell id="contact" label="09 · Contact" markup={__MARKUP} />;
}
