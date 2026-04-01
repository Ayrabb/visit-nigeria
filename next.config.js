/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Find Next.js's default rule that handles static file imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      // Rule 1: import SVG as a React component  →  import NgMap from './ng.svg'
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude  ?url  imports
        use: ['@svgr/webpack'],
      },
      // Rule 2: import SVG as a URL string  →  import ngMapUrl from './ng.svg?url'
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      }
    );

    // Disable the default SVG rule so it doesn't conflict
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
};

module.exports = nextConfig;