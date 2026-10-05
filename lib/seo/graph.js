/**
 * The global structured-data graph.
 *
 * The organisation and the person are defined once, with stable @ids.
 * Everything else — articles, breadcrumbs, services — references those ids
 * rather than repeating the details. That is what turns "Bijal Sejpal" from
 * a string an engine has to guess at into an entity it can resolve.
 *
 * The endDate on both roles is load-bearing. Bupa ended July 2026, QBE
 * January 2025. Schema implying either is current would be a factual error
 * published under her name in the format machines trust most. The known CV
 * problem — "Jan 2025 – Present" against Bupa — is this exact mistake in
 * another file. Do not reintroduce it here.
 */

import { SITE } from './content';

export const ORG_ID = `${SITE.url}/#organization`;
export const PERSON_ID = `${SITE.url}/#bijal`;
export const SITE_ID = `${SITE.url}/#website`;

export const globalGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': ORG_ID,
      name: SITE.name,
      legalName: SITE.legalName,
      url: SITE.url,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}/brand/omameh-mark-512.png`,
        width: 512,
        height: 512,
      },
      image: `${SITE.url}/brand/omameh-mark-512.png`,
      slogan: SITE.tagline,
      description:
        'Omameh Group helps boards and senior leaders become structurally ready for the AI era — through advisory engagements, working platforms built by its own engineering team, and AI-Era Fluency rooms.',
      // Verified against the public register rather than recalled.
      foundingDate: SITE.foundingDate,
      founder: { '@id': PERSON_ID },
      identifier: [
        { '@type': 'PropertyValue', name: 'ABN', value: SITE.abn },
        { '@type': 'PropertyValue', name: 'ACN', value: SITE.acn },
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sydney',
        addressRegion: 'NSW',
        addressCountry: 'AU',
      },
      // Australia and Asia-Pacific are where the work starts, not where it
      // stops. The products are global.
      areaServed: [
        { '@type': 'Country', name: 'Australia' },
        { '@type': 'Place', name: 'Asia-Pacific' },
        { '@type': 'Place', name: 'Middle East' },
      ],
      knowsAbout: [
        'AI governance',
        'Operating model design',
        'Board advisory',
        'Data and analytics operating models',
        'Workforce capability in the AI era',
        'Global capability centres',
        'Regulated industry technology',
        'AI readiness assessment',
        'Technology operations',
      ],
      sameAs: [SITE.linkedinCompany, SITE.substack],
    },
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Bijal Sejpal',
      givenName: 'Bijal',
      familyName: 'Sejpal',
      url: `${SITE.url}/founder`,
      image: `${SITE.url}/og/bijal-portrait-1080.jpg`,
      jobTitle: 'Founder and Chief Executive Officer',
      worksFor: { '@id': ORG_ID },
      description:
        'Founder and Chief Executive Officer of Omameh Group. Two decades running technology, data and AI inside global insurance and healthcare.',
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'AGSM @ UNSW Business School' },
      ],
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'degree',
          name: 'Master of Business Administration (Executive)',
          recognizedBy: {
            '@type': 'CollegeOrUniversity',
            name: 'AGSM @ UNSW Business School',
          },
        },
      ],
      // Both roles are PAST. endDate is not optional here.
      hasOccupation: [
        {
          '@type': 'Role',
          startDate: '2019-07',
          endDate: '2025-01',
          roleName: 'Group Chief Operating Officer, Data Analytics and AI',
          worksFor: { '@type': 'Organization', name: 'QBE Insurance Group' },
        },
        {
          '@type': 'Role',
          startDate: '2025-01',
          endDate: '2026-07',
          roleName: 'Chief Operating Officer, Technology',
          worksFor: { '@type': 'Organization', name: 'Bupa' },
        },
      ],
      knowsAbout: [
        'AI governance',
        'Operating model design',
        'Technology operations',
        'Data and analytics leadership',
        'Global capability centres',
        'Insurance technology',
        'Healthcare technology',
      ],
      sameAs: [SITE.linkedinPerson, SITE.substack],
    },
    {
      '@type': 'WebSite',
      '@id': SITE_ID,
      url: SITE.url,
      name: SITE.name,
      publisher: { '@id': ORG_ID },
      inLanguage: 'en-AU',
    },
  ],
};
