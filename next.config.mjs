/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.mhw-db.com',
            }
        ]
    }
};

export default nextConfig;
