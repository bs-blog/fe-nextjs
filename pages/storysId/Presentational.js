import * as React from 'react'
import css from './index.css'
import BasicLayout from '../Layout/Basic'
import EditorHtml from '../../src/components/EditorHtml'
import StoryBanner from '../../src/components/storysId/StoryBanner'

export default class Presentational extends React.Component {
  render() {
    const { story: storyData } = this.props
    const breadcrumbConfig = [{ title: '分類' }, { title: 'name' }]

    return (
      <BasicLayout {...this.props}>
        <div className={css.storyWrapper}>
          <StoryBanner storyData={storyData} />
          <EditorHtml storyData={storyData} />
        </div>
      </BasicLayout>
    )
  }
}
