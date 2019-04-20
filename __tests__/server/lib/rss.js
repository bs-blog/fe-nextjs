const rss = require('../../../src/lib/rss')
const mockStoryList = require('../mock/storys.json')

test('', () => {
  const result = rss.rss(mockStoryList)

  for (const item of mockStoryList) {
    expect(result.includes(item.title)).toBe(true)
  }
})
