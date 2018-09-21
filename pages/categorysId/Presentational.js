import * as React from 'react'
import css from './Presentational.css'
import BasicLayout from '../Layout/Basic'
import CategorysList from '../../src/components/categorysList/List'

export default class Presentational extends React.Component {
  render() {
    const { categoryList, storyList, system = {} } = this.props
    const { currentCategory = {} } = system
    const { name } = currentCategory
    return (
      <BasicLayout categoryList={categoryList}>
        {name && <h1 className={css.categoryTitle}> 分類 / {name}</h1>}
        <CategorysList storyList={storyList} />
      </BasicLayout>
    )
  }
}
