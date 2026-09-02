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
  metadataBase: new URL('https://omameh.com.au'),
  title: {
    default: 'Omameh · Everyone got the technology. Almost nobody got their time back.',
    template: '%s · Omameh',
  },
  description:
    'We find what is holding you back, build what moves it, and leave you able to run it.',
  openGraph: {
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
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [{ url: '/favicon-180.png', sizes: '180x180', type: 'image/png' }],
    other: [{ rel: 'icon', url: '/favicon-512.png', sizes: '512x512', type: 'image/png' }],
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
        <GlobalNav />
        {children}
        <GlobalFooter />
      </body>
    </html>
  );
}
