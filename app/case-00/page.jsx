import RouteShell from '../_components/RouteShell';

/**
 * 09 · Case 00 · V16 · the editorial essay
 *
 * Completely rewritten 2 September 2026. The previous thirty-day website
 * story and its five counters are deleted, not archived — nothing on the
 * site references them.
 *
 * Copy source is 07_CASE_00_EDITORIAL_source_of_truth.md, because the same
 * text also publishes to Substack and the two must not drift. Markup and
 * design come from the content source, page 09. Content is locked — the
 * only edits here are technical: the document's #anchors become real
 * routes, and the shared .vol bar, <nav> and <footer> are lifted into
 * GlobalNav and GlobalFooter.
 *
 * REGISTER · this page is Editorial, not Practice. The .essay wrapper
 * remaps --display and --mono to Cormorant Garamond and Space Mono, and
 * the nav wordmark switches with it (see GlobalNav). Never mix Playfair
 * or an Inter body inside .essay.
 *
 * No product is named on this page. Intuka is introduced in Case 01, not
 * here — do not add a Products CTA.
 */

export const metadata = {
  title: 'You do not get a blank month.',
  description:
    'I built a business and its operating model at the same time, because nobody gets to stop and design first. Four months, month by month — including the parts that did not work.',
};

const __MARKUP = String.raw`
<div class="essay">
<div class="emast-band"><div class="rings"></div>
  <header class="emast">
    <span class="kick">Atlas · Field Notes · Case 00</span>
    <h1>You do not get a blank month.</h1>
    <p class="dek">I built a business and its operating model at the same time, because nobody gets to stop and design first. Four months, month by month — including the parts that did not work.</p>
    <div class="by"><span>By <b>Bijal Sejpal</b></span><span>September 2026</span><span>6 minute read</span><span class="st">Still building</span></div>
  </header>
</div>

<section style="background:var(--cream);padding-top:var(--s5)"><div class="art">
  <p class="drop">The advice I was given most often was to start with one thing and do it well. I did the opposite, and I would do it again.</p>
  <p>Since I announced I was leaving, one question has come back more than any other. <em>So what are you actually doing — consulting, or advisory?</em> Neither, quite. Working out why took four months, and I was building the thing the whole time.</p>
  <p>That last part is what I want to write about, because it is the part that gets left out. Every account of starting something has a chapter where the founder sits down and designs the business. I have read dozens of them. I have never met anyone who got that chapter.</p>
  <p><strong>You do not get a blank month.</strong> You get clients arriving before the process exists, a website going up while the positioning is still moving, and a decision about engineering that has to be made long before you know how much work there will be. The model, the operating system, the stack and the growth are all built at once, by the same person, in the same week.</p>
  <p>That is not a failure of planning. It is the actual condition — and it is exactly the condition every growing business is in, which is why so many of them end up with seven good tools and no answers.</p>
  <p>One decision did come before all of it. <strong>This was never going to be a consultancy only.</strong> Twenty years taught me to name a problem precisely, and naming it was never what I wanted to do. I wanted to be accountable for fixing it. Everything below is downstream of that.</p>

  <figure class="rail">
    <svg viewBox="0 0 460 210" aria-label="Four months rising from sense through shift to scale. Month four is still open.">
      <defs>
        <linearGradient id="rl-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#1A1A18" stop-opacity="0"/>
          <stop offset=".18" stop-color="#1A1A18" stop-opacity=".15"/>
          <stop offset=".82" stop-color="#1A1A18" stop-opacity=".15"/>
          <stop offset="1" stop-color="#1A1A18" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <path class="rl-ghost" d="M 8 142.94 A 860 860 0 0 1 452 40.75"/>
      <path class="rl-seg rl-seg--sense" d="M 53 120.36 A 860 860 0 0 1 159 79.3"/>
      <path class="rl-seg rl-seg--shift" d="M 177 73.88 A 860 860 0 0 1 283 50.35"/>
      <path class="rl-seg rl-seg--scale" d="M 301 47.72 A 860 860 0 0 1 407 40.05"/>
      <g class="rl-drop">
        <line x1="44" y1="135.62" x2="44" y2="150"/>
        <line x1="168" y1="87.53" x2="168" y2="150"/>
        <line x1="292" y1="59.99" x2="292" y2="150"/>
        <line x1="416" y1="51" x2="416" y2="150"/>
      </g>
      <g class="rl-n">
        <circle class="rl-dot rl-dot--sense" cx="44" cy="124.62" r="4.5"/>
        <circle class="rl-dot rl-dot--sense" cx="168" cy="76.53" r="4.5"/>
        <circle class="rl-dot rl-dot--shift" cx="292" cy="48.99" r="4.5"/>
        <path class="rl-open" d="M 418.05 34.36 A 6 6 0 1 1 413.95 34.36"/>
      </g>
      <g class="rl-num">
        <text x="44" y="111.62">01</text>
        <text x="168" y="63.53">02</text>
        <text x="292" y="35.99">03</text>
        <text x="416" y="27">04</text>
      </g>
      <g class="rl-lab">
        <text x="44" y="163">on paper</text>
        <text x="168" y="163">tested</text>
        <text x="292" y="163">built</text>
        <text x="416" y="163" class="is-open">live</text>
      </g>
      <g class="rl-bracket">
        <path class="rl-br rl-br--sense" d="M 50 178 L 50 182 L 162 182 L 162 178"/>
        <path class="rl-br rl-br--shift" d="M 174 178 L 174 182 L 286 182 L 286 178"/>
        <path class="rl-br rl-br--scale" d="M 298 178 L 298 182 L 410 182 L 410 178"/>
      </g>
      <g class="rl-ph">
        <text class="rl-ph--sense" x="106" y="196">SENSE</text>
        <text class="rl-ph--shift" x="230" y="196">SHIFT</text>
        <text class="rl-ph--scale" x="354" y="196">SCALE</text>
      </g>
    </svg>
  </figure>

  <span class="snum">I</span>
  <h2 class="art-h tight">Month one — what a blank page actually costs.</h2>
  <p class="qline">What is this actually going to be?</p>
  <p>Three arms: Advisory, Products, Fluency. Four markets rather than one. What each arm sells and to whom. The pricing logic — not the prices, the logic. And the boundaries of the IP, drawn early, because they are almost impossible to draw later.</p>
  <p>None of it was built. All of it was written down.</p>
  <p>I want to be honest about how unglamorous that month was, because the temptation to skip it is enormous. There is nothing to show anyone. No product, no client, no revenue. Just a document that changes every second day.</p>
  <p><strong>But on paper, a business costs nothing to change.</strong> Everything after that has a price — in code, in commitments, in what you have already told people. Sense is the cheapest month you will ever have and the most consequential. It is also the one every founder I know wishes they had spent longer in.</p>

  <span class="snum">II</span>
  <h2 class="art-h tight">Month two — advice, not feedback.</h2>
  <p class="qline">Does any of it hold outside my own head?</p>
  <p>I took the model to a dozen people. Advisers, former colleagues, people who had sat in the seats I was describing. Not a survey — real conversations with people whose judgement I trust and who had no reason to be polite.</p>
  <p>The three arms held. The four markets held.</p>
  <p><strong>The language did not.</strong> Three drafts of the positioning died in those rooms, and the version that survived came out of a conversation rather than a document.</p>
  <p>Here is the thing I would tell any founder, and it took me most of that month to learn it.</p>

  <div class="pull"><p>Ask for advice, not feedback.</p></div>

  <p>Feedback gets you encouragement. And encouragement kept coming — warmly, constantly, from people who genuinely wanted this to work. Almost none of it was information. It felt wonderful and it moved nothing.</p>
  <p>Advice is different, because advice requires the other person to imagine themselves buying it. To put their own money or their own reputation next to the thing, and then tell you what stops them.</p>
  <p>The question that finally worked was not <em>what do you think of this.</em> It was: <strong>what would stop you from buying this?</strong> The first time I asked it properly, the answer cost me a draft. That was the most useful conversation of the month.</p>

  <span class="snum">III</span>
  <h2 class="art-h tight">Month three — the decision before the tool.</h2>
  <p class="qline">What has to exist for me to be accountable, not just right?</p>
  <p>Month one's conviction had a cost, and this was the month to pay it. Advice you cannot deliver is only a recommendation. So there would be engineers — not a vendor list, a team. One team, two countries, and no handoff between the people who design and the people who build.</p>
  <p>Then the less visible work. Who holds judgement, brand and the client. Who holds architecture and build. How work actually moves — enquiry, conversation, proposal, delivery, invoice — written down before any software was involved.</p>
  <p>I nearly bought software in month one. Buying things feels like progress, and it produces something you can look at on a Tuesday.</p>
  <p><strong>A tool cannot fix a decision nobody has made.</strong> Deciding who decides was the harder work, and it had to come first. It is also the single most common thing I watched large organisations get backwards for twenty years, usually at a cost of about two years each time.</p>

  <span class="snum">IV</span>
  <h2 class="art-h tight">Month four — going live is a stage.</h2>
  <p class="qline">What has to be running before anyone arrives?</p>
  <p>The site. The rooms open for applications. The operating layer carrying real work rather than a spreadsheet and a good memory.</p>
  <p>This was the first month where things built earlier started paying for themselves rather than costing time. That compounding is real, and it arrives later than you want it to.</p>
  <p><strong>Going live is a stage, not a deadline.</strong> It deserves its own design. Most people treat it as the moment the work stops. It is the moment a different kind of work starts.</p>

  <span class="snum">V</span>
  <h2 class="art-h tight">The thing I could not buy.</h2>

  <p>Somewhere in month three I did what every growing business does. I went looking for tools.</p>
  <p>I found them, and they were good. A proper CRM. Something for invoicing. Something for the project work. Something for content. Each one solved the problem it was built for, and solved it well.</p>
  <p>Then I asked a question that crossed two of them.</p>
  <p><em>How much of this month's revenue came from conversations that started in the rooms? Which client costs more to deliver than it earns? Where is capacity actually going?</em></p>
  <p>Every one of those needed three tabs, an export, and a spreadsheet I built by hand and never opened again.</p>

  <figure class="lightfig">
    <svg viewBox="0 0 460 150" aria-label="One journey, broken across separate tools, then running unbroken">
      <text x="0" y="12" class="lf-k">ONE JOURNEY, SEVEN TOOLS</text>
      <g class="lf-brk">
        <line x1="4" y1="40" x2="56" y2="40"/><line x1="70" y1="40" x2="122" y2="40"/><line x1="136" y1="40" x2="188" y2="40"/>
        <line x1="202" y1="40" x2="254" y2="40"/><line x1="268" y1="40" x2="320" y2="40"/><line x1="334" y1="40" x2="386" y2="40"/>
        <line x1="400" y1="40" x2="452" y2="40"/>
      </g>
      <g class="lf-x"><text x="63" y="44">×</text><text x="129" y="44">×</text><text x="195" y="44">×</text><text x="261" y="44">×</text><text x="327" y="44">×</text><text x="393" y="44">×</text></g>
      <text x="0" y="104" class="lf-k gold">THE SAME JOURNEY, JOINED UP</text>
      <line class="lf-run" x1="4" y1="130" x2="452" y2="130"/>
      <g class="lf-dot"><circle cx="4" cy="130" r="3"/><circle cx="79" cy="130" r="3"/><circle cx="154" cy="130" r="3"/><circle cx="228" cy="130" r="3"/><circle cx="303" cy="130" r="3"/><circle cx="378" cy="130" r="3"/><circle cx="452" cy="130" r="3"/></g>
    </svg>
    <figcaption>Six breaks, or none. Everything between the breaks was mine to carry.</figcaption>
  </figure>

  <p>The tools were answering me point to point. <strong>Nothing was joining them up to serve the business.</strong></p>
  <p>That is not a tooling problem. It is an operating system problem — and it is precisely the gap I spent twenty years watching large organisations paper over with headcount. They can afford to. A business of one cannot.</p>
  <p>So the team and I built one. Not because we set out to make a product. Because I needed the thing to exist in order to run the business, and we happened to be the people who could build it.</p>

  <span class="snum">VI</span>
  <h2 class="art-h tight">It was never about the hours.</h2>
  <p>I could tell you how many admin hours came back. That is the number every product in this category leads with, and it is the least interesting thing about any of it.</p>
  <p>What it gave me was <strong>awareness.</strong> One place that tells me what is happening, what is due, and what is coming next month. I open it in the morning and I know where the business is — without assembling it from four places and my own memory.</p>
  <p>And awareness is what buys the decisions. Before, I made calls on instinct. Not because instinct was better, but because getting the information cost more than the decision was worth. <strong>Now the call gets made on something.</strong></p>
  <p>I have said for years that time is the only thing you cannot get more of. Running this on my own made that literal in a way it never was inside a large organisation. Every hour on admin was an hour losing money or losing time with my family. Usually both.</p>
  <p>And the worst of it was never the hours. It was carrying a hundred small unfinished things around at nine o'clock at night. None of them important. All of them mine.</p>

  <div class="pull"><p>That is what went away. Not the tasks — the low-grade permanent worry that something has been dropped.</p></div>

  <span class="snum">VII</span>
  <h2 class="art-h tight">What did not work.</h2>
  <p>Three, honestly.</p>
  <p><strong>I mistook encouragement for validation.</strong> Everyone I spoke to in month two was supportive. It took several conversations to work out that supportive is not the same as <em>would buy</em>, and to start asking the question that actually hurt.</p>
  <p><strong>I over-configured before I had volume.</strong> Two modules set up for a business three times the size, then simplified back. Configure for the next six months, not the next three years. The version of you that needs the complexity will build it better than the version of you guessing at it now.</p>
  <p><strong>I wrote the process after the first client, not before.</strong> It should have been before. I now do that work in the first week of every engagement, because I know exactly what it costs not to.</p>

  <span class="snum">VIII</span>
  <h2 class="art-h tight">The four questions.</h2>
  <p>If you take one thing from this, take these. One per month, in order. They are the whole method and they cost nothing.</p>
  <ol class="fourq">
    <li>What is this actually going to be?</li>
    <li>Does any of it hold outside my own head?</li>
    <li>What has to exist for me to be accountable, not just right?</li>
    <li>What has to be running before anyone arrives?</li>
  </ol>
  <p><strong>If you cannot answer one and two, do not spend money on three.</strong></p>
  <p>That is the mistake I nearly made, and it is the one I see most often — in businesses of one and in businesses of ten thousand. The size changes. The mistake does not.</p>

  <div class="signoff">
    <p>Still building. I will write this again in three months with what changed, including whatever did not work.</p>
    <p class="saying">Change is constant. Continuous improvement and iteration is life.</p>
    <p class="nom">— Bijal</p>
    <svg class="cl-mark" viewBox="0 0 400 400" fill="none" aria-hidden="true" style="margin-top:var(--s3)">
      <g transform="translate(200 200)" stroke-linecap="round" stroke-width="26" fill="none">
        <path d="M 22.57,-128.03 A 130,130 0 0,1 112.6,65" stroke="#00B5AD" opacity=".45"/>
        <path d="M 112.6,65 A 130,130 0 0,1 -112.6,65" stroke="#1A1A18" opacity=".28"/>
        <path d="M -112.6,65 A 130,130 0 0,1 -22.57,-128.03" stroke="#C9A84C" opacity=".45"/>
      </g>
    </svg>
  </div>

  <div class="endnote">
    <p>A note at the end rather than the middle: the system we built gets its own piece — Case 01, next. If you run a growing business and you recognised the three-tabs-and-a-spreadsheet problem, the first trial is opening and <a href="/trial">I would like you in it</a>. And if something here is wrong, or you would have done it differently — <a href="/contact">advice, not feedback</a>. It is the thing I would most like back.</p>
  </div>

  <div class="closing">
    <p class="cl-var">You cannot design what you have not run.</p>
    <p class="cl-fix">The ring never closes.</p>
    <svg class="cl-mark" viewBox="0 0 400 400" fill="none" aria-hidden="true">
      <g transform="translate(200 200)" stroke-linecap="round" stroke-width="26" fill="none">
        <path d="M 22.57,-128.03 A 130,130 0 0,1 112.6,65" stroke="#00B5AD" opacity=".45"/>
        <path d="M 112.6,65 A 130,130 0 0,1 -112.6,65" stroke="#1A1A18" opacity=".28"/>
        <path d="M -112.6,65 A 130,130 0 0,1 -22.57,-128.03" stroke="#C9A84C" opacity=".45"/>
      </g>
    </svg>
  </div>
</div></section>
</div>

<div class="next"><div class="w"><a href="/atlas">
  <div><span class="k">Coming next</span><span class="t">Case 01 — the system we built, and what it changed.</span></div>
  <span class="r">Published through Atlas →</span>
</a></div></div>
`;

export default function Case00Page() {
  return (
    <RouteShell
      id="case00"
      label="09 · Case 00"
      markup={__MARKUP}
      register="editorial"
    />
  );
}
