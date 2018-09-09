import * as React from 'react'
import BasicLayout from '../Layout/Basic'
import css from './index.css'

import getConfig from 'next/config'
import List from '../../src/components/storysList/List'

export default class App extends React.Component {
  static async getInitialProps({ req }) {
    const { serverRuntimeConfig } = getConfig()
    const storyList = await Promise.resolve(serverRuntimeConfig.firebaseAdmin.fetchStoryList())
    return { storyList }
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
