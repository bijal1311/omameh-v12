import RouteShell from '../_components/RouteShell';

/**
 * 06 · Atlas · V16
 *
 * Markup ported verbatim from 02_CONTENT_SOURCE.html. Content is locked —
 * not a word changes. The only edits are technical: the document's
 * #anchors become real routes, and the shared .vol bar, <nav> and
 * <footer> are lifted into GlobalNav and GlobalFooter.
 */

export const metadata = {
  title: "What we learn inside the work, written down.",
  description: "No gate, no email address, no lead magnet. If it is useful it should be readable.",
};

const __MARKUP = String.raw`
<div class="ed">
<section class="hero"><div class="w">
  <p class="eyebrow">Vol. I · Issue 01</p>
  <h1>What we learn inside the work, <em>written down.</em></h1>
  <p class="lede">No gate, no email address, no lead magnet. If it is useful it should be readable.</p>
</div></section>


<div class="seriesnav" role="navigation" aria-label="The four series"><div class="w">
  <a class="sn" href="#standing" style="--sn:#C9A84C">The Standing Item<span>Weekly</span></a>
  <a class="sn" href="#aob" style="--sn:#081335">Any Other Business<span>Monthly</span></a>
  <a class="sn" href="#mec" style="--sn:#2D5A3D">Month End Close<span>Month end</span></a>
  <a class="sn" href="#board" style="--sn:#00B5AD">The Board Pack<span>Quarterly</span></a>
</div></div>
<section class="warm"><div class="w-narrow">
  <h2>Have it <em>delivered.</em></h2>
  <p class="lede">Four series, one list. Nothing is sold in any of them.</p>
  <div class="subs-embed">
    <iframe src="https://bijalsejpal.substack.com/embed" title="Subscribe to Bijal Sejpal on Substack" loading="lazy" scrolling="no"></iframe>
  </div>
  <p class="subs-embed__note">One click and you are on the list — every new piece arrives by email. Substack hold the list, so you can leave from any email they send.</p>

</div></section>

<section><div class="w">
  <p class="eyebrow">The four series</p>
  <h2>One publication, four <em>different jobs.</em></h2>
  <p class="lede">They share a masthead and nothing else. Follow one and ignore the rest.</p>
  <div class="sbands">
    <div class="sband" id="standing" style="--sn:#C9A84C">
      <div class="sband__id">
        <h3>The Standing Item</h3>
        <span class="sband__cad">Weekly · Monday</span>
        <p>The question I was asked most this week, and the one nobody raised.</p>
      </div>
      <div class="sband__items">
      <p class="sband__soon">The first one lands soon.</p>
      </div>
    </div>
    <div class="sband" id="aob" style="--sn:#081335">
      <div class="sband__id">
        <h3>Any Other Business</h3>
        <span class="sband__cad">Monthly</span>
        <p>What building this has actually required, written from inside it.</p>
      </div>
      <div class="sband__items">
      <a class="spiece" href="/atlas/carrying-enough">
        <span class="spiece__shot"><img src="/atlas/carrying-enough/opengraph-image" alt="" loading="lazy" width="1200" height="630"></span>
        <span class="spiece__tx">
          <span class="spiece__meta">01 · October 2026 · 5 min</span>
          <strong>Carrying enough</strong>
          <span class="spiece__dek">After twenty years in corporate, why build your own?</span>
          <span class="spiece__more">Continue reading &rarr;</span>
        </span>
      </a>
      </div>
    </div>
    <div class="sband" id="mec" style="--sn:#2D5A3D">
      <div class="sband__id">
        <h3>Month End Close</h3>
        <span class="sband__cad">Month end</span>
        <p>Work that was actually done, written up in full. The numbers are real.</p>
      </div>
      <div class="sband__items">
      <a class="spiece" href="/atlas/case-00">
        <span class="spiece__shot"><img src="/atlas/case-00/opengraph-image" alt="" loading="lazy" width="1200" height="630"></span>
        <span class="spiece__tx">
          <span class="spiece__meta">02 · September 2026 · 6 min</span>
          <strong>You do not get a blank month</strong>
          <span class="spiece__dek">I built a business and its operating model at the same time.</span>
          <span class="spiece__more">Continue reading &rarr;</span>
        </span>
      </a>
      </div>
    </div>
    <div class="sband" id="board" style="--sn:#00B5AD">
      <div class="sband__id">
        <h3>The Board Pack</h3>
        <span class="sband__cad">Quarterly</span>
        <p>One decision a board is facing, taken apart. Nothing is sold in it.</p>
      </div>
      <div class="sband__items">
      <p class="sband__soon">The first one lands soon.</p>
      </div>
    </div>
  </div>
</div></section>

<section class="warm"><div class="w">
  <p class="eyebrow">Where to find it</p>
  <h2>Read it, watch it, or come and <em>argue with it.</em></h2>
  <div class="channels">
      <a class="ch live" href="https://www.linkedin.com/in/bijal-sejpal" target="_blank" rel="noopener"><svg class="glyph" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.75-2.05 4 0 4.75 2.6 4.75 6V21h-4v-5.5c0-1.3 0-3-1.85-3s-2.15 1.45-2.15 2.9V21h-4V9z"/></svg><b>Follow on LinkedIn</b><span>Where most of this surfaces first, and where the conversation actually happens.</span><span class="pend live">Live</span></a>
      <a class="ch live" href="https://bijalsejpal.substack.com" target="_blank" rel="noopener"><svg class="glyph" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 3h18v3H3V3zm0 5.5h18V21l-9-4.6L3 21V8.5z"/></svg><b>Subscribe on Substack</b><span>All four series, in your inbox.</span><span class="pend live">Live</span></a>
      <a class="ch" href="/contact"><svg class="glyph" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.6 7.2s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16 4 12 4 12 4s-4 0-6.8.3c-.4 0-1.2 0-2 .9-.6.6-.8 2-.8 2S2 8.8 2 10.5v1.6c0 1.7.2 3.3.2 3.3s.2 1.4.8 2c.8.9 1.8.8 2.2.9 1.6.2 6.8.3 6.8.3s4 0 6.8-.3c.4 0 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.6c0-1.7-.2-3.3-.2-3.3zM10 14.6V9.1l5.2 2.8-5.2 2.7z"/></svg><b>Follow on YouTube</b><span>Conversations with the people actually answering for this — one theme at a time, across every market we work in.</span><span class="pend">Coming soon</span></a>
      <a class="ch" href="/contact"><svg class="glyph" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.5 14.4a.78.78 0 01-1.07.26c-2.94-1.8-6.63-2.2-11-1.2a.78.78 0 11-.35-1.52c4.77-1.09 8.86-.62 12.15 1.39.37.23.48.7.27 1.07zm1.2-2.67a.97.97 0 01-1.34.32c-3.36-2.07-8.49-2.67-12.46-1.46a.97.97 0 11-.57-1.86c4.54-1.38 10.19-.71 14.05 1.66.46.28.6.88.32 1.34zm.1-2.78C13.77 8.56 7.4 8.35 3.9 9.41a1.17 1.17 0 11-.68-2.24C7.25 5.95 14.28 6.2 18.9 8.94a1.17 1.17 0 01-1.2 2.01z"/></svg><b>Subscribe to the podcast</b><span>The same conversations wherever you already listen — the drive, the walk, the gym.</span><span class="pend">Coming soon</span></a>
      <a class="ch" href="/contact"><svg class="glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg><b>Follow on Instagram</b><span>The short version. Clips from the room, from the podcast, from the work.</span><span class="pend">Coming soon</span></a>
      <a class="ch" href="/contact"><svg class="glyph" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0022 12z"/></svg><b>Follow on Facebook</b><span>Same clips, different room. For the people who are there rather than on LinkedIn.</span><span class="pend">Coming soon</span></a>
  </div>

</div></section>



<div class="next"><div class="w"><a href="/contact">
  <div><span class="k">Continue</span><span class="t">One inbox, and it reaches me.</span></div>
  <span class="r">Next · 07 · Contact →</span>
</a></div></div>
</div>
`;

export default function AtlasPage() {
  return <RouteShell id="atlas" label="06 · Atlas" markup={__MARKUP} register="editorial" />;
}
