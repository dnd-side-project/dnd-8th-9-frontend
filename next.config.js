/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["page.ts", "page.tsx"],
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "i.pinimg.com",
      "dangdo.s3.ap-northeast-2.amazonaws.com",
      "via.placeholder.com",
      "cdn.pixabay.com",
    ],
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home/recommendation",
        permanent: true,
      },
      {
        source: "/store",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/home/recommendation",
        permanent: true,
      },
      {
        source: "/onboard",
        destination: "/onboard/location",
        permanent: true,
      },
      {
        source: "/bookmark",
        destination: "/bookmark/menu",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
