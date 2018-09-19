import * as React from 'react'
import { connect } from 'react-redux'
import Presentational from './Presentational'
import 'isomorphic-unfetch'

class Container extends React.Component {
  render() {
    return <Presentational {...this.props} />
  }
}

Container.fetchRemoteData = async args => {
  const { req, store } = args
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''

  const { authors, categorys, storys } = store.getState()
  const authorListState =
    authors.authorList && authors.authorList.length > 0 ? authors.authorList : null
  const categoryListState =
    categorys.categoryList && categorys.categoryList.length > 0 ? categorys.categoryList : null
  const storyListState = storys.storyList && storys.storyList.length > 0 ? storys.storyList : null

  let _storyList, categoryList, authorList

  if (storyListState && categoryListState && authorListState) {
    return {
      storyList: storyListState,
      categoryList: categoryListState,
      authorList: authorListState
    }
  }

  if (!storyListState && categoryListState && authorListState) {
    _storyList = await fetch(`${baseUrl}/api/storys`).then(res => res.json())
    authorList = authorListState
    categoryList = categoryListState
  }

  if (!storyListState && (!categoryListState || !authorListState)) {
    ;[_storyList, categoryList, authorList] = await Promise.all([
      fetch(`${baseUrl}/api/storys`).then(res => res.json()),
      fetch(`${baseUrl}/api/categorys`).then(res => res.json()),
      fetch(`${baseUrl}/api/authors`).then(res => res.json())
    ])
  }

  const storyList = _storyList.map(item => {
    const { author: authorId, categorys: categoryIdList } = item
    const author = authorList.find(authorItem => authorItem.id === authorId)
    const categorys = categoryIdList
      .map(({ id }) => categoryList.find(catItem => catItem.id === id))
      .filter(item => item && item.id)
    return { ...item, author, categorys }
  })

  return { storyList, categoryList, authorList }
}

Container.getInitialProps = async args => {
  // cant get this.props.mapDispatchToProps
  const { store } = args
  const { storyList, categoryList, authorList } = await Container.fetchRemoteData(args)
  store.dispatch({ type: 'SET_STORY_LIST', storyList })
  store.dispatch({ type: 'SET_CATEGORYS_LIST', categoryList })
  store.dispatch({ type: 'SET_AUTHORS_LIST', authorList })
  return {}
}

const mapStateToProps = (state, ownProps) => {
  return {
    storyList: state.storys.storyList,
    categoryList: state.categorys.categoryList,
    authorList: state.authors.authorList
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initStoryList: () => {}
  }
}

const Connecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)

export default Connecter
