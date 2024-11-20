/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: 'res.cloudinary.com',
        },
        {
          hostname: 'avatars.githubusercontent.com',
        },
      ],
    },
  };
  
  export default nextConfig;