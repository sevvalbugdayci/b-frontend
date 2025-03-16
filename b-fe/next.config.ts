import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "beije.co",
        pathname: "/_next/image",
      },
      {
        protocol: "https",
        hostname: "static.beije.co",
        pathname: "/catalog_service/images/**",
      },
    ],
  },
};

export default nextConfig;

