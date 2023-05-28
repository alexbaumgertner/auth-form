const IS_PROD = process.env.NODE_ENV === 'production'
const PREFIX = IS_PROD ? '/auth-form' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: IS_PROD ? PREFIX : undefined,
  async redirects () {
    return IS_PROD ? [
      {
        source: '/reset-password',
        destination: `/${PREFIX}/reset-password`,
        permanent: true,
      },
      {
        source: '/create-account',
        destination: `/${PREFIX}/create-account`,
        permanent: true,
      },
      {
        source: '/login',
        destination: `/${PREFIX}/login`,
        permanent: true,
      },
    ] : []
  },
}

module.exports = nextConfig
