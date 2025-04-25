// next.config.js
module.exports = {
  webpack(config) {
    // Make sure framer-motion does not conflict with client-side bundling
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    return config;
  },
};
