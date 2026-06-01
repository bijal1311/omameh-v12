import RouteShell from './_components/RouteShell';

export const metadata = {
  title: 'Omameh · Business architecture for the AI era',
  description:
    'A specialist advisory practice for boards and senior leaders building organisations structurally ready for the AI era. Business architecture sits between strategy and execution.',
};

const __MARKUP = String.raw`
  <div class="container">
    <div class="route__header"><span class="route__index">01</span><span class="route__name">/ · Home</span><span class="route__issue">Vol. I · Issue 01 · Q2 2026</span></div>
    <div class="home-hero">
      <div class="home-hero__lockup">
        <div class="triskelion-stage" role="img" aria-label="Omameh — V9 master mark">
          <svg viewBox="0 0 400 400" fill="none" role="img" aria-label="Omameh — V9 master mark">
            <defs>
              <linearGradient id="hp-teal" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"  stop-color="#00B5AD" stop-opacity="0.30"/>
                <stop offset="50%" stop-color="#00B5AD" stop-opacity="1"/>
                <stop offset="100%" stop-color="#00D4CB" stop-opacity="0.50"/>
              </linearGradient>
              <linearGradient id="hp-white" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"  stop-color="#FFFFFF" stop-opacity="0.40"/>
                <stop offset="50%" stop-color="#FFFFFF" stop-opacity="1"/>
                <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.55"/>
              </linearGradient>
              <linearGradient id="hp-gold" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"  stop-color="#C9A84C" stop-opacity="0.45"/>
                <stop offset="50%" stop-color="#C9A84C" stop-opacity="1"/>
                <stop offset="100%" stop-color="#E5C56F" stop-opacity="0.60"/>
              </linearGradient>
              <radialGradient id="hp-centre" cx="42%" cy="34%" r="65%">
                <stop offset="0%"  stop-color="#F1DA8C"/>
                <stop offset="35%" stop-color="#E5C56F"/>
                <stop offset="70%" stop-color="#C9A84C"/>
                <stop offset="100%" stop-color="#B8941F"/>
              </radialGradient>
              <linearGradient id="hp-comet" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%"   stop-color="#00D4CB" stop-opacity="0"/>
                <stop offset="60%"  stop-color="#00D4CB" stop-opacity="0.55"/>
                <stop offset="100%" stop-color="#00D4CB" stop-opacity="0.95"/>
              </linearGradient>
              <path id="hp-orbit-path" d="M 200,200 m -178,0 a 178,178 0 1,1 356,0 a 178,178 0 1,1 -356,0"/>
            </defs>

            <g class="om-orbit-ring">
              <circle cx="200" cy="200" r="194" stroke="rgba(255,255,255,0.10)" stroke-width="0.75" stroke-dasharray="1.5 9" fill="none"/>
            </g>
            <line x1="200" y1="60" x2="200" y2="180" stroke="rgba(255,255,255,0.06)" stroke-width="0.75"/>
            <circle cx="394" cy="200" r="3.5" fill="#C9A84C" opacity="0.85"/>
            <circle cx="200" cy="394" r="3.5" fill="#C9A84C" opacity="0.85"/>
            <circle cx="6"   cy="200" r="3.5" fill="#C9A84C" opacity="0.85"/>
            <g class="om-orbit-text">
              <text font-family="'JetBrains Mono', ui-monospace, monospace" font-size="9.5" fill="rgba(255,255,255,0.42)" letter-spacing="8">
                <textPath href="#hp-orbit-path" startOffset="0">UNLEARN  ·  RELEARN  ·  REINVENT  ·  UNLEARN  ·  RELEARN  ·  REINVENT  ·</textPath>
              </text>
            </g>
            <circle cx="200" cy="200" r="148" stroke="rgba(0,212,203,0.13)" stroke-width="0.75" fill="none"/>
            <g class="om-tick-ring">
              <g transform="translate(200 200)" stroke="rgba(201,168,76,0.55)" stroke-width="1" stroke-linecap="round">
                <line x1="0" y1="-92" x2="0" y2="-86"/>
                <line x1="0" y1="-92" x2="0" y2="-86" transform="rotate(30)"/>
                <line x1="0" y1="-92" x2="0" y2="-86" transform="rotate(60)"/>
                <line x1="0" y1="-92" x2="0" y2="-86" transform="rotate(90)"/>
                <line x1="0" y1="-92" x2="0" y2="-86" transform="rotate(120)"/>
                <line x1="0" y1="-92" x2="0" y2="-86" transform="rotate(150)"/>
                <line x1="0" y1="-92" x2="0" y2="-86" transform="rotate(180)"/>
                <line x1="0" y1="-92" x2="0" y2="-86" transform="rotate(210)"/>
                <line x1="0" y1="-92" x2="0" y2="-86" transform="rotate(240)"/>
                <line x1="0" y1="-92" x2="0" y2="-86" transform="rotate(270)"/>
                <line x1="0" y1="-92" x2="0" y2="-86" transform="rotate(300)"/>
                <line x1="0" y1="-92" x2="0" y2="-86" transform="rotate(330)"/>
                <circle r="86" fill="none" stroke="rgba(201,168,76,0.16)" stroke-width="0.5"/>
              </g>
            </g>
            <g class="om-arcs">
              <g transform="translate(200 200)">
                <path d="M 22.57,-128.03 A 130,130 0 0,1 112.6,65" stroke="url(#hp-teal)"  stroke-width="14" stroke-linecap="round" fill="none"/>
                <path d="M 112.6,65 A 130,130 0 0,1 -112.6,65"      stroke="url(#hp-white)" stroke-width="14" stroke-linecap="round" fill="none" opacity="0.92"/>
                <path d="M -112.6,65 A 130,130 0 0,1 -22.57,-128.03" stroke="url(#hp-gold)" stroke-width="14" stroke-linecap="round" fill="none"/>
                <circle cx="22.57"  cy="-128.03" r="2"   fill="#E5C56F"/>
                <circle cx="22.57"  cy="-128.03" r="3.5" fill="#E5C56F" opacity="0.18"/>
                <circle cx="-22.57" cy="-128.03" r="2"   fill="#E5C56F"/>
                <circle cx="-22.57" cy="-128.03" r="3.5" fill="#E5C56F" opacity="0.18"/>
              </g>
            </g>
            <g class="om-spark om-spark-1"><line x1="200" y1="63" x2="200" y2="54" stroke="url(#hp-comet)" stroke-width="2" stroke-linecap="round"/><circle cx="200" cy="54" r="5" fill="#00D4CB"/></g>
            <g class="om-spark om-spark-2"><line x1="200" y1="63" x2="200" y2="54" stroke="url(#hp-comet)" stroke-width="2" stroke-linecap="round"/><circle cx="200" cy="54" r="5" fill="#00D4CB"/></g>
            <g class="om-spark om-spark-3"><line x1="200" y1="63" x2="200" y2="54" stroke="url(#hp-comet)" stroke-width="2" stroke-linecap="round"/><circle cx="200" cy="54" r="5" fill="#00D4CB"/></g>
            <g class="om-centre">
              <circle cx="200" cy="200" r="14" fill="none" stroke="rgba(201,168,76,0.30)" stroke-width="0.75"/>
              <circle cx="200" cy="200" r="9"  fill="none" stroke="rgba(229,197,111,0.22)" stroke-width="1"/>
              <circle cx="200" cy="200" r="6"  fill="url(#hp-centre)"/>
              <circle cx="198.2" cy="198.2" r="1.4" fill="#FFF6D9" opacity="0.85"/>
            </g>
          </svg>
        </div>

        <div class="wordmark">Om<em>a</em>meh</div>
      </div>

      <div class="home-hero__ctas">
        <a class="cta cta--primary" href="/contact">Let's talk →</a>
        <a class="cta" href="/atlas">Subscribe →</a>
        <a class="cta" href="https://www.linkedin.com/company/omameh/" target="_blank" rel="noopener noreferrer">Join the community ↗</a>
      </div>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">01 · The Reframe</span>
        <h1>Built between strategy and <em>execution.</em> The architecture between them is the <em>work.</em></h1>
        <p class="lede">A specialist advisory practice for boards and senior leaders building organisations structurally ready for the AI era. Business architecture sits between strategy and execution. We design, embed, and stay until it compounds.</p>
      </div>

      <div class="grid-3">
        <div class="card">
          <div class="card__eyebrow"><span class="num">V/01</span><span>Vision</span></div>
          <p class="card__strap"><em>Organisations ready to lead the AI era</em> — by architecture, not by accident.</p>
        </div>
        <div class="card">
          <div class="card__eyebrow"><span class="num">M/02</span><span>Mission</span></div>
          <p class="card__strap">Pressure-test, design, and deliver the architecture between <strong>strategy and execution.</strong></p>
        </div>
        <div class="card">
          <div class="card__eyebrow"><span class="num">B/03</span><span>Belief</span></div>
          <p class="card__strap"><em>Human-Led. AI-Operated.</em> Built to last. Built to lead.</p>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">02 · What · How · Why</span>
        <h2>Priority · what we stake</h2>
        <p class="strap">The success of the leader we partner with. The organisation they shape. The teams that carry the work. All three <em>structurally ready for what comes next — by design.</em></p>
      </div>

      <div class="grid-3">
        <div class="card">
          <div class="card__eyebrow"><span class="num">What</span></div>
          <p class="card__title">Business architecture is <em>where ambition lands.</em></p>
          <p class="card__body">In capability, in culture, in the operating model. Not in slide decks.</p>
        </div>
        <div class="card">
          <div class="card__eyebrow"><span class="num">How</span></div>
          <p class="card__title">Embedded long enough <em>to compound.</em></p>
          <p class="card__body">Out the moment it does.</p>
        </div>
        <div class="card">
          <div class="card__eyebrow"><span class="num">Why</span></div>
          <p class="card__title">The enterprise that wins <em>moves at the speed of its ambition.</em></p>
          <p class="card__body">Strategy on paper isn't enough. Enabling functions, culture, and mindset have to keep pace.</p>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">03 · Omameh Group · the architecture of the practice</span>
      </div>

      <div class="grid-4">
        <div class="card card--reveal" tabindex="0">
          <div class="card__face">
            <div class="card__eyebrow"><span class="num">01 · Architect with us</span></div>
            <h3 class="card__title">Omameh <em>Advisory</em></h3>
            <p class="card__strap">Sense, shift, scale.</p>
            <span class="card__read">Read →</span>
          </div>
          <div class="card__expanded">
            <p class="card__body">Strategy moves at AI speed. The architecture beneath it doesn't. Bespoke engagements that pressure-test, design, and embed the architecture between strategy and execution.</p>
          </div>
        </div>

        <div class="card card--reveal card--gold" tabindex="0">
          <div class="card__face">
            <div class="card__eyebrow"><span class="num">02 · Orchestrate with us</span></div>
            <h3 class="card__title">Omameh <em>Products</em></h3>
            <p class="card__strap">Build. Operate. Govern.</p>
            <span class="card__read">Read →</span>
          </div>
          <div class="card__expanded">
            <p class="card__body">Twelve-month build cycles are the wrong unit of time for the AI era. Built AI native products, MVPs, agentic workflows, orchestration layers, digital capability and more with us.</p>
          </div>
        </div>

        <div class="card card--reveal card--teal" tabindex="0">
          <div class="card__face">
            <div class="card__eyebrow"><span class="num">03 · Get fluent with us</span></div>
            <h3 class="card__title">Omameh <em>AI-Era Fluency</em></h3>
            <p class="card__strap">Unlearn, Relearn, Reinvent.</p>
            <span class="card__read">Read →</span>
          </div>
          <div class="card__expanded">
            <p class="card__body"><strong>Mindset by Design</strong> and <strong>Decision Literacy.</strong> Packaged learning for boards, executives, and the women and men running the work. Not training. Not e-learning. Capability that compounds inside the organisation for sustained future.</p>
          </div>
        </div>

        <div class="card card--reveal card--quiet" tabindex="0">
          <div class="card__face">
            <div class="card__eyebrow"><span class="num">04 · Plug in with us</span></div>
            <h3 class="card__title"><em>The next arm.</em></h3>
            <p class="card__strap">The architecture admits more.</p>
            <span class="card__read">Plug in with us →</span>
          </div>
          <div class="card__expanded">
            <p class="card__body"><em>Plug-in by design. Others surface when they earn the right to.</em></p>
          </div>
        </div>
      </div>
    </div>

    <hr class="rule">
    <p class="tag" style="text-align:center">Continue reading → If this is the question, <em>what is Omameh qualified to ask it with?</em> · Next · 02 · About</p>
  </div>
`;

export default function HomePage() {
  return <RouteShell id="home" label="01 · Home" markup={__MARKUP} />;
}
