/** @type {import('next').NextConfig} */

/**
 * Redirects, and why each one is permanent.
 *
 * /practice and /doors are V11 routes that became /advisory.
 *
 * THE WRITING HAS LEFT THE SITE. As of 16 October 2026 both pieces live on
 * atlas.omameh.com.au, a Substack custom domain — confirmed serving before
 * these were deployed, because redirecting to a domain that is not yet
 * answering breaks every link rather than moving it. Checked:
 *
 *   atlas.omameh.com.au/p/carrying-enough               200
 *   atlas.omameh.com.au/p/you-do-not-get-a-blank-month  200
 *   bijalsejpal.substack.com                            301 -> atlas.omameh.com.au
 *
 * Both /atlas URLs have been shared on LinkedIn and must keep working, so
 * they forward rather than 404.
 *
 * /case-00 points straight at Substack, not at /atlas/case-00. It was
 * indexed under the old path and chaining it through a second redirect
 * costs a hop and loses a little of whatever the first one carries.
 *
 * The three that leave the site use statusCode 301, not permanent: true.
 * `permanent` emits 308, which Google treats identically but which older
 * crawlers, link previewers and HTTP clients do not all follow. These are
 * the ones already shared on LinkedIn, so they take the status code every
 * client understands. /practice and /doors keep the 308 they have always
 * returned — changing a live redirect's status buys nothing.
 */

const BLANK_MONTH = 'https://atlas.omameh.com.au/p/you-do-not-get-a-blank-month';
const CARRYING_ENOUGH = 'https://atlas.omameh.com.au/p/carrying-enough';

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  async redirects() {
    return [
      { source: '/practice', destination: '/advisory', permanent: true },
      { source: '/doors', destination: '/advisory', permanent: true },
      /* /founder folded into /about on 18 October. The URL carries her
         name and is indexed, so it forwards to the section rather than
         404ing. 301 for the same reason as the article routes. */
      /* /founder REDIRECT REMOVED, 19 October 2026.
         It was added on the 18th when the page was folded into /about.
         On Bijal's call the essay has its own page again, so the route
         is live and must not forward — leaving this line in would have
         made the restored page unreachable while every link to it kept
         working, which is the kind of fault nobody sees until a reader
         clicks. Deliberately not replaced with a redirect in the other
         direction: /about#founder is still a real anchor on a real
         section, and both URLs should resolve. */
      /* /media folded into /rooms on 18 October — the media kit is a card
         on the page that makes someone want the assets. */
      { source: '/media', destination: '/rooms', statusCode: 301 },
      { source: '/case-00', destination: BLANK_MONTH, statusCode: 301 },
      { source: '/atlas/case-00', destination: BLANK_MONTH, statusCode: 301 },
      { source: '/atlas/carrying-enough', destination: CARRYING_ENOUGH, statusCode: 301 },
    ];
  },
};

module.exports = nextConfig;
