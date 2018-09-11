const { database } = require('../lib/firebaseAdmin')
const ClassDaoStorys = require('../lib/dao/StoryList')
const ClassDaoStoryId = require('../lib/dao/StoryId')

const fetchStoryList = () => {
  const ref = database
    .ref('Storys/')
    .orderByChild(`status`)
    .equalTo('PUBLISHED')

  const dao = new ClassDaoStorys(database, ref)
  return dao.once()
}

const fetchStoryById = id => {
  const dao = new ClassDaoStoryId(database)
  return dao.once(id)
}

module.exports = {
  fetchStoryList,
  fetchStoryById
}
