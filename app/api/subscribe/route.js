/**
 * POST /api/subscribe — the first name Substack will not take.
 *
 * Substack's signup takes an email and nothing else, so the name is the
 * only reason to run a form on our own domain rather than linking out.
 * This stores it. The subscription itself happens on Substack, where the
 * reader is handed next — see _components/SubscribeForm.jsx for why that
 * is a handoff and not a server-to-server post.
 *
 * The log is the store, on the same reasoning as /api/trial: every
 * submission is written to the runtime log before anything else can fail,
 * so it is recoverable from Vercel's logs even if nothing downstream
 * exists yet. When a mail tool replaces Substack, these lines are the
 * names we will wish we had kept.
 *
 * A 200 here is not a subscription and must not be read as one. It means
 * the name was recorded. The reader still has to click on Substack.
 */

export const runtime = 'nodejs';

const MAX = { firstName: 120, email: 200, url: 500, referrer: 500 };

function clean(value, limit) {
  return typeof value === 'string' ? value.trim().slice(0, limit) : '';
}

/** Permissive on purpose — this catches typos, it does not police addresses. */
function looksLikeEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'Malformed request.' }, { status: 400 });
  }

  /* Honeypot. A real browser leaves it empty; a bot fills every field. */
  if (clean(body.company, 80)) {
    return Response.json({ ok: true }, { status: 200 });
  }

  const firstName = clean(body.firstName, MAX.firstName);
  const email = clean(body.email, MAX.email);

  if (!firstName || !looksLikeEmail(email)) {
    return Response.json({ ok: false, error: 'A first name and a valid email, please.' }, { status: 400 });
  }

  console.log(
    'SUBSCRIBER ' +
      JSON.stringify({
        at: new Date().toISOString(),
        firstName,
        email,
        firstUrl: clean(body.firstUrl, MAX.url),
        firstReferrer: clean(body.firstReferrer, MAX.referrer),
      }),
  );

  return Response.json({ ok: true }, { status: 200 });
}
