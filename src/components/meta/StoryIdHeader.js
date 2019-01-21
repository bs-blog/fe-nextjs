import React from 'react'
import Head from 'next/head'

export default ({ storyData, system }) => {
  const { name, description, categorys, author, coverUrl, id, createdAt } = storyData
  const { productFacebookId, productHost, productNameZh, productShortName, productLogoUrl } = system
  const createAtISOString = new Date(createdAt).toISOString()

  const tagContentAuthor = author.name

  const categoryList = categorys.map(({ name }) => name)

  const keywordsList = [...categoryList, tagContentAuthor, name]

  const storyPageUrl = `${productHost}/storys/${id}`

  return (
    <Head>
      <title>{name}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`${keywordsList.join(',')}`} />
      <meta name="author" content={productShortName || ''} />
      <meta name="copyright" content={productNameZh || ''} />
      <link rel="amphtml" href={`${productHost}/amp/storys/${id}`} />

      {/* <!-- Schema.org markup for Google+ --> */}
      <meta itemprop="name" content={name} />
      <meta itemprop="description" content={description} />
      <meta itemprop="image" content={coverUrl} />

      {/* <!-- Twitter Card data --> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={productNameZh} />
      <meta name="twitter:title" content={name} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content={productShortName} />
      <meta name="twitter:image" content={coverUrl} />
      <meta name="twitter:data1" content="$3" />
      <meta name="twitter:label1" content="Price" />
      <meta name="twitter:data2" content="Black" />
      <meta name="twitter:label2" content="Color" />

      {/* <!-- Open Graph data facebook --> */}
      {/* <!-- Open Graph data facebook --> */}
      <meta property="og:title" content={name} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={coverUrl} />
      <meta property="og:image:width" content="1100" />
      <meta property="og:image:height" content="619" />
      <meta property="og:url" content={storyPageUrl} />
      <meta property="og:image:alt" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={productNameZh} />
      <meta property="og:locale" content="zh_TW" />
      <meta property="fb:app_id" content={productFacebookId} />
      <meta property="article:author" content={productHost} />
      <meta property="article:section" content={categoryList[0]} />
      <meta property="article:tag" content={keywordsList} />

      {/* <!-- Google SEO --> */}
      <script type="application/ld+json">
        {`{
          "@context": "http://schema.org",
          "@type": "NewsArticle",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "${storyPageUrl}"
          },
          "headline": "${name}",
          "image": [
            "${coverUrl}"
          ],
          "datePublished": "${createAtISOString}",
          "dateModified": "${createAtISOString}",
          "author": {
            "@type": "Person",
            "name": "${tagContentAuthor}"
          },
          "publisher": {
            "@type": "Organization",
            "name": "${productShortName}",
            "logo": {
              "@type": "ImageObject",
              "url": "${productLogoUrl}"
            }
          },
          "description": "${description}"
        }`}
      </script>
    </Head>
  )
}
