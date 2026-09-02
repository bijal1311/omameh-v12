/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // 01_CODE_BRIEF.md §4 · both old routes 301 to /advisory.
  async redirects() {
    return [
      { source: '/practice', destination: '/advisory', permanent: true },
      { source: '/doors', destination: '/advisory', permanent: true },
    ];
  },
};

module.exports = nextConfig;
