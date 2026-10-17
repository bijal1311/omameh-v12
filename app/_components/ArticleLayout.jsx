'use client';

/**
 * ArticleLayout · the repeating article format.
 *
 * Case 00 is the first instance, not a one-off page — Case 01 follows and
 * Field Notes run on the same pattern. Nothing here was redesigned; the
 * components that already existed on Case 00 are parameterised, so a new
 * article is data (front matter plus body) rather than another hand-build.
 *
 * Editorial register throughout, via the .essay wrapper, which remaps
 * --display and --mono to Cormorant Garamond and Space Mono. The nav
 * wordmark switches with it — see GlobalNav's EDITORIAL_ROUTES.
 *
 * Only the body arrives as markup. Everything around it is a field, which
 * is what stops the format drifting by article four.
 *
 * Author portrait is square and sits at the foot. Never circular, never at
 * the top of an article.
 *
 * 16 October 2026 — the writing moved to atlas.omameh.com.au and both
 * article routes are now 301s, so nothing renders through here today. The
 * format is kept because the next piece that belongs on the site will use
 * it, and two things were removed rather than left dormant: the navy
 * closing block (.subs) and the Subscribe on Substack button inside it.
 * Substack owns that moment now, and a component left in place is a
 * component that comes back. The in-body subscribe stays, and is now
 * Substack's own embed rather than the two-step handoff form.
 */

import { useEffect, useRef } from 'react';
import { wireInteractions, rewriteHrefs } from '@/lib/wire-interactions';
import SubscribeEmbed from './SubscribeEmbed';

/**
 * Where the form goes inside the body.
 *
 * Roughly 40% through, and always at a paragraph boundary — never inside
 * one, and never adjacent to a pull quote, where it would read as part of
 * the quote. An article can name its own split point with subscribeAfter,
 * a unique phrase from the paragraph it should follow, because "the
 * paragraph where the piece turns to the reader" is an editorial call and
 * not a percentage.
 */
function splitBody(body, marker) {
  const ends = [...body.matchAll(/<\/p>/g)].map((m) => m.index + 4);
  if (!ends.length) return [body, ''];

  if (marker) {
    const at = body.indexOf(marker);
    if (at >= 0) {
      const cut = ends.find((e) => e > at);
      if (cut) return [body.slice(0, cut), body.slice(cut)];
    }
  }

  const target = body.length * 0.4;
  let cut = ends[0];
  for (const e of ends) if (Math.abs(e - target) < Math.abs(cut - target)) cut = e;
  return [body.slice(0, cut), body.slice(cut)];
}

export default function ArticleLayout({ article }) {
  const ref = useRef(null);
  const { masthead: m, body, author, endnote, next, id, label, subscribeAfter } = article;
  const [bodyTop, bodyRest] = splitBody(body, subscribeAfter);

  useEffect(() => {
    if (!ref.current) return;
    rewriteHrefs(ref.current);
    const unwire = wireInteractions(ref.current);
    return unwire;
  }, []);

  return (
    <main
      className="route"
      id={id}
      data-screen-label={label}
      data-register="editorial"
      ref={ref}
    >
      <div className="essay">
        <div className="emast-band">
          <div className="rings" />
          <header className="emast">
            <span className="kick">{m.kicker}</span>
            <h1>{m.title}</h1>
            <p className="dek">{m.dek}</p>
            <div className="by">
              <span>
                By <b>{m.author}</b>
              </span>
              <span>{m.date}</span>
              <span>{m.readingTime}</span>
              {m.status && <span className="st">{m.status}</span>}
              <a className="sub__link" href="#subscribe">Subscribe</a>
            </div>
          </header>
        </div>

        <section style={{ background: 'var(--cream)', paddingTop: 'var(--s5)' }}>
          <div className="art">
            <div dangerouslySetInnerHTML={{ __html: bodyTop }} />
            <SubscribeEmbed />
            <div dangerouslySetInnerHTML={{ __html: bodyRest }} />

            <div className="authcard">
              <img
                src={author.portrait}
                alt={author.name}
                width="120"
                height="120"
                loading="lazy"
              />
              <div>
                <span className="who">{author.eyebrow}</span>
                <h4>{author.name}</h4>
                <p dangerouslySetInnerHTML={{ __html: author.bio }} />
                <a
                  href={author.linkHref}
                  dangerouslySetInnerHTML={{ __html: author.linkLabel }}
                />
              </div>
            </div>

            <div
              className="endnote"
              dangerouslySetInnerHTML={{ __html: endnote }}
            />

          </div>
        </section>
      </div>

      {next && (
        <div className="next">
          <div className="w">
            <a href={next.href}>
              <div>
                <span className="k">{next.eyebrow}</span>
                <span className="t">{next.title}</span>
              </div>
              <span className="r">{next.label}</span>
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
