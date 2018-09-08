import * as React from 'react'
import { Layout } from 'antd'
import css from './Basic.css'

const { Header, Footer, Sider, Content } = Layout

export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content className={css.layoutContentWrapper}>{this.props.children}</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}
