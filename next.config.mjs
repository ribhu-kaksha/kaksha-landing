/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/:path*',
            has: [
              {
                type: 'host',
                value: 'kaksha.ai',
              },
            ],
            destination: 'https://www.kaksha.ai/:path*',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
