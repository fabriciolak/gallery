/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
        protocol: 'https',
        port: '',
        pathname: '/*',
      },
    ],
  },
}

module.exports = nextConfig
