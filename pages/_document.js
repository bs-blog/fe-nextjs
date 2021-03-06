import * as React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="tw">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="Content-Language" content="zh-tw" />
          <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/antd/3.9.2/antd.css" />
          <link rel="alternate" href="example.com" hreflang="es-es" />

          <meta
            name="google-site-verification"
            content="fsqPzbDl1xEecNsWQ-46h7Y0l2cmcZcdNbFY5BTB1uk"
          />
          {/* <!-- favicon --> */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          {/* <!-- favicon --> */}
        </Head>
        <body lang="zh-tw">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
