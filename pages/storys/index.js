import * as React from 'react'
import BasicLayout from '../Layout/Basic'
import css from './index.css'

import getConfig from 'next/config'
import List from '../../src/components/storysList/List'

export default class App extends React.Component {
  static async getInitialProps({ req }) {
    const { serverRuntimeConfig } = getConfig()
    const result = await Promise.all([
      serverRuntimeConfig.firebaseAdmin.fetchStoryList(),
      serverRuntimeConfig.firebaseAdmin.fetchCategoryList(),
      serverRuntimeConfig.firebaseAdmin.fetchAuthorList()
    ])

    const [_storyList, categoryList, authorList] = result

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
  render() {
    const { storyList } = this.props
    return (
      <BasicLayout>
        <h1>Content</h1>
        <List {...this.props} />
      </BasicLayout>
    )
  }
}
