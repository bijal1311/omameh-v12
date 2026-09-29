// Canonical host — the apex 308-redirects here.
const BASE = 'https://www.omameh.com.au';

/**
 * robots.txt
 *
 * AI crawlers are allowed, deliberately. The whole content strategy is to
 * be found and cited — Atlas, the Cases, the writing that publishes to both
 * the site and Substack. Being the source a director's assistant quotes is
 * the positioning, not a side effect of it.
 *
 * The cost is being restated without attribution, which is real. It is
 * outweighed here because the genuinely defensible assets — the benchmark
 * data and the diagnostics — are gated and have never been on the site. A
 * crawler can read the argument. It cannot read the instrument.
 *
 * Bytespider is excluded: it crawls aggressively and sends nothing back.
 *
 * This is reversible in one direction only — text already trained on does
 * not come back. Revisit if the writing ever starts carrying material that
 * is not meant to be quoted.
 */

const AI_CRAWLERS_ALLOWED = [
  // OpenAI — training, search, and on-demand fetches
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  // Anthropic
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  // Perplexity
  'PerplexityBot',
  'Perplexity-User',
  // Google and Apple opt-in signals for AI products
  'Google-Extended',
  'Applebot-Extended',
  // Meta
  'meta-externalagent',
];

// Private routes. /follow and /trial are reached from print, QR and the
// essay rather than search; /api/ is never a destination.
const PRIVATE = ['/follow', '/trial', '/api/'];

export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: PRIVATE },
      ...AI_CRAWLERS_ALLOWED.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: PRIVATE,
      })),
      { userAgent: 'Bytespider', disallow: '/' },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
