'use client';

/**
 * Subscribe · one component, two placements.
 *
 * WHY THIS IS A HANDOFF AND NOT AN IN-PAGE POST
 *
 * The build spec had this POST to Substack's free-signup endpoint. It does
 * not work, by any route, and was tested before anything was built:
 *
 *   server-side, curl  →  403, Substack's own error page
 *   server-side, Node  →  403, the same
 *   browser, direct    →  blocked; the preflight returns 200 with no
 *                         Access-Control-Allow-Origin
 *
 * Built as specified it would have taken a name and an email and silently
 * dropped every one. So: the name and address are stored on our side
 * first, then the reader is handed to Substack's own subscribe page with
 * the address already filled in — verified, the page returns
 * value="their@address" — where one click finishes it. They are on the
 * list immediately and the welcome email goes out immediately, which
 * storing and importing later would not do.
 *
 * Substack's window is opened SYNCHRONOUSLY inside the submit handler.
 * Awaiting our own fetch first loses the user-gesture context and the
 * popup blocker eats it. The store call follows with keepalive, so it
 * survives if the tab changes; if it fails the subscription still stands,
 * because that half happens on Substack.
 *
 * The reader never leaves the article. A new tab opens, the form here is
 * replaced in place by a line of confirmation, and a fallback link is
 * shown in case the tab was blocked anyway.
 */

import { useState } from 'react';
import { SITE } from '@/lib/seo/content';

const SUBSCRIBE_URL = `${SITE.substack}/subscribe`;

export default function SubscribeForm({ heading, id = 'subscribe' }) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle');
  const [handoff, setHandoff] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    const name = firstName.trim();
    const addr = email.trim();
    if (!name || !addr) {
      setState('error');
      return;
    }

    /* Opened first, while the click is still the reason it is happening. */
    const url = `${SUBSCRIBE_URL}?email=${encodeURIComponent(addr)}`;
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    setHandoff(url);

    fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
      body: JSON.stringify({
        firstName: name,
        email: addr,
        firstUrl: window.location.href,
        firstReferrer: document.referrer || '',
        company: '',
      }),
    }).catch(() => {
      /* The subscription happens on Substack. Losing our copy of the name
         is worth a log line, not an error in the reader's face. */
    });

    setState(win ? 'done' : 'blocked');
  }

  if (state === 'done' || state === 'blocked') {
    return (
      <aside className="sub" id={id}>
        <p className="sub__done">
          {state === 'done'
            ? 'One click left — finish in the tab that just opened.'
            : 'One click left to finish.'}{' '}
          <a href={handoff} target="_blank" rel="noopener noreferrer">
            Confirm on Substack &rarr;
          </a>
        </p>
      </aside>
    );
  }

  return (
    <aside className="sub" id={id}>
      <p className="sub__h">{heading}</p>
      <form className="sub__form" onSubmit={onSubmit} noValidate>
        <label className="sub__f">
          <span>First name</span>
          <input
            type="text"
            name="firstName"
            autoComplete="given-name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label className="sub__f">
          <span>Email</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit" className="sub__go">
          Subscribe
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M1 6h15M11 1l5 5-5 5" />
          </svg>
        </button>
      </form>
      {state === 'error' && (
        <p className="sub__err">Both fields, please — the name is how the first line is written.</p>
      )}
    </aside>
  );
}
