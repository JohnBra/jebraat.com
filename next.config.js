/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: { allowFutureImage: true },
  },
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
