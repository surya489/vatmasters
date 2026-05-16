import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    /** Legacy WordPress paths from vatmasters.com → homepage sections */
    const toServices = [
      "/vat-registration",
      "/vat-de-registration",
      "/outsource-cfo-service",
      "/accounting-and-bookkeeping-services",
      "/vat-return-filling",
      "/corporate-tax-filing-in-uae",
    ];
    const toPricing = [
      "/pricing-vat-registration",
      "/priceVatAccount",
      "/priceVatDeregister",
      "/priceOutsource",
      "/priceVatReturn",
    ];
    return [
      ...toServices.map((source) => ({ source, destination: "/#services", permanent: false })),
      ...toPricing.map((source) => ({ source, destination: "/#pricing", permanent: false })),
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vatmasters.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
