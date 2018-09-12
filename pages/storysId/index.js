import * as React from 'react'
import css from './index.css'
import BasicLayout from '../Layout/Basic'
import EditorHtml from '../../src/components/EditorHtml'
import 'isomorphic-unfetch'

export default class StoryId extends React.Component {
  static async getInitialProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
    const { id: storyId } = req.params

    const result = await Promise.all([
      fetch(`${baseUrl}/api/storys/${storyId}`).then(res => res.json())
    ])

    const [storyData] = result
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
