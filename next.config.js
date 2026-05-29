/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // ativa verificações extras do React
  swcMinify: true,       // usa o compilador SWC para minificação
  typescript: {
    ignoreBuildErrors: false, // impede builds com erros de TS
  },
  eslint: {
    ignoreDuringBuilds: false, // impede builds com erros de lint
  },
}

module.exports = nextConfig

