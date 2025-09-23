import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'assets.example.com'],
    unoptimized: false,
  },
  experimental: {
    appDir: true,
  },
}

export default nextConfig
