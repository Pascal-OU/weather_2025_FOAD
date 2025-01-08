const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  resolve: {
    fallback: {
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer'),
      zlib: require.resolve('browserify-zlib'),
      path: require.resolve('path-browserify'),
      util: require.resolve('util'),
      fs: false, // Désactiver fs car il n'est pas utilisable côté client
    },
  },
  plugins: [
    new NodePolyfillPlugin(),
  ],
};