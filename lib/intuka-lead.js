/**
 * The one definition of an Omameh lead.
 *
 * Extracted from IntukaDemo.jsx on 19 October 2026, when /contact gained
 * an inline form. Before that the endpoint, the keys, the headers and the
 * ten categories lived inside the modal component. A second form that
 * copied them would have worked on the day and drifted the first time a
 * category was renamed or the endpoint moved — and the failure mode is
 * silent: leads keep posting, they just stop being categorised the way
 * the CRM expects.
 *
 * Both the modal (IntukaDemo) and the inline form (ContactForm) import
 * from here. There is one endpoint, one field contract, one list of
 * categories, and one place to change any of them.
 *
 * `pk_live_...` is a publishable form key and is safe in client JS. It is
 * not a secret and grants nothing beyond submitting this one WebForm.
 *
 * The field keys are the exact lowercase snake_case contract the endpoint
 * expects. Do not rename them. `product` is a free-text field on the form
 * definition — confirmed by reading the definition itself — which is why
 * ten categories need no new form, no new key and no new integration.
 */

export const SUBMIT_URL =
  'https://app.intuka.com/api/v1/public/forms/wf_65c596eb/submit';
export const PUBLIC_KEY = 'pk_live_176274021b6965f7a50149fc';
export const TENANT_ID = '5e81a56b-9bc7-4e85-8171-e6586073b454';

