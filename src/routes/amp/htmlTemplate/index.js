const storyId = (html = '', { title = '', logoUrl = '', originUrl = '/', footerInfo = '' }) => {
  return `<!doctype html>
  <html amp lang="en">
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
      <link rel="canonical" href="${originUrl}">
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
      <script async src="https://cdn.ampproject.org/v0.js"></script>
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
      <amp-story-page id="vertical-wrapper">
        <amp-story-grid-layer template="vertical">
          <div class='headerWrapper'>
            <div class='headerLogoWrapper'>
              <amp-img class='logoImage' width=200 height=52 layout="fixed" src='${logoUrl}' />
            </div>
          </div>
          <div class='contentWrapper'>
            ${html}
          </div>
          <div class='footerWrapper'>
            ${footerInfo}
          </div>
        </amp-story-grid-layer>
      </amp-story-page>
    </body>
  </html>`
}

module.exports = {
  storyId
}
