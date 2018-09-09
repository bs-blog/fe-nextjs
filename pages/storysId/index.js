import * as React from 'react'
import css from './index.css'
import BasicLayout from '../Layout/Basic'
import EditorHtml from '../../src/components/EditorHtml'

import getConfig from 'next/config'

export default class StoryId extends React.Component {
  static async getInitialProps({ req }) {
    const storyId = req.paramLast

    const { serverRuntimeConfig } = getConfig()
    const storyData = await Promise.resolve(
      serverRuntimeConfig.firebaseAdmin.fetchStoryById(storyId)
    )

    return { storyData }
  }
  render() {
    const { storyData } = this.props
    return (
      <BasicLayout>
        <h1>Content</h1>
        <div className={css.storyWrapper}>
          <EditorHtml storyData={storyData} />
        </div>
      </BasicLayout>
    )
  }
}
