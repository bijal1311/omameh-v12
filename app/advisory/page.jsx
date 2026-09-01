import RouteShell from '../_components/RouteShell';

/**
 * 02 · Advisory · V16
 *
 * Markup ported verbatim from 02_CONTENT_SOURCE.html. Content is locked —
 * not a word changes. The only edits are technical: the document's
 * #anchors become real routes, and the shared .vol bar, <nav> and
 * <footer> are lifted into GlobalNav and GlobalFooter.
 */

export const metadata = {
  title: "We work out what is actually in the way.",
  description: "Most of what slows an organisation down was a sensible fix at the time. We find the ones that have earned a redesign, and do it with the people who live inside them.",
};

const __MARKUP = String.raw`
<section class="hero"><div class="w">
  <p class="eyebrow">Advisory</p>
  <h1>We work out what is actually <em>in the way.</em></h1>
  <p class="lede">Most of what slows an organisation down was a sensible fix at the time. We find the ones that have earned a redesign, and do it with the people who live inside them.</p>
</div></section>

<section class="warm"><div class="w">
  <p class="eyebrow">Start here</p>
  <h2>The Pressure-test.</h2>
  <p class="lede">Where the gap sits between what your strategy assumes and what the organisation can actually carry. Most engagements begin here, and some end here.</p>
  <div class="grid three">
    <div class="card">
      <span class="k">What happens</span>
      <p>Conversations with the chair, the chief executive and the executive team — separately, so people say the true thing.</p>
      <p>We read what you already have: the strategy, the operating model, the last two board packs.</p>
      <p>The diagnostic goes to the leadership group, scored against eight dimensions.</p>
      <p>We sit in on how decisions actually get made, rather than how the process says they do.</p>
    </div>
    <div class="card">
      <span class="k">What you hold at the end</span>
      <p>An honest read of where the organisation sits, and where it thinks it sits.</p>
      <p>The three things costing you most, in order, with the working shown.</p>
      <p>A scored position against the eight dimensions, to be re-scored in a year.</p>
      <p>A clear recommendation — including whether to do nothing.</p>
    </div>
    <div class="card" style="background:var(--navy);color:var(--cream)">
      <span class="k" style="color:var(--teal-light)">What it is not</span>
      <p style="color:#C5CBDB">Not a proposal in disguise. The read is the deliverable, and it is yours whether we work together afterwards or not.</p>
      <p style="color:#C5CBDB"><strong style="color:var(--cream)">If nothing needs changing, we will tell you that</strong> — and it has happened.</p>
      <a class="link" href="/contact">Start a Pressure-test</a>
    </div>
  </div>
</div></section>

<section><div class="w">
  <p class="eyebrow">Five pillars</p>
  <h2>What we modernise.</h2>
  <p class="lede">The same five, whether you are a bank or a practice of twelve. <strong>Only one of them is governance.</strong></p>
  <div class="pillars">
    <div class="pillar"><span class="n">01</span><div><span class="t">Operating Model</span><span class="do">The model and the operating system beneath it — how work moves, who decides, and what the structure can actually carry.</span></div><span class="q">Can your 2015 operating model carry a 2030 strategy?</span></div>
    <div class="pillar"><span class="n">02</span><div><span class="t">Workforce, Skills &amp; Culture</span><span class="do">What your people will need to be good at, and how the culture has to change for them to get there.</span></div><span class="q">Do you know what skills you will need in three years?</span></div>
    <div class="pillar"><span class="n">03</span><div><span class="t">Right Talent in the Right Place</span><span class="do">Which work needs a person, which is better done by an agent, and where each of them sits. Decided deliberately, not by whoever is available.</span></div><span class="q">Which work needs a human, which needs an agent — and who decided?</span></div>
    <div class="pillar"><span class="n">04</span><div><span class="t">AI Governance</span><span class="do">Accountability, evidence and the obligations you are already under. You are responsible for what your organisation asks an AI, whether or not anyone has said so out loud.</span></div><span class="q">Who is accountable for AI, and do they have what they need?</span></div>
    <div class="pillar"><span class="n">05</span><div><span class="t">AI-Era Innovation</span><span class="do">A system for finding and building the next thing — which is where our own platforms and builds come in, when the answer is something that does not exist yet.</span></div><span class="q">Is your next breakthrough luck, or is there a system behind it?</span></div>
  </div>
</div></section>

<section class="warm"><div class="w">
  <p class="eyebrow">What changes</p>
  <h2>The five are constant. The shape is <em>not.</em></h2>
  <p class="lede">Every organisation needs all five. What differs is the sequence, the depth, and how long it takes — and that depends entirely on who you are.</p>
  <div class="grid two">
    <div class="card"><span class="k">Enterprise</span><p>Phased, with governance around each phase and a board-visible read at every gate. We embed, and our engineers work inside your teams for as long as the build needs them.</p></div>
    <div class="card"><span class="k">Growing business</span><p>One or two pillars at a time, sized to what you can absorb while still running the business. The first one has to pay for the second.</p></div>
    <div class="card"><span class="k">Consulting firms</span><p>We work behind you, on your client's problem, to your method. Your name on the work and your relationship intact.</p></div>
    <div class="card"><span class="k">An idea of your own</span><p>Design sessions with you rather than a report to you, then a squad stood up to build what you designed.</p></div>
  </div>
  <div class="rule"></div>
  <p class="lede"><strong>How long depends on which of these you are.</strong> A practice of twelve and a bank do not get the same calendar, and pretending otherwise is how engagements go wrong. We will tell you the shape and the sequence in the first conversation.</p>
</div></section>

<section><div class="w-narrow">
  <p class="eyebrow">The honest part</p>
  <h2>A redesign asks something of <em>people.</em></h2>
  <p class="lede">Someone built the process you are about to change, and defended it, and was right to. Someone else has done a job for nine years that is about to look different. We do not pretend that part is easy, and we do not do it to them from a slide — they are in the room, and they help decide. It takes longer that way. It is the only version that holds after we go.</p>
</div></section>

<section class="dark"><div class="w">
  <p class="eyebrow">Where it leads</p>
  <h2>Sometimes the answer is not <em>more advice.</em></h2>
  <div class="grid three">
    <div class="card"><span class="k">When the answer is a build</span><h4>We build it</h4><p>Our own engineers, on our own platforms where they fit, and something new where they do not. The team that designed it is the team that ships it.</p><a class="link" href="/products">See what we have built</a></div>
    <div class="card"><span class="k">When the answer is fluency</span><h4>AI-Era Fluency</h4><p>Rooms for boards, executive teams and function leadership — so the next decision does not need us in it. Ten people, no slides, your own decisions as the material.</p><a class="link" href="/fluency">See the calendar</a></div>
    <div class="card"><span class="k">When you want us close</span><h4>Standing counsel</h4><p>A retained room for the leader inside the transition. Strategy stress-tests, escalations, regulator readiness, and the call you cannot make out loud yet. Ongoing, not a project.</p><a class="link" href="/contact">Explore standing counsel</a></div>
  </div>
</div></section>

<div class="next"><div class="w"><a href="/products">
  <div><span class="k">Continue</span><span class="t">And when the answer is something that has to be built.</span></div>
  <span class="r">Next · 03 · Products →</span>
</a></div></div>
`;

export default function AdvisoryPage() {
  return <RouteShell id="advisory" label="02 · Advisory" markup={__MARKUP} />;
}
