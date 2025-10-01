/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "/f/**", // allows all paths under /f/
      },
    ],
  },
};

module.exports = nextConfig;
