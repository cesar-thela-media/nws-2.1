import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  /** Required for Docker multi-stage / Railway image (server.js standalone) */
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.nws-homes.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
