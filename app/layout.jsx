/**
 * Omameh · V16 · root layout
 *
 * Server component. Never add 'use client' — repo rule §2.2. Anything
 * needing interactivity is extracted into a child and marked there
 * (see _components/GlobalNav.jsx).
 *
 * Fonts · Playfair Display, Inter and JetBrains Mono load site-wide and
 * are preloaded.
 *
 * Three faces, everywhere. Cormorant Garamond and Space Mono used to be
 * a second, Editorial register under /atlas. They were dropped when The
 * Unlearning got its identity: every asset in the publication — avatars,
 * email headers, quote cards, covers, banners — is Playfair, Inter and
 * JetBrains Mono, and Substack cannot be made to serve Cormorant, so the
 * site's two reading pages were the only surface anywhere using different
 * type.
 *
 * The editorial surfaces still size and space differently. Only the faces
 * are shared now — see --ed-display and --ed-mono in globals.css. Essay
 * body copy is Georgia and was never part of either register.
 *
 * The V16 stylesheet is self-contained: it carries the motif tiles and
 * the Foundation block, so the old maa-foundation.css and
 * omameh-motifs.css imports are gone.
 */

import { Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google';
import '../styles/globals.css';
import '../styles/legacy.css';
import GlobalNav from './_components/GlobalNav';
import GlobalFooter from './_components/GlobalFooter';
import CookieConsent from './_components/CookieConsent';
import Analytics from './_components/Analytics';
import JsonLd from './_components/JsonLd';
import { globalGraph } from '@/lib/seo/graph';
import { SITE } from '@/lib/seo/content';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
  preload: true,
});

export const metadata = {
  // Must be the canonical host, with the www. The apex 308-redirects
  // here, and og:image URLs resolved against the apex therefore redirect
  // too — which LinkedIn's crawler does not reliably follow when fetching
  // a share image. A redirecting og:image renders as a grey box.
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Omameh · Everyone got the technology. Almost nobody got their time back.',
    template: '%s · Omameh',
  },
  description:
    'We find what is holding you back, build what moves it, and leave you able to run it.',
  openGraph: {
    images: [{ url: '/og/default-1200x630.png', width: 1200, height: 630 }],
    type: 'website',
    locale: 'en_AU',
    siteName: 'Omameh',
    title: 'Omameh · Everyone got the technology. Almost nobody got their time back.',
    description:
      'We find what is holding you back, build what moves it, and leave you able to run it.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omameh',
    description:
      'We find what is holding you back, build what moves it, and leave you able to run it.',
  },
  alternates: { canonical: SITE.url },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // At the default Google caps the extract. These permit a long
      // pull into an AI Overview, which is the whole point of the
      // writing being public.
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  authors: [{ name: 'Bijal Sejpal', url: `${SITE.url}/founder` }],
  creator: 'Bijal Sejpal',
  publisher: SITE.legalName,
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export const viewport = {
  themeColor: '#0D1F4E',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-AU"
      className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>
        <JsonLd data={globalGraph} />
        <GlobalNav />
        {children}
        <GlobalFooter />
        <CookieConsent />
        <Analytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      </body>
    </html>
  );
}
