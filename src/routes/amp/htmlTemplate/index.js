const storyId = (html = '', storyInfo, sysInfo) => {
  const { title, id, coverUrl } = storyInfo
  const originUrl = `/storys/${id}`
  const { productLogoUrl, productDescription, productShortName } = sysInfo

  return `<!doctype html>
  <html amp lang="en">
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
      <link rel="canonical" href="${originUrl}">
      <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
      <script async src="https://cdn.ampproject.org/v0.js"></script>
      <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
      <style amp-custom>
      /* any custom style goes here */
      body {
        margin: 0;
        font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 14px;
        font-variant: tabular-nums;
        line-height: 1.5;
        color: rgba(0, 0, 0, 0.65);
      }
      h3 {
        font-size: 30px;
        line-height: 1.15;
        font-weight: 600;
      }
      amp-story-page {
        background-color: white;
      }
      .headerWrapper {
        background: linear-gradient(0deg,#0e3758,#001d1d);
        height: 80px;
      }
      .footerWrapper {
        padding: 24px 50px;
        color: rgba(0, 0, 0, 0.65);
        background: rgb(0, 29, 29);
        margin-top: 10px;
        border-top: 1px double #fff;
        outline: 2px solid #0097fe;
      }
      .contentWrapper {
        padding: 20px;
        max-width: 800px;
        margin: auto;
      }
      .fixed-container {
        position: relative;
        width: 100%;
        height: 300px;
      }
      amp-img.contain img {
        object-fit: contain;
      }
      .headerLogoWrapper {
        padding: 14px 80px;
      }
      .footerWrapper {
        color: white;
      }
    </style>
    </head>
    <body>
      <amp-story standalone
        title="${title}"
        publisher="${productShortName}"
        publisher-logo-src="${productLogoUrl}"
        poster-portrait-src="${coverUrl}">
        <amp-story-page id="vertical-wrapper">
          <amp-story-grid-layer template="vertical">
            <div class='headerWrapper'>
              <div class='headerLogoWrapper'>
                <amp-img class='logoImage' width=200 height=52 layout="fixed" src='${productLogoUrl}' />
              </div>
            </div>
            <div class='contentWrapper'>
              ${html}
            </div>
            <div class='footerWrapper'>
              ${productDescription}
            </div>
          </amp-story-grid-layer>
        </amp-story-page>
      </amp-story>
    </body>
  </html>`
}

module.exports = {
  storyId
}
