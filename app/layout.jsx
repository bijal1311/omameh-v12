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
 * Cormorant Garamond and Space Mono are the Editorial register, used on
 * /atlas and /case-00 only. They are DECLARED here rather than in a route
 * layout, with preload:false — declaring them here puts --font-cormorant
 * and --font-space-mono in scope for GlobalNav, which sits outside every
 * route layout and needs the editorial face for its wordmark on those two
 * routes. preload:false keeps the font files off the wire on the routes
 * that never render them, which is what §9 was protecting.
 *
 * This replaces app/atlas/layout.jsx, which scoped the import but could
 * not reach the nav.
 *
 * The V16 stylesheet is self-contained: it carries the motif tiles and
 * the Foundation block, so the old maa-foundation.css and
 * omameh-motifs.css imports are gone.
 */

import {
  Playfair_Display,
  Inter,
  JetBrains_Mono,
  Cormorant_Garamond,
  Space_Mono,
} from 'next/font/google';
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

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
  preload: false,
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
  preload: false,
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
      className={`${playfair.variable} ${inter.variable} ${jetbrains.variable} ${cormorant.variable} ${spaceMono.variable}`}
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
