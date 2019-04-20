const sitemap = require('../../../src/routes/sitemap')

const fb = require('../../../src/lib/firebaseAdmin')
const mockPlaySoundFile = jest.fn()
jest.mock('../../../src/lib/firebaseAdmin', () => {
  return {
    fetchAuthorList: () => {
      console.log('-=-= fetchAuthorList -=-=')
      return Promise.resolve()
    }
  }
})

test('', done => {
  console.log(' -=-=-= 0')
  sitemap.generate().then(result => {
    console.log('-=-=-=-=-=-=-= 2 -=-=')
    console.log(result)
    done()
  })
})
