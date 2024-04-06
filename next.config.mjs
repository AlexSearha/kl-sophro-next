/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/dashboard/client',
                destination: '/dashboard',
                permanent: true
            },
            {
                source: '/reinitialiser-mot-de-passe',
                destination: '/',
                permanent: true
            }
        ]
    }

};

export default nextConfig;
