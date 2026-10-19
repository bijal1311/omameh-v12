'use client';

/**
 * ContactForm · the CRM form, inline on /contact.
 *
 * Added 19 October 2026. "We probably just put the same form which we
 * have built everywhere to go straight to the Intuka CRM."
 *
 * Same endpoint, same field contract, same categories as the modal —
 * all of it imported from lib/intuka-lead.js rather than copied, so a
 * change to the endpoint or a renamed category cannot leave the two
 * forms disagreeing. See that file's header.
 *
 * WHY A PORTAL. The page is injected through RouteShell with
 * dangerouslySetInnerHTML, so React cannot render a child inside that
 * markup — the markup is a string, not a tree. The page leaves an empty
 * <div data-contact-form> where the form belongs and this component
 * portals into it after mount. Same approach as the /about Framework
 * diagram, which is the established pattern in this repo.
 *
 * If the portal target is missing the component renders nothing rather
 * than dumping an orphan form at the end of the body.
 *
 * ACCESSIBILITY, because a form is where this usually goes wrong:
 *  · every input has a real <label>, not a placeholder standing in
 *  · required fields are marked in the label and with aria-required
 *  · the error is role="alert" and aria-live, so it is announced rather
 *    than only turning red, and each invalid field gets aria-invalid
 *  · the success state takes focus and is role="status"
 *  · the submit button keeps its accessible name while submitting
 *  · nothing depends on colour alone
 */

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  CONTACT_CATEGORIES, TEAM_SIZES, EMPTY_LEAD, validateLead, submitLead,
} from '@/lib/intuka-lead';
import styles from './ContactForm.module.css';

export default function ContactForm({ mountSelector = '[data-contact-form]' }) {
  const [host, setHost] = useState(null);
  const [values, setValues] = useState(EMPTY_LEAD);
  const [product, setProduct] = useState(CONTACT_CATEGORIES[0][0]);
  const [status, setStatus] = useState('idle'); // idle | submitting | done | error
  const [error, setError] = useState('');
  const doneRef = useRef(null);

  useEffect(() => {
    setHost(document.querySelector(mountSelector));
  }, [mountSelector]);

  // Move focus to the confirmation so a screen reader and a keyboard
  // user both land on it rather than being left on a vanished button.
  useEffect(() => {
    if (status === 'done') doneRef.current?.focus();
  }, [status]);

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    const invalid = validateLead(values);
    if (invalid) { setError(invalid); setStatus('error'); return; }

    setStatus('submitting');
    setError('');

    const res = await submitLead(values, product);
    if (res.ok) {
      setStatus('done');
    } else {
      setStatus('error');
      setError(res.message);
    }
  }

  if (!host) return null;

  const missing = (k) =>
    status === 'error' && !!error && !values[k].trim() &&
    ['name', 'email', 'company'].includes(k);

  const form = status === 'done' ? (
    <div className={styles.done} role="status" tabIndex={-1} ref={doneRef}>
      <span className={styles.doneIcon} aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 20 20" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 10.5l4 4 8-9" />
        </svg>
      </span>
      <h3 className={styles.doneTitle}>Thanks — it has reached me.</h3>
      <p className={styles.doneBody}>
        I read these myself and will come back to you directly. If it is
        urgent, <a href="mailto:contact@omameh.com.au">contact@omameh.com.au</a> is
        the same inbox.
      </p>
    </div>
  ) : (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <label className={styles.field}>
        {/* Not a question. The section's own h2 already asks "What are
            you trying to move?", and a field labelled "Which of these
            sounds like you?" directly beneath it asked the same thing a
            second time — Bijal spotted it: "they both the same".
            The heading asks; the label just names the control.
            It stays a real <label> because a <select> without one is
            unusable with a screen reader. */}
        <span className={styles.lab}>Closest to your situation</span>
        <select className={styles.select} name="product"
          value={product} onChange={(e) => setProduct(e.target.value)}>
          {CONTACT_CATEGORIES.map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </label>

      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.lab}>Full name <i>(required)</i></span>
          <input className={styles.input} type="text" name="name" autoComplete="name"
            value={values.name} onChange={set('name')}
            aria-required="true" aria-invalid={missing('name') || undefined} />
        </label>
        <label className={styles.field}>
          <span className={styles.lab}>Work email <i>(required)</i></span>
          <input className={styles.input} type="email" name="email" autoComplete="email"
            value={values.email} onChange={set('email')}
            aria-required="true" aria-invalid={missing('email') || undefined} />
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.lab}>Company <i>(required)</i></span>
          <input className={styles.input} type="text" name="company" autoComplete="organization"
            value={values.company} onChange={set('company')}
            aria-required="true" aria-invalid={missing('company') || undefined} />
        </label>
        {/* Company size, optional. It is what separates the four shapes
            — enterprise, owner-led, platform, an idea — so it changes
            the answer in a way industry does not. Industry is
            deliberately NOT asked: "Four shapes, not four industries"
            is a homepage headline, and the company name gives it away
            anyway. */}
        <label className={styles.field}>
          <span className={styles.lab}>Company size</span>
          <select className={styles.select} name="team_size"
            value={values.team_size} onChange={set('team_size')}>
            <option value="">Prefer not to say</option>
            {TEAM_SIZES.map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.lab}>Phone</span>
          <input className={styles.input} type="tel" name="phone" autoComplete="tel"
            value={values.phone} onChange={set('phone')} />
        </label>
      </div>

      <label className={styles.field}>
        {/* Was "What are you trying to move?" — word for word the
            section's own h2. Fixing the select label moved the
            duplication here rather than removing it. The heading asks
            the question once; the field labels name the controls. */}
        <span className={styles.lab}>In your own words</span>
        <textarea className={styles.textarea} name="message" rows={5}
          value={values.message} onChange={set('message')}
          placeholder="A few lines is plenty. What is in front of you, and what have you already tried?" />
      </label>

      {error && <p className={styles.err} role="alert">{error}</p>}

      <div className={styles.actions}>
        <button type="submit" className={styles.go} disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send it to me'}
          {status !== 'submitting' && (
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" stroke="currentColor"
              strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M1 6h15M11 1l5 5-5 5" />
            </svg>
          )}
        </button>
        <p className={styles.privacy}>
          It goes straight to me. We will only use these details to answer you.
        </p>
      </div>
    </form>
  );

  return createPortal(form, host);
}
