/**
 * Global footer · server component · V13 rebuild per Site Build brief §7.
 * Twenty links to nine. Seven email addresses to one.
 *
 * Structure:
 *   Row 1 · brand (wordmark + one-line + location strip)
 *   Row 2 · three columns (Practice · Read · Company)
 *   Row 3 · Foundation strip + single contact button + LinkedIn
 *   Legal · © + ABN + tagline + Privacy
 *
 * Removed: Doors, Six-Layer Stack, Eight Dimensions, Sense·Shift·Scale
 * links, Pressure-test/Modernisation sub-links, Industry Outlooks link,
 * Community link, and six of the seven email addresses (partner@,
 * fieldnotes@, press@, boards@, speak@ mailboxes stay alive and
 * forwarding — just not published on the site).
 */

export default function GlobalFooter() {
  return (
    <footer className="footer">
      <div className="container container--wide">

        <div className="footer__row footer__row--brand">
          <div className="footer__brand">
            <div className="footer__wordmark">Om<em>a</em>meh</div>
            <p className="footer__one-line">Advisory, platforms and capability for organisations moving from effort-based growth to systems.</p>
            <p className="footer__location">SYDNEY · HYDERABAD · AWS AND MICROSOFT AZURE PARTNERS</p>
          </div>
        </div>

        <div className="footer__row footer__row--cols">
          <div className="footer__col">
            <h4>Practice</h4>
            <ul>
              <li><a href="/advisory">Advisory</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/fluency">Fluency</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Read</h4>
            <ul>
              <li><a href="/atlas">Atlas</a></li>
              <li><a href="/case-00">Case 00</a></li>
              <li><a href="/media">Media kit</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/founder">Founder</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__row footer__row--strip">
          <span className="maa-gloss footer__maa-gloss" role="img" aria-label="माँ Foundation">
            <span className="maa-mark" aria-hidden="true">माँ</span>
            <span className="footer__maa-gloss__key">[ mā ]</span>
            <span className="footer__maa-gloss__sep" aria-hidden="true" />
            <span className="footer__maa-gloss__fdn">Foundation</span>
          </span>
          <div className="footer__contact-row">
            <a className="footer__contact-btn" href="mailto:contact@omameh.com.au">contact@omameh.com.au</a>
            <a className="footer__linkedin" href="https://www.linkedin.com/company/omameh/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>

        <div className="footer__legal">
          <span>© 2026 OMAMEH PARTNERS PTY LTD · ABN 77 697 372 517</span>
          <span>UNLEARN · RELEARN · REINVENT</span>
          <a href="/privacy">Privacy</a>
        </div>

      </div>
    </footer>
  );
}
