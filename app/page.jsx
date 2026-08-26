import RouteShell from './_components/RouteShell';

export const metadata = {
  title: 'Omameh · Business architecture for the AI era',
  description:
    'Advisory, platforms and capability for organisations moving from effort-based growth to systems. Human-Led. AI-Operated.',
};

/**
 * Home · V13 rebuild · 26 Aug 2026.
 * Full brief · Venture Architecture/V13_Home_Rebuild_Brief_for_Code.md
 *
 * ~4000 words down to ~1100. Every section has one job.
 *
 * Order:
 *   Hero (untouched)
 *   §01 The Reframe (trimmed)
 *   NEW · What the market is telling us
 *   Vision · Mission · Belief (unchanged, moved below the market band)
 *   §02 What · How · Why (rebuilt — absorbs old §03 arms)
 *     · WHAT — three arms (Advisory / Fluency / Products) + Plug-in strip
 *     · HOW — Sense / Shift / Scale · Bearing composition
 *     · WHY — the emotional centre · two pull quotes + growth curves diagram
 *   §03 Who we work with (trimmed — 4 cards, 2 examples each)
 *   NEW · §04 What people ask us
 *   Close (rebuilt)
 *
 * BLOCKER · $4.4M IBM/Ponemon card omitted per brief §9. Ships as 2-card
 * band until Bijal confirms the source figure. Middle card slot ready to
 * paste in when the number is verified.
 */

