const firebaseAdmin = require('../lib/firebaseAdmin')
const { CACHE_MAX_AGE } = require('../lib/constant/system')
const memoize = require('memoizee')
// const cacheFetchAuthorList = memoize(firebaseAdmin.fetchAuthorList, { maxAge: CACHE_MAX_AGE })
const cacheFetchCategoryList = memoize(firebaseAdmin.fetchCategoryList, { maxAge: CACHE_MAX_AGE })
const cacheFetchStoryList = memoize(firebaseAdmin.fetchStoryList, { maxAge: CACHE_MAX_AGE })

const defaultGeo = 'Taipei, Taiwan'
const sm = require('sitemap')

const imgPayload = storyObj => {
  const { title, description, coverUrl } = storyObj
  return {
    url: coverUrl,
    caption: description,
    title,
    geoLocation: defaultGeo
  }
}

const generate = () => {
  return new Promise((resolve, reject) => {
    const sitemap = sm.createSitemap({
      hostname: process.env.PRODUCT_HOST,
      cacheTime: 600000
    })

    return Promise.all([cacheFetchCategoryList(), cacheFetchStoryList()]).then(
      ([catList, storyList]) => {
        // -=-=-= category -=-=-=
        for (const catObj of catList) {
          sitemap.add({ url: `/categorys/${catObj.id}` })
        }

        // -=-=-= storyList -=-=-=
        for (const storyObj of storyList) {
          sitemap.add({
            url: `/storys/${storyObj.id}`,
            img: [imgPayload(storyObj)]
          })
        }

        return resolve(sitemap.toString())
      }
    )
  })
}

const router = require('express').Router()
router.get('/', async function(req, res) {
  generate().then(sitemapString => {
    res.header('Content-Type', 'application/xml')
    res.send(sitemapString)
  })
})

module.exports = router
