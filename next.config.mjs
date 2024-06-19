/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.comoves.unam.mx'
            }
        ]
    }
};

export default nextConfig;

