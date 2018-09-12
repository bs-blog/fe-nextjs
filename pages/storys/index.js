import * as React from 'react'
import BasicLayout from '../Layout/Basic'
import css from './index.css'

import List from '../../src/components/storysList/List'
import 'isomorphic-unfetch'

export default class App extends React.Component {
  static async getInitialProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
    const result = await Promise.all([
      fetch(`${baseUrl}/api/storys`).then(res => res.json()),
      fetch(`${baseUrl}/api/categorys`).then(res => res.json()),
      fetch(`${baseUrl}/api/authors`).then(res => res.json())
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
      <BasicLayout {...this.props}>
        {/* <h1>Content</h1> */}
        <List {...this.props} />
      </BasicLayout>
    )
  }
}
