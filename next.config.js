const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'minio.kentriversnook.com',
      },
    ],
  },
}

module.exports = nextConfig
