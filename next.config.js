/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL("https://utfs.io/f/")],
  },
};

module.exports = nextConfig;
