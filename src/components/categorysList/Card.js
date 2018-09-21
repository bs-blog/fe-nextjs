import * as React from 'react'
import { Card, Tag, Avatar } from 'antd'
import css from './Card.css'
import { Link } from '../../routes/pages'
import { timestampToDateFormat } from '../../lib/time'
const { Meta } = Card

const StoryCard = bgImageStyle => {
  return <div alt="example" className={css.storyCardCover} style={bgImageStyle} />
}

const Description = story => {
  const { author, createdAt } = story
  const { name: authorName } = author

  return (
    <div className={css.description}>
      <p>{authorName}</p>
      <span className={css.createdTime}>{timestampToDateFormat(createdAt)}</span>
    </div>
  )
}

export default class App extends React.Component {
  render() {
    const { story } = this.props
    const imgHeight = '200px'

    const { id, title, coverUrl, author } = story
    const { imageUrl: authorImageUrl } = author

    const bgImageStyle = {
      backgroundImage: `url(${coverUrl})`,
      minHeight: imgHeight
    }

    return (
      <Link route={`/storys/${id}`} params={{ storyId: id }}>
        <Card cover={StoryCard(bgImageStyle)}>
          <Meta
            avatar={<Avatar src={authorImageUrl} />}
            title={title}
            description={Description(story)}
          />
        </Card>
      </Link>
    )
  }
}
