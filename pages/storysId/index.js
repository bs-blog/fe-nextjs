import * as React from 'react'
import { connect } from 'react-redux'
import 'isomorphic-unfetch'
import Presentational from './Presentational'

class Container extends React.Component {
  render() {
    return <Presentational {...this.props} />
  }
}

Container.fetchRemoteData = async args => {
  const { req, query } = args
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const storyId = (query && query.id) || (req && req.params && req.params.id)

  const result = await Promise.all([
    fetch(`${baseUrl}/api/storys/${storyId}`).then(res => res.json()),
    fetch(`${baseUrl}/api/categorys`).then(res => res.json()),
    fetch(`${baseUrl}/api/authors`).then(res => res.json())
  ])

  const [story, categoryList, authorList] = result
  return { story, categoryList, authorList }
}

Container.getInitialProps = async args => {
  const { store } = args
  const { authors, categorys, storys } = store.getState()
  if (
    authors.authorList &&
    authors.authorList.length > 0 &&
    categorys.categoryList &&
    categorys.categoryList.length > 0 &&
    storys.story &&
    storys.story.length > 0
  ) {
    return {}
  }

  const { story, categoryList, authorList } = await Container.fetchRemoteData(args)

  store.dispatch({ type: 'SET_STORY_SINGLE', story })
  store.dispatch({ type: 'SET_CATEGORYS_LIST', categoryList })
  store.dispatch({ type: 'SET_AUTHORS_LIST', authorList })
  return {}
}

const mapStateToProps = (state, ownProps) => {
  return {
    story: state.storys.story,
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
