const BASE = 'https://omameh.com.au';

/**
 * /follow is deliberately absent — it carries robots:{index:false} and is a
 * link-hub reached from print and QR codes, not from search.
 */
const ROUTES = [
  { path: '', priority: 1.0 },
  { path: '/advisory', priority: 0.9 },
  { path: '/products', priority: 0.9 },
  { path: '/fluency', priority: 0.9 },
  { path: '/about', priority: 0.8 },
  { path: '/atlas', priority: 0.8 },
  { path: '/case-00', priority: 0.7 },
  { path: '/founder', priority: 0.7 },
  { path: '/contact', priority: 0.7 },
  { path: '/media', priority: 0.5 },
  { path: '/privacy', priority: 0.3 },
];

export default function sitemap() {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority,
  }));
}
