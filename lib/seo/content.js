/**
 * One source for site identity and per-route metadata.
 *
 * Without this, <title>, the sitemap and the structured data drift apart
 * within a month — they are edited in different files at different times by
 * different people. Everything downstream reads from here.
 *
 * `modified` is the field that earns its keep. Rule: any copy change to a
 * page updates its modified date in the same commit. Freshness is the
 * cheapest ranking signal there is and the easiest to let rot.
 */

export const SITE = {
  // With the www. The apex 308-redirects here, and every URL in every
  // schema block has to match this character for character.
  url: 'https://www.omameh.com.au',
  name: 'Omameh Group',
  legalName: 'Omameh Partners Pty Ltd',
  // Verified against the public register, 29 September 2026:
  // abr.business.gov.au — ABN active from 26 April 2026.
  abn: '77697372517',
  acn: '697372517',
  foundingDate: '2026-04-26',
  tagline: 'Human-Led. AI-Operated.',
  locale: 'en_AU',
  // The publication's own domain since 16 October 2026.
  // bijalsejpal.substack.com now 301s here and carries the query string
  // with it, so the old address still works — but the subscribe handoff
  // sends a reader with ?email= prefilled and should not spend a hop on
  // it. Verified: /subscribe?email=… on this host returns the address
  // already filled into the field.
  substack: 'https://atlas.omameh.com.au',
  // Both taken from the live site — the /founder page and the footer — so
  // these are the URLs Omameh already publishes. The implementation brief
  // carried /in/bijalsejpal/ and /company/omameh-group/ instead. LinkedIn
  // answers 999 to any non-browser request, so neither set can be checked
  // with a fetch; the site is the better authority either way.
  linkedinPerson: 'https://www.linkedin.com/in/bijal-sejpal',
  linkedinCompany: 'https://www.linkedin.com/company/omameh',
};

/**
 * One entry per route. Titles and descriptions are the ones already live —
 * they are on-brand and were written deliberately, so they are copied
 * across rather than rewritten.
 */
export const ENTRIES = [
  {
    slug: '',
    type: 'page',
    title: 'Omameh Group — Human-Led. AI-Operated.',
    headline: 'Everyone got the technology. Almost nobody got their time back.',
    description:
      'We find what is holding you back, build what moves it, and leave you able to run it.',
    modified: '2026-10-18',
    ogImage: '/og/home.png',
  },
  {
    slug: '/advisory',
    type: 'page',
    title: 'We work out what is actually in the way.',
    headline: 'We work out what is actually in the way.',
    description:
      'Five pillars, eight dimensions, and an honest read of where an organisation actually is. Only one of them is governance.',
    modified: '2026-10-18',
    ogImage: '/og/advisory.png',
  },
  {
    slug: '/products',
    type: 'page',
    title: 'We build the things we advise on.',
    headline: 'We build the things we advise on.',
    description:
      'Eight platforms built by our own team. Or something new, for the part nobody sells off the shelf.',
    modified: '2026-10-18',
    ogImage: '/og/products.png',
  },
  {
    slug: '/fluency',
    type: 'page',
    title: 'Unlearn. Relearn. Reinvent.',
    headline: 'Unlearn. Relearn. Reinvent.',
    description:
      'Rooms for boards, executives and the people running the work. Ten seats, online, by application.',
    modified: '2026-10-18',
    ogImage: '/og/fluency.png',
  },
  {
    slug: '/about',
    type: 'page',
    title: 'The people who design it are the people who build it.',
    headline: 'The people who design it are the people who build it.',
    description:
      'One team, two countries, and the same agenda from the first conversation to the last deployment.',
    modified: '2026-10-18',
    ogImage: '/og/about.png',
  },
  {
    /* Back in the sitemap on 19 October. It was removed on the 18th when
       the route 301'd to /about#founder; the route is live again, so a
       sitemap that omitted it would ask Google to ignore the one page
       carrying her name and her own account of why the practice exists. */
    slug: '/founder',
    type: 'page',
    title: 'Founder',
    headline: 'Why I built this.',
    description:
      'Bijal Sejpal · founder of Omameh. Two decades inside the architecture of large institutions. Transformation Strategy is the discipline almost no one writes down.',
    modified: '2026-10-19',
    ogImage: '/og/bijal-ogpanel-400x630.jpg',
  },
  {
    slug: '/atlas',
    type: 'page',
    title: 'The Unlearning',
    headline: 'The Unlearning',
    description:
      'For anyone who has outgrown the version of themselves that got them here. No gate, no email address, no lead magnet.',
    modified: '2026-10-16',
    ogImage: '/og/atlas.png',
  },

  {
    slug: '/rooms',
    type: 'page',
    title: 'Rooms I have been trusted to run.',
    headline: 'Rooms I have been trusted to run.',
    description:
      'Moderating, panels, webinars and podcasts — for the organisations whose rooms they were. Speaking, moderating and media.',
    modified: '2026-10-18',
    ogImage: '/og/default-1200x630.png',
  },
  {
    slug: '/contact',
    type: 'page',
    title: 'One inbox. It reaches me.',
    headline: 'One inbox. It reaches me.',
    description:
      'No form that disappears, no routing, no queue. Write and I read it.',
    modified: '2026-10-18',
    ogImage: '/og/contact.png',
  },

  {
    slug: '/privacy',
    type: 'page',
    title: 'Privacy Policy',
    headline: 'Privacy Policy.',
    description:
      'How Omameh Partners collects, uses, retains and discloses personal information — and the rights you hold in relation to it.',
    modified: '2026-09-29',
    ogImage: '/og/privacy.png',
  },
];

export const bySlug = (slug) => ENTRIES.find((e) => e.slug === slug);
