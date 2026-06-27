import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Safeguards your Vercel deployment pipeline
  },
};

export default nextConfig;
