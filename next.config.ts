import type { NextConfig } from "next";
// DOING CHANGES FROM DOCUMENT . DOCUMENT READING IS KEY HERE
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
