import * as React from 'react'
import { Card, Tag } from 'antd'
import css from './Card.css'
import { timestampToDateFormat } from '../../lib/time'

const StoryCard = (story, bgImageStyle, index) => {
  const { title, createdAt, author, categorys } = story

  console.log('index: ', index)

  return (
    <div alt="example" className={css.storyCardCover} style={bgImageStyle}>
      <div className={css.storyCardCoverOverlay} />
      <div className={css.cardMeta}>
        <div className={css.cardTitleContent}>
          <b>{title}</b>
        </div>
        <div className={css.cardSubTitleContent}>
          <i> {author.name}</i>
        </div>
        <div className={css.cardBottomContent}>
          {categorys.map(({ name }) => {
            return (
              <Tag key={name} color="gray">
                {name}
              </Tag>
            )
          })}
          <div className={css.createdTime}>{timestampToDateFormat(createdAt, index === 0)}</div>
        </div>
      </div>
    </div>
  )
}

export default class App extends React.Component {
  render() {
    const { story, height, index } = this.props

    const { id, coverUrl } = story

    // const loading = story ? false : true

    const bgImageStyle = {
      backgroundImage: `url(${coverUrl})`,
      minHeight: height
    }

    return (
      <a href={`/storys/${id}`}>
        <Card
          cover={StoryCard(story, bgImageStyle, index)}
          bordered={false}
          hoverable
          bodyStyle={{ display: 'none' }}
        />
      </a>
    )
  }
}
