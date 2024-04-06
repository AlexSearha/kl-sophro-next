/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/dashboard/client',
                destination: '/dashboard',
                permanent: true
            }
        ]
    }

};

export default nextConfig;
