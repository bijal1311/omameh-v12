'use client';

/**
 * RouteShell · client component.
 *
 * Renders a <main class="route"> wrapper with dangerouslySetInnerHTML for
 * the markup, then mounts the wireInteractions handlers after the DOM
 * lands. This is the established repo pattern — repo rule §2.3.
 *
 * Every route uses this single shell:
 *   <RouteShell id="home" label="01 · Home" markup={__MARKUP} />
 *
 * V16 note · the wrapper is <main>, not <section>. The V16 stylesheet
 * styles bare `section { padding: var(--band) 0 }`, and the ported page
 * markup already carries its own <section> bands — so a <section>
 * wrapper added a second band of padding around every page. <main> is
 * also the correct semantics here: one per page, and the page's own
 * sections sit inside it.
 *
 * Pass register="editorial" for /atlas. The ported Atlas markup already
 * carries its own .ed wrapper, which remaps --display and --mono to
 * Cormorant and Space Mono; the data-register attribute is kept for any
 * styling that wants to hang off the route rather than the wrapper.
 */

import { useEffect, useRef } from 'react';
import { wireInteractions, rewriteHrefs } from '@/lib/wire-interactions';

export default function RouteShell({ id, label, markup, register, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    rewriteHrefs(ref.current);
    const unwire = wireInteractions(ref.current);
    return unwire;
  }, []);

  const cls = ['route', className].filter(Boolean).join(' ');
  const extra = register === 'editorial' ? { 'data-register': 'editorial' } : {};

  return (
    <main
      className={cls}
      id={id}
      data-screen-label={label}
      ref={ref}
      dangerouslySetInnerHTML={{ __html: markup }}
      {...extra}
    />
  );
}
