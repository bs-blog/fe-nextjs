import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
const { GA_ID } = publicRuntimeConfig

if (typeof window !== 'undefined' && GA_ID) {
  /* eslint-disable import/newline-after-import */
  /* eslint-disable import/max-dependencies */

  // eslint-disable-next-line
  window.ga =
    window.ga ||
    function() {
      ;(ga.q = ga.q || []).push(arguments)
    }
  ga.l = +new Date()
  /* global ga: true */
  // ga comes from google-analytics script injected below
  ga('create', GA_ID, 'auto')

  // autotrack
  // https://github.com/googleanalytics/autotrack

  // most important plugin for phenomic
  require('autotrack/lib/plugins/url-change-tracker')
  ga('require', 'urlChangeTracker')

  // some plugins you might like
  require('autotrack/lib/plugins/clean-url-tracker')
  ga('require', 'cleanUrlTracker')
  require('autotrack/lib/plugins/outbound-form-tracker')
  ga('require', 'outboundFormTracker')
  require('autotrack/lib/plugins/outbound-link-tracker')
  ga('require', 'outboundLinkTracker')

  // check out more here https://github.com/googleanalytics/autotrack#plugins

  // now that everything is ready, log initial page
  ga('send', 'pageview')
}
