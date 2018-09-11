import * as React from 'react'
import { Menu } from 'antd'
import css from './TopNav.css'

export default class TopNav extends React.Component {
  render() {
    return (
      <div className={css.topNavWarpper}>
        {this.props.categoryList.slice(0, 10).map(({ name, id }) => (
          <a href={`/categorys/${id}`}>
            <span className={css.topNavItem} key={name}>
              {name}
            </span>
          </a>
        ))}
      </div>
    )
  }
}
