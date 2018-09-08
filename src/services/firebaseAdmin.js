const { database } = require('../lib/firebaseAdmin')
const ClassDaoStorys = require('../lib/dao/StoryList')
const ClassDaoStoryId = require('../lib/dao/StoryId')

const addCat = () => {
  console.log(' -=-=-=-= addCat')
  const ref = database.ref('Categorys')
  const configList = ['oeter']
  return Promise.all(
    configList.map(item =>
      ref.push().set({
        name: item,
        createdAt: new Date().getTime()
      })
    )
  )
}

const fetchStoryList = () => {
  const dao = new ClassDaoStorys(database)
  return dao.once()
}

const fetchStoryById = id => {
  const dao = new ClassDaoStoryId(database)
  return dao.once(id)
}

module.exports = {
  addCat,
  fetchStoryList,
  fetchStoryById
}
