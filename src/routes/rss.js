const {
  cacheFetchStoryList,
  cacheFetchCategoryList,
  cacheFetchAuthorList
} = require('./api/memoize')
const { rss } = require('../lib/rss')
const router = require('express').Router()
router.get('/', async function(req, res) {
  const [categoryList, storyList, authorList] = await Promise.all([
    cacheFetchCategoryList(),
    cacheFetchStoryList(),
    cacheFetchAuthorList()
  ])

  const rssXml = rss({ storyList, categoryList, authorList })

  res.header('Content-Type', 'application/xml')
  return res.send(rssXml)
})

module.exports = router
