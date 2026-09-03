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
 */

import { useEffect, useRef } from 'react';
import { wireInteractions, rewriteHrefs } from '@/lib/wire-interactions';

export default function ArticleLayout({ article }) {
  const ref = useRef(null);
  const { masthead: m, body, author, endnote, subscribe, next, id, label } = article;

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
            </div>
          </header>
        </div>

        <section style={{ background: 'var(--cream)', paddingTop: 'var(--s5)' }}>
          <div className="art">
            <div dangerouslySetInnerHTML={{ __html: body }} />

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

            <aside className="subs">
              <div className="rings" />
              <div className="in">
                <div>
                  <span className="k">{subscribe.eyebrow}</span>
                  <h4>{subscribe.heading}</h4>
                  <p>{subscribe.body}</p>
                </div>
                <a
                  href={subscribe.linkHref}
                  dangerouslySetInnerHTML={{ __html: subscribe.linkLabel }}
                />
              </div>
            </aside>
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
