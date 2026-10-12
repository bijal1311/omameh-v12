'use client';

/**
 * Intuka · "Book a demo" modal.
 *
 * The products page is injected as static markup through RouteShell, so the
 * Intuka "Book a demo" control there is a plain <a data-intuka-demo> with a
 * mailto href as a no-JS fallback. This component (mounted once on the
 * products page) finds that control, intercepts the click, and opens a modal
 * lead form instead.
 *
 * On submit it posts to Intuka's public WebForms endpoint, which creates a
 * Lead in Omameh's Intuka CRM (tenant). The field keys below are the exact
 * lowercase snake_case contract the endpoint expects — do not rename them.
 * `pk_live_...` is a publishable form key (safe in client JS); it is not a
 * secret and grants nothing beyond submitting this one form.
 *
 * Rollback: delete this file + its .module.css, and revert the two marked
 * lines in app/products/page.jsx. The mailto fallback then takes over again.
 */

import { useEffect, useRef, useState } from 'react';
import styles from './IntukaDemo.module.css';

const SUBMIT_URL = 'https://app.intuka.com/api/v1/public/forms/wf_65c596eb/submit';
const PUBLIC_KEY = 'pk_live_176274021b6965f7a50149fc';
const TENANT_ID = '5e81a56b-9bc7-4e85-8171-e6586073b454';

const EMPTY = { name: '', email: '', company: '', phone: '', team_size: '', message: '' };

export default function IntukaDemo() {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | submitting | done | error
  const [error, setError] = useState('');
  const firstFieldRef = useRef(null);
  const closeRef = useRef(null);

  // Wire the injected "Book a demo" control(s) for Intuka.
  useEffect(() => {
    const triggers = Array.from(document.querySelectorAll('[data-intuka-demo]'));
    const onClick = (e) => {
      e.preventDefault();
      setStatus('idle');
      setError('');
      setValues(EMPTY);
      setOpen(true);
    };
    triggers.forEach((t) => t.addEventListener('click', onClick));
    return () => triggers.forEach((t) => t.removeEventListener('click', onClick));
  }, []);

  // Escape to close + body scroll lock + initial focus while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => {
      (status === 'done' ? closeRef.current : firstFieldRef.current)?.focus();
    }, 30);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      clearTimeout(t);
    };
  }, [open, status]);

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    const name = values.name.trim();
    const email = values.email.trim();
    const company = values.company.trim();

    if (!name || !email || !company) {
      setError('Please add your name, work email and company.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('That email address does not look right.');
      return;
    }

    setStatus('submitting');
    setError('');

    try {
      const res = await fetch(SUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': PUBLIC_KEY,
          'X-Tenant-ID': TENANT_ID,
        },
        body: JSON.stringify({
          data: {
            name,
            email,
            company,
            phone: values.phone.trim(),
            team_size: values.team_size.trim(),
            message: values.message.trim(),
            product: 'Intuka',
          },
        }),
      });

      const payload = await res.json().catch(() => null);
      if (res.ok && payload && payload.success) {
        setStatus('done');
      } else {
        setStatus('error');
        setError('Something went wrong sending your request. Please email contact@omameh.com.au and we will sort it.');
      }
    } catch {
      setStatus('error');
      setError('We could not reach the server. Please check your connection, or email contact@omameh.com.au.');
    }
  }

  if (!open) return null;

  const onBackdrop = (e) => { if (e.target === e.currentTarget) setOpen(false); };

  return (
    <div className={styles.overlay} onMouseDown={onBackdrop}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="intuka-demo-title"
      >
        <button
          type="button"
          className={styles.close}
          aria-label="Close"
          onClick={() => setOpen(false)}
          ref={closeRef}
        >
          &times;
        </button>

        {status === 'done' ? (
          <div className={styles.doneWrap}>
            <div className={styles.doneIcon} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 10.5l4 4 8-9" />
              </svg>
            </div>
            <h3 className={styles.doneTitle} id="intuka-demo-title">Thanks — request received.</h3>
            <p className={styles.doneBody}>
              We&rsquo;ll be in touch shortly to set up your Intuka demo. In the meantime you can
              learn more at <a href="https://www.intuka.com" target="_blank" rel="noopener">intuka.com</a>.
            </p>
          </div>
        ) : (
          <>
            <div className={styles.head}>
              <img className={styles.logo} src="/brand/intuka-wordmark.svg" alt="Intuka" />
              <p className={styles.eyebrow}>P02 · Intuka</p>
              <h3 className={styles.title} id="intuka-demo-title">Book a demo</h3>
              <p className={styles.sub}>
                Tell us a little about your business and we&rsquo;ll set up a walkthrough on your real operation.
              </p>
            </div>

            <form className={styles.form} onSubmit={onSubmit} noValidate>
              <label className={styles.field}>
                <span>Full name *</span>
                <input ref={firstFieldRef} className={styles.input} type="text" name="name"
                  autoComplete="name" value={values.name} onChange={set('name')} required />
              </label>

              <div className={styles.row}>
                <label className={styles.field}>
                  <span>Work email *</span>
                  <input className={styles.input} type="email" name="email"
                    autoComplete="email" value={values.email} onChange={set('email')} required />
                </label>
                <label className={styles.field}>
                  <span>Company *</span>
                  <input className={styles.input} type="text" name="company"
                    autoComplete="organization" value={values.company} onChange={set('company')} required />
                </label>
              </div>

              <div className={styles.row}>
                <label className={styles.field}>
                  <span>Phone</span>
                  <input className={styles.input} type="tel" name="phone"
                    autoComplete="tel" value={values.phone} onChange={set('phone')} />
                </label>
                <label className={styles.field}>
                  <span>Team size</span>
                  <select className={styles.select} name="team_size" value={values.team_size} onChange={set('team_size')}>
                    <option value="">Select&hellip;</option>
                    <option value="1-10">1&ndash;10</option>
                    <option value="11-50">11&ndash;50</option>
                    <option value="51-200">51&ndash;200</option>
                    <option value="200+">200+</option>
                  </select>
                </label>
              </div>

              <label className={styles.field}>
                <span>Anything we should know?</span>
                <textarea className={styles.textarea} name="message"
                  value={values.message} onChange={set('message')}
                  placeholder="What does your business run on today?" />
              </label>

              {error && <p className={styles.err}>{error}</p>}

              <div className={styles.actions}>
                <button type="submit" className={styles.go} disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending…' : 'Book a demo'}
                  {status !== 'submitting' && (
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M1 6h15M11 1l5 5-5 5" />
                    </svg>
                  )}
                </button>
              </div>
              <p className={styles.privacy}>We&rsquo;ll only use these details to arrange your demo.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
