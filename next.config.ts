import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All site imagery is local under `public/images/` (see lib/images.ts), so
  // there are no `images.remotePatterns` here on purpose — adding a host back
  // reintroduces the third-party request on the LCP path.
};

export default nextConfig;
