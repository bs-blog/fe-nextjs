
const pagesRoutes = require('./server/routes/pages');
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]'
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    ...require('./server/services')
  },
  exportPathMap: pagesRoutes
})
