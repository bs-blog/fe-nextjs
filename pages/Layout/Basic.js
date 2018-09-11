import * as React from 'react'
import { Layout } from 'antd'
import css from './Basic.css'
import Drawer from './Drawer'
import TopNav from './TopNav'

const { Header, Footer, Content } = Layout

export default class App extends React.Component {
  render() {
    const { categoryList } = this.props
    return (
      <Layout>
        <Drawer />
        <Layout>
          <div className={css.headerWrapper}>
            <div className="logo" />
            <TopNav categoryList={categoryList} />
          </div>

          <Content className={css.layoutContentWrapper}>{this.props.children}</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}
