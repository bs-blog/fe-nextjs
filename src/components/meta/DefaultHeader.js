import React from 'react'
import Head from 'next/head'

export default props => {
  const { system } = props
  const {
    productDescription,
    productFacebookId,
    productHost,
    productLogoUrl,
    productNameEng,
    productNameZh,
    productShortName
  } = system

  const keywords = `${productNameZh} ${productNameEng} ${productDescription}`

  return (
    <Head>
      <title>{productNameZh}</title>
      <meta name="description" content={productDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={productShortName || ''} />
      <meta name="copyright" content={productNameZh || ''} />

      {/* <!-- Schema.org markup for Google+ --> */}
      <meta itemprop="name" content={productNameZh} />
      <meta itemprop="description" content={productDescription} />
      <meta itemprop="image" content={productLogoUrl} />

      {/* <!-- Twitter Card data --> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={productNameZh} />
      <meta name="twitter:title" content={productNameZh} />
      <meta name="twitter:description" content={productDescription} />
      <meta name="twitter:creator" content={productShortName} />
      <meta name="twitter:image" content={productLogoUrl} />
      <meta name="twitter:data1" content="$3" />
      <meta name="twitter:label1" content="Price" />
      <meta name="twitter:data2" content="Black" />
      <meta name="twitter:label2" content="Color" />

      {/* <!-- Open Graph data facebook --> */}
      <meta property="og:title" content={productNameZh} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={productHost} />
      <meta property="og:image" content={productLogoUrl} />
      <meta property="og:description" content={productDescription} />
      <meta property="og:site_name" content={productNameZh} />
      <meta property="og:locale" content="zh_TW" />
      <meta property="fb:app_id" content={productFacebookId} />

      {/* <!-- Google SEO --> */}
      <script type="application/ld+json">
        {`
        { 
          "@context": "http://schema.org", 
          "@type": "WebSite", 
          "url": "${productHost}", 
          "name": "${productNameZh}",
          "author": {
              "@type": "Person",
              "name": "${productShortName}"
            },
          "description": "${productDescription}",
          "publisher": "${productShortName}",
          "image": "${productLogoUrl}"
        }
      `}
      </script>
    </Head>
  )
}
