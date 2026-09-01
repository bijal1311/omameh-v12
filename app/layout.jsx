/**
 * Omameh · V16 · root layout
 *
 * Server component. Never add 'use client' — repo rule §2.2. Anything
 * needing interactivity is extracted into a child and marked there
 * (see _components/GlobalNav.jsx).
 *
 * Fonts · Playfair Display, Inter and JetBrains Mono load site-wide.
 * Cormorant Garamond and Space Mono load ONLY on /atlas, per
 * 01_CODE_BRIEF.md §9 — they are imported in app/atlas/layout.jsx.
 *
 * The V16 stylesheet is self-contained: it carries the motif tiles and
 * the Foundation block, so the old maa-foundation.css and
 * omameh-motifs.css imports are gone.
 */

import { Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google';
import '../styles/globals.css';
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
      className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>
        <GlobalNav />
        {children}
        <GlobalFooter />
      </body>
    </html>
  );
}
