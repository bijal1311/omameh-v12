/**
 * GlobalFooter · V16 · server component.
 *
 * Ported from 02_CONTENT_SOURCE.html verbatim. Every string is from the
 * content source — nothing rewritten.
 *
 * Two technical changes, neither of them copy:
 *
 * 1 · Hrefs converted from the single-document's #anchors to real routes.
 *
 * 2 · The inline `color:#8E9AB8` on the Syntegreti line is replaced with
 *     #A9B3CB. That colour fails contrast on navy; 01_CODE_BRIEF.md §9
 *     says design already removed it and "Do not reintroduce any of
 *     those." It survived in the content source as an inline style, so
 *     the stylesheet pass could not reach it.
 *
 * Six social icons, on every page — LinkedIn · Substack · YouTube ·
 * Podcast · Instagram · Facebook. Confirmed against the refreshed
 * content source. Every one carries an aria-label; the five that are
 * not live yet point at "#" per 01_CODE_BRIEF.md §6.
 *
 * The माँ Foundation block ships WITH its disclaimer, on every page.
 */

const SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/omameh/',
    path: 'M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.75-2.05 4 0 4.75 2.6 4.75 6V21h-4v-5.5c0-1.3 0-3-1.85-3s-2.15 1.45-2.15 2.9V21h-4V9z',
  },
  {
    label: 'Substack',
    href: '#',
    path: 'M3 3h18v3H3V3zm0 5.5h18V21l-9-4.6L3 21V8.5z',
  },
  {
    label: 'YouTube',
    href: '#',
    path: 'M21.6 7.2s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16 4 12 4 12 4s-4 0-6.8.3c-.4 0-1.2 0-2 .9-.6.6-.8 2-.8 2S2 8.8 2 10.5v1.6c0 1.7.2 3.3.2 3.3s.2 1.4.8 2c.8.9 1.8.8 2.2.9 1.6.2 6.8.3 6.8.3s4 0 6.8-.3c.4 0 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.6c0-1.7-.2-3.3-.2-3.3zM10 14.6V9.1l5.2 2.8-5.2 2.7z',
  },
  {
    label: 'Podcast',
    href: '#',
    path: 'M12 2a10 10 0 100 20 10 10 0 000-20zm4.5 14.4a.78.78 0 01-1.07.26c-2.94-1.8-6.63-2.2-11-1.2a.78.78 0 11-.35-1.52c4.77-1.09 8.86-.62 12.15 1.39.37.23.48.7.27 1.07zm1.2-2.67a.97.97 0 01-1.34.32c-3.36-2.07-8.49-2.67-12.46-1.46a.97.97 0 11-.57-1.86c4.54-1.38 10.19-.71 14.05 1.66.46.28.6.88.32 1.34zm.1-2.78C13.77 8.56 7.4 8.35 3.9 9.41a1.17 1.17 0 11-.68-2.24C7.25 5.95 14.28 6.2 18.9 8.94a1.17 1.17 0 01-1.2 2.01z',
  },
];

export default function GlobalFooter() {
  return (
    <footer>
      <div className="rings" />
      <div className="field" />
      <div className="w">

        <div className="fgrid">
          <div>
            <h5>Omameh</h5>
            <p className="blurb">
              Advisory, platforms and capability for organisations moving from effort-based growth to systems.
            </p>
            <p className="loc">Sydney · Hyderabad · One team, two countries</p>
            <p
              className="loc"
              style={{
                marginTop: 8,
                textTransform: 'none',
                letterSpacing: '.01em',
                fontFamily: 'var(--body)',
                fontSize: '12.5px',
                color: '#A9B3CB',
              }}
            >
              Engineering delivered by{' '}
              <a
                href="https://syntegreti.com"
                target="_blank"
                rel="noopener"
                style={{
                  color: '#C9C4B4',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(201,168,76,.5)',
                }}
              >
                Syntegreti
              </a>
              , our engineering company · AWS and Microsoft Azure partners
            </p>

            <div className="soc">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0022 12z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="fcol">
            <b>Practice</b>
            <a href="/advisory">Advisory</a>
            <a href="/products">Products</a>
            <a href="/fluency">Fluency</a>
            <a href="/case-00">Case 00</a>
          </div>

          <div className="fcol">
            <b>Read</b>
            <a href="/atlas">Atlas</a>
            <a href="/atlas">Field Notes</a>
            <a href="/atlas">Executive Briefs</a>
            <a href="/media">Media kit</a>
          </div>

          <div className="fcol">
            <b>Company</b>
            <a href="/about">About</a>
            <a href="/founder">Founder</a>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>

        <div className="foundation">
          <b>माँ [ mā ] Foundation</b> — A standing share of the practice — time, capacity, capability — directed toward helping and education.
          <i>A commitment of our own time and capability, not a registered charity. No funds are solicited or held.</i>
        </div>

        <div className="fbase">
          <span>© 2026 Omameh Partners Pty Ltd · ABN 77 697 372 517</span>
          <span>Unlearn · Relearn · Reinvent</span>
        </div>

      </div>
    </footer>
  );
}
