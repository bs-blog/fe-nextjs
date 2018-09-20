import * as React from 'react'
import BasicLayout from '../Layout/Basic'
import CategorysList from '../../src/components/categorysList/List'

export default class Presentational extends React.Component {
  render() {
    const { categoryList, storyList } = this.props
    return (
      <BasicLayout categoryList={categoryList}>
        <CategorysList storyList={storyList} />
      </BasicLayout>
    )
  }
}
