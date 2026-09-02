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
      <p class="lede">An advisory practice with its own engineering team. Approved portraits, founder bios, and one address for interviews, panels and speaking enquiries.</p>
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
        <h2>Pick the bio <em>that fits.</em></h2>
        <p class="strap">One founder, four lengths. Lift any of them verbatim — they are written for the slot.</p>
      </div>

      <div class="bios">
        <article class="bio" tabindex="0">
          <header class="bio__head">
            <div class="bio__label">25 words · the one-liner</div>
            <div class="bio__context">For panel programmes, conference bios, LinkedIn header lift.</div>
          </header>
          <p class="bio__body">Bijal Sejpal founded Omameh, an advisory practice with its own engineering team. It designs what the AI era requires, builds it, and hands it over working.</p>
          <button type="button" class="bio__copy" data-bio-copy>Copy →</button>
        </article>

        <article class="bio" tabindex="0">
          <header class="bio__head">
            <div class="bio__label">50 words · the introduction</div>
            <div class="bio__context">For press releases, partner intros, short speaker bios.</div>
          </header>
          <p class="bio__body">Bijal Sejpal is founder of Omameh — an advisory practice with its own engineering team. Omameh designs the operating model, governance and capability that AI-era ambition actually needs, builds the platforms underneath it, and leaves clients able to run it without help. Two decades inside S&amp;P/ASX 20 enterprises. Sydney and Hyderabad.</p>
          <button type="button" class="bio__copy" data-bio-copy>Copy →</button>
        </article>

        <article class="bio" tabindex="0">
          <header class="bio__head">
            <div class="bio__label">100 words · the considered</div>
            <div class="bio__context">For press kits, media bios, board introductions, longer speaker bios.</div>
          </header>
          <div class="bio__body">
            <p>Bijal Sejpal is founder of Omameh — an advisory practice with its own engineering team.</p>
            <p>Most firms sell the strategy or sell the tools. Omameh does the work in between: it designs what has to change, builds it, and leaves the client able to run it. Advisory, platforms and capability from one team, for enterprises, growing businesses, consulting firms and founders.</p>
            <p>Built from two decades inside S&amp;P/ASX 20 enterprises across financial services, healthcare, government and technology — most recently as Group Chief Operating Officer, Data and AI at QBE, and Chief Operating Officer, Technology and interim CIO at Bupa Asia-Pacific. Sydney and Hyderabad.</p>
            <p><em>Human-Led. AI-Operated.</em></p>
          </div>
          <button type="button" class="bio__copy" data-bio-copy>Copy →</button>
        </article>

        <article class="bio" tabindex="0">
          <header class="bio__head">
            <div class="bio__label">Long form · 149 words</div>
            <div class="bio__context">For the website media kit page, keynote bios, magazine features, in-depth podcast pre-reads.</div>
          </header>
          <div class="bio__body">
            <p>Bijal Sejpal is founder of Omameh — an advisory practice with its own engineering team.</p>
            <p>Everyone got the technology. Almost nobody got their time back. The enterprise ran the pilot and the team still does the workaround. The founder bought the tools and still cannot take a holiday. What is missing is not the technology — it is the operating model, the governance, and the judgement around it.</p>
            <p>Omameh works in that gap and does all three parts. It designs what has to change. It builds what does not exist yet, across a platform estate its own team has shipped. And it runs the rooms that leave people able to make the next call without help — because the decisions keep coming after the engagement ends.</p>
            <p>Two decades inside S&amp;P/ASX 20 enterprises across financial services, healthcare, government and technology. Most recently Group Chief Operating Officer, Data and AI at QBE, and Chief Operating Officer, Technology and interim CIO at Bupa Asia-Pacific. Sydney-based, with engineering in Hyderabad.</p>
            <p><em>Human-Led. AI-Operated.</em> Built for the era we are actually in.</p>
          </div>
          <button type="button" class="bio__copy" data-bio-copy>Copy →</button>
        </article>
      </div>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">03 · Share Omameh</span>
        <h2>Scan, save, <em>share.</em></h2>
        <p class="strap">Three QR codes — for the website, the company on LinkedIn, and Bijal directly. Save as SVG for cards, slides, signatures, or conference badges.</p>
      </div>
      <div class="qr-grid">
        <article class="qr-card">
          <div class="qr-card__code">
            <img src="/qr/omameh-com-au.svg" alt="QR code · omameh.com.au" width="200" height="200" />
          </div>
          <h3 class="qr-card__label">Website</h3>
          <p class="qr-card__url">omameh.com.au</p>
          <p class="qr-card__download"><a href="/qr/omameh-com-au.svg" download>Save SVG ↓</a></p>
        </article>
        <article class="qr-card">
          <div class="qr-card__code">
            <img src="/qr/linkedin-company.svg" alt="QR code · Omameh on LinkedIn" width="200" height="200" />
          </div>
          <h3 class="qr-card__label">Company on LinkedIn</h3>
          <p class="qr-card__url">linkedin.com/company/omameh</p>
          <p class="qr-card__download"><a href="/qr/linkedin-company.svg" download>Save SVG ↓</a></p>
        </article>
        <article class="qr-card">
          <div class="qr-card__code">
            <img src="/qr/linkedin-bijal.svg" alt="QR code · Bijal on LinkedIn" width="200" height="200" />
          </div>
          <h3 class="qr-card__label">Bijal on LinkedIn</h3>
          <p class="qr-card__url">linkedin.com/in/bijal-sejpal</p>
          <p class="qr-card__download"><a href="/qr/linkedin-bijal.svg" download>Save SVG ↓</a></p>
        </article>
      </div>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">04 · Contacts</span>
        <h2>Where to <em>write.</em></h2>
      </div>
      <div class="grid-2">
        <div>
          <h4 class="tag" style="color: var(--accent-warm);">Press and speaking</h4>
          <p style="font-family: var(--font-mono); font-size: 13px; margin-top: var(--space-3);"><a href="mailto:contact@omameh.com.au">contact@omameh.com.au</a></p>
          <p style="color: var(--fg2); font-size: 14px; margin-top: var(--space-3);">Interviews, briefings, keynotes and panels. One inbox, and it reaches Bijal.</p>
        </div>
        <div>
          <h4 class="tag" style="color: var(--accent-warm);">Downloads</h4>
          <p style="font-family: var(--font-mono); font-size: 13px; margin-top: var(--space-3); color: var(--fg2);">Portraits · bios · QR codes</p>
          <p style="color: var(--fg2); font-size: 14px; margin-top: var(--space-3);">The portraits above are the approved set. Every bio is written to be lifted verbatim.</p>
        </div>
      </div>
    </div>

    <hr class="rule" style="margin-block: var(--space-8);">
    <p class="tag" style="text-align:center;"><a href="/contact">Continue reading → <em>Let's talk.</em> · Next · 09 · Contact</a></p>
  </div>
`;

export default function MediaPage() {
  return <RouteShell id="media" label="08 · Media" markup={__MARKUP} className="legacy" />;
}
