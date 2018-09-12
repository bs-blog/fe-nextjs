import * as React from 'react'
import { Layout } from 'antd'
import css from './Basic.css'
import Drawer from './Drawer'
import TopNav from './TopNav'

const { Footer, Content } = Layout
const LOGO_URL = '/static/logoBlack.jpg'

export default class App extends React.Component {
  render() {
    const { categoryList } = this.props
    return (
      <React.Fragment>
        <Drawer />
        <Layout className={css.grey}>
          <div className={css.headerWrapper}>
            <TopNav categoryList={categoryList} />
            <div className={css.header}>
              <img src={LOGO_URL} />
            </div>
          </div>

          <Content className={css.layoutContentWrapper}>{this.props.children}</Content>
          <Footer>Footer</Footer>
        </Layout>
      </React.Fragment>
    )
  }
}
