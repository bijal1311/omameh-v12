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

<section class="warm"><div class="w-narrow">
  <h2>Nothing here asks for your email <em>first.</em></h2>
  <p class="lede">Subscribe if you want it delivered. Read it either way.</p>
  <div class="cta"><a class="btn" href="/contact">Subscribe</a><a class="btn ghost" href="/contact">Start with Field Notes</a></div>
</div></section>

<section><div class="w">
  <p class="eyebrow">The streams</p>
  <div class="streams">
    <div class="stream"><span class="k">Free · ongoing</span><div><h4>Field Notes</h4><span class="m">Short · from live engagements</span></div><p>What we ran into this week and what it taught us. Written from inside the work rather than about it. Nobody has to give us an email address to read one.</p></div>
    <div class="stream"><span class="k">Free · weekly</span><div><h4>Executive Briefs</h4><span class="m">Questions we are being asked</span></div><p>The questions boards, chief executives and transformation leaders are actually putting to us, answered in the open. Real references throughout.</p></div>
    <div class="stream"><span class="k">Free · occasional</span><div><h4>Founder Notes</h4><span class="m">First person</span></div><p>Building this while advising on it. What worked, what did not, and what it cost.</p></div>
          </div>
</div></section>

<section class="warm"><div class="w">
  <p class="eyebrow">Where to find it</p>
  <h2>Read it, watch it, or come and <em>argue with it.</em></h2>
  <div class="channels">
      <a class="ch live" href="/contact"><svg class="glyph" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.75-2.05 4 0 4.75 2.6 4.75 6V21h-4v-5.5c0-1.3 0-3-1.85-3s-2.15 1.45-2.15 2.9V21h-4V9z"/></svg><b>Follow on LinkedIn</b><span>Where most of this surfaces first, and where the conversation actually happens.</span><span class="pend live">Live</span></a>
      <a class="ch" href="/contact"><svg class="glyph" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 3h18v3H3V3zm0 5.5h18V21l-9-4.6L3 21V8.5z"/></svg><b>Subscribe on Substack</b><span>Field Notes and Executive Briefs, in your inbox.</span><span class="pend">Coming soon</span></a>
      <a class="ch" href="/contact"><svg class="glyph" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.6 7.2s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16 4 12 4 12 4s-4 0-6.8.3c-.4 0-1.2 0-2 .9-.6.6-.8 2-.8 2S2 8.8 2 10.5v1.6c0 1.7.2 3.3.2 3.3s.2 1.4.8 2c.8.9 1.8.8 2.2.9 1.6.2 6.8.3 6.8.3s4 0 6.8-.3c.4 0 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.6c0-1.7-.2-3.3-.2-3.3zM10 14.6V9.1l5.2 2.8-5.2 2.7z"/></svg><b>Follow on YouTube</b><span>Conversations with the people actually answering for this — one theme at a time, across every market we work in.</span><span class="pend">Coming soon</span></a>
      <a class="ch" href="/contact"><svg class="glyph" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.5 14.4a.78.78 0 01-1.07.26c-2.94-1.8-6.63-2.2-11-1.2a.78.78 0 11-.35-1.52c4.77-1.09 8.86-.62 12.15 1.39.37.23.48.7.27 1.07zm1.2-2.67a.97.97 0 01-1.34.32c-3.36-2.07-8.49-2.67-12.46-1.46a.97.97 0 11-.57-1.86c4.54-1.38 10.19-.71 14.05 1.66.46.28.6.88.32 1.34zm.1-2.78C13.77 8.56 7.4 8.35 3.9 9.41a1.17 1.17 0 11-.68-2.24C7.25 5.95 14.28 6.2 18.9 8.94a1.17 1.17 0 01-1.2 2.01z"/></svg><b>Subscribe to the podcast</b><span>The same conversations wherever you already listen — the drive, the walk, the gym.</span><span class="pend">Coming soon</span></a>
      <a class="ch" href="/contact"><svg class="glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg><b>Follow on Instagram</b><span>The short version. Clips from the room, from the podcast, from the work.</span><span class="pend">Coming soon</span></a>
      <a class="ch" href="/contact"><svg class="glyph" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0022 12z"/></svg><b>Follow on Facebook</b><span>Same clips, different room. For the people who are there rather than on LinkedIn.</span><span class="pend">Coming soon</span></a>
  </div>

  <a class="ch table" href="/contact">
    <div>
      <span class="k">From 2027 · Not a broadcast</span>
      <b>The Roundtables</b>
      <span>One industry, one table, ten or twelve people who run something — mapping where it goes next. Nothing is sold in the room, by anyone, including us.</span>
    </div>
    <span class="pend">Register your interest →</span>
  </a>
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
