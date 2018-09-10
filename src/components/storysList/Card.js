import * as React from 'react'
import { Skeleton, Card, Avatar } from 'antd'
import css from './Card.css'
import { timestampToDateFormat } from '../../lib/time'

const StoryCard = (title, bgImageStyle, createdAt, loading) => {
  return (
    <div alt="example" className={css.storyCardCover} style={bgImageStyle}>
      <div className={css.storyCardCoverOverlay}>
        <Skeleton loading={loading} avatar active>
          <div className={css.cardMeta}>
            <b>{title}</b>
            <div className={css.cardTitleContent}>
              <i>authorNameHere</i>
              <div className={css.createdTime}>{timestampToDateFormat(createdAt, true)}</div>
            </div>
          </div>
        </Skeleton>
      </div>
    </div>
  )
}

export default class App extends React.Component {
  render() {
    const { story } = this.props

    const { createdAt, id, title, coverUrl } = story

    const loading = story ? false : true

    const bgImageStyle = {
      backgroundImage: `url(${coverUrl})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }

    return (
      <a href={`/storys/${id}`}>
        <Card
          style={{ marginTop: 16 }}
          cover={StoryCard(title, bgImageStyle, createdAt, loading)}
          bordered={false}
          hoverable
          bodyStyle={{ display: 'none' }}
        />
      </a>
    )
  }
}
