'use client';

/**
 * The Cookies link in the footer.
 *
 * Its own component purely so GlobalFooter can stay a server component. The
 * footer is static and server-rendered, which is worth keeping; only this
 * one button needs a click handler, so only this one button is a client
 * component.
 *
 * It reopens the consent banner, because withdrawing consent has to be as
 * easy as giving it.
 */

import { REOPEN_EVENT } from './CookieConsent';

export default function CookieSettingsLink() {
  return (
    <button
      type="button"
      className="cc-link"
      onClick={() => window.dispatchEvent(new CustomEvent(REOPEN_EVENT))}
    >
      Cookies
    </button>
  );
}