/** Per-category wording. Everything else about the form is identical. */
export const PRODUCTS = {
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
  Fluency: {
    eyebrow: 'AI-Era Fluency',
    logo: null,
    title: 'Start a conversation',
    sub: 'Tell us what you are trying to change. We will tell you which programme fits, what it would take, and whether you need one at all.',
    placeholder: 'What decision keeps being made badly?',
    done: 'We’ll be in touch shortly about a programme.',
    privacy: 'arrange that conversation',
    site: { href: '/fluency', label: 'the Fluency page' },
  },
  Diagnostic: {
    eyebrow: 'The read',
    logo: null,
    title: 'Ask for the diagnostic',
    sub: 'Fifteen minutes, scored against eight dimensions, with the working shown. Yours whether we speak again or not.',
    placeholder: 'Anything you want the read to look hardest at?',
    done: 'We’ll send the diagnostic through shortly.',
    privacy: 'send you the diagnostic',
    site: { href: '/advisory', label: 'the Advisory page' },
  },
  Roundtable: {
    eyebrow: 'The roundtable',
    logo: null,
    title: 'Register interest',
    sub: 'Ninety minutes, one industry, a dozen people who actually run something. No slides and nothing sold.',
    placeholder: 'Which industry, and what would make it worth your ninety minutes?',
    done: 'We’ll be in touch when the next table suits you.',
    privacy: 'tell you about the next table',
    site: { href: '/contact', label: 'the Contact page' },
  },
  /* NEW CATEGORY, 19 October. There was nowhere for a build enquiry to
     land, which was a real gap rather than an oversight in the form:
     the four markets include "individuals with an idea -> build
     partnership", and the homepage's fourth shape is "an idea of your
     own -> your build partner". Both sent people to a picker with no
     line for them.

     `product` is free text on the WebForm — confirmed by reading the
     live definition — so this needs no change in Intuka to be accepted.
     Karthik should still be told it is arriving, so it sits on the
     pending list beside the form rename. */
  Build: {
    eyebrow: 'Build',
    logo: null,
    title: 'Build something',
    sub: 'Design sessions with you rather than a report to you, then a squad stood up to build what you designed. You own what we build.',
    placeholder: 'What is the idea, and what would it have to do?',
    done: 'We’ll be in touch shortly about the build.',
    privacy: 'answer your enquiry',
    site: { href: '/products', label: 'the Platforms page' },
  },
  Partnership: {
    eyebrow: 'Partnerships',
    logo: null,
    title: 'Start a conversation',
    sub: 'Delivery in region, or taking each other’s software to market. Tell us which direction and what you are trying to reach.',
    placeholder: 'Which direction, and what are you trying to reach?',
    done: 'We’ll be in touch shortly.',
    privacy: 'arrange that conversation',
    site: { href: '/about', label: 'the About page' },
  },
  Speaking: {
    eyebrow: 'Rooms',
    logo: null,
    title: 'Book a room',
    sub: 'Keynotes, panels, moderation, webinars and private roundtables. Sydney, Asia-Pacific and remote.',
    placeholder: 'What is the room, and when?',
    done: 'We’ll be in touch shortly about the room.',
    privacy: 'answer your enquiry',
    site: { href: '/rooms', label: 'the Rooms page' },
  },
  'Media kit': {
    eyebrow: 'Media kit',
    logo: null,
    title: 'Open the kit',
    sub: 'Approved portraits, four bio lengths written to be lifted verbatim, and QR codes.',
    placeholder: 'What are you writing, and by when?',
    done: 'We’ll send the kit through shortly.',
    privacy: 'send you the kit',
    site: { href: '/rooms', label: 'the Rooms page' },
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

/**
 * What /contact offers in its picker.
 *
 * ── REWRITTEN 19 OCTOBER, AND THE REASON MATTERS ───────────────────
 * The first version listed what we sell — "Advisory, a board or
 * executive engagement", "AI-Era Fluency, a programme for our people".
 * Bijal: "there is a weird looking form there which asks where do you
 * want to start... not at the products we have. What are your biggest
 * problems? What are your biggest challenges?"
 *
 * She is right, and it is a positioning fault rather than a wording
 * one. A product list makes the visitor translate their own problem
 * into our catalogue before they are allowed to speak — and if they
 * pick wrong, or cannot see themselves in any of it, they leave. The
 * homepage already does this correctly: twelve triggers, and the
 * instruction is to find the sentence that sounds like your week.
 *
 * So the LABEL is the visitor's problem, in their words, and the VALUE
 * is the category the CRM routes on. The split already existed in this
 * array; only the labels changed. Nothing about the payload, the
 * endpoint or the CRM categories moved, so no Intuka change is needed.
 *
 * Deliberately not Object.keys(PRODUCTS). Intuka and GovernVeil reach
 * the form from their own product cards with their own wording, and an
 * enquiry picked blind off a dropdown is a worse lead than one raised
 * from the product page.
 *
 * ── REWRITTEN AGAIN, SAME DAY, AND THIS IS THE IMPORTANT ONE ──────
 * The first rewrite swung from products to problems, and the problems
 * were written as deficiencies: "I do not know where we actually
 * stand", "Something is holding us back and I cannot name it". Bijal:
 * "does it make them feel bad that I'm dumb? The lines need to be
 * positive. Outcome-based. We want to adopt, build, know where we are."
 *
 * She is right and it was the worse error of the two. A CIO does not
 * click a confession on a form they are sending to a potential adviser.
 * A product list is merely unhelpful; a deficiency list is insulting,
 * and the more senior the reader the more it costs.
 *
 * The lines now follow the homepage's own spine — Understand it, Adopt
 * it, Build with it, Scale it — so the form is the end of an argument
 * the site has already made rather than a new question. Every line
 * opens "We want to": an intention, stated in the plural an executive
 * actually uses about their organisation. Nobody admits anything.
 *
 * ORDER IS LOAD-BEARING. The first option is the default, so it is what
 * an undecided visitor sends. "A clear read on where we stand" is the
 * lowest-commitment entry and the diagnostic is the qualifying engine
 * for everything else, which makes it the right thing to default to.
 *
 * PARTNERSHIP AND SPEAKING ARE DELIBERATELY ABSENT. They are not buyer
 * intents, and both are already reachable from the two cards at the
 * bottom of /contact — Partnerships opens this same modal tagged
 * `Partnership`, and Press goes to /rooms, which carries its own
 * Book-a-room control tagged `Speaking`. Nothing is lost by shortening
 * the list, and a shorter list is answered more often.
 */
export const CONTACT_CATEGORIES = [
  ['Diagnostic', 'We want a clear read on where we stand'],
  ['Fluency', 'We want to understand AI properly'],
  ['Advisory — Pressure-test', 'We want to adopt AI across the business'],
  ['Build', 'We want to build something of our own'],
  ['Advisory — Standing counsel', 'We want to scale what is already working'],
  ['Roundtable', 'We want to sit down with peers on this'],
];

/**
 * Company size bands — one list, both forms.
 *
 * Added here 19 October. The modal had them inline and the inline
 * contact form had no size field at all, which is how the same CRM
 * column ends up with two vocabularies in it.
 *
 * THE TOP BAND WAS EXTENDED. It stopped at "200+", which puts a
 * 300-person firm and a bank in one bucket — fine for an Intuka demo,
 * useless for Omameh, where size is what separates the four shapes
 * (enterprise, owner-led, platform, an idea of your own). `team_size`
 * is a free-text field on the form definition, confirmed by reading it,
 * so the new bands need no change in Intuka.
 *
 * Existing leads keep "200+". New ones land in the finer bands. That is
 * normal when a field is refined and is worth knowing before anyone
 * reports on the column.
 */
export const TEAM_SIZES = [
  ['1-10', '1–10'],
  ['11-50', '11–50'],
  ['51-200', '51–200'],
  ['201-1000', '201–1,000'],
  ['1001-5000', '1,001–5,000'],
  ['5000+', 'More than 5,000'],
];

export const EMPTY_LEAD = {
  name: '', email: '', company: '', phone: '', team_size: '', message: '',
};

export function validateLead({ name, email, company }) {
  if (!name?.trim() || !email?.trim() || !company?.trim()) {
    return 'Please add your name, work email and company.';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return 'That email address does not look right.';
  }
  return null;
}

/**
 * Posts the lead. Resolves { ok: true } or { ok: false, message }.
 * Never throws — the caller renders `message` and the visitor is told to
 * email instead, which is the one fallback that cannot itself fail.
 */
export async function submitLead(values, product) {
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
          name: values.name.trim(),
          email: values.email.trim(),
          company: values.company.trim(),
          phone: values.phone.trim(),
          team_size: values.team_size.trim(),
          message: values.message.trim(),
          product,
        },
      }),
    });

    const payload = await res.json().catch(() => null);
    if (res.ok && payload && payload.success) return { ok: true };

    return {
      ok: false,
      message:
        'Something went wrong sending your request. Please email contact@omameh.com.au and we will sort it.',
    };
  } catch {
    return {
      ok: false,
      message:
        'We could not reach the server. Please check your connection, or email contact@omameh.com.au.',
    };
  }
}
