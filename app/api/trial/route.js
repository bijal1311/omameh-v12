/**
 * POST /api/trial — first trial enquiries.
 *
 * The site's stated position is "no form that disappears, no routing, no
 * queue". This route has to earn that. Two things follow from it:
 *
 * 1 · Every submission is logged to the runtime log BEFORE the send is
 *     attempted. If the email provider is down or misconfigured, the
 *     enquiry is still recoverable from Vercel's logs rather than lost.
 * 2 · If the provider is not configured at all, the route says so plainly
 *     with a 503 and the form falls back to a mailto. It never accepts a
 *     submission it cannot deliver and then thanks the sender for it.
 *
 * Configuration — two environment variables in the Vercel project:
 *   RESEND_API_KEY   the API key
 *   TRIAL_NOTIFY_TO  where enquiries land (defaults to contact@omameh.com.au)
 *
 * The from address must be on a domain verified with the provider.
 */

export const runtime = 'nodejs';

const NOTIFY_TO = process.env.TRIAL_NOTIFY_TO || 'contact@omameh.com.au';
const FROM = process.env.TRIAL_NOTIFY_FROM || 'Omameh <trial@omameh.com.au>';

const MAX = { name: 120, email: 200, business: 200, running: 4000, source: 60 };

function clean(value, limit) {
  return typeof value === 'string' ? value.trim().slice(0, limit) : '';
}

/** Deliberately permissive — the goal is to catch typos, not police addresses. */
function looksLikeEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Could not read that submission.' }, { status: 400 });
  }

  const name = clean(body.name, MAX.name);
  const email = clean(body.email, MAX.email);
  const business = clean(body.business, MAX.business);
  const running = clean(body.running, MAX.running);
  const source = clean(body.source, MAX.source) || 'unknown';

  // Honeypot. Real people do not fill a field they cannot see.
  if (clean(body.company, 200)) {
    return Response.json({ ok: true }, { status: 200 });
  }

  if (!name || !email || !business) {
    return Response.json(
      { error: 'Name, email and what you run are all needed.' },
      { status: 400 },
    );
  }
  if (!looksLikeEmail(email)) {
    return Response.json({ error: 'That email address does not look right.' }, { status: 400 });
  }

  // Logged before the send, so a provider failure never loses the enquiry.
  console.log(
    '[trial] enquiry',
    JSON.stringify({ name, email, business, running, source, at: new Date().toISOString() }),
  );

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error('[trial] RESEND_API_KEY is not set — cannot deliver this enquiry by email');
    return Response.json(
      { error: 'The form is not connected yet.', fallback: true },
      { status: 503 },
    );
  }

  const text = [
    `Name       ${name}`,
    `Email      ${email}`,
    `Runs       ${business}`,
    `Source     ${source}`,
    '',
    'Running on now:',
    running || '(not given)',
  ].join('\n');

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [NOTIFY_TO],
        reply_to: email,
        subject: `First trial — ${business}`,
        text,
        html: `<pre style="font:14px ui-monospace,monospace">${escapeHtml(text)}</pre>`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error('[trial] provider rejected the send', res.status, detail);
      return Response.json(
        { error: 'That did not send. Please email us directly.', fallback: true },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error('[trial] send failed', err);
    return Response.json(
      { error: 'That did not send. Please email us directly.', fallback: true },
      { status: 502 },
    );
  }

  return Response.json({ ok: true }, { status: 200 });
}
