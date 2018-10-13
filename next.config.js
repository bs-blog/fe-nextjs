const withCSS = require('@zeit/next-css')
module.exports = {
  ...withCSS({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]'
    }
  }),
  publicRuntimeConfig: {
    LOGO_URL_800H: process.env.LOGO_URL_800H,
    GA_ID: process.env.GA_ID
  }
}
