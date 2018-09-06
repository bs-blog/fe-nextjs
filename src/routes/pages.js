module.exports = () => {
  return {
    '/': { page: '/' },
    '/storys': { page: '/storys' },
    '/storys/:id': { page: '/storysId' }
  }
}
