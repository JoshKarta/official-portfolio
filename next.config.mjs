/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains:["cdn.sanity.io"],
    // remotePatterns: [
    //   {
    //     protocol: "http",
    //     hostname: "**",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "**",
    //   },
    // ],
  },
};

export default nextConfig;
