import RouteShell from '../_components/RouteShell';

export const metadata = {
  title: 'Media kit',
  description:
    'Approved portraits, brand assets, founder bio, and the press contact for interviews, panels, and speaking enquiries.',
};

/**
 * Media · v12 · 29 May 2026 · mockup verbatim.
 * Hero + 2-up portraits + 3-up contacts (Press · Speaking · Downloads).
 * 4-bios block deferred to downloadable press kit PDF, not on the live
 * page (per design instruction).
 */

const __MARKUP = String.raw`
  <div class="container">
    <div class="route__header"><span class="route__index">08</span><span class="route__name">/media · Media Kit</span><span class="route__issue">Vol. I · Issue 01 · Q2 2026</span></div>
    <div class="hero">
      <span class="eyebrow">Media · Press · Bookings</span>
      <h1 style="margin-top: var(--space-4)">Media <em>kit.</em></h1>
      <p class="lede">Approved portraits, brand assets, founder bio, and the press contact for interviews, panels, and speaking enquiries.</p>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">01 · Approved portraits</span>
        <h2>Two portraits, <em>two registers.</em></h2>
        <p class="strap">Colour for editorial use. Black and white for the kit. Crop as needed; do not retouch.</p>
      </div>
      <div class="grid-2">
        <div class="why__portrait" style="aspect-ratio: 3/4;">
          <img src="/founder-portrait.png" alt="Bijal Sejpal · colour headshot" style="width: 100%; height: 100%; object-fit: cover; display: block;">
        </div>
        <div class="why__portrait" style="aspect-ratio: 3/4; background: linear-gradient(135deg, rgba(245,241,230,0.06), rgba(245,241,230,0.02));">
          <img src="/founder-portrait-bw.png" alt="Bijal Sejpal · black-and-white headshot" style="width: 100%; height: 100%; object-fit: cover; display: block;">
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">02 · Contacts</span>
        <h2>Where to <em>write.</em></h2>
      </div>
      <div class="grid-3">
        <div>
          <h4 class="tag" style="color: var(--accent-warm);">Press contact</h4>
          <p style="font-family: var(--font-mono); font-size: 13px; margin-top: var(--space-3);"><a href="mailto:press@omameh.com.au">Press@omameh.com.au</a></p>
          <p style="color: var(--fg2); font-size: 14px; margin-top: var(--space-3);">Interviews, briefings, off-the-record context. Reply within 48 hours.</p>
        </div>
        <div>
          <h4 class="tag" style="color: var(--accent-warm);">Speaking</h4>
          <p style="font-family: var(--font-mono); font-size: 13px; margin-top: var(--space-3);"><a href="mailto:speak@omameh.com.au">Speak@omameh.com.au</a></p>
          <p style="color: var(--fg2); font-size: 14px; margin-top: var(--space-3);">Keynotes, panels, off-the-record sessions. Topic brief + audience size in your first email.</p>
        </div>
        <div>
          <h4 class="tag" style="color: var(--accent-warm);">Downloads</h4>
          <p style="font-family: var(--font-mono); font-size: 13px; margin-top: var(--space-3); color: var(--fg2);">Brand kit · bio · headshots</p>
          <p style="color: var(--fg2); font-size: 14px; margin-top: var(--space-3);">Logo lockup, wordmark, headshots, and a one-page bio. Download bundle landing soon.</p>
        </div>
      </div>
    </div>

    <hr class="rule" style="margin-block: var(--space-8);">
    <p class="tag" style="text-align:center;">Continue reading → <em>Let's talk.</em> · Next · 09 · Contact</p>
  </div>
`;

export default function MediaPage() {
  return <RouteShell id="media" label="08 · Media" markup={__MARKUP} />;
}
