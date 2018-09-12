const router = require('express').Router()

router.use('/storys', require('./storys'))
router.use('/categorys', require('./categorys'))
router.use('/authors', require('./authors'))

module.exports = router
