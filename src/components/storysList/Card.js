import * as React from 'react'
import { connect } from 'react-redux'
import { Card, Tag } from 'antd'
import css from './Card.css'
import { Link } from '../../routes/pages'
import { easyReadDateFormat } from '../../lib/time'

const StoryCard = (story, bgImageStyle, turnOnLoading, index) => {
  const { title, createdAt, author, categorys } = story

  return (
    <div alt="example" className={css.storyCardCover} style={bgImageStyle}>
      <div className={css.storyCardCoverOverlay} />
      <div className={css.cardMeta}>
        <div className={css.cardTitleContent}>
          <b>{title}</b>
        </div>
        <div className={css.cardSubTitleContent}>
          <span> {author.name}</span>
        </div>
        <div className={css.cardBottomContent}>
          {categorys.map(({ name, id }) => {
            return (
              <Tag key={name} color="#1f1f1f" style={{ borderRadius: '0' }}>
                <Link route={`/categorys/${id}`} params={{ id: id }}>
                  {name}
                </Link>
              </Tag>
            )
          })}
          <div className={css.createdTime}>{easyReadDateFormat(createdAt)}</div>
        </div>
      </div>
    </div>
  )
}

export default class App extends React.Component {
  render() {
    const { story, height, index, turnOnLoading } = this.props
    const { id, coverUrl } = story

    // const loading = story ? false : true

    const bgImageStyle = {
      backgroundImage: `url(${coverUrl})`,
      minHeight: height
    }

    return (
      <Link route={`/storys/${id}`} params={{ storyId: id }}>
        <Card
          cover={StoryCard(story, bgImageStyle, turnOnLoading, index)}
          bordered={false}
          hoverable
          bodyStyle={{ display: 'none' }}
        />
      </Link>
    )
  }
}
