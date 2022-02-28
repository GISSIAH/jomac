module.exports = {
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          }
        ],
      },
    ]
  },
  reactStrictMode: true,
  images: {
    domains: ['www.kindpng.com',"res.cloudinary.com"],
    formats: ['image/avif', 'image/webp'],
  },
}
