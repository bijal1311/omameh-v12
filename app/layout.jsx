/**
 * Omameh · v12 · root layout
 *
 * Server component. Renders the document shell + global font loading +
 * metadata. No client-side wrappers (Header / SvgDefs / BrandCursor /
 * ReadProgress have been deliberately removed — the mockup doesn't
 * need them and they were the source of v11's structural conflicts).
 *
 * Footer is rendered globally below {children} so it appears on every
 * route. Mockup-defined footer markup is duplicated as a server component
 * here so each route's page.jsx only carries the route content.
 */

import { Playfair_Display, Inter, JetBrains_Mono, Cormorant_Garamond, Space_Mono } from 'next/font/google';
import '../styles/globals.css';
import GlobalNav from './_components/GlobalNav';
import GlobalFooter from './_components/GlobalFooter';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://omameh.com.au'),
  title: {
    default: 'Omameh · Business architecture for the AI era',
    template: '%s · Omameh',
  },
  description:
    'Omameh is a specialist advisory practice for boards and senior leaders building organisations structurally ready for the AI era. Business architecture sits between strategy and execution.',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'Omameh',
    title: 'Omameh · Business architecture for the AI era',
    description:
      'A specialist advisory practice for boards and senior leaders. Human-Led. AI-Operated.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: '#0D1F4E',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${jetbrains.variable} ${cormorant.variable} ${spaceMono.variable}`}>
      <body>
        <GlobalNav />
        {children}
        <GlobalFooter />
      </body>
    </html>
  );
}
