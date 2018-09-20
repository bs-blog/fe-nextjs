const router = require('express').Router()
const firebaseAdmin = require('../../lib/firebaseAdmin')

const storyShema = [
  'author',
  'categorys',
  'coverUrl',
  'createdAt',
  'data',
  'status',
  'title',
  'updatedAt',
  'id',
  'name'
]
const storyModel = (storyList = []) => {
  if (!storyList) return []

  return storyList.map(item => {
    const obj = {}
    for (const key of storyShema) {
      if (item[key]) obj[key] = item[key]
    }
    return obj
  })
}

router.get('/', async function(req, res) {
  try {
    const { categoryId } = req.query
    const _data = await firebaseAdmin.fetchStoryList()
    let data = storyModel(_data)

    if (categoryId) {
      data = data.filter(item => {
        return item.categorys.map(({ id }) => id).includes(categoryId)
      })
    }

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
