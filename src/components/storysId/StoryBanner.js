import * as React from 'react'
import { Icon, Tag } from 'antd'
import css from './StoryBanner.css'
import { timestampToDateFormat } from '../../lib/time'
import { Link } from '../../routes/pages'

export default class App extends React.Component {
  render() {
    const { storyData } = this.props
    const { createdAt, author, categorys } = storyData
    const { name: authorName } = author

    return (
      <div className={css.bannerWrapper}>
        <div>
          <span>作者 : {authorName}</span>
        </div>
        <div>
          {categorys.map(({ name, id }) => {
            return (
              <Tag key={name} color="#1f1f1f" style={{ borderRadius: '0' }}>
                <Link route={`/categorys/${id}`} params={{ id: id }}>
                  {name}
                </Link>
              </Tag>
            )
          })}
        </div>

        <div className={css.createdAt}>
          <Icon type="clock-circle" theme="outlined" />
          <span>{timestampToDateFormat(createdAt, true)}</span>
        </div>
      </div>
    )
  }
}
