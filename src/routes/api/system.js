const router = require('express').Router()
const memoize = require('./memoize')
const { cacheFetchSystem } = require('./memoize')

router.get('/', async function(req, res) {
  try {
    const data = await cacheFetchSystem()
    res.json(data)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/reset', (req, res) => {
  memoize.reset()
  res.json({})
})

module.exports = router
