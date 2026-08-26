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

// Top nav · 8 items only · plain names, no numbers.
// Media + Privacy live in the footer, not in the top bar.
// Primary nav · 8 items per Cowork brief (V12_BUILD_PROMPT_for_Code.md §2).
// Doors · Case 00 · Media moved to footer to stop the primary nav bloating
// past readable width. All three routes still live and linked from content.
const LINKS = [
  ['Home',     '/',         false],
  ['About',    '/about',    false],
  ['Advisory', '/advisory', false],
  ['Products', '/products', false],
  ['Fluency',  '/fluency',  false],
  ['Atlas',    '/atlas',    true],
  ['Founder',  '/founder',  false],
  ['Contact',  '/contact',  false],
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
