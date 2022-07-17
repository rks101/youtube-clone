/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'bootcamp-rks.s3.ap-south-1.amazonaws.com',
      'bootcamp-rks.s3.amazonaws.com'
    ],
  },
}

module.exports = nextConfig
