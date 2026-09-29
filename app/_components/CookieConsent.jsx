'use client';

/**
 * Cookie consent · Google Analytics gate.
 *
 * The products are global, so EU visitors are expected and the strict
 * reading applies: no analytics cookie is set, and no Google script is
 * fetched, until someone has actively said yes. Declining is one click and
 * sits next to accepting — a banner where "accept" is a button and
 * "decline" is a link in the small print does not count as a free choice.
 *
 * The choice lives in localStorage, so it is per-browser and never reaches
 * a server. Every read and write is wrapped, because in a private window or
 * with site data blocked the accessor itself throws rather than returning
 * null — in that case the banner simply shows again and nothing is loaded.
 *
 * Consent can be withdrawn as easily as it was given: the footer carries a
 * Cookies link that reopens this, which is the half of the requirement most
 * banners quietly skip.
 */

import { useEffect, useState } from 'react';

export const CONSENT_KEY = 'omameh.consent';
export const CONSENT_EVENT = 'omameh:consent';
export const REOPEN_EVENT = 'omameh:cookie-settings';

export function readConsent() {
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

function writeConsent(value) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* private window, or site data blocked — the choice holds for this page only */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

export default function CookieConsent() {
  // null until mounted, so the server and the first client render agree
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    setOpen(readConsent() === null);
    const reopen = () => setOpen(true);
    window.addEventListener(REOPEN_EVENT, reopen);
    return () => window.removeEventListener(REOPEN_EVENT, reopen);
  }, []);

  if (!ready || !open) return null;

  const choose = (value) => {
    writeConsent(value);
    setOpen(false);
  };

  return (
    <div className="cc" role="dialog" aria-live="polite" aria-label="Cookies">
      <div className="cc__in">
        <div className="cc__text">
          <b>Cookies</b>
          <p>
            We use Google Analytics to understand which pages are read and which are
            not. Nothing is loaded until you choose, and we do not use cookies to
            advertise to you. Our{' '}
            <a href="/privacy">privacy policy</a> has the detail.
          </p>
        </div>
        <div className="cc__acts">
          <button type="button" className="cc__btn cc__btn--ghost" onClick={() => choose('denied')}>
            Decline
          </button>
          <button type="button" className="cc__btn" onClick={() => choose('granted')}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
