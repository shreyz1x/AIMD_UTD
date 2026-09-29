/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/work", destination: "/projects", permanent: false },
      { source: "/work/:path*", destination: "/projects/:path*", permanent: false },
      { source: "/services", destination: "/applications", permanent: false },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
