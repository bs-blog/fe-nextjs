const Mustache = require('mustache')
const fs = require('fs')

const _uuid = (createdAt = '') => {
  const _createdAt = `${createdAt}`
  const first = _createdAt[0]
  const str12 = _createdAt.slice(-(_createdAt.length - 1))
  return ` 5fc84f46-5743-4ed3-a94${first}-${str12}`
}

const searchById = (targetId, targetList) => {
  const targetItem = targetList.find(cat => {
    return cat.id === targetId
  })

  return targetItem || {}
}

const rss = ({ storyList = [], categoryList = [], authorList = [] }) => {
  const rootTeamplate = fs.readFileSync(`${__dirname}/root.mustache`, 'utf8')
  const _storyList = storyList.map(item => {
    const endAt = item.createdAt + 7 * 86400000 // 7days
    const catId = (item.categorys[0] && item.categorys[0].id) || ''
    const targetCat = searchById(catId, categoryList)

    const authorId = (item.author && item.author.id) || ''
    const targetAuthor = searchById(authorId, authorList)
    return {
      ...item,
      category: (targetCat && targetCat.name) || '',
      author: (targetAuthor && targetAuthor.name) || '',
      endAt
    }
  })

  const data = {
    uuid: _uuid(_storyList[0].createdAt),
    articleList: [..._storyList]
  }
  const article = fs.readFileSync(`${__dirname}/article.mustache`, 'utf8')

  return Mustache.render(rootTeamplate, data, { article })
}

module.exports = {
  rss
}
