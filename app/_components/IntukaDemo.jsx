'use client';

/**
 * Lead modal · Intuka and GovernVeil.
 *
 * The products page is injected as static markup through RouteShell, so the
 * "Book a demo" control there is a plain <a data-intuka-demo> with a
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
 * TWO PRODUCTS, ONE FORM — added 18 October 2026.
 *
 * `product` was already a field in the payload rather than part of the
 * endpoint, so GovernVeil needed no second integration and no second key:
 * the same WebForm carries it and the lead is told apart by that field.
 * A trigger opts in with data-demo-product="GovernVeil"; anything without
 * it is Intuka, so Karthik's original control is byte-for-byte unchanged
 * and keeps working exactly as he built it.
 *
 * STILL TO CONFIRM: whether WebForm wf_65c596eb accepts a `product` value
 * of "GovernVeil", or whether its definition pins that field to one
 * option. If it rejects it the modal shows its error state and the lead
 * is not silently lost — but it has not been proved with a live
 * submission, because that would put a real row in Bijal's CRM.
 *
 * Rollback: delete this file + its .module.css, and revert the two marked
 * lines in app/products/page.jsx. The mailto fallback then takes over again.
 */

import { useEffect, useRef, useState } from 'react';
import styles from './IntukaDemo.module.css';

const SUBMIT_URL = 'https://app.intuka.com/api/v1/public/forms/wf_65c596eb/submit';
const PUBLIC_KEY = 'pk_live_176274021b6965f7a50149fc';
const TENANT_ID = '5e81a56b-9bc7-4e85-8171-e6586073b454';

/**
 * Per-product wording. Everything else about the modal is identical, which
 * is the point — one form, one endpoint, one thing to maintain.
 */
const PRODUCTS = {
  Intuka: {
    eyebrow: 'Intuka',
    logo: '/brand/intuka-wordmark.svg',
    title: 'Book a demo',
    sub: 'Tell us a little about your business and we’ll set up a walkthrough on your real operation.',
    placeholder: 'What does your business run on today?',
    done: 'We’ll be in touch shortly to set up your Intuka demo.',
    privacy: 'arrange your demo',
    site: { href: 'https://www.intuka.com', label: 'intuka.com' },
  },
  /* Services. Same form, same endpoint — the category is what separates
     an Advisory enquiry from a product demo in the CRM. */
  'Advisory — Pressure-test': {
    eyebrow: 'Advisory',
    logo: null,
    title: 'Start a Pressure-test',
    sub: 'Tell us roughly where the organisation is and what the strategy assumes. We will come back with the shape and the sequence.',
    placeholder: 'What is the gap you already suspect is there?',
    done: 'We’ll be in touch shortly about a Pressure-test.',
    privacy: 'arrange a Pressure-test',
    site: { href: '/advisory', label: 'the Advisory page' },
  },
  'Advisory — Standing counsel': {
    eyebrow: 'Advisory',
    logo: null,
    title: 'Explore standing counsel',
    sub: 'A retained room for the leader inside the transition. Tell us what is in front of you.',
    placeholder: 'What is the decision you cannot make out loud yet?',
    done: 'We’ll be in touch shortly about standing counsel.',
    privacy: 'arrange that conversation',
    site: { href: '/advisory', label: 'the Advisory page' },
  },
  GovernVeil: {
    eyebrow: 'GovernVeil',
    /* No wordmark asset exists yet — governveil.com sets its name in type
       and ships only a generic square favicon. Set in type here too
       rather than enlarging a favicon into a logo. */
    logo: null,
    title: 'Book a design-partner pilot',
    sub: 'Tell us where AI is already touching data you cannot let leave, and we’ll scope a pilot in your own environment.',
    placeholder: 'Which models or tools are your teams already using?',
    done: 'We’ll be in touch shortly about a GovernVeil design-partner pilot.',
    privacy: 'arrange your pilot',
    site: { href: 'https://governveil.com', label: 'governveil.com' },
  },
};

const EMPTY = { name: '', email: '', company: '', phone: '', team_size: '', message: '' };

export default function IntukaDemo() {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState('Intuka');
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | submitting | done | error
  const [error, setError] = useState('');
  const firstFieldRef = useRef(null);
  const closeRef = useRef(null);

  // Wire every injected lead control. The product comes off the trigger,
  // defaulting to Intuka so the original control behaves as it always has.
  useEffect(() => {
    const triggers = Array.from(document.querySelectorAll('[data-intuka-demo]'));
    const onClick = (e) => {
      e.preventDefault();
      const named = e.currentTarget.getAttribute('data-demo-product');
      setProduct(PRODUCTS[named] ? named : 'Intuka');
      setStatus('idle');
      setError('');
      setValues(EMPTY);
      setOpen(true);
    };
    triggers.forEach((t) => t.addEventListener('click', onClick));
    return () => triggers.forEach((t) => t.removeEventListener('click', onClick));
  }, []);

  const p = PRODUCTS[product];

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
            product,
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
              {p.done} In the meantime you can learn more at{' '}
              <a href={p.site.href} target="_blank" rel="noopener">{p.site.label}</a>.
            </p>
          </div>
        ) : (
          <>
            <div className={styles.head}>
              {p.logo && <img className={styles.logo} src={p.logo} alt={product} />}
              <p className={styles.eyebrow}>{p.eyebrow}</p>
              <h3 className={styles.title} id="intuka-demo-title">{p.title}</h3>
              <p className={styles.sub}>{p.sub}</p>
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
                  placeholder={p.placeholder} />
              </label>

              {error && <p className={styles.err}>{error}</p>}

              <div className={styles.actions}>
                <button type="submit" className={styles.go} disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending…' : p.title}
                  {status !== 'submitting' && (
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M1 6h15M11 1l5 5-5 5" />
                    </svg>
                  )}
                </button>
              </div>
              {/* "your demo" is wrong on a service enquiry — this form now
                  carries Advisory and standing counsel too. */}
              <p className={styles.privacy}>We&rsquo;ll only use these details to {p.privacy}.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
