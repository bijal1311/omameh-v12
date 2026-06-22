/**
 * Global footer · server component.
 * Ported from mockup HTML lines 2983-3063 verbatim, with hash anchors
 * rewritten to /route paths. Renders on every route below page content.
 *
 * Structure:
 *   Row 1 · brand (wordmark + pledge + CTAs + ABN) + 3 nav cols
 *   Row 2 · Connect col + spanned emails block
 *   Legal strip · © OMAMEH · UNLEARN/RELEARN/REINVENT · domain
 */

export default function GlobalFooter() {
  return (
    <footer className="footer">
      <div className="container container--wide">

        <div className="footer__row">
          <div className="footer__brand">
            <div className="footer__wordmark">Om<em>a</em>meh</div>
            <span className="maa-lockup-v footer__maa" role="img" aria-label="माँ Foundation">
              <span className="maa-mark" aria-hidden="true">माँ</span>
              <span className="maa-lockup-v__row">
                <span className="maa-lockup-v__tick" aria-hidden="true" />
                <span className="maa-fdn">Foundation</span>
                <span className="maa-lockup-v__tick" aria-hidden="true" />
              </span>
              <span className="maa-pron">
                <span className="maa-pron__key">mā</span>
                <span className="maa-pron__dot" aria-hidden="true" />
                <span className="maa-pron__mean">mother</span>
              </span>
            </span>
            <p className="footer__pledge">
              A standing share of the practice — time, capacity, capability — directed toward helping and education.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-3)', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg3)' }}>
              <a href="/about#pledge">Our Foundation →</a>
              <a href="/privacy">Privacy Policy →</a>
            </div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg3)', marginTop: 'var(--space-4)' }}>
              Omameh Partners Pty Ltd · ABN 77 697 372 517
            </p>
          </div>

          <div className="footer__col">
            <h4>Framework</h4>
            <ul>
              <li><a href="/about">Six-Layer Stack</a></li>
              <li><a href="/practice">Five Pillars</a></li>
              <li><a href="/about">Eight Dimensions</a></li>
              <li><a href="/practice">Sense · Shift · Scale</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Practice</h4>
            <ul>
              <li><a href="/practice">Pressure-test</a></li>
              <li><a href="/practice">Modernisation</a></li>
              <li><a href="/practice">Advisory</a></li>
              <li><a href="/practice">Partners &amp; Collaborations</a></li>
            </ul>
            <div className="emails">
              <a href="mailto:partner@omameh.com.au">Partner@omameh.com.au</a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Read</h4>
            <ul>
              <li><a href="/atlas">Field Notes</a></li>
              <li><a href="/atlas">Industry Outlooks</a></li>
              <li><a href="/atlas">Community</a></li>
            </ul>
            <div className="emails">
              <a href="mailto:fieldnotes@omameh.com.au">FieldNotes@omameh.com.au</a>
              <a href="mailto:community@omameh.com.au">Community@omameh.com.au</a>
            </div>
          </div>
        </div>

        <div className="footer__row" style={{ gridTemplateColumns: '1.4fr 1fr 1fr 1fr' }}>
          <div></div>
          <div className="footer__col">
            <h4>Connect</h4>
            <ul>
              <li><a href="/founder">Founder</a></li>
              <li><a href="/doors">Doors</a></li>
              <li><a href="/media">Media kit</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="https://www.linkedin.com/in/bijal-sejpal/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>
            </ul>
          </div>
          <div className="footer__col" style={{ gridColumn: 'span 2' }}>
            <div className="emails">
              <a href="mailto:press@omameh.com.au">Press@omameh.com.au</a>
              <a href="mailto:boards@omameh.com.au">Boards@omameh.com.au</a>
              <a href="mailto:speak@omameh.com.au">Speak@omameh.com.au</a>
              <a href="mailto:contact@omameh.com.au">Contact@omameh.com.au</a>
            </div>
          </div>
        </div>

        <div className="footer__legal">
          <span>© 2026 OMAMEH</span>
          <span>UNLEARN · RELEARN · REINVENT</span>
          <span className="strip">OMAMEH.COM.AU</span>
        </div>

      </div>
    </footer>
  );
}
