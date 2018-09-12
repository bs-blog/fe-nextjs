import * as React from 'react'
import { Skeleton, Card, Tag } from 'antd'
import css from './Card.css'
import { timestampToDateFormat } from '../../lib/time'

const CheckableTag = Tag.CheckableTag

const StoryCard = (story, bgImageStyle, loading) => {
  const { title, createdAt, author, categorys } = story

  return (
    <div alt="example" className={css.storyCardCover} style={bgImageStyle}>
      <div className={css.storyCardCoverOverlay}>
        <Skeleton loading={loading} avatar active>
          <div className={css.cardMeta}>
            <b>{title}</b>

            {categorys.map(({ name }) => {
              return <CheckableTag key={name}>{name}</CheckableTag>
            })}

            <div className={css.cardTitleContent}>
              <i> {author.name}</i>
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
    const { story, height } = this.props

    const { id, coverUrl } = story

    const loading = story ? false : true

    const bgImageStyle = {
      backgroundImage: `url(${coverUrl})`,
      minHeight: height
    }

    return (
      <a href={`/storys/${id}`}>
        <Card
          cover={StoryCard(story, bgImageStyle, loading)}
          bordered={false}
          hoverable
          bodyStyle={{ display: 'none' }}
        />
      </a>
    )
  }
}
