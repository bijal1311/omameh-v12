import RouteShell from '../_components/RouteShell';

export const metadata = {
  title: 'Media kit',
  description:
    'Approved portraits, brand assets, founder bio at four lengths, and press contacts for interviews, panels, and speaking enquiries.',
};

/**
 * Media · V11 Final Build · 29 May 2026 · hybrid layout.
 *
 * Mockup hero + 2-up portraits + 3-up contacts (Press · Speaking ·
 * Downloads), THEN the locked V11 four-bios block (25 / 50 / 100 / Long)
 * which the V11 build had and the mockup dropped.
 *
 * Bios are locked per Omameh_Founder_Why_V11_Canonical.md downstream
 * regeneration notes. Sector list: financial services, healthcare,
 * government, media, technology. Pillar list: Operating Model ·
 * Workforce, Skills & Culture · Right Talent in the Right Place ·
 * AI Governance · AI-Era Innovation.
 */

const __MARKUP = String.raw`
  <div class="container">
    <div class="hero">
      <span class="eyebrow">Media · Press · Bookings</span>
      <h1 style="margin-top: var(--space-4)">Media <em>kit.</em></h1>
      <p class="lede">Approved portraits, brand assets, founder bio at four lengths, and the press contact for interviews, panels, and speaking enquiries.</p>
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
        <span class="eyebrow">02 · Founder bio · four lengths</span>
        <h2>Pick the length <em>that fits.</em></h2>
        <p class="strap">Locked verbatim from the canonical Founder Why · sector and pillar lists held to V11 lock.</p>
      </div>

      <div class="grid-2" style="grid-template-columns: 1fr;">
        <article class="card">
          <div class="card__eyebrow"><span class="num">Bio · 25 words</span></div>
          <p class="card__body">Bijal Sejpal is founder of Omameh, a specialist advisory practice for boards and senior leaders building organisations structurally ready for the AI era.</p>
        </article>
        <article class="card">
          <div class="card__eyebrow"><span class="num">Bio · 50 words</span></div>
          <p class="card__body">Bijal Sejpal is founder of Omameh, a specialist advisory practice for boards and senior leaders. She works in the gap between strategy and execution — the operating model, governance, and capability that decide whether AI-era ambition lands. Two decades across S&amp;P/ASX 20 enterprises in five regulated sectors.</p>
        </article>
        <article class="card">
          <div class="card__eyebrow"><span class="num">Bio · 100 words</span></div>
          <p class="card__body">Bijal Sejpal is founder of Omameh, a specialist advisory practice for boards and senior leaders. Two decades inside the rooms where transformations get approved taught her the discipline almost no one writes down before the budget signs off: <em>transformation strategy</em> — the architecture between strategy and execution. Omameh exists to close that gap. Pressure-testing the architecture. Designing the operating model, governance, and capability that let AI-era ambition land. Built from twenty years across S&amp;P/ASX 20 enterprises in financial services, healthcare, government, media, and technology. Sydney-based. Delivery across Australia and India. <em>Human-Led. AI-Operated. Built for the era we are actually in.</em></p>
        </article>
        <article class="card">
          <div class="card__eyebrow"><span class="num">Bio · Long form</span></div>
          <p class="card__body">Bijal Sejpal is founder of Omameh — a specialist advisory practice for boards and senior leaders building organisations structurally ready for the AI era.</p>
          <p class="card__body">Strategy consulting tells you what to do. Transformation consulting delivers what was decided. Almost no one does the architectural work in between — the discipline of sequencing the shifts, calibrating ambition against appetite, and designing the operating model that can actually carry the ambition. That is the gap most AI-era programmes fail in. It is the gap Omameh was built to close.</p>
          <p class="card__body">The practice works across five connected fronts: operating model, workforce and culture, talent geography, AI governance, and AI-era innovation. One architecture, designed to hold.</p>
          <p class="card__body">Built from two decades inside S&amp;P/ASX 20 enterprises across financial services, healthcare, government, media, and technology. Sydney-based. Delivery across Australia and India.</p>
          <p class="card__body"><em>Human-Led. AI-Operated. Built for the era we are actually in.</em></p>
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
