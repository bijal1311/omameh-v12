import RouteShell from '../_components/RouteShell';

export const metadata = {
  title: 'Case 00 · The Founding Case',
  description:
    'Built in thirty days. The architecture, applied to itself. The practice you are reading is the worked example of the architecture I advise on.',
};

const __MARKUP = String.raw`
  <div class="container">
    <div class="hero">
      <span class="eyebrow">Case · 00 · The Founding Case</span>
      <h1 style="margin-top: var(--space-4)">Built in thirty days. <em>The architecture, applied to itself.</em></h1>
      <p class="lede">The practice you're reading isn't theory. It's the worked example of the architecture I advise on.</p>
    </div>

    <div class="container--narrow" style="padding: 0;">
      <p>Most consultancies sell architecture as advice. Most platforms sell capability as a tool. <strong>Almost no one builds the architecture for themselves, in front of the room, in thirty days.</strong></p>
      <p>I did — because the practice has to be the case before it can be the case for anyone else. What you're reading isn't theory about how AI-era practices should be built. It's the worked example. <em>The architecture I advise clients on is the one I ran to build Omameh.</em></p>
    </div>

    <div class="c00-circle" role="img" aria-label="30-day timeline — vision to live">
      <svg class="c00-circle__svg" viewBox="0 0 600 600" aria-hidden="true">
        <circle class="c00-circle__ring" cx="300" cy="300" r="260" />
        <circle class="c00-circle__ticks" cx="300" cy="300" r="260" />
        <circle class="c00-circle__progress" cx="300" cy="300" r="260" />
        <circle class="c00-circle__marker" cx="300" cy="40"  r="6" />
        <circle class="c00-circle__marker" cx="559" cy="272" r="6" />
        <circle class="c00-circle__marker" cx="148" cy="510" r="6" />
        <circle class="c00-circle__marker" cx="107" cy="107" r="6" />
      </svg>
      <div class="c00-circle__center">
        <div class="c00-circle__num">30</div>
        <div class="c00-circle__label">Days</div>
        <div class="c00-circle__sub">vision → live</div>
      </div>
      <span class="c00-circle__stage c00-circle__stage--01"><span class="day">Day 01</span><span>Sense</span></span>
      <span class="c00-circle__stage c00-circle__stage--08"><span class="day">Day 08</span><span>Shift</span></span>
      <span class="c00-circle__stage c00-circle__stage--18"><span class="day">Day 18</span><span>Scale</span></span>
      <span class="c00-circle__stage c00-circle__stage--26"><span class="day">Day 26</span><span>Live</span></span>
    </div>

    <div class="c00-stats">
      <div class="c00-stat"><div class="c00-stat__n">30</div><div class="c00-stat__label">Days · vision to live</div></div>
      <div class="c00-stat"><div class="c00-stat__n">10</div><div class="c00-stat__label">Public pages shipped</div></div>
      <div class="c00-stat"><div class="c00-stat__n">0</div><div class="c00-stat__label">External agencies engaged</div></div>
      <div class="c00-stat"><div class="c00-stat__n">5</div><div class="c00-stat__label">IP frameworks authored</div></div>
      <div class="c00-stat"><div class="c00-stat__n">1<em>+1</em></div><div class="c00-stat__label">Founder · paired with AI</div></div>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">01 · The four stages I ran</span>
        <h2>Vision was five years brewing. <em>The build was four weeks.</em></h2>
        <p class="strap">Each stage compounded the last — and each stage was the methodology I'd advise a client to use.</p>
      </div>

      <div class="c00-stages">
        <div class="c00-stage">
          <div class="c00-stage__head"><h3 class="c00-stage__title">Sense</h3><span class="c00-stage__days">Days 01 → 07</span></div>
          <div class="c00-stage__row"><span class="c00-stage__row-label">I did</span><p class="c00-stage__row-body">Diagnosed the practice I wanted to build. Named the architecture. Decided the IP boundaries.</p></div>
          <div class="c00-stage__row"><span class="c00-stage__row-label">What compounded</span><p class="c00-stage__row-body">The clarity of the next twenty-three days. Without a clean Sense phase, Shift becomes guesswork.</p></div>
          <div class="c00-stage__row"><span class="c00-stage__row-label">What I learned</span><p class="c00-stage__row-body">Sense is the cheapest stage and the most consequential. Skip it and the rest costs ten times more.</p></div>
        </div>
        <div class="c00-stage">
          <div class="c00-stage__head"><h3 class="c00-stage__title">Shift</h3><span class="c00-stage__days">Days 08 → 17</span></div>
          <div class="c00-stage__row"><span class="c00-stage__row-label">I did</span><p class="c00-stage__row-body">Designed the IP frameworks, the page architecture, the copy hierarchy, the visual system.</p></div>
          <div class="c00-stage__row"><span class="c00-stage__row-label">What compounded</span><p class="c00-stage__row-body">The structural choices that let the build accelerate later. Decisions made once, applied many times.</p></div>
          <div class="c00-stage__row"><span class="c00-stage__row-label">What I learned</span><p class="c00-stage__row-body">Shift work has to be written down — not just decided. Otherwise the build forgets what was decided.</p></div>
        </div>
        <div class="c00-stage">
          <div class="c00-stage__head"><h3 class="c00-stage__title">Scale</h3><span class="c00-stage__days">Days 18 → 25</span></div>
          <div class="c00-stage__row"><span class="c00-stage__row-label">I did</span><p class="c00-stage__row-body">Built the site. Wrote the content. Orchestrated AI + delivery + legal + brand.</p></div>
          <div class="c00-stage__row"><span class="c00-stage__row-label">What compounded</span><p class="c00-stage__row-body">The capability to ship. The site assembled itself once the architecture was in place.</p></div>
          <div class="c00-stage__row"><span class="c00-stage__row-label">What I learned</span><p class="c00-stage__row-body">The architecture compounds the parts. If the architecture is wrong, no amount of build effort recovers it.</p></div>
        </div>
        <div class="c00-stage">
          <div class="c00-stage__head"><h3 class="c00-stage__title">Live</h3><span class="c00-stage__days">Days 26 → 30</span></div>
          <div class="c00-stage__row"><span class="c00-stage__row-label">I did</span><p class="c00-stage__row-body">Deployed preview. Wired the domain. Opened the practice.</p></div>
          <div class="c00-stage__row"><span class="c00-stage__row-label">What compounded</span><p class="c00-stage__row-body">The first proof point. The site became the case study of itself.</p></div>
          <div class="c00-stage__row"><span class="c00-stage__row-label">What I learned</span><p class="c00-stage__row-body">Going live is a stage, not a deadline. It needs its own design.</p></div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">02 · The architecture of the practice</span>
        <h2>Paired at the centre. <em>Partnered at the edge.</em></h2>
        <p class="strap">The practice is not one founder doing everything. It is paired at the centre, partnered at the edge.</p>
      </div>

      <div class="c00-arch">
        <div class="c00-arch__band c00-arch__band--centre">
          <span class="c00-arch__band-eyebrow">At the centre · Paired</span>
          <div class="c00-arch__pair">
            <div class="c00-arch__entity c00-arch__entity--founder">
              <span class="c00-arch__role">Human · Founder</span>
              <div class="c00-arch__name"><span class="initial">B</span> Bijal Sejpal</div>
              <div class="c00-arch__tags"><span>Judgement</span><span>Brand</span><span>IP</span><span>Vision</span></div>
              <p class="c00-arch__body">Twenty years of currency.</p>
            </div>
            <span class="c00-arch__link">· Paired with ·</span>
            <div class="c00-arch__entity c00-arch__entity--ai">
              <span class="c00-arch__role">AI · Digital Co-Worker</span>
              <div class="c00-arch__name">Cowork</div>
              <div class="c00-arch__tags"><span>Co-design</span><span>Co-critique</span><span>Co-build</span><span>Co-content</span></div>
              <p class="c00-arch__body">Senior collaborator — briefed, edited, judged by Bijal. Digital Co-Worker, <em>not tool.</em></p>
            </div>
          </div>
        </div>

        <div class="c00-arch__band c00-arch__band--edge">
          <div class="c00-arch__seam"><span class="c00-arch__seam-mark">· Together, with ·</span></div>
          <span class="c00-arch__band-eyebrow">At the edge · Partnered</span>
          <div class="c00-arch__pair">
            <div class="c00-arch__entity c00-arch__entity--tech">
              <span class="c00-arch__role">Partner · Technology Delivery</span>
              <div class="c00-arch__name">Tech Partners</div>
              <div class="c00-arch__tags"><span>India engineering</span><span>Platform</span><span>Cloud</span></div>
              <p class="c00-arch__body">Right-shoring as design, not arbitrage. Vetted, contracted, accountable to Omameh.</p>
            </div>
            <div class="c00-arch__entity c00-arch__entity--ops">
              <span class="c00-arch__role">Partner · Operating Ecosystem</span>
              <div class="c00-arch__name">Operating Ecosystem</div>
              <div class="c00-arch__tags"><span>Senior network</span><span>Operating partners</span><span>Advisory · board · referral</span></div>
              <p class="c00-arch__body">The team I do not have to hire.</p>
            </div>
          </div>
        </div>

        <p class="c00-arch__close">The architecture, <em>working.</em></p>
      </div>
    </div>

    <div class="section section--space-8b">
      <div class="section__head">
        <span class="eyebrow">03 · What this proves</span>
        <h2>The architecture is not theoretical. <em>It built itself.</em></h2>
      </div>

      <div class="c00-proofs">
        <div class="c00-proof">
          <span class="c00-proof__num">Proof · 01</span>
          <h3 class="c00-proof__title">Senior thinking <em>compounds.</em></h3>
          <p class="c00-proof__body">Twenty years of currency made it possible to architect, write, design, and ship the entire practice without external scaffolding. Senior CXO experience isn't generic. It is currency — and currency compounds.</p>
          <p class="c00-proof__body">Most consulting models assume you outsource the thinking and execute the work. <strong>Omameh inverts that.</strong> The thinking is the founder's. The execution is orchestrated.</p>
        </div>
        <div class="c00-proof">
          <span class="c00-proof__num">Proof · 02</span>
          <h3 class="c00-proof__title">AI is a colleague, <em>not a tool.</em></h3>
          <p class="c00-proof__body">Used as a digital workforce, AI compresses a twelve-month build into thirty days. Not by replacing judgement — but by removing the friction between thinking and shipping.</p>
          <p class="c00-proof__body">This is the operating model the next generation of enterprises will be rewarded for. Omameh's role with clients is to design that operating model, then help embed it. <strong>We start by living it.</strong></p>
        </div>
        <div class="c00-proof">
          <span class="c00-proof__num">Proof · 03</span>
          <h3 class="c00-proof__title">Ownership is optional. <em>Orchestration is the discipline.</em></h3>
          <p class="c00-proof__body">You don't need to own every layer of capability. You need to own the core idea and the critical thinking behind it. Orchestrate technology partners, legal counsel, delivery network, AI.</p>
          <p class="c00-proof__body">The result looks bigger than it is — <em>because the architecture compounds the parts.</em> This is what we advise clients to do. The site you are reading is what it looks like when it works.</p>
        </div>
      </div>
    </div>

    <hr class="rule" style="margin-block: var(--space-8);">
    <p class="tag" style="text-align:center;">Continue reading → <em>Press, downloads, headshots.</em> · Next · 08 · Media</p>
  </div>
`;

export default function Case00Page() {
  return <RouteShell id="case-00" label="07 · Case 00" markup={__MARKUP} />;
}
