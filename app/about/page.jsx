import RouteShell from '../_components/RouteShell';

/**
 * 05 · About · V16
 *
 * Markup ported verbatim from 02_CONTENT_SOURCE.html. Content is locked —
 * not a word changes. The only edits are technical: the document's
 * #anchors become real routes, and the shared .vol bar, <nav> and
 * <footer> are lifted into GlobalNav and GlobalFooter.
 */

export const metadata = {
  title: "The people who design it are the people who build it.",
  description: "One team, two countries, and the same agenda from the first conversation to the last deployment.",
};

const __MARKUP = String.raw`
<section class="hero"><div class="w">
  <p class="eyebrow">About</p>
  <h1>The people who design it are the people who <em>build it.</em></h1>
  <p class="lede">One team, two countries, and the same agenda from the first conversation to the last deployment.</p>
  <div class="grid four">
    <div class="card"><h4 style="font-size:clamp(34px,5vw,48px);color:var(--navy)">8</h4><p>platforms in production, and the builds in between</p></div>
    <div class="card"><h4 style="font-size:clamp(34px,5vw,48px);color:var(--navy)">20+</h4><p>specialists across architecture, engineering, data and cloud</p></div>
    <div class="card"><h4 style="font-size:clamp(34px,5vw,48px);color:var(--navy)">4</h4><p>ways in, one method behind all of them</p></div>
    <div class="card"><h4 style="font-size:clamp(34px,5vw,48px);color:var(--navy)">2</h4><p>countries, no handoff</p></div>
  </div>
</div></section>

<section class="dark"><div class="w"><div class="founder">
  <figure class="portrait">
    <img src="/founder-bijal.jpg" alt="Bijal Sejpal, founder of Omameh"/>
    <figcaption>Bijal Sejpal · Founder<br><span>Former Group COO, Data &amp; AI at QBE. Former COO Technology and interim CIO at Bupa Asia-Pacific.</span></figcaption>
  </figure>
  <div>
    <p class="eyebrow">From the founder</p>
    <h2>Why there is a <em>team.</em></h2>
    <p class="lede">I spent twenty years inside large regulated organisations watching the same thing happen. A good strategy, a well-run pilot, then nothing. Not because the technology failed — because the way the work happened underneath it never changed.</p>
    <p class="lede" style="margin-top:var(--s3)">As an adviser you can name that problem precisely. Naming it was never what I wanted to do. I wanted to be accountable for fixing it.</p>
    <p class="lede" style="margin-top:var(--s3)">Twenty people and growing — architecture, engineering, data, cloud, clinical and domain specialists. None of it gets designed alone. The team is in the room for the design, not only the build.</p>
    <p class="stamp" style="margin-bottom:var(--s3)">— Bijal</p>
    <a class="link" href="/founder">Read the whole story — why I built this</a>
  </div>
</div></div></section>

<section><div class="w">
  <p class="eyebrow">The team</p>
  <h2>Small on purpose. Not small in the <em>room.</em></h2>
  <p class="lede">One team across Sydney and Hyderabad, led from Sydney. Advisory is founder-led; the engineering is <strong>Syntegreti, our engineering company</strong>. The people who sit in your solution design are the people who build it — same meeting, same specification, no translation layer.</p>
  <div class="tags" style="margin-top:var(--s4)">
    <span>AI / ML Engineers</span><span>Full-stack Developers</span><span>Cloud Architects</span><span>Data Scientists</span><span>Clinical Specialists</span><span>Domain Specialists</span><span>DevOps</span>
  </div>
</div></section>

<section class="warm"><div class="w">
  <p class="eyebrow">How we work</p>
  <div class="grid four">
    <div class="card"><h4>Build first, pitch second</h4><p>We build a working proof and let the result decide.</p></div>
    <div class="card"><h4>Everyone ships</h4><p>The person who talks to you on day one deploys it later.</p></div>
    <div class="card"><h4>Stay small, go deep</h4><p>We would rather go further into fewer problems.</p></div>
    <div class="card"><h4>Own the outcome</h4><p>Nothing is handed off.</p></div>
  </div>
</div></section>

<section><div class="w">
  <p class="eyebrow">What we believe</p>
  <div class="seq">
    <div class="step"><span class="n">Vision</span><span style="font-size:17px;color:var(--ink)">Organisations ready to lead the AI era by architecture, not by accident.</span></div>
    <div class="step"><span class="n">Mission</span><span style="font-size:17px;color:var(--ink)">Pressure-test, design and deliver the architecture between strategy and execution.</span></div>
    <div class="step"><span class="n">Belief</span><span style="font-size:17px;color:var(--ink)">Human-Led. AI-Operated.</span></div>
  </div>
</div></section>

<section class="warm"><div class="w">
  <p class="eyebrow">Where we play</p>
  <h2>Deep where it is regulated. Open where it is <em>not.</em></h2>
  <p class="lede">Enterprise work concentrates in regulated, complex industries — that is where we started and where the lens is sharpest. Everything else, we take on any field. The problem does not change with the industry.</p>
  <div class="grid two">
    <div class="card">
      <span class="k">Enterprise · four industries</span>
      <h4 style="font-size:19px">Banking, Financial Services &amp; Insurance</h4><span class="sub">APRA · ASIC · AFCA</span>
      <h4 style="font-size:19px;margin-top:var(--s2)">Healthcare &amp; Clinical</h4><span class="sub">TGA · ADHA · State Health</span>
      <h4 style="font-size:19px;margin-top:var(--s2)">Government &amp; Public Sector</h4><span class="sub">Commonwealth · State</span>
      <h4 style="font-size:19px;margin-top:var(--s2)">Technology &amp; Operations</h4><span class="sub">Sector-dependent</span>
    </div>
    <div class="card" style="background:var(--navy);color:var(--cream)">
      <span class="k" style="color:var(--teal-light)">Everyone else · any field</span>
      <p style="color:#C5CBDB">Growing businesses, consulting firms and independent operators come to us from every industry there is. What we do for them does not depend on the sector — a roadmap that will not scale looks the same in construction as it does in law.</p>
      <span class="foot" style="color:#8E9AB8;border-color:var(--rule-dark);opacity:1">Growing business · Consulting firms · An idea of your own</span>
    </div>
  </div>
</div></section>

<div class="next"><div class="w"><a href="/about">
  <div><span class="k">Continue</span><span class="t">Why there is a team, and who it was named for.</span></div>
  <span class="r">Next · 06 · Founder →</span>
</a></div></div>
`;

export default function AboutPage() {
  return <RouteShell id="about" label="05 · About" markup={__MARKUP} />;
}
