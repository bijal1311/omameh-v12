'use client';

/**
 * Reveal · entrance motion, progressively enhanced.
 *
 * The contract with craft.css §K04: nothing is hidden until this
 * component has mounted and confirmed IntersectionObserver exists. It
 * then sets data-reveal-ready on <html>, which is the only thing that
 * arms the opacity:0 rule. So:
 *
 *   · JavaScript off, blocked, or erroring  -> every element visible
 *   · prefers-reduced-motion: reduce        -> never arms at all
 *   · observer unsupported                  -> never arms at all
 *
 * That ordering is deliberate. The common way this is built — hide in
 * CSS, reveal in JS — turns one script error into a blank page, and on
 * a site whose whole argument is the writing, a blank page is the worst
 * possible failure.
 *
 * Re-runs on route change because the App Router keeps this mounted
 * across navigations while swapping the page beneath it; without the
 * pathname dependency the second page a visitor opens would stay
 * hidden. That is the bug this pattern always has.
 */

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;

    const reduced =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || typeof IntersectionObserver === 'undefined') {
      root.removeAttribute('data-reveal-ready');
      return;
    }

    const targets = document.querySelectorAll('[data-reveal], [data-reveal-group]');
    if (!targets.length) return;

    // Arm the CSS only now that we know we can unarm it again.
    root.setAttribute('data-reveal-ready', '');

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add('is-in');
          io.unobserve(e.target); // once only — this is an entrance, not a scrubber
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 },
    );

    targets.forEach((t) => io.observe(t));

    // Anything already above the fold on load should not wait for a
    // scroll event that may never come on a short page.
    requestAnimationFrame(() => {
      targets.forEach((t) => {
        const r = t.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.94) {
          t.classList.add('is-in');
          io.unobserve(t);
        }
      });
    });

    return () => {
      io.disconnect();
      root.removeAttribute('data-reveal-ready');
    };
  }, [pathname]);

  return null;
}
