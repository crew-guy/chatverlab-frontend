/** @type {import('next').NextConfig} */
const moduleExports = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = 'none';
    }

    return config;
  },
  images: {
    domains: ['cloudpilot-systems-design-diagrams.s3.amazonaws.com'],
  },
  reactStrictMode: false
};

module.exports = moduleExports
