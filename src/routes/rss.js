const { cacheFetchStoryList, cacheFetchCategoryList } = require('./api/memoize')
const { rss } = require('../lib/rss')
const router = require('express').Router()
router.get('/', async function(req, res) {
  const [categoryList, storyList] = await Promise.all([
    cacheFetchCategoryList(),
    cacheFetchStoryList()
  ])

  const rssXml = rss(storyList)

  res.header('Content-Type', 'application/xml')
  return res.send(rssXml)
})

module.exports = router