const __MARKUP = String.raw`
  <div class="container">
    <div class="route__header"><span class="route__index">01</span><span class="route__name">/ · Home</span><span class="route__issue">Vol. I · Issue 01 · Q3 2026</span></div>

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
        <p class="lede">A specialist advisory practice for boards and senior leaders building organisations structurally ready for the AI era. We design, embed, and stay until it compounds.</p>
      </div>
    </div>

    <div class="market-band">
      <div class="market-band__inner">
        <div class="market-band__head">
          <div>
            <span class="eyebrow" style="color: var(--accent-warm);">WHAT THE MARKET IS TELLING US</span>
            <h2>Three pressures. <em>One cause.</em></h2>
          </div>
          <a class="market-band__link" href="/practice#nine-shifts">See all nine shifts →</a>
        </div>
        <div class="market-band__cards market-band__cards--two">
          <article class="market-card market-card--board">
            <span class="market-card__eyebrow">BOARD PRESSURE</span>
            <div class="market-card__figure">20%</div>
            <p class="market-card__line">of AU insurance boards have signed an AI risk appetite statement.</p>
            <p class="market-card__source">APRA CPG 234 FEEDBACK 2026</p>
          </article>
          <article class="market-card market-card--ops">
            <span class="market-card__eyebrow">OPERATING DRAG</span>
            <div class="market-card__figure">95%</div>
            <p class="market-card__line">of enterprise AI pilots produce no measurable P&amp;L impact.</p>
            <p class="market-card__source">MIT NANDA · 2025</p>
          </article>
        </div>
      </div>
    </div>

    <div class="section">
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
        <span class="eyebrow">WHAT</span>
        <h2>Advisory. Fluency. <em>Products.</em></h2>
        <p class="strap">Three arms, one team. Architecture here, engineering in India, no handoff in between. Most firms sell one of the three and hand you off for the rest.</p>
      </div>

      <div class="arms-grid">
        <article class="arm-card arm-card--teal">
          <span class="arm-card__eyebrow">01 · ARCHITECT WITH US</span>
          <h3 class="arm-card__name">Omameh <em>Advisory</em></h3>
          <p class="arm-card__promise"><em>We work out what is actually wrong.</em></p>
          <p class="arm-card__body">We learn how your world runs, find what is blocking growth, and redesign it with your people rather than around them.</p>
        </article>
        <article class="arm-card arm-card--gold">
          <span class="arm-card__eyebrow">02 · GET FLUENT WITH US</span>
          <h3 class="arm-card__name">AI-Era <em>Fluency</em></h3>
          <p class="arm-card__promise"><em>We make the decision yours to make.</em></p>
          <p class="arm-card__body">Boards, executives, teams and one-person businesses. What AI can do, what it cannot, and what you answer for either way.</p>
        </article>
        <article class="arm-card arm-card--shift">
          <span class="arm-card__eyebrow">03 · BUILD WITH US</span>
          <h3 class="arm-card__name">Omameh <em>Products</em></h3>
          <p class="arm-card__promise"><em>Then we build the thing.</em></p>
          <p class="arm-card__body">Eight platforms built by our own team, several already in production. Or something new, for the part nobody sells off the shelf.</p>
        </article>
      </div>

      <div class="arm-strip">
        <span class="arm-strip__code">04 · PLUG IN WITH US ·</span>
        <span class="arm-strip__promise"><em>The next arm.</em></span>
        <span class="arm-strip__body">— Others surface when they earn the right to.</span>
      </div>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">HOW</span>
        <h2>Sense. Shift. <em>Scale.</em></h2>
        <p class="strap">The same three moves every time, whether it is a bank or a practice of twelve.</p>
      </div>

      <div class="bearing-row" aria-hidden="true">
        <svg viewBox="0 0 600 170" fill="none" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: auto; max-height: 190px;">
          <line x1="20" y1="110" x2="580" y2="110" stroke="rgba(255,255,255,0.14)" stroke-dasharray="3 5" stroke-width="1" />

          <g>
            <path d="M 108.68,60.72 A 50,50 0 1,1 91.32,60.72" stroke="#00B5AD" stroke-width="2.5" stroke-linecap="round" fill="none" />
            <text x="100" y="68" text-anchor="middle" fill="rgba(255,255,255,0.88)" font-family="'Playfair Display', serif" font-size="22" font-weight="700">01</text>
            <circle cx="100" cy="110" r="3.5" fill="#C9A84C" opacity="0.9" />
          </g>

          <g>
            <path d="M 308.68,60.72 A 50,50 0 1,1 291.32,60.72" stroke="#7B9EF0" stroke-width="2.5" stroke-linecap="round" fill="none" />
            <text x="300" y="68" text-anchor="middle" fill="rgba(255,255,255,0.88)" font-family="'Playfair Display', serif" font-size="22" font-weight="700">02</text>
            <circle cx="300" cy="110" r="3.5" fill="#C9A84C" opacity="0.9" />
          </g>

          <g>
            <path d="M 508.68,60.72 A 50,50 0 1,1 491.32,60.72" stroke="#C9A84C" stroke-width="2.5" stroke-linecap="round" fill="none" />
            <text x="500" y="68" text-anchor="middle" fill="rgba(255,255,255,0.88)" font-family="'Playfair Display', serif" font-size="22" font-weight="700">03</text>
            <circle cx="500" cy="110" r="3.5" fill="#C9A84C" opacity="0.9" />
          </g>
        </svg>
      </div>

      <div class="bearing-labels">
        <div class="bearing-label">
          <h4>Sense</h4>
          <p>Where you actually are</p>
          <span class="bearing-label__foot">SIX WEEKS</span>
        </div>
        <div class="bearing-label">
          <h4>Shift</h4>
          <p>Redesigned with your people</p>
          <span class="bearing-label__foot">ONE TEAM AT A TIME</span>
        </div>
        <div class="bearing-label">
          <h4>Scale</h4>
          <p>Runs without us, then we go</p>
          <span class="bearing-label__foot">THE CAPABILITY STAYS</span>
        </div>
      </div>
    </div>

    <div class="why-band">
      <div class="why-band__inner">
        <div class="section__head">
          <span class="eyebrow" style="color: var(--accent-warm);">WHY</span>
          <h2 class="why-h1">The technology is not the problem. <em>Knowing what to do with it is.</em></h2>
          <p class="why-lede">The tools exist and they work. What is missing is everything around them — the governance, the leadership fluency, the plain knowledge of how to use this to grow rather than just to spend.</p>
        </div>

        <blockquote class="pull-quote pull-quote--gold">
          <h3 class="pull-quote__lead">Right now AI sits on your risk register. It should be sitting in your <em>growth plan.</em></h3>
          <p class="pull-quote__body">Most of what is sold in this market is fear. Governance is not the point — governance is what makes the growth safe enough to attempt.</p>
        </blockquote>

        <p class="why-body">And that knowledge sits almost entirely with the organisations that can afford to buy it. Everyone else is guessing — same headlines, same tools, same wondering why nothing changed.</p>

        <blockquote class="pull-quote pull-quote--teal">
          <h3 class="pull-quote__lead">We do not think a practice of twelve deserves less clarity than a bank. It just gets sold less of it.</h3>
        </blockquote>

        <div class="why-list">
          <p class="why-list__item">The enterprise ran the pilot. The team still does the workaround.</p>
          <p class="why-list__item">The growing business bought the tools. The founder still cannot take a holiday.</p>
          <p class="why-list__item">The consultant writes faster and works the same weekends.</p>
          <p class="why-list__item">The expert has solved it fifty times, and it leaves when they do.</p>
        </div>

        <p class="why-body why-body--emphatic">Four different businesses, one failure. Everyone got the technology. Almost nobody got their time back.</p>

        <hr class="why-rule">

        <h2 class="why-h2">Effort does not scale. <em>Systems do.</em></h2>

        <div class="growth-curves" aria-hidden="true">
          <svg viewBox="0 0 800 400" fill="none" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: auto;">
            <line x1="60" y1="360" x2="760" y2="360" stroke="rgba(255,255,255,0.22)" stroke-width="0.75" />
            <line x1="60" y1="40" x2="60" y2="360" stroke="rgba(255,255,255,0.22)" stroke-width="0.75" />
            <text x="70" y="380" fill="#5A6890" font-family="'JetBrains Mono', ui-monospace, monospace" font-size="9.5" letter-spacing="2">TIME →</text>
            <text x="70" y="32" fill="#5A6890" font-family="'JetBrains Mono', ui-monospace, monospace" font-size="9.5" letter-spacing="2">VALUE</text>

            <path d="M 60,355 C 110,220 180,120 260,95 C 360,80 460,80 540,95 C 640,115 720,135 750,145" stroke="#C9A84C" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.9" />

            <path d="M 60,355 C 140,352 220,335 300,290 C 380,240 460,150 540,90 C 620,55 700,35 750,25" stroke="#00D4CB" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.95" />

            <g transform="translate(485, 110)">
              <path d="M 6.94,-11.83 A 12,12 0 1,1 -6.94,-11.83" stroke="#C9A84C" stroke-width="1.75" stroke-linecap="round" fill="none" />
            </g>

            <line x1="500" y1="105" x2="600" y2="55" stroke="rgba(201,168,76,0.5)" stroke-dasharray="2 3" stroke-width="1" />
            <text x="606" y="50" fill="rgba(255,255,255,0.78)" font-family="'JetBrains Mono', ui-monospace, monospace" font-size="10" letter-spacing="1.5">systems overtake effort</text>

            <text x="360" y="175" fill="#C9A84C" font-family="'Playfair Display', serif" font-size="14" font-style="italic">Effort-based growth</text>
            <text x="360" y="193" fill="rgba(255,255,255,0.55)" font-family="Inter, sans-serif" font-size="10.5">more people, more hours — then it flattens</text>

            <text x="380" y="290" fill="#00D4CB" font-family="'Playfair Display', serif" font-size="14" font-style="italic">System-based growth</text>
            <text x="380" y="308" fill="rgba(255,255,255,0.55)" font-family="Inter, sans-serif" font-size="10.5">slower to start — then it compounds</text>
          </svg>
        </div>

        <p class="why-close">So we build the fluency, design the system and ship it — for a board, for a growing business, for one person with a good idea. Everyone who wants to use this to grow should be able to get at it.</p>
      </div>
    </div>

    <div class="section">
      <div>
        <div class="section__head">
          <span class="eyebrow">03 · Who we work with</span>
          <h2>The problem is the same at every size. <em>Only the shape changes.</em></h2>
        </div>

        <div class="who-grid">

          <article class="who-card">
            <div class="who-card__head">
              <span class="who-card__num">01 ·</span>
              <h3 class="who-card__name">Enterprise</h3>
            </div>
            <p class="who-card__subtitle"><em>From complexity to capability.</em></p>
            <p class="who-card__problem">Large organisations carry process, technology and operational debt that nobody designed and everybody works around. The strategy is usually sound. The architecture beneath it cannot carry it.</p>
            <p class="who-card__do">We modernise the operating model, put governance where accountability already sits, and build the capability to run it after we leave.</p>
            <div class="who-card__examples">
              <div class="who-card__examples-label">What that looks like</div>
              <p class="who-card__example">— Supplier obligations monitored continuously instead of read once at signing</p>
              <p class="who-card__example">— Every AI decision logged and evidenced before a regulator asks</p>
            </div>
            <p class="who-card__progression">Complexity → clarity → capability</p>
          </article>

          <article class="who-card">
            <div class="who-card__head">
              <span class="who-card__num">02 ·</span>
              <h3 class="who-card__name">Growing business</h3>
            </div>
            <p class="who-card__subtitle"><em>From founder-led to system-led.</em></p>
            <p class="who-card__problem">There is a point where the spreadsheet that got you here becomes the thing holding you back. Too small for seven systems. Too serious for the workarounds.</p>
            <p class="who-card__do">We build the operations layer that gives you visibility, takes work off people, and creates room to grow into.</p>
            <div class="who-card__examples">
              <div class="who-card__examples-label">What that looks like</div>
              <p class="who-card__example">— Quote to invoice to payment, running end to end without chasing</p>
              <p class="who-card__example">— New customers onboarded the same way every time, whoever is on</p>
            </div>
            <p class="who-card__progression">Effort → automation → capacity</p>
          </article>

          <article class="who-card">
            <div class="who-card__head">
              <span class="who-card__num">03 ·</span>
              <h3 class="who-card__name">Independent operator</h3>
            </div>
            <p class="who-card__subtitle"><em>From hours to leverage.</em></p>
            <p class="who-card__problem">Consultants, advisers and fractional operators hit the same ceiling. Growth means more hours, and there are no more hours.</p>
            <p class="who-card__do">We build the systems that let one person run something larger — the work handled, the judgement still yours.</p>
            <div class="who-card__examples">
              <div class="who-card__examples-label">What that looks like</div>
              <p class="who-card__example">— Proposals and scopes drafted from your own method, not from a blank page</p>
              <p class="who-card__example">— Client research and meeting preparation done before you sit down</p>
            </div>
            <p class="who-card__aside"><em>A team you did not have to hire.</em></p>
            <p class="who-card__progression">Expertise → capacity → scale</p>
          </article>

          <article class="who-card">
            <div class="who-card__head">
              <span class="who-card__num">04 ·</span>
              <h3 class="who-card__name">Expertise becoming a product</h3>
            </div>
            <p class="who-card__subtitle"><em>From service to asset.</em></p>
            <p class="who-card__problem">Boutique firms and specialists solve the same problem for the fifth time and recognise it. That recognition is worth something, and almost none of it gets captured.</p>
            <p class="who-card__do">We turn the method into a product — built, owned, and earning after the engagement ends.</p>
            <div class="who-card__examples">
              <div class="who-card__examples-label">What that looks like</div>
              <p class="who-card__example">— An assessment your clients complete themselves, scored against your framework</p>
              <p class="who-card__example">— A compliance product for the regulation you already know better than anyone</p>
            </div>
            <p class="who-card__case-link">We have done this to ourselves. <a href="/case-00">Case 00 →</a></p>
            <p class="who-card__progression">Service → solution → asset</p>
          </article>

        </div>
      </div>
    </div>

    <div class="asks-band">
      <div class="asks-band__inner">
        <div class="section__head">
          <span class="eyebrow" style="color: var(--accent-warm);">04 · WHAT PEOPLE ASK US</span>
          <h2>Answered <em>honestly.</em></h2>
        </div>

        <div class="asks-grid">
          <article class="ask">
            <h3 class="ask__question">How is this different from what our Big Four already do?</h3>
            <p class="ask__answer">They sell frameworks and slideware. We have sat in the seat you are hiring for, and we do not stop when the strategy deck is signed — we build with you until it runs.</p>
          </article>
          <article class="ask">
            <h3 class="ask__question">Are we too small — or too big — for this?</h3>
            <p class="ask__answer">Neither. A twelve-person practice gets the same method a bank gets, in a shorter form, at a price that makes sense. Boards, teams, and one person with a good idea — all of it is the same work at a different scale.</p>
            <p class="ask__answer">We are not here to sell AI to the people who can already afford it. We are here so that everyone using it does so on purpose, and stops being afraid of it.</p>
          </article>
          <article class="ask">
            <h3 class="ask__question">You advise on AI and you sell AI products. Is that a conflict?</h3>
            <p class="ask__answer">It would be if we hid it. We disclose the interest in writing, and we never charge for a recommendation that leads to a related sale. We also recommend technology we don't build, and walk away from work we can't do well — which is the part you should actually judge us on.</p>
          </article>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="home-close">
        <h2 class="home-close__lead">You already know which of the four you are. <em>Start there.</em></h2>
        <p class="home-close__body">One conversation. No deck, no pitch. If nothing is broken, we will tell you that too.</p>
        <div class="home-close__ctas">
          <a class="cta cta--primary" href="/contact">Let's talk →</a>
          <a class="cta" href="/case-00">See Case 00 →</a>
        </div>
        <p class="home-close__case"><em>We built this practice using the method we sell.</em></p>
        <p class="home-close__belief">HUMAN-LED. AI-OPERATED.</p>
      </div>
    </div>

    <hr class="rule">
    <p class="tag" style="text-align:center"><a href="/about">Continue reading → If this is the question, <em>what is Omameh qualified to ask it with?</em> · Next · 02 · About</a></p>
  </div>
`;

export default function HomePage() {
  return <RouteShell id="home" label="01 · Home" markup={__MARKUP} />;
}
