import RouteShell from '../_components/RouteShell';

export const metadata = {
  title: 'Doors',
  description: 'Seven doors. One practice. Different reasons to come in. Each door has its own alias.',
};

const __MARKUP = String.raw`
  <div class="container">
    <div class="route__header"><span class="route__index">05</span><span class="route__name">/doors · Doors</span><span class="route__issue">Vol. I · Issue 01 · Q2 2026</span></div>
    <div class="hero">
      <span class="eyebrow">Doors · Omameh</span>
      <h1 style="margin-top: var(--space-4)">Eight doors. <em>One practice.</em></h1>
      <p class="lede">Different reasons to come in. Different reasons to come back. Each door has its own alias, its own register, its own form of welcome.</p>
    </div>

    <div class="section">
      <div class="doors-list">
        <a class="door-row door-row--link" href="mailto:boards@omameh.com.au">
          <span class="door-row__num">D01</span>
          <div>
            <h3 class="door-row__title">Board <em>engagements</em></h3>
            <p style="color: var(--fg2); margin: var(--space-2) 0 0; font-size: 14px;">Chair and CEO conversations about architecture-readiness. NEDs and committees welcome. <span class="door-row__alias">Boards@omameh.com.au</span></p>
          </div>
          <span class="door-row__cta">Open →</span>
        </a>
        <a class="door-row door-row--link" href="mailto:partner@omameh.com.au">
          <span class="door-row__num">D02</span>
          <div>
            <h3 class="door-row__title">Partner with us · <em>globally</em></h3>
            <p style="color: var(--fg2); margin: var(--space-2) 0 0; font-size: 14px;">Delivery firms, embedded teams, industry advisors whose capability complements the bench. <span class="door-row__alias">Partner@omameh.com.au</span></p>
          </div>
          <span class="door-row__cta">Open →</span>
        </a>
        <a class="door-row door-row--link" href="mailto:speak@omameh.com.au">
          <span class="door-row__num">D03</span>
          <div>
            <h3 class="door-row__title">Speak <em>at your event</em></h3>
            <p style="color: var(--fg2); margin: var(--space-2) 0 0; font-size: 14px;">Keynotes, panels, off-the-record sessions on the architecture between strategy and execution. <span class="door-row__alias">Speak@omameh.com.au</span></p>
          </div>
          <span class="door-row__cta">Open →</span>
        </a>
        <a class="door-row door-row--link" href="mailto:press@omameh.com.au">
          <span class="door-row__num">D04</span>
          <div>
            <h3 class="door-row__title">Press <em>&amp; media</em></h3>
            <p style="color: var(--fg2); margin: var(--space-2) 0 0; font-size: 14px;">Interviews, briefings, off-the-record context. Media kit on the Media page. <span class="door-row__alias">Press@omameh.com.au</span></p>
          </div>
          <span class="door-row__cta">Open →</span>
        </a>
        <a class="door-row door-row--link" href="mailto:fieldnotes@omameh.com.au">
          <span class="door-row__num">D05</span>
          <div>
            <h3 class="door-row__title">Field Notes <em>subscription</em></h3>
            <p style="color: var(--fg2); margin: var(--space-2) 0 0; font-size: 14px;">Subscribe to the quarterly dispatch. No tracking. No marketing list. <span class="door-row__alias">FieldNotes@omameh.com.au</span></p>
          </div>
          <span class="door-row__cta">Open →</span>
        </a>
        <a class="door-row door-row--link" href="https://www.linkedin.com/company/omameh/" target="_blank" rel="noopener noreferrer">
          <span class="door-row__num">D06</span>
          <div>
            <h3 class="door-row__title">Join Omameh <em>Community</em></h3>
            <p style="color: var(--fg2); margin: var(--space-2) 0 0; font-size: 14px;">A LinkedIn community for second-act leaders rebuilding the work. <span class="door-row__alias">linkedin.com/company/omameh ↗</span></p>
          </div>
          <span class="door-row__cta">Open ↗</span>
        </a>
        <a class="door-row door-row--link" href="mailto:contact@omameh.com.au">
          <span class="door-row__num">D07</span>
          <div>
            <h3 class="door-row__title">General <em>contact</em></h3>
            <p style="color: var(--fg2); margin: var(--space-2) 0 0; font-size: 14px;">Everything that doesn't fit one of the six doors above. <span class="door-row__alias">Contact@omameh.com.au</span></p>
          </div>
          <span class="door-row__cta">Open →</span>
        </a>
        <a class="door-row door-row--link" href="mailto:foundation@omameh.com.au">
          <span class="door-row__num">D08</span>
          <div>
            <h3 class="door-row__title">Mā <em>Foundation</em></h3>
            <p style="color: var(--fg2); margin: var(--space-2) 0 0; font-size: 14px;">We back people and organisations doing the work of lifting others. Advisory, curated sponsored training, and partnership where it counts. <span class="door-row__alias">Foundation@omameh.com.au</span></p>
          </div>
          <span class="door-row__cta">Open →</span>
        </a>
      </div>
    </div>

    <hr class="rule" style="margin-block: var(--space-8);">
    <p class="tag" style="text-align:center;"><a href="/founder">Continue reading → <em>Why did the founder build this?</em> · Next · 06 · Founder</a></p>
  </div>
`;

export default function DoorsPage() {
  return <RouteShell id="doors" label="05 · Doors" markup={__MARKUP} />;
}
