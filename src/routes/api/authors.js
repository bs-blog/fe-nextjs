const router = require('express').Router()
const { cacheFetchAuthorList } = require('./memoize')

router.get('/', async function(req, res) {
  try {
    const data = await cacheFetchAuthorList()
    res.json(data)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
