import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'], // Add Unsplash domain here
  },
  // Other configurations can go here
  reactStrictMode: true, // Example of another config option
};

export default nextConfig;
