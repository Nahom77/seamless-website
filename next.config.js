/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "/f/**", // allows all paths under /f/
      },
      {
        protocol: "https",
        hostname: "dg3jweh2px.ufs.sh", // uploadthing host
      },
    ],
  },
};

module.exports = nextConfig;
