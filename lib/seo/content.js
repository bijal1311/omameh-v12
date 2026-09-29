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
  substack: 'https://bijalsejpal.substack.com',
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
    modified: '2026-09-29',
    ogImage: '/og/home.png',
  },
  {
    slug: '/advisory',
    type: 'page',
    title: 'We work out what is actually in the way.',
    headline: 'We work out what is actually in the way.',
    description:
      'Five pillars, eight dimensions, and an honest read of where an organisation actually is. Only one of them is governance.',
    modified: '2026-09-29',
    ogImage: '/og/advisory.png',
  },
  {
    slug: '/products',
    type: 'page',
    title: 'We build the things we advise on.',
    headline: 'We build the things we advise on.',
    description:
      'Eight platforms built by our own team. Or something new, for the part nobody sells off the shelf.',
    modified: '2026-09-29',
    ogImage: '/og/products.png',
  },
  {
    slug: '/fluency',
    type: 'page',
    title: 'Unlearn. Relearn. Reinvent.',
    headline: 'Unlearn. Relearn. Reinvent.',
    description:
      'Rooms for boards, executives and the people running the work. Ten seats, online, by application.',
    modified: '2026-09-29',
    ogImage: '/og/fluency.png',
  },
  {
    slug: '/about',
    type: 'page',
    title: 'The people who design it are the people who build it.',
    headline: 'The people who design it are the people who build it.',
    description:
      'One team, two countries, and the same agenda from the first conversation to the last deployment.',
    modified: '2026-09-29',
    ogImage: '/og/about.png',
  },
  {
    slug: '/atlas',
    type: 'page',
    title: 'What we learn inside the work, written down.',
    headline: 'What we learn inside the work, written down.',
    description:
      'No gate, no email address, no lead magnet. If it is useful it should be readable.',
    modified: '2026-09-29',
    ogImage: '/og/atlas.png',
  },
  {
    slug: '/case-00',
    type: 'article',
    stream: 'case',
    movement: 'REINVENT',
    title: 'You do not get a blank month.',
    headline: 'You do not get a blank month.',
    description:
      'I built a business and its operating model at the same time, because nobody gets to stop and design first. Four months, month by month.',
    published: '2026-09-03',
    modified: '2026-09-29',
    ogImage: '/og/case-00.png',
    keywords: [
      'Operating model design',
      'Founder operations',
      'AI-era operating model',
      'Business systems',
    ],
  },
  {
    slug: '/founder',
    type: 'page',
    title: 'Founder',
    headline: 'Bijal Sejpal.',
    description:
      'Two decades inside the architecture of large institutions — financial services, healthcare, government, media and technology.',
    modified: '2026-09-29',
    ogImage: '/og/founder.png',
  },
  {
    slug: '/contact',
    type: 'page',
    title: 'One inbox. It reaches me.',
    headline: 'One inbox. It reaches me.',
    description:
      'No form that disappears, no routing, no queue. Write and I read it.',
    modified: '2026-09-29',
    ogImage: '/og/contact.png',
  },
  {
    slug: '/media',
    type: 'page',
    title: 'Media kit',
    headline: 'Media kit.',
    description:
      'An advisory practice with its own engineering team. Approved portraits, founder bios, and one address for interviews, panels and speaking enquiries.',
    modified: '2026-09-29',
    ogImage: '/og/media.png',
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
