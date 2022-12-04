/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["scontent-nrt1-1.cdninstagram.com"],
  },
};

module.exports = nextConfig;
