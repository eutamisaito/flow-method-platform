/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' for Vercel to enable server-side features
  // output: 'export', // Uncomment for static export deployment
  
  // Enable trailing slash for better SEO
  trailingSlash: true,
  
  // Image optimization
  images: {
    // unoptimized: true, // Only needed for static exports
    domains: [], // Add external image domains if needed
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
