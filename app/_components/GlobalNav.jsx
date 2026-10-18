'use client';

/**
 * GlobalNav.
 *
 * Seven items. The wordmark is the way home, so Home is not one of them
 * — "WEBSITE — THE HANDOVER, 18 October" §2.
 *
 * PLATFORMS IS LABELLED PLATFORMS AND LIVES AT /products. The label and
 * the URL differ on purpose: /products is indexed and it is what people
 * search. Do not "fix" this.
 *
 * Rooms is the seventh item and is added when /rooms exists. A nav link
 * to a 404 is worse than a nav that is briefly one item short.
 *
 * Founder, Media kit and Privacy are not here. Founder folds into
 * /about#founder and the media kit folds into /rooms.
 *
 * Client component because aria-current has to follow the route.
 * app/layout.jsx stays a server component — repo rule §2.2.
 *
 * WHAT CAME OFF, 18 OCTOBER
 *
 * The Vol. I / Issue 01 strip, and the NN / 08 reading-chain device with
 * its eight-tick rail. Both were V11 conceits. The numbering looks
 * considered until one of them is wrong, and then every page added to
 * the site is a renumbering job — which is what happened the moment
 * /rooms was planned. §9 of the handover requires both strings to return
 * empty across the whole site, and they were in here, so they were on
 * all eleven pages.
 */

import { usePathname } from 'next/navigation';

const LINKS = [
  ['Advisory', '/advisory'],
  ['Platforms', '/products'],
  ['Fluency', '/fluency'],
  ['Atlas', '/atlas'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

export default function GlobalNav() {
  const pathname = usePathname() || '/';

  return (
    <nav>
      <div className="w">
        <a className="wordmark" href="/">
          Omameh
        </a>

        <ul>
          {LINKS.map(([label, href]) => {
            const current = pathname.startsWith(href);
            return (
              <li key={href}>
                <a href={href} {...(current ? { 'aria-current': 'page' } : {})}>
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
