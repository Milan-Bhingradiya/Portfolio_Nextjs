/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "firebasestorage.googleapis.com", "plus.unsplash.com","images.unsplash.com"],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
