/** @type {import('next').NextConfig} */
const nextConfig = {
  // i went to add the image domains comes from database to allow
  images: {
    remotePatterns: [
      {
        protocol: "https",
            hostname: "lh3.googleusercontent.com",
            pathname: '**'
        
      },
    ],
  },
};

export default nextConfig;
