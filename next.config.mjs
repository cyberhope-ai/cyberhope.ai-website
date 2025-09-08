let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  webpack: (config) => {
    config.externals = [...(config.externals || []), { canvas: 'canvas' }];
    return config;
  }
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

// For enabling Edge middleware when deployed on Netlify
if (process.env.NETLIFY === 'true') {
  console.log('We are on Netlify environment!');
}

// Handle NEXT_USE_NETLIFY_EDGE option
if (process.env.NEXT_USE_NETLIFY_EDGE === 'true') {
  console.log('Custom middleware is enabled!');
}

// Netlify form handling
if (process.env.NEXT_USE_NETLIFY_FORMS === 'true') {
  console.log('Netlify Forms is enabled!');
  // Add Netlify form processing functionality here if needed
}

export default nextConfig
