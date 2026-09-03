'use client';

/**
 * The first trial enquiry form.
 *
 * A form on this site has to be worth the departure — /contact says "no
 * form that disappears, no routing, no queue". So this one never claims to
 * have sent something it has not: if the API cannot deliver, it says so and
 * hands over a mailto carrying everything already typed, so the enquiry
 * survives the failure.
 *
 * `source` records which piece the reader arrived from, per the brief's
 * requirement that forms capture the room they came through.
 */

import { useState } from 'react';

const CONTACT = 'contact@omameh.com.au';

export default function TrialForm({ source = 'case-00' }) {
  const [state, setState] = useState('idle'); // idle · sending · sent · failed
  const [error, setError] = useState('');
  const [values, setValues] = useState({
    name: '',
    email: '',
    business: '',
    running: '',
    company: '', // honeypot
  });

  const set = (field) => (event) =>
    setValues((prev) => ({ ...prev, [field]: event.target.value }));

  function mailtoFallback() {
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Runs: ${values.business}`,
      '',
      'Running on now:',
      values.running || '(not given)',
    ].join('\n');
    return `mailto:${CONTACT}?subject=${encodeURIComponent(
      `First trial — ${values.business || 'enquiry'}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  async function onSubmit(event) {
    event.preventDefault();
    setState('sending');
    setError('');

    try {
      const res = await fetch('/api/trial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, source }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setState('sent');
        return;
      }
      setError(data.error || 'That did not send.');
      setState(data.fallback ? 'failed' : 'idle');
    } catch {
      setError('That did not send.');
      setState('failed');
    }
  }

  if (state === 'sent') {
    return (
      <div className="tf tf--done">
        <p className="tf__done-k">Received</p>
        <p className="tf__done-t">
          Thank you. It reaches Bijal directly, and you will hear back — not from a queue.
        </p>
      </div>
    );
  }

  return (
    <form className="tf" onSubmit={onSubmit} noValidate>
      <div className="tf__row">
        <label className="tf__field">
          <span>Your name</span>
          <input
            type="text"
            required
            value={values.name}
            onChange={set('name')}
            autoComplete="name"
          />
        </label>
        <label className="tf__field">
          <span>Email</span>
          <input
            type="email"
            required
            value={values.email}
            onChange={set('email')}
            autoComplete="email"
          />
        </label>
      </div>

      <label className="tf__field">
        <span>What you run</span>
        <input
          type="text"
          required
          value={values.business}
          onChange={set('business')}
          placeholder="The business, and your part in it"
        />
      </label>

      <label className="tf__field">
        <span>
          What you are running on now <em>· optional</em>
        </span>
        <textarea
          rows={4}
          value={values.running}
          onChange={set('running')}
          placeholder="The tools, the spreadsheet, the tabs. Whatever the honest version is."
        />
      </label>

      {/* Honeypot — hidden from people, tempting to bots. */}
      <div className="tf__pot" aria-hidden="true">
        <label>
          Company
          <input type="text" tabIndex={-1} autoComplete="off" value={values.company} onChange={set('company')} />
        </label>
      </div>

      <div className="tf__foot">
        <button className="btn" type="submit" disabled={state === 'sending'}>
          {state === 'sending' ? 'Sending…' : 'Ask to join the trial'}
        </button>
        <span className="tf__note">
          No list, no sequence. One inbox, and it reaches Bijal.
        </span>
      </div>

      {error && (
        <p className="tf__err" role="alert">
          {error}{' '}
          {state === 'failed' && (
            <a href={mailtoFallback()}>Send it as an email instead — nothing you typed is lost.</a>
          )}
        </p>
      )}
    </form>
  );
}
