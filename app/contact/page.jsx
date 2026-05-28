import RouteShell from '../_components/RouteShell';

export const metadata = {
  title: 'Contact',
  description: 'Thirty minutes. No deck. Discovery calendar · open slots · weekday time grid. AEST · Sydney time.',
};

const __MARKUP = String.raw`
  <div class="container">
    <div class="hero">
      <span class="eyebrow">Contact · 30-min discovery</span>
      <h1 style="margin-top: var(--space-4)">Let's <em>talk.</em></h1>
      <p class="lede">Thirty minutes. No deck. We listen, you sketch the situation, we tell you whether Omameh is the right room for it. Pick an open day below — or write directly.</p>
    </div>

    <div class="section">
      <div class="section__head">
        <span class="eyebrow">01 · Discovery calendar · June 2026</span>
        <h2>Open <em>slots.</em></h2>
      </div>

      <div class="cm-calendar" data-role="calendar-mat">
        <div class="cm-calendar__nav">
          <button type="button" class="cm-calendar__nav-btn" data-cm-nav="prev">← Prev week</button>
          <span class="cm-calendar__nav-week">Week of <em>01 — 05 June 2026</em></span>
          <button type="button" class="cm-calendar__nav-btn" data-cm-nav="next">Next week →</button>
        </div>

        <div class="cm-calendar__meta">
          <span><span class="key">AEST</span> · Sydney time</span>
          <span><span class="key">30 min</span> · discovery slots</span>
          <span><span class="key">Weekdays only</span></span>
        </div>

        <div class="cm-calendar__grid">
          <div class="cm-calendar__head cm-calendar__head--corner">AEST</div>
          <div class="cm-calendar__head"><span class="day">Mon</span><span class="date">01</span></div>
          <div class="cm-calendar__head"><span class="day">Tue</span><span class="date">02</span></div>
          <div class="cm-calendar__head"><span class="day">Wed</span><span class="date">03</span></div>
          <div class="cm-calendar__head"><span class="day">Thu</span><span class="date">04</span></div>
          <div class="cm-calendar__head"><span class="day">Fri</span><span class="date">05</span></div>

          <div class="cm-calendar__time">09:00</div>
          <button type="button" class="cm-calendar__slot is-open" data-cm-slot="Mon 09:00">Open</button>
          <button type="button" class="cm-calendar__slot is-booked" disabled>Booked</button>
          <button type="button" class="cm-calendar__slot is-open" data-cm-slot="Wed 09:00">Open</button>
          <button type="button" class="cm-calendar__slot is-open" data-cm-slot="Thu 09:00">Open</button>
          <button type="button" class="cm-calendar__slot is-booked" disabled>Booked</button>

          <div class="cm-calendar__time">10:00</div>
          <button type="button" class="cm-calendar__slot is-booked" disabled>Booked</button>
          <button type="button" class="cm-calendar__slot is-open" data-cm-slot="Tue 10:00">Open</button>
          <button type="button" class="cm-calendar__slot is-open" data-cm-slot="Wed 10:00">Open</button>
          <button type="button" class="cm-calendar__slot is-booked" disabled>Booked</button>
          <button type="button" class="cm-calendar__slot is-open" data-cm-slot="Fri 10:00">Open</button>

          <div class="cm-calendar__time">11:00</div>
          <button type="button" class="cm-calendar__slot is-open" data-cm-slot="Mon 11:00">Open</button>
          <button type="button" class="cm-calendar__slot is-open" data-cm-slot="Tue 11:00">Open</button>
          <button type="button" class="cm-calendar__slot is-booked" disabled>Booked</button>
          <button type="button" class="cm-calendar__slot is-open" data-cm-slot="Thu 11:00">Open</button>
          <button type="button" class="cm-calendar__slot is-open" data-cm-slot="Fri 11:00">Open</button>

          <div class="cm-calendar__time">14:00</div>
          <button type="button" class="cm-calendar__slot is-open" data-cm-slot="Mon 14:00">Open</button>
          <button type="button" class="cm-calendar__slot is-booked" disabled>Booked</button>
          <button type="button" class="cm-calendar__slot is-open" data-cm-slot="Wed 14:00">Open</button>
          <button type="button" class="cm-calendar__slot is-booked" disabled>Booked</button>
          <button type="button" class="cm-calendar__slot is-open" data-cm-slot="Fri 14:00">Open</button>

          <div class="cm-calendar__time">15:00</div>
          <button type="button" class="cm-calendar__slot is-booked" disabled>Booked</button>
          <button type="button" class="cm-calendar__slot is-open" data-cm-slot="Tue 15:00">Open</button>
          <button type="button" class="cm-calendar__slot is-open" data-cm-slot="Wed 15:00">Open</button>
          <button type="button" class="cm-calendar__slot is-open" data-cm-slot="Thu 15:00">Open</button>
          <button type="button" class="cm-calendar__slot is-booked" disabled>Booked</button>

          <div class="cm-calendar__time">16:00</div>
          <button type="button" class="cm-calendar__slot is-open" data-cm-slot="Mon 16:00">Open</button>
          <button type="button" class="cm-calendar__slot is-open" data-cm-slot="Tue 16:00">Open</button>
          <button type="button" class="cm-calendar__slot is-open" data-cm-slot="Wed 16:00">Open</button>
          <button type="button" class="cm-calendar__slot is-booked" disabled>Booked</button>
          <button type="button" class="cm-calendar__slot is-open" data-cm-slot="Fri 16:00">Open</button>
        </div>

        <div class="cm-calendar__legend">
          <span class="cm-calendar__legend-chip cm-calendar__legend-chip--open">Open · click to book</span>
          <span class="cm-calendar__legend-chip">Booked</span>
          <span style="margin-left: auto; color: var(--fg3);">Outside these hours? <a href="mailto:contact@omameh.com.au" style="color: var(--accent-warm);">Write directly →</a></span>
        </div>
      </div>

      <hr class="rule">

      <div class="grid-3">
        <div><h4 class="tag" style="color: var(--accent-warm);">Boards</h4><p style="font-family: var(--font-mono); font-size: 12px; margin-top: var(--space-3);"><a href="mailto:boards@omameh.com.au">Boards@omameh.com.au</a></p></div>
        <div><h4 class="tag" style="color: var(--accent-warm);">Partner</h4><p style="font-family: var(--font-mono); font-size: 12px; margin-top: var(--space-3);"><a href="mailto:partner@omameh.com.au">Partner@omameh.com.au</a></p></div>
        <div><h4 class="tag" style="color: var(--accent-warm);">General</h4><p style="font-family: var(--font-mono); font-size: 12px; margin-top: var(--space-3);"><a href="mailto:contact@omameh.com.au">Contact@omameh.com.au</a></p></div>
      </div>
    </div>
  </div>
`;

export default function ContactPage() {
  return <RouteShell id="contact" label="09 · Contact" markup={__MARKUP} />;
}
