const Base = require('./Base.js')
const { stateToHTML } = require('draft-js-export-html')
const DraftJS = require('draft-js')

const storyParser = item => {
  const rawContent = JSON.parse(item.data)
  const name = item.title

  const contentState = DraftJS.convertFromRaw(rawContent)
  const html = stateToHTML(contentState)

  // console.log('rawContent: ', rawContent)

  return {
    ...item,
    name,
    rawContent,
    html
  }
}

module.exports = class StoryId extends Base {
  constructor(database, ref) {
    super(database)

    if (ref) this.ref = ref
    else this.ref = this.database.ref('Storys/')
  }

  async onceFunction(storyId) {
    const result = await this.ref.child(storyId).once('value')
    this.data = result.val()
    return super.onceFunction(storyId)
  }

  normalize(result) {
    return storyParser(result)
  }
}
