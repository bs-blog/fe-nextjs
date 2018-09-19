const router = require('express').Router()
const firebaseAdmin = require('../../lib/firebaseAdmin')

router.get('/', async function(req, res) {
  try {
    const data = await firebaseAdmin.fetchStoryList()
    res.json(data.reverse())
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:storyId', async function(req, res) {
  try {
    const { storyId } = req.params
    if (!storyId) throw new Error('Given null storyId')
    const data = await firebaseAdmin.fetchStoryById(storyId)
    res.json(data)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
