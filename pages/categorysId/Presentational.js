import * as React from 'react'
import css from './Presentational.css'
import BasicLayout from '../Layout/Basic'
import CategorysList from '../../src/components/categorysList/List'
import DefaultHeader from '../../src/components/meta/DefaultHeader'
import Breadcrumb from '../Layout/Breadcrumb'

export default class Presentational extends React.Component {
  render() {
    const { categoryList, storyList, system = {} } = this.props
    const { currentCategory = {} } = system
    const { name } = currentCategory
    const breadcrumbConfig = [{ title: '分類' }, { title: name }]
    return (
      <BasicLayout categoryList={categoryList} key={name}>
        <DefaultHeader />
        <Breadcrumb config={breadcrumbConfig} />
        <CategorysList storyList={storyList} />
      </BasicLayout>
    )
  }
}
