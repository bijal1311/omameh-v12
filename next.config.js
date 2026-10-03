/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // 01_CODE_BRIEF.md §4 · both old routes 301 to /advisory.
  //
  // /case-00 moved under /atlas so the cases and the founder notes share
  // one shape. It was indexed and it has been shared, so the old URL keeps
  // working permanently — the internal links were rewritten rather than
  // left to hop through here.
  async redirects() {
    return [
      { source: '/practice', destination: '/advisory', permanent: true },
      { source: '/doors', destination: '/advisory', permanent: true },
      { source: '/case-00', destination: '/atlas/case-00', permanent: true },
    ];
  },
};

module.exports = nextConfig;
