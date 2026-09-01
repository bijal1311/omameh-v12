/**
 * Atlas · route layout · V16.
 *
 * The editorial register lives here and nowhere else. Cormorant Garamond
 * and Space Mono are imported in THIS layout rather than the root one, so
 * they load only on /atlas — 01_CODE_BRIEF.md §9.
 *
 * The .ed wrapper inside the page markup remaps --display and --mono to
 * the editorial faces; these variables make the actual fonts available
 * for that remap to point at.
 *
 * Server component. No interactivity here.
 */

import { Cormorant_Garamond, Space_Mono } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
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

export default function AtlasLayout({ children }) {
  return (
    <div className={`${cormorant.variable} ${spaceMono.variable}`}>
      {children}
    </div>
  );
}
