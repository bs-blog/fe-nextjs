import * as React from 'react'
import css from './index.css'
import BasicLayout from '../Layout/Basic'
import EditorHtml from '../../src/components/EditorHtml'

export default class Presentational extends React.Component {
  render() {
    const { story: storyData } = this.props
    return (
      <BasicLayout {...this.props}>
        <h1>Content</h1>
        <div className={css.storyWrapper}>
          <EditorHtml storyData={storyData} />
        </div>
      </BasicLayout>
    )
  }
}
