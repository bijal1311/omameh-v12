// Canonical host — the apex 308-redirects here.
const BASE = 'https://www.omameh.com.au';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/follow', '/trial', '/api/'],
    },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
