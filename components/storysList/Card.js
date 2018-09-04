import * as React from 'react'
import { Skeleton, Switch, Card, Icon, Avatar } from 'antd';
import css from './Card.css'
import { timestampToDateFormat } from '../../lib/time'

// const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;

export default class App extends React.Component {
  render() {
    const {story} = this.props
    const {author, createdAt, id, title, coverUrl} = story
    
    const loading = (story) ? false : true

    const bgImageStyle = {backgroundImage:  `url(${coverUrl})`}

    return (
      <div>
        <Card
          style={{marginTop: 16 }} 
          cover={<div alt="example" className={css.storyCardCover} style={bgImageStyle}/>}
          hoverable>
          <Skeleton loading={loading} avatar active>
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={title}
              description={timestampToDateFormat(createdAt, true)}
            />
          </Skeleton>
        </Card>
      </div>
    )
  }
}
