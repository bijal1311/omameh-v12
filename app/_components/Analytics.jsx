'use client';

/**
 * Google Analytics 4, loaded only after consent.
 *
 * The script tag is not rendered at all until the visitor has accepted, so
 * a declining visitor never fetches anything from Google and no cookie is
 * written. That is stricter than Consent Mode's denied-by-default, and it
 * is the version that survives a question from a European visitor.
 *
 * The measurement ID comes from NEXT_PUBLIC_GA_ID. With no ID set this
 * component renders nothing at all — which is the state until the ID is
 * added in Vercel, and it means nothing breaks in the meantime.
 *
 * Withdrawal matters as much as consent: if someone declines after having
 * accepted, we set the opt-out flag GA's own script checks, and reload so
 * the already-loaded library stops reporting. Without the reload, GA keeps
 * sending for the rest of the session.
 */

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { CONSENT_EVENT, readConsent } from './CookieConsent';

export default function Analytics({ gaId }) {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    setConsent(readConsent());
    const onChange = (e) => {
      const next = e.detail;
      setConsent(next);
      if (next === 'denied' && gaId) {
        // GA reads this flag on every send; set before any reload
        try {
          window[`ga-disable-${gaId}`] = true;
        } catch {
          /* ignore */
        }
        if (window.dataLayer) window.location.reload();
      }
    };
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, [gaId]);

  if (!gaId || consent !== 'granted') return null;

  return (
    <>
      <Script
        id="ga-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'granted'
          });
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
