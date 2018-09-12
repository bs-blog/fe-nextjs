const router = require('express').Router()
const firebaseAdmin = require('../../lib/firebaseAdmin')

router.get('/', async function(req, res) {
  try {
    const data = await firebaseAdmin.fetchAuthorList()
    res.json(data)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
