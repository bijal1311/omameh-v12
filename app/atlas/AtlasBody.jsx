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
 * So the markup arrives in halves with the form between them, inside a
 * single <main>. Everything else is RouteShell's behaviour, including
 * rewriteHrefs and wireInteractions.
 *
 * EVERY HALF MUST BE WELL-FORMED. They are separate innerHTML writes, so
 * each opens and closes its own .atlas2 wrapper. A half with an unclosed
 * div is repaired by the browser differently from the server, React
 * throws away the server HTML and re-renders the whole page, and the
 * hydration failure ships silently because the page still looks right
 * afterwards. That happened here once.
 *
 * `rest` is optional. The page ends on the subscribe box today, and
 * passing undefined into dangerouslySetInnerHTML renders the string
 * "undefined" — so it is skipped rather than defaulted.
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

  // id is main-content to match RouteShell, so the one skip link in
  // layout.jsx reaches this page too — /atlas was the only route where
  // it had nothing to land on. tabIndex -1 so focus actually moves
  // rather than the page merely scrolling.
  return (
    <main
      className="route"
      id="main-content"
      tabIndex={-1}
      data-route={id}
      data-screen-label={label}
      ref={ref}
    >
      <div dangerouslySetInnerHTML={{ __html: top }} />
      <div className="atlas2 atlas2__subband">
        <div className="atlas2__subwrap">
          <SubscribeEmbed />
        </div>
      </div>
      {rest ? <div dangerouslySetInnerHTML={{ __html: rest }} /> : null}
    </main>
  );
}
