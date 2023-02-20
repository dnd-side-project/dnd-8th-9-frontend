/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["page.ts", "page.tsx"],
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "i.pinimg.com"],
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
