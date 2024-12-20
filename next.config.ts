import type { NextConfig } from 'next';
import path from 'path';

const withBundleAnalyzer = async (config: NextConfig) => {
  const bundleAnalyzer = (await import('@next/bundle-analyzer')).default;

  return bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
  })(config);
};

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    silenceDeprecations: ['legacy-js-api'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.roninmobile.eu',
        port: '',
        pathname: '/static/**',
      },
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
