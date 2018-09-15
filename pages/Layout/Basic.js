import * as React from 'react'
import { Layout } from 'antd'
import css from './Basic.css'
import Drawer from './Drawer'
import TopNav from './TopNav'
import LogoWrapper from './LogoWrapper'

const { Footer, Content } = Layout

export default class App extends React.Component {
  render() {
    const { categoryList } = this.props
    return (
      <React.Fragment>
        <Drawer categoryList={categoryList} />
        <Layout className={css.grey}>
          <div className={css.headerWrapper}>
            <TopNav categoryList={categoryList} />
            <LogoWrapper />
          </div>

          <Content className={css.layoutContentWrapper}>{this.props.children}</Content>
          <Footer>Footer</Footer>
        </Layout>
      </React.Fragment>
    )
  }
}
