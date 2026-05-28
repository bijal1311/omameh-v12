import RouteShell from '../_components/RouteShell';

export const metadata = {
  title: 'Doors',
  description: 'Seven doors. One practice. Different reasons to come in. Each door has its own alias.',
};

const __MARKUP = String.raw`
  <div class="container">
    <div class="hero">
      <span class="eyebrow">Doors · Omameh</span>
      <h1 style="margin-top: var(--space-4)">Seven doors. <em>One practice.</em></h1>
      <p class="lede">Different reasons to come in. Different reasons to come back. Each door has its own alias, its own register, its own form of welcome.</p>
    </div>

    <div class="section">
      <div class="doors-list">
        <div class="door-row">
          <span class="door-row__num">D01</span>
          <div>
            <h3 class="door-row__title">Board <em>engagements</em></h3>
            <p style="color: var(--fg2); margin: var(--space-2) 0 0; font-size: 14px;">Chair and CEO conversations about architecture-readiness. NEDs and committees welcome. <a href="mailto:boards@omameh.com.au" style="color: var(--accent-warm);">Boards@omameh.com.au</a></p>
          </div>
          <span class="door-row__cta">Open →</span>
        </div>
        <div class="door-row">
          <span class="door-row__num">D02</span>
          <div>
            <h3 class="door-row__title">Partner with us</h3>
            <p style="color: var(--fg2); margin: var(--space-2) 0 0; font-size: 14px;">Delivery firms, embedded teams, industry advisors whose capability complements the bench. <a href="mailto:partner@omameh.com.au" style="color: var(--accent-warm);">Partner@omameh.com.au</a></p>
          </div>
          <span class="door-row__cta">Open →</span>
        </div>
        <div class="door-row">
          <span class="door-row__num">D03</span>
          <div>
            <h3 class="door-row__title">Speak <em>at your event</em></h3>
            <p style="color: var(--fg2); margin: var(--space-2) 0 0; font-size: 14px;">Keynotes, panels, off-the-record sessions on the architecture between strategy and execution. <a href="mailto:speak@omameh.com.au" style="color: var(--accent-warm);">Speak@omameh.com.au</a></p>
          </div>
          <span class="door-row__cta">Open →</span>
        </div>
        <div class="door-row">
          <span class="door-row__num">D04</span>
          <div>
            <h3 class="door-row__title">Press <em>&amp; media</em></h3>
            <p style="color: var(--fg2); margin: var(--space-2) 0 0; font-size: 14px;">Interviews, briefings, off-the-record context. Media kit on the Media page. <a href="mailto:press@omameh.com.au" style="color: var(--accent-warm);">Press@omameh.com.au</a></p>
          </div>
          <span class="door-row__cta">Open →</span>
        </div>
        <div class="door-row">
          <span class="door-row__num">D05</span>
          <div>
            <h3 class="door-row__title">Field Notes <em>subscription</em></h3>
            <p style="color: var(--fg2); margin: var(--space-2) 0 0; font-size: 14px;">Subscribe to the quarterly dispatch. No tracking. No marketing list. <a href="mailto:fieldnotes@omameh.com.au" style="color: var(--accent-warm);">FieldNotes@omameh.com.au</a></p>
          </div>
          <span class="door-row__cta">Open →</span>
        </div>
        <div class="door-row">
          <span class="door-row__num">D06</span>
          <div>
            <h3 class="door-row__title">Community</h3>
            <p style="color: var(--fg2); margin: var(--space-2) 0 0; font-size: 14px;">A LinkedIn community for second-act leaders rebuilding the work. <a href="mailto:community@omameh.com.au" style="color: var(--accent-warm);">Community@omameh.com.au</a></p>
          </div>
          <span class="door-row__cta">Open →</span>
        </div>
        <div class="door-row">
          <span class="door-row__num">D07</span>
          <div>
            <h3 class="door-row__title">General <em>contact</em></h3>
            <p style="color: var(--fg2); margin: var(--space-2) 0 0; font-size: 14px;">Everything that doesn't fit one of the six doors above. <a href="mailto:contact@omameh.com.au" style="color: var(--accent-warm);">Contact@omameh.com.au</a></p>
          </div>
          <span class="door-row__cta">Open →</span>
        </div>
      </div>
    </div>

    <hr class="rule" style="margin-block: var(--space-8);">
    <p class="tag" style="text-align:center;">Continue reading → <em>Why did the founder build this?</em> · Next · 06 · Founder</p>
  </div>
`;

export default function DoorsPage() {
  return <RouteShell id="doors" label="05 · Doors" markup={__MARKUP} />;
}
