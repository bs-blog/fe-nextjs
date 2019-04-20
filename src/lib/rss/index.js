const Mustache = require('mustache')
const fs = require('fs')

const _uuid = (createdAt = '') => {
  const _createdAt = `${createdAt}`
  const first = _createdAt[0]
  const str12 = _createdAt.slice(-(_createdAt.length - 1))
  return ` 5fc84f46-5743-4ed3-a94${first}-${str12}`
}

const rss = (storyList = []) => {
  const rootTeamplate = fs.readFileSync(`${__dirname}/root.mustache`, 'utf8')
  const _storyList = storyList.map(item => {
    const endAt = item.createdAt + 7 * 86400000 // 7days
    return {
      ...item,
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
