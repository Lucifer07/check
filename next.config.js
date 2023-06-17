/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'rest.1010-group.com',
            port: '',
            // pathname: '/',
          },
        ],
      },
}

module.exports = nextConfig
