const router = require('express').Router()
const { normalize } = require('../middleware/normalize')

router.use(normalize)
router.use('/storys', require('./storys'))

module.exports = router
