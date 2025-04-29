import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allows all domains over HTTPS
      },
      {
        protocol: "http",
        hostname: "**", // allows all domains over HTTP
      },
    ],
  },
};

export default nextConfig;
