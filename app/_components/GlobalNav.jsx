'use client';

/**
 * GlobalNav · V16.
 *
 * Ported from 02_CONTENT_SOURCE.html — the .vol bar and <nav> block,
 * verbatim. Hrefs converted from the single-document's #anchors to real
 * routes. Seven items, this order, per 01_CODE_BRIEF.md §4.
 *
 * Founder, Case 00, Media kit and Privacy are footer-only. Deliberate.
 * Do not add them here.
 *
 * Client component because aria-current has to follow the route.
 * app/layout.jsx stays a server component — repo rule §2.2.
 *
 * The reading-chain position device (mono NN / 08 plus an eight-tick
 * rail) is the one addition from 04_DESIGN_NOTES.md §4. It answers
 * "where am I in this argument" without implying a funnel.
 */

import { usePathname } from 'next/navigation';

const LINKS = [
  ['Home', '/'],
  ['Advisory', '/advisory'],
  ['Products', '/products'],
  ['Fluency', '/fluency'],
  ['About', '/about'],
  ['Atlas', '/atlas'],
  ['Contact', '/contact'],
];

// The eight-step reading chain. Follow sits outside the nav but inside
// the chain — it is step 08.
const CHAIN = ['/', '/advisory', '/products', '/fluency', '/about', '/atlas', '/contact', '/follow'];

export default function GlobalNav() {
  const pathname = usePathname() || '/';
  const step = CHAIN.indexOf(pathname);
  const position = step >= 0 ? step + 1 : null;

  return (
    <>
      <div className="vol">
        <div className="w">
          <span>Omameh Group</span>
          <span><b>Vol. I</b> · Issue 01 · Q3 2026</span>
        </div>
      </div>

      <nav>
        <div className="w">
          <a className="wordmark" href="/">Omameh</a>

          <ul>
            {LINKS.map(([label, href]) => {
              const current = href === '/' ? pathname === '/' : pathname.startsWith(href);
              return (
                <li key={href}>
                  <a href={href} {...(current ? { 'aria-current': 'page' } : {})}>
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          {position && (
            <div className="chain" aria-hidden="true">
              <span className="chain__n">
                {String(position).padStart(2, '0')} / 08
              </span>
              <span className="chain__rail">
                {CHAIN.map((_, i) => (
                  <i key={i} className={i === step ? 'is-here' : undefined} />
                ))}
              </span>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
