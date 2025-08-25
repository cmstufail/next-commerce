/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [ 'lh3.googleusercontent.com' ],
    },
    onDemandEntries: {
        maxInactiveAge: 25 * 1000,
        pagesBufferLength: 2,
    },
    reactStrictMode: false,
}

export default nextConfig