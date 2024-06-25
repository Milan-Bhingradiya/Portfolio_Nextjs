/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "firebasestorage.googleapis.com"],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
