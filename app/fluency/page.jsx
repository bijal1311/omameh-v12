import RouteShell from '../_components/RouteShell';

/**
 * 04 · Fluency · V16
 *
 * Markup ported verbatim from 02_CONTENT_SOURCE.html. Content is locked —
 * not a word changes. The only edits are technical: the document's
 * #anchors become real routes, and the shared .vol bar, <nav> and
 * <footer> are lifted into GlobalNav and GlobalFooter.
 */

export const metadata = {
  title: "Unlearn. Relearn. Reinvent.",
  description: "The decisions you actually have to make. Not a lecture, not a certificate, and nothing you could have read.",
};

const __MARKUP = String.raw`
<section class="hero"><div class="w">
  <p class="eyebrow">AI-Era Fluency</p>
  <h1>Unlearn. Relearn. <em>Reinvent.</em></h1>
  <p class="lede">The decisions you actually have to make. Not a lecture, not a certificate, and nothing you could have read.</p>
  <div class="cta"><a class="btn" href="/contact">Apply for a seat</a><a class="btn ghost" href="/contact">Run it for your team</a></div>
</div></section>

<section class="warm"><div class="w-narrow">
  <p class="eyebrow">Why this exists</p>
  <h2>What this actually is. What it is <em>not.</em> And what to build.</h2>
  <p class="lede">Three questions, and almost nobody answers all three in the same room. What the technology genuinely does today. Where it is going, and what that means for the work you do. And how to build an operating stack of your own rather than renting someone else's.</p>
  <p class="lede" style="margin-top:var(--s3)">Tools change every six months. Those three do not — which is why what you leave with keeps its value.</p>
  <p class="lede" style="margin-top:var(--s3)"><strong>Anyone can take a seat.</strong> The board director who has to sign something off. The founder building the thing. And the person who is simply curious and would rather be early than catch up later.</p>
</div></section>

<section><div class="w">
  <p class="eyebrow">The calendar</p>
  <h2>Every room pilots <em>this year.</em></h2>
  <p class="lede">All of them online, all of them ten seats, all of them by application. Each runs once as a pilot. The ones that work come back on a schedule in 2027.</p>
  <div class="rows">
    <div class="row now"><span class="d">Saturdays from 19 Sep</span><span class="n">The Independent Practice</span><span class="s">First cohort · applications close 12 Sep</span><a class="link" href="/contact" style="font-size:12.5px">Apply</a></div>
    <div class="row"><span class="d">Thu 15 October</span><span class="n">AI Fluency</span><span class="s">Pilot · online · ten seats</span><a class="link" href="/contact" style="font-size:12.5px">Apply</a></div>
    <div class="row"><span class="d">Thu 29 October</span><span class="n">Mindset by Design</span><span class="s">Pilot · online · ten seats</span><a class="link" href="/contact" style="font-size:12.5px">Apply</a></div>
    <div class="row"><span class="d">Thu 12 November</span><span class="n">Leader-Led AI</span><span class="s">Pilot · online · ten seats</span><a class="link" href="/contact" style="font-size:12.5px">Apply</a></div>
    <div class="row"><span class="d">Thu 26 November</span><span class="n">AI Governance</span><span class="s">Pilot · online · ten seats</span><a class="link" href="/contact" style="font-size:12.5px">Apply</a></div>
    <div class="row"><span class="d">Wed 9 December</span><span class="n">Operating Model for the AI Era</span><span class="s">Pilot · online · ten seats</span><a class="link" href="/contact" style="font-size:12.5px">Apply</a></div>
    <div class="row later"><span class="d">From February 2027</span><span class="n">The rooms, on a schedule</span><span class="s">Monthly or quarterly, and closed rooms on request</span><a class="link" href="/contact" style="font-size:12.5px">Join the list</a></div>
    <div class="row later"><span class="d">2027</span><span class="n">The Roundtables</span><span class="s">One industry, one table · quarterly</span><a class="link" href="/contact" style="font-size:12.5px">Register interest</a></div>
    <div class="row later"><span class="d">2027</span><span class="n">The Academy · a full week</span><span class="s">Every room, in sequence, as one programme</span><a class="link" href="/contact" style="font-size:12.5px">Register interest</a></div>
  </div>
  <div class="rule"></div>
  <p class="lede"><strong>Every room is an application, not a checkout.</strong> Ten seats, and we read all of them. We pick for range — different industries, different problems — because half of what happens in the room comes from the other nine people. Everyone hears back either way.</p>
</div></section>

<section class="warm"><div class="w">
  <p class="eyebrow">The rooms</p>
  <h2>Ten people. Online. By <em>application.</em></h2>
  <p class="lede">Every room runs online this year, so where you are is not a reason to miss one. Closed rooms for boards and executive teams run in person, at your place.</p>

  <div class="feature lead" style="margin-top:var(--s4)">
    <div class="top"><span class="eyebrow" style="margin:0">C01 · Three sessions · Online</span><span class="chip live">From 19 September</span></div>
    <h3>The Independent Practice</h3>
    <p style="font-family:var(--mono);font-size:11.5px;color:var(--navy);padding:var(--s2) 0;border-top:1px solid var(--rule);border-bottom:1px solid var(--rule)">Saturdays, from 19 September · 2:00–4:00pm AEST<br><span style="color:var(--ink-soft);font-size:10px">12pm Singapore · 10:30am India · 8am Dubai · Three sessions, a week apart</span></p>
    <p class="lede">Three Saturdays, a week apart. You map your own week, build one part of it to run without you, then report what broke. You leave with something working, not notes.</p>
    <p class="who">For the consultant, fractional executive or second-act leader running a practice alone, doing four jobs when clients pay for one.</p>
    <div class="apply">
      <h4>Ten seats. We read every application.</h4>
      <div class="cols">
        <div><b>Apply if</b><ul><li>You run a practice on your own, or with one or two others</li><li>There is real revenue — this is not the year you are testing whether it works</li><li>You can name the thing that is eating your week</li><li>You will do the work between the sessions</li></ul></div>
        <div><b>Do not apply if</b><ul><li>You want a general introduction to AI — that is a different room</li><li>You cannot make all three Saturdays</li><li>You would send someone in your place</li></ul></div>
      </div>
      <span class="note">We pick for range — different industries, different problems — so the room teaches itself as much as we do. Everyone hears back either way.</span>
    </div>
    <div class="cta" style="margin-top:0"><a class="btn" href="/contact">Apply for a seat</a></div>
  </div>

  <div class="grid two">
    <div class="card"><div class="top" style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap"><span class="k">C02 · One day · Online</span><span class="chip date">Thu 15 Oct</span></div><h4>AI Fluency</h4><p>What the tools are, what they cost, what they reliably get wrong — and how to tell a real capability from a good deck.</p><p class="who">For the leader making decisions about something nobody has explained properly.</p><a class="link" href="/contact">Apply</a></div>
    <div class="card"><div class="top" style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap"><span class="k">C03 · One day · Online</span><span class="chip date">Thu 12 Nov</span></div><h4>Leader-Led AI</h4><p>The four decisions you cannot delegate, written down, and a ninety-day plan you signed.</p><p class="who">For the executive whose team is already using these tools, and who wants the line drawn before it is needed rather than after.</p><a class="link" href="/contact">Apply</a></div>
    <div class="card"><div class="top" style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap"><span class="k">C04 · One day · Online</span><span class="chip date">Thu 26 Nov</span></div><h4>AI Governance</h4><p>An accountability map for your own organisation, and what a regulator will actually ask for.</p><p class="who">For the director who wants to be able to answer what their organisation asked an AI last quarter — before anyone asks it.</p><a class="link" href="/contact">Apply</a></div>
    <div class="card"><div class="top" style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap"><span class="k">C05 · One day · Online</span><span class="chip date">Thu 29 Oct</span></div><h4>Mindset by Design</h4><p>Your assumptions surfaced and tested, one real decision loop redesigned, and a peer holding you to it.</p><p class="who">For the leader whose instincts are excellent and were formed for a different set of conditions.</p><a class="link" href="/contact">Apply</a></div>
    <div class="card"><div class="top" style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap"><span class="k">C06 · One day · Online</span><span class="chip date">Wed 9 Dec</span></div><h4>Operating Model for the AI Era</h4><p>Your operating model mapped against the ambition it carries, and what to change first.</p><p class="who">For the executive ready to change how decisions get made, not only which tools support them.</p><a class="link" href="/contact">Apply</a></div>
    <div class="card later"><div class="top" style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap"><span class="k">The Academy · A full week</span><span class="chip soon">2027</span></div><h4>Every room, in sequence.</h4><p>All six, run as one programme across a week — the whole arc rather than a single day. For the leader who would rather do it once, properly.</p><p class="who">Opens after the pilots have run and the rooms have earned it.</p><a class="link" href="/contact">Register interest</a></div>
  </div>
</div></section>

<section><div class="w">
  <p class="eyebrow">Closed rooms</p>
  <h2>Or bring your own <em>ten.</em></h2>
  <p class="lede">Every room above runs closed, for one organisation. Same format — except everyone works for you, and the material is your decisions instead of worked examples.</p>
  <div class="grid three">
    <div class="card"><h4>Boards</h4><p>Governance, accountability and the questions to put to management.</p></div>
    <div class="card"><h4>Executive teams</h4><p>One decision loop, everybody who has to live with the answer in the room.</p></div>
    <div class="card"><h4>Function leadership</h4><p>The people running the work, with the workflows they actually run.</p></div>
  </div>
  <div class="cta"><a class="btn" href="/contact">Contact us for dates</a></div>
</div></section>

<section class="warm"><div class="w">
  <p class="eyebrow">From 2027 · The Roundtables</p>
  <h2>One industry. One table. The next <em>ten years.</em></h2>
  <p class="lede">Ninety minutes and a dozen people who actually run something in the same industry, working on the question none of them can answer alone: where is this going, and what does it mean for the way we operate?</p>
  <p class="lede" style="margin-top:var(--s3)">What is already working elsewhere in the world. What the regulator is going to want before it asks. What the model of this industry looks like in ten years, and which parts of today's version do not survive it.</p>

  <div class="grid three" style="margin-top:var(--s4)">
    <div class="card"><span class="k">Who is in it</span><p>People running the work, not people representing it. Ten or twelve, one industry, no two from the same organisation.</p></div>
    <div class="card"><span class="k">How it runs</span><p>Chatham House. No slides, no panel, no vendors in the room. We convene it and chair it, and we write up what the table agreed and what it could not.</p></div>
    <div class="card"><span class="k">What it costs</span><p>Nothing. <strong>And nothing is sold in the room — by anyone, including us.</strong> The moment it becomes a funnel it stops being worth attending.</p></div>
  </div>

  <div class="rule"></div>
  <p class="eyebrow">The tables we are convening first</p>
  <div class="tags" style="margin-top:var(--s2)">
    <span>Insurance</span><span>Superannuation</span><span>Banking</span><span>Risk &amp; Regulation</span><span>Health &amp; Clinical</span><span>Government &amp; Public Sector</span><span>Hyperscalers</span><span>SaaS &amp; Software</span><span>Startups &amp; Scale-ups</span><span>Technology Operations</span>
  </div>
  <div class="cta"><a class="btn ghost" href="/contact">Register interest in a table</a></div>
</div></section>

<section class="dark"><div class="w">
  <p class="eyebrow">What it is not</p>
  <div class="grid three">
    <div class="card"><h4>Not a certificate.</h4><p>Proof is the difference between your score walking in and your score a year later.</p></div>
    <div class="card"><h4>Not e-learning.</h4><p>Nothing is recorded. The value is the other nine people.</p></div>
    <div class="card"><h4>Not delegable.</h4><p>The shift has to land in the person making the decision.</p></div>
  </div>
  <div class="rule"></div>
  <h2>Ten seats. Then the room is <em>full.</em></h2>
  <div class="cta"><a class="btn" href="/contact">Apply for a seat</a><a class="btn ghost" href="/contact">Run it for your team</a></div>
</div></section>

<div class="next"><div class="w"><a href="/about">
  <div><span class="k">Continue</span><span class="t">The people who design it are the people who build it.</span></div>
  <span class="r">Next · 05 · About →</span>
</a></div></div>
`;

export default function FluencyPage() {
  return <RouteShell id="fluency" label="04 · Fluency" markup={__MARKUP} />;
}
