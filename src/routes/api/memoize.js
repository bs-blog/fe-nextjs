const firebaseAdmin = require('../../lib/firebaseAdmin')
const { CACHE_MAX_AGE } = require('../../lib/constant/system')
const memoize = require('memoizee')

const cacheFetchStoryList = memoize(firebaseAdmin.fetchStoryList, { maxAge: CACHE_MAX_AGE })
const cacheFetchStoryById = memoize(firebaseAdmin.fetchStoryById, { maxAge: CACHE_MAX_AGE })
const cacheFetchSystem = memoize(firebaseAdmin.fetchSystem, { maxAge: CACHE_MAX_AGE })
const cacheFetchCategoryList = memoize(firebaseAdmin.fetchCategoryList, { maxAge: CACHE_MAX_AGE })
const cacheFetchAuthorList = memoize(firebaseAdmin.fetchAuthorList, { maxAge: CACHE_MAX_AGE })

const reset = () => {
  cacheFetchStoryList.clear()
  cacheFetchStoryById.clear()
  cacheFetchSystem.clear()
  cacheFetchCategoryList.clear()
  cacheFetchAuthorList.clear()
}

module.exports = {
  cacheFetchStoryList,
  cacheFetchStoryById,
  cacheFetchSystem,
  cacheFetchCategoryList,
  cacheFetchAuthorList,
  reset
}
