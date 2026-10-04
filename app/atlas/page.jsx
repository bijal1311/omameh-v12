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


<div class="subbar"><div class="w">
  <p class="subbar__tx"><strong>Four series, one list.</strong> Free, and nothing is sold in any of them.</p>
  <a class="subbar__btn" href="https://bijalsejpal.substack.com" target="_blank" rel="noopener">Subscribe on Substack &rarr;</a>
</div></div>

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
  <h2>Read it, or come and <em>argue with it.</em></h2>
  <div class="channels">
      <a class="ch live" href="https://www.linkedin.com/in/bijal-sejpal" target="_blank" rel="noopener"><svg class="glyph" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.75-2.05 4 0 4.75 2.6 4.75 6V21h-4v-5.5c0-1.3 0-3-1.85-3s-2.15 1.45-2.15 2.9V21h-4V9z"/></svg><b>Follow on LinkedIn</b><span>Where most of this surfaces first, and where the conversation actually happens.</span><span class="pend live">Live</span></a>
      <a class="ch live" href="https://bijalsejpal.substack.com" target="_blank" rel="noopener"><svg class="glyph" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 3h18v3H3V3zm0 5.5h18V21l-9-4.6L3 21V8.5z"/></svg><b>Subscribe on Substack</b><span>All four series, in your inbox.</span><span class="pend live">Live</span></a>
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
