/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.website-files.com'],
  },
  styledComponents: true,
  pageExtensions: ['tsx'],
}

module.exports = nextConfig
