const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**' 
      }
    ],
    unoptimized: true,
  }
}

export default nextConfig
