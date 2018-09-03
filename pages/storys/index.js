import * as React from 'react'
import { Layout } from 'antd'
import css from './index.css'

import getConfig from 'next/config'

const { Header, Footer, Sider, Content } = Layout;

export default class App extends React.Component {
  static async getInitialProps({ req }) {
    const { serverRuntimeConfig } = getConfig()
    const storyList = await Promise.resolve(serverRuntimeConfig.firebaseAdmin.fetchStoryList())
    return { storyList }
  }
  render() {
    const {storyList} = this.props
    return (
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content className={css.layoutContentWrapper}>
            <h1>Content</h1>

            {
              storyList.map((item, index) => {
                const {author, name} = item
                return (<p>
                  <div>author: {author}</div>
                  <div>name:: {name}</div>
                </p>)
              })
            }
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}
