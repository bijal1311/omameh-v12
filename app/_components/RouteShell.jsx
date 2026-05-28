'use client';

/**
 * RouteShell · client component.
 *
 * Renders a <section class="route"> wrapper with dangerouslySetInnerHTML
 * for the markup, then mounts the wireInteractions handlers (calendar
 * slot click, subscribe submit, href rewrite) after the DOM lands.
 *
 * Every route in v12 uses this single shell:
 *   <RouteShell id="home" label="01 · Home" markup={__MARKUP} />
 *
 * Skip the editorial register prop for navy-default routes.
 * Pass register="editorial" for /atlas (cream / Cormorant Garamond /
 * Space Mono / stage-green accent · driven by [data-register=editorial]).
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
    <section
      className={cls}
      id={id}
      data-screen-label={label}
      ref={ref}
      dangerouslySetInnerHTML={{ __html: markup }}
      {...extra}
    />
  );
}
