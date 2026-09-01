const BASE = 'https://omameh.com.au';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/follow',
    },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
