const router = require('express').Router()
const firebaseAdmin = require('../../lib/firebaseAdmin')
const { CACHE_MAX_AGE } = require('../../lib/constant/system')
const memoize = require('memoizee')

const cacheFetchStoryList = memoize(firebaseAdmin.fetchStoryList, { maxAge: CACHE_MAX_AGE })
const cacheFetchStoryById = memoize(firebaseAdmin.fetchStoryById, { maxAge: CACHE_MAX_AGE })

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
  'name',
  'rawContent'
]

const storyModel = (storyItem = {}) => {
  if (!storyItem) return {}

  const obj = {}
  for (const key of storyShema) {
    if (storyItem[key]) obj[key] = storyItem[key]
  }
  return obj
}
const storyListModel = (storyList = []) => {
  if (!storyList) return []

  return storyList.map(storyModel)
}

router.get('/', async function(req, res) {
  try {
    const { categoryId } = req.query
    const _data = await cacheFetchStoryList()
    let data = storyListModel(_data)

    if (categoryId) {
      data = data.filter(item => {
        return item.categorys.map(({ id }) => id).includes(categoryId)
      })
    }

    res.json(data.reverse())
  } catch (err) {
    console.error(err)
    res.status(500).json(err)
  }
})

router.get('/:storyId', async function(req, res) {
  try {
    const { storyId } = req.params
    if (!storyId) throw new Error('Given null storyId')
    const data = await cacheFetchStoryById(storyId)
    res.json(storyModel(data))
    // res.json((data))
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
