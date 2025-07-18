/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for deployment
  output: 'export', // Enable static export deployment
  
  // Enable trailing slash for better SEO
  trailingSlash: true,
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static exports
    domains: [], // Add external image domains if needed
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
