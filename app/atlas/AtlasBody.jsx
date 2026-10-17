'use client';

/**
 * /atlas body · RouteShell with one slot in it.
 *
 * RouteShell renders its markup with dangerouslySetInnerHTML, and React
 * will not take children alongside that, so a React component cannot be
 * placed inside the page. The subscribe form has to sit after the hero —
 * at the top of the page, but not above its own masthead, which would
 * read as a lead-gen page on the one route that promises no gate and no
 * lead magnet.
 *
 * So the markup arrives in two halves with the form between them, inside
 * a single <main>. Everything else is RouteShell's behaviour, including
 * rewriteHrefs and wireInteractions.
 *
 * BOTH HALVES MUST BE WELL-FORMED. They are two separate innerHTML
 * writes, so each opens and closes its own .atlas2 wrapper. A half with
 * an unclosed div is repaired by the browser differently from the server,
 * React throws away the server HTML and re-renders the whole page, and
 * the hydration failure ships silently because the page still looks right
 * afterwards. That happened here once.
 */

import { useEffect, useRef } from 'react';
import { wireInteractions, rewriteHrefs } from '@/lib/wire-interactions';
import SubscribeEmbed from '../_components/SubscribeEmbed';

export default function AtlasBody({ id, label, top, rest }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    rewriteHrefs(ref.current);
    const unwire = wireInteractions(ref.current);
    return unwire;
  }, []);

  return (
    <main className="route" id={id} data-screen-label={label} ref={ref}>
      <div dangerouslySetInnerHTML={{ __html: top }} />
      <div className="atlas2 atlas2__subband">
        <div className="atlas2__subwrap">
          <SubscribeEmbed />
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: rest }} />
    </main>
  );
}
