/**
 * GlobalNav · server component.
 *
 * Sticky top navigation, renders on every route via layout.jsx.
 * Ports the mockup's review-bar (lines 1702-1718 + 209-230) using
 * /route paths since this is a multi-page Next.js app.
 *
 * The Atlas link carries .is-editorial (gold-light) to telegraph
 * the cream/editorial register shift.
 */

const LINKS = [
  ['01 · Home',     '/',         false],
  ['02 · About',    '/about',    false],
  ['03 · Practice', '/practice', false],
  ['04 · Atlas',    '/atlas',    true],
  ['05 · Doors',    '/doors',    false],
  ['06 · Founder',  '/founder',  false],
  ['07 · Case 00',  '/case-00',  false],
  ['08 · Media',    '/media',    false],
  ['09 · Contact',  '/contact',  false],
  ['10 · Privacy',  '/privacy',  false],
];

export default function GlobalNav() {
  return (
    <nav className="site-nav" aria-label="Site navigation">
      <div className="site-nav__inner">
        <a className="site-nav__brand" href="/">Om<em>a</em>meh</a>
        <div className="site-nav__links">
          {LINKS.map(([label, href, editorial]) => (
            <a
              key={href}
              href={href}
              className={editorial ? 'is-editorial' : undefined}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
