/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  async redirects() {
    return [
      { source: '/practice', destination: '/advisory', permanent: true },
    ];
  },
};

module.exports = nextConfig;
