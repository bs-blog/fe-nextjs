const router = require('express').Router()
const firebaseAdmin = require('../../lib/firebaseAdmin')
const { CACHE_MAX_AGE } = require('../../lib/constant/system')
const memoize = require('memoizee')

const cacheFetchStoryById = memoize(firebaseAdmin.fetchStoryById, { maxAge: CACHE_MAX_AGE })
const cacheFetchSystem = memoize(firebaseAdmin.fetchSystem, { maxAge: CACHE_MAX_AGE })

const template = require('./htmlTemplate')

const convertH3 = item => `<h3>${item.text}</h3>`
const convertPlainText = item => `<p>${item.text}</p>`
const convertImage = item => `<div class="fixed-container">
                                <amp-img class="contain"
                                  layout="fill"
                                  src='${item.data.src}' />
                              </div>`

const draftjsToHtml = raw => {
  return raw.blocks
    .map(item => {
      const { type } = item

      if (type === 'header-three') return convertH3(item)
      if (type === 'unstyled') return convertPlainText(item)
      if (type === 'atomic:image') return convertImage(item)

      return ''
    })
    .join('')
}

router.get('/:storyId', async function(req, res) {
  const { storyId } = req.params
  const { validate } = req.query
  const [responseStory, responseSystem] = await Promise.all([
    cacheFetchStoryById(storyId),
    cacheFetchSystem()
  ])

  const content = draftjsToHtml(JSON.parse(responseStory.data))
  const html = template.storyId(content, responseStory, responseSystem)

  if (validate) {
    return require('amphtml-validator')
      .getInstance()
      .then(function(validator) {
        const result = validator.validateString(html)
        return res.send(JSON.stringify(result, null, 4))
      })
  } else {
    return res.send(html)
  }
})

module.exports = router
