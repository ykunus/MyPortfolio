/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/MyPortfolio',
    assetPrefix: '/MyPortfolio',
}

module.exports = nextConfig 