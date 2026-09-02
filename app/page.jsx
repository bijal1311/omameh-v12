import RouteShell from './_components/RouteShell';

/**
 * 01 · Home · V16
 *
 * Markup ported verbatim from 02_CONTENT_SOURCE.html. Content is locked —
 * not a word changes. The only edits are technical: the document's
 * #anchors become real routes, and the shared .vol bar, <nav> and
 * <footer> are lifted into GlobalNav and GlobalFooter.
 */

export const metadata = {
  title: "Omameh",
  description: "We find what is holding you back, build what moves it, and leave you able to run it.",
};

const __MARKUP = String.raw`
<section class="deep hero" style="position:relative;overflow:hidden"><div class="w" style="position:relative"><div class="hero-grid">
  <div>
    <div class="lockup">
      <span class="om">Om<i>a</i>meh</span>
      <div class="est"><i></i><span>Est. 2026</span><i class="grow"></i></div>
    </div>
    <h1>Everyone got the technology. Almost nobody got their <em>time back.</em></h1>
    <p class="lede">We find what is holding you back, build what moves it, and leave you able to run it.</p>
    <div class="cta"><a class="btn" href="/contact">Let's talk</a></div>
  </div>

  <div class="markstage"><span class="mr mr1"></span><span class="mr mr2"></span><span class="mr mr3"></span>
  <svg class="mark" viewBox="0 0 400 400" fill="none" role="img" aria-label="Omameh">
    <defs>
      <radialGradient id="g-centre" cx="42%" cy="34%" r="65%">
        <stop offset="0%" stop-color="#F1DA8C"/><stop offset="35%" stop-color="#E5C56F"/>
        <stop offset="70%" stop-color="#C9A84C"/><stop offset="100%" stop-color="#B8941F"/>
      </radialGradient>
      <linearGradient id="g-teal" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#00B5AD" stop-opacity=".30"/><stop offset="50%" stop-color="#00B5AD" stop-opacity="1"/><stop offset="100%" stop-color="#00D4CB" stop-opacity=".50"/></linearGradient>
      <linearGradient id="g-white" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FFFFFF" stop-opacity=".40"/><stop offset="50%" stop-color="#FFFFFF" stop-opacity="1"/><stop offset="100%" stop-color="#FFFFFF" stop-opacity=".55"/></linearGradient>
      <linearGradient id="g-gold" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#C9A84C" stop-opacity=".45"/><stop offset="50%" stop-color="#C9A84C" stop-opacity="1"/><stop offset="100%" stop-color="#E5C56F" stop-opacity=".60"/></linearGradient>
      <path id="orbit-path" d="M 200,200 m -178,0 a 178,178 0 1,1 356,0 a 178,178 0 1,1 -356,0"/>
    </defs>
    <g class="m-orbitring"><circle cx="200" cy="200" r="194" stroke="rgba(255,255,255,0.10)" stroke-width=".75" stroke-dasharray="1.5 9" fill="none"/></g>
    <g class="m-compass">
      <circle class="halo" cx="394" cy="200" r="6.5" fill="#C9A84C" opacity=".18"/><circle cx="394" cy="200" r="3.5" fill="#C9A84C" opacity=".92"/>
      <circle class="halo" cx="200" cy="394" r="6.5" fill="#C9A84C" opacity=".18"/><circle cx="200" cy="394" r="3.5" fill="#C9A84C" opacity=".92"/>
      <circle class="halo" cx="6" cy="200" r="6.5" fill="#C9A84C" opacity=".18"/><circle cx="6" cy="200" r="3.5" fill="#C9A84C" opacity=".92"/>
    </g>
    <g class="m-orbittext"><text><textPath href="#orbit-path" startOffset="0">UNLEARN · RELEARN · REINVENT · UNLEARN · RELEARN · REINVENT ·</textPath></text></g>
    <g class="m-tick"><g transform="translate(200 200)" stroke="rgba(201,168,76,0.55)" stroke-width="1" stroke-linecap="round">
      <line y1="-92" y2="-86"/><line y1="-92" y2="-86" transform="rotate(30)"/><line y1="-92" y2="-86" transform="rotate(60)"/><line y1="-92" y2="-86" transform="rotate(90)"/>
      <line y1="-92" y2="-86" transform="rotate(120)"/><line y1="-92" y2="-86" transform="rotate(150)"/><line y1="-92" y2="-86" transform="rotate(180)"/><line y1="-92" y2="-86" transform="rotate(210)"/>
      <line y1="-92" y2="-86" transform="rotate(240)"/><line y1="-92" y2="-86" transform="rotate(270)"/><line y1="-92" y2="-86" transform="rotate(300)"/><line y1="-92" y2="-86" transform="rotate(330)"/>
      <circle r="86" fill="none" stroke="rgba(201,168,76,0.16)" stroke-width=".6"/>
    </g></g>
    <circle cx="200" cy="200" r="148" stroke="rgba(0,212,203,0.13)" stroke-width=".75" fill="none"/>
    <line x1="200" y1="60" x2="200" y2="180" stroke="rgba(255,255,255,0.10)" stroke-width=".75"/>
    <g class="m-arcs"><g transform="translate(200 200)">
      <path d="M 22.57,-128.03 A 130,130 0 0,1 112.6,65" stroke="url(#g-teal)" stroke-width="14" stroke-linecap="round" fill="none"/>
      <path d="M 112.6,65 A 130,130 0 0,1 -112.6,65" stroke="url(#g-white)" stroke-width="14" stroke-linecap="round" fill="none"/>
      <path d="M -112.6,65 A 130,130 0 0,1 -22.57,-128.03" stroke="url(#g-gold)" stroke-width="14" stroke-linecap="round" fill="none"/>
      <circle cx="22.57" cy="-128.03" r="3.5" fill="#E5C56F" opacity=".18"/><circle cx="22.57" cy="-128.03" r="2" fill="#E5C56F"/>
      <circle cx="-22.57" cy="-128.03" r="3.5" fill="#E5C56F" opacity=".18"/><circle cx="-22.57" cy="-128.03" r="2" fill="#E5C56F"/>
    </g></g>
    <g><circle class="spark a" cx="200" cy="54" r="3.5" fill="#00D4CB"/><circle class="spark b" cx="200" cy="54" r="3" fill="#00D4CB"/><circle class="spark c" cx="200" cy="54" r="2.5" fill="#00D4CB"/></g>
    <g class="m-centre" transform="translate(200 200)"><circle r="12" fill="url(#g-centre)"/><circle cx="-1.8" cy="-1.8" r="3" fill="#FFF6D9" opacity=".7"/></g>
  </svg></div>
</div></div></section>

<section class="dark"><div class="w">
  <p class="eyebrow">01 · The reframe</p>
  <h2>The same gap, four times.</h2>
  <ul class="statements">
    <li>The enterprise ran the pilot. <em>The team still does the workaround.</em></li>
    <li>The growing business bought the tools. <em>The founder still cannot take a holiday.</em></li>
    <li>The consultant writes faster <em>and works the same weekends.</em></li>
    <li>The expert has solved it fifty times, <em>and it leaves when they do.</em></li>
  </ul>
  <p class="stamp">Four businesses · One gap worth closing</p>
</div></section>

<section><div class="w">
  <p class="eyebrow">02 · What we do</p>
  <h2>We design it. We build it. You keep the <em>judgement.</em></h2>
  <div class="grid two">
    <div class="card"><span class="k">Advisory</span><h4>We design it.</h4><p>What is in the way, and what replaces it — worked out with your people, not handed to them.</p></div>
    <div class="card"><span class="k">Products</span><h4>We build it.</h4><p>The same team that designed it. No handoff, no translation layer, no second contract.</p></div>
  </div>
  <div class="grid" style="margin-top:0;border-top:0">
    <div class="card" style="background:var(--navy);color:var(--cream)">
      <span class="k" style="color:var(--teal-light)">Fluency · underneath both</span>
      <h4>So you can make these calls without us in the room.</h4>
      <p style="color:#C5CBDB">The decisions keep coming after we leave — the next tool, the next proposal, the next person selling you something. Fluency is where your people learn to tell a real capability from a good demo, and a solid answer from a plausible one. <strong style="color:var(--cream)">Including ours.</strong></p>
      <p style="color:var(--gold-light);font-weight:500">Most firms sell one of the three and hand you off for the rest.</p>
    </div>
  </div>
</div></section>

<section class="warm"><div class="w">
  <p class="eyebrow">03 · How</p>
  <h2>The same three moves. Every time.</h2>
  <div class="seq">
    <div class="step"><span class="n">01</span><span class="t">SENSE</span><span><b>Where you actually are.</b>An honest read of the operation as it runs today — not the one in the strategy deck.</span></div>
    <div class="step"><span class="n">02</span><span class="t">SHIFT</span><span><b>Redesigned with your people.</b>Not around them, and not by us alone. The people who live inside it help rebuild it.</span></div>
    <div class="step"><span class="n">03</span><span class="t">SCALE</span><span><b>Yours to run, and we stay reachable.</b>Embedded until it holds on its own. We do not disappear at handover.</span></div>
  </div>
  <div class="rule"></div>
  <p class="lede">Whether it is a bank or a practice of twelve.</p>
</div></section>

<section><div class="w">
  <p class="eyebrow">04 · Who we work with</p>
  <h2>Four ambitions. Four ways we <em>show up.</em></h2>
  <div class="grid two">
    <div class="card">
      <span class="k">01 · Enterprise</span><span class="sub">Where you are going</span>
      <h4>AI at scale, in the growth plan rather than the risk register.</h4>
      <p>The technology is table stakes now. What has to grow alongside it is governance capability, leadership fluency and the people carrying it — because that is what lets you move rather than what stops you. Human-Led, AI-Operated, in practice.</p>
      <span class="role">We are your solution owner.</span>
    </div>
    <div class="card">
      <span class="k">02 · Growing business</span><span class="sub">Where you are going</span>
      <h4>From a product that works to a business that scales.</h4>
      <p>The product is the easier half. We work the roadmap, the commercial model and the operations underneath it — so what you have built can carry where you are taking it.</p>
      <span class="role">We are your growth and operations partner.</span>
    </div>
    <div class="card">
      <span class="k">03 · Consulting firms</span><span class="sub">Where you are going</span>
      <h4>From delivering programmes to solving problems.</h4>
      <p>You are being bought for delivery when you could be bought for the answer. We bring the engineering and the build so you can sell the outcome. You keep the client, the contract and the credit.</p>
      <span class="role">We are your professional services arm.</span>
    </div>
    <div class="card">
      <span class="k">04 · An idea of your own</span><span class="sub">Where you are going</span>
      <h4>From what you know to something that runs without you.</h4>
      <p>Your judgement is the valuable part, and right now it only works when you are in the room. We stand up your squad and build alongside you — and you own everything you make with us.</p>
      <span class="role">We are your build partner.</span>
    </div>
  </div>
</div></section>

<section class="dark"><div class="w">
  <p class="eyebrow">Case 00</p>
  <h2>We are the <em>first case.</em></h2>
  <p class="lede">Everything on this site, we did to ourselves first — and in this order.</p>
  <div class="grid four">
    <div class="card"><span class="k">01</span><h4>Positioned it</h4><p>The practice, the brand, the legals, the architecture underneath. Before a single client, the thing itself had to be designed.</p><span class="foot" style="color:var(--teal-light);border-color:var(--rule-dark);opacity:1">Advisory</span></div>
    <div class="card"><span class="k">02</span><h4>Built the team</h4><p>Engineering, deliberately, because advice you cannot deliver is only a recommendation. We wanted to be accountable for the fix, not the diagnosis.</p><span class="foot" style="color:var(--teal-light);border-color:var(--rule-dark);opacity:1">Products</span></div>
    <div class="card"><span class="k">03</span><h4>Made it teachable</h4><p>What we learned doing it became the rooms. If it only works when we are holding it, it is not a method.</p><span class="foot" style="color:var(--teal-light);border-color:var(--rule-dark);opacity:1">Fluency</span></div>
    <div class="card"><span class="k">04</span><h4>Built the products</h4><p>Eight platforms, and the ones only one client will ever need. This is the phase we are in now.</p><span class="foot" style="color:var(--teal-light);border-color:var(--rule-dark);opacity:1">Products</span></div>
  </div>
  <div class="cta"><a class="btn" href="/case-00">Read Case 00</a></div>
</div></section>

<section><div class="w">
  <p class="eyebrow">05 · What people ask us</p>
  <h2>The four questions we <em>actually get.</em></h2>
  <p class="lede">One from each of you. These are the awkward ones, so they are the ones on the page.</p>
  <div class="grid two">
    <div class="card"><span class="k">Enterprise</span><h4>What happens when you leave?</h4><p>Your team runs it. That is the whole design — we build with your people rather than around them, and the handover is a phase with a date on it, not a document at the end. We are finished when you no longer need us.</p></div>
    <div class="card"><span class="k">Growing business</span><h4>We can't afford a transformation.</h4><p>You do not need one. We find the single thing that will return the most, fix that, and stop. You decide whether there is a second one — with the first already paying for itself.</p></div>
    <div class="card"><span class="k">Consulting firms</span><h4>Why would we hand our client to you?</h4><p>You keep them. The relationship, the contract and the invoice stay yours — we are the engineering team behind you, and we appear only when you want us to.</p></div>
    <div class="card"><span class="k">An idea of your own</span><h4>Who owns what we build?</h4><p>You do. Written in before the first line of code, not negotiated at the end. We build it with you, and your squad keeps running it long after we step back.</p></div>
  </div>
  <div class="grid" style="margin-top:0;border-top:0"><div class="card" style="background:var(--navy);color:var(--cream)">
    <h4>And the one nobody asks out loud — have you ever told a client to stop?</h4>
    <p style="color:#C5CBDB">Yes, more than once. We would rather protect your budget than protect our next phase. It is the same reason our clients come back.</p>
  </div></div>
</div></section>



<div class="next"><div class="w"><a href="/advisory">
  <div><span class="k">Continue</span><span class="t">What is actually in the way, and what replaces it.</span></div>
  <span class="r">Next · 02 · Advisory →</span>
</a></div></div>
`;

export default function HomePage() {
  return <RouteShell id="home" label="01 · Home" markup={__MARKUP} />;
}
