import * as React from 'react'
import BasicLayout from '../Layout/Basic'
import css from './index.css'

import getConfig from 'next/config'

export default class StoryId extends React.Component {
  static async getInitialProps({ req }) {
    const storyId = req.paramLast

    const { serverRuntimeConfig } = getConfig()
    const story = await Promise.resolve(serverRuntimeConfig.firebaseAdmin.fetchStoryById(storyId))

    return { story }
  }
  render() {
    const { story } = this.props
    return (
      <BasicLayout>
        <h1>Content</h1>
        <div dangerouslySetInnerHTML={{ __html: story.html }} />
      </BasicLayout>
    )
  }
}
