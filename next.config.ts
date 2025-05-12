// export default nextConfig;
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.bimportale.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.ingenio-web.it",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.unina.it",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ediltecnico.it",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.infobuild.it",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.unipv.news",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "news.unipv.it",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "skeinbim.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.stefanoboeriarchitetti.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mvrdv.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "2025.festivalsvilupposostenibile.it",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
