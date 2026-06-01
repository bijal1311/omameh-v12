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
          <div class="portrait-credit portrait-credit--usage-only" aria-hidden="true">
            <span class="portrait-credit__usage">For editorial use only · Credit: Omameh</span>
          </div>
        </div>
        <div class="why__portrait" style="aspect-ratio: 3/4; background: linear-gradient(135deg, rgba(245,241,230,0.06), rgba(245,241,230,0.02));">
          <img src="/founder-portrait-bw.png" alt="Bijal Sejpal · black-and-white headshot" style="width: 100%; height: 100%; object-fit: cover; display: block;">
          <div class="portrait-credit portrait-credit--usage-only" aria-hidden="true">
            <span class="portrait-credit__usage">For editorial use only · Credit: Omameh</span>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">02 · Founder bio · four lengths</span>
        <h2>Pick the bio <em>that fits.</em></h2>
        <p class="strap">One founder, four lengths. Lift any of them verbatim — they are written for the slot.</p>
      </div>

      <div class="bios">
        <article class="bio" tabindex="0">
          <header class="bio__head">
            <div class="bio__label">25 words · the one-liner</div>
            <div class="bio__context">For panel programmes, conference bios, LinkedIn header lift.</div>
          </header>
          <p class="bio__body">Bijal Sejpal is founder of Omameh, a specialist advisory practice for boards and senior leaders building organisations structurally ready for the AI era.</p>
          <button type="button" class="bio__copy" data-bio-copy>Copy →</button>
        </article>

        <article class="bio" tabindex="0">
          <header class="bio__head">
            <div class="bio__label">50 words · the introduction</div>
            <div class="bio__context">For press releases, partner intros, short speaker bios.</div>
          </header>
          <p class="bio__body">Bijal Sejpal is founder of Omameh, a specialist advisory practice for boards and senior leaders. She works in the gap between strategy and execution — the operating model, governance, and capability that decide whether AI-era ambition lands. Two decades across S&amp;P/ASX 20 enterprises in five regulated sectors.</p>
          <button type="button" class="bio__copy" data-bio-copy>Copy →</button>
        </article>

        <article class="bio" tabindex="0">
          <header class="bio__head">
            <div class="bio__label">100 words · the considered</div>
            <div class="bio__context">For press kits, media bios, board introductions, longer speaker bios.</div>
          </header>
          <p class="bio__body">Bijal Sejpal is founder of Omameh, a specialist advisory practice for boards and senior leaders. Two decades inside the rooms where transformations get approved taught her the discipline almost no one writes down before the budget signs off: <em>transformation strategy</em> — the architecture between strategy and execution. Omameh exists to close that gap. Pressure-testing the architecture. Designing the operating model, governance, and capability that let AI-era ambition land. Built from twenty years across S&amp;P/ASX 20 enterprises in financial services, healthcare, government, media, and technology. Sydney-based. Delivery across Australia and India. <em>Human-Led. AI-Operated.</em> Built for the era we are actually in.</p>
          <button type="button" class="bio__copy" data-bio-copy>Copy →</button>
        </article>

        <article class="bio" tabindex="0">
          <header class="bio__head">
            <div class="bio__label">Long form · 149 words</div>
            <div class="bio__context">For the website media kit page, keynote bios, magazine features, in-depth podcast pre-reads.</div>
          </header>
          <div class="bio__body">
            <p>Bijal Sejpal is founder of Omameh — a specialist advisory practice for boards and senior leaders building organisations structurally ready for the AI era.</p>
            <p>Strategy consulting tells you what to do. Transformation consulting delivers what was decided. Almost no one does the architectural work in between — the discipline of sequencing the shifts, calibrating ambition against appetite, and designing the operating model that can actually carry the ambition. That is the gap most AI-era programmes fail in. <em>It is the gap Omameh was built to close.</em></p>
            <p>The practice works across five connected fronts: operating model, workforce and culture, talent geography, AI governance, and AI-era innovation. <em>One architecture, designed to hold.</em></p>
            <p>Built from two decades inside S&amp;P/ASX 20 enterprises across financial services, healthcare, government, media, and technology. Sydney-based. Delivery across Australia and India.</p>
            <p><em>Human-Led. AI-Operated.</em> Built for the era we are actually in.</p>
          </div>
          <button type="button" class="bio__copy" data-bio-copy>Copy →</button>
        </article>
      </div>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">03 · Contacts</span>
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
