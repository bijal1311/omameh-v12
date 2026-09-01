import RouteShell from '../_components/RouteShell';

/**
 * 07 · Contact · V16
 *
 * Markup ported verbatim from 02_CONTENT_SOURCE.html. Content is locked —
 * not a word changes. The only edits are technical: the document's
 * #anchors become real routes, and the shared .vol bar, <nav> and
 * <footer> are lifted into GlobalNav and GlobalFooter.
 */

export const metadata = {
  title: "One inbox. It reaches me.",
  description: "No form that disappears, no routing, no queue. Write and I read it.",
};

const __MARKUP = String.raw`
<section class="hero" style="position:relative;overflow:hidden"><div class="rings ink"></div><div class="w" style="position:relative">
  <p class="eyebrow">Contact</p>
  <h1>One inbox. It <em>reaches me.</em></h1>
  <p class="lede">No form that disappears, no routing, no queue. Write and I read it.</p>
  <div class="cta"><a class="btn" href="mailto:contact@omameh.com.au">contact@omameh.com.au</a></div>
</div></section>



<section><div class="w">
  <p class="eyebrow">Or start smaller</p>
  <div class="grid three">
    <div class="card"><span class="k">Fifteen minutes</span><h4>Take the read</h4><p>A scored view of where you sit, with the working shown. Yours whether we speak again or not.</p><a class="link" href="/contact">Ask for the diagnostic</a></div>
    <div class="card"><span class="k">A room</span><h4>Join a cohort</h4><p>The Independent Practice opens first. Three sessions, online, wherever you run your practice from.</p><a class="link" href="/fluency">See the rooms</a></div>
    <div class="card"><span class="k">Nothing yet</span><h4>Just read</h4><p>Field Notes and Executive Briefs. Free, and we do not ask for an email address to let you read them.</p><a class="link" href="/atlas">Go to Atlas</a></div>
  </div>
</div></section>

<section class="warm"><div class="w">
  <a class="followcta" href="/follow">
    <div>
      <span class="k">Everything in one place</span>
      <b>Follow, subscribe, or just come and sit in.</b>
      <span class="d">One page with every channel, the rooms and the roundtables. Scan it, save it, or send it on.</span>
    </div>
    <span class="go">Go to the follow page →</span>
  </a>
</div></section>

<section class="dark"><div class="w">
  <p class="eyebrow">Also</p>
  <div class="grid two">
    <div class="card"><h4>Press and speaking</h4><p>Interviews, briefings, keynotes and panels. Same address. Portraits and bios are in the media kit.</p></div>
    <div class="card"><h4>Where we are</h4><p>Sydney and Hyderabad.</p></div>
  </div>
</div></section>
`;

export default function ContactPage() {
  return <RouteShell id="contact" label="07 · Contact" markup={__MARKUP} />;
}
