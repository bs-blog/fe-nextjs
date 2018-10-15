const router = require('express').Router()
const { cacheFetchCategoryList } = require('./memoize')

router.get('/', async function(req, res) {
  try {
    const data = await cacheFetchCategoryList()
    res.json(data)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
