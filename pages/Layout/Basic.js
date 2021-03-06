import * as React from 'react'
import { Layout } from 'antd'
import css from './Basic.css'
import Drawer from './Drawer'
import TopNav from './TopNav'
import LogoWrapper from './LogoWrapper'
import Footer from './Footer'

const { Content } = Layout

export default class App extends React.Component {
  render() {
    const { categoryList, system } = this.props
    return (
      <React.Fragment>
        <Layout className={css.grey}>
          <div className={css.topCategoryWrapper}>
            {/* only shown in xs and s screen size */}
            <Drawer categoryList={categoryList} />
            <TopNav categoryList={categoryList} />
            <LogoWrapper />
          </div>

          <Content className={`${css.rwdLayoutWidth} ${css.contentBody}`}>
            {this.props.children}
          </Content>
          <Footer system={system} />
        </Layout>
      </React.Fragment>
    )
  }
}
