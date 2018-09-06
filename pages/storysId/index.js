import * as React from 'react'
import { Layout } from 'antd'
import css from './index.css'

import getConfig from 'next/config'
import Card from '../../src/components/storysList/Card'

const { Header, Footer, Sider, Content } = Layout

export default class StoryId extends React.Component {
  static async getInitialProps({ req }) {
    const storyId = req.paramLast

    const { serverRuntimeConfig } = getConfig()
    const story = await Promise.resolve(serverRuntimeConfig.firebaseAdmin.fetchStoryById(storyId))

    return { story }
  }
  render() {
    const { story } = this.props
    return (
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content className={css.layoutContentWrapper}>
            <h1>Content</h1>

            <div dangerouslySetInnerHTML={{ __html: story.html }} />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}
