import type { NextConfig } from 'next';
import path from 'path';

const now = new Date();
const pad = (n: number) => String(n).padStart(2, '0');
const appVersion = `${pad(now.getDate())}${pad(now.getMonth() + 1)}${now.getFullYear()}.${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  webpack: (config, { webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-router-dom': path.resolve(__dirname, 'src/lib/router-compat.tsx'),
    };
    config.plugins.push(
      new webpack.DefinePlugin({
        __APP_VERSION__: JSON.stringify(appVersion),
      })
    );
    return config;
  },
  turbopack: {
    resolveAlias: {
      'react-router-dom': './src/lib/router-compat.tsx',
    },
  },
  async redirects() {
    return [
      { source: '/pricing', destination: '/investment-models', permanent: true },
      { source: '/about', destination: '/company-profile', permanent: true },
      { source: '/why-us', destination: '/why-choose-us', permanent: true },
      { source: '/benefits', destination: '/why-choose-us', permanent: true },
      { source: '/flyer', destination: '/prospect-flyer', permanent: true },
      { source: '/areas-served', destination: '/standorte', permanent: true },
      { source: '/locations', destination: '/standorte', permanent: true },
      { source: '/qr', destination: '/qr-code-generator', permanent: true },
      { source: '/qr-code', destination: '/qr-code-generator', permanent: true },
      { source: '/qr-generator', destination: '/qr-code-generator', permanent: true },
      { source: '/de', destination: '/', permanent: true },
      { source: '/de/:path*', destination: '/:path*', permanent: true },
    ];
  },
};

export default nextConfig;
