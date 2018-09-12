import * as React from 'react'
import css from './TopNav.css'

export default class TopNav extends React.Component {
  render() {
    const { categoryList = [] } = this.props
    return (
      <div className={css.topNavWarpper}>
        {categoryList.slice(0, 9).map(({ name, id }) => (
          <a href={`/categorys/${id}`} key={id}>
            <span className={css.topNavItem}>{name}</span>
          </a>
        ))}
      </div>
    )
  }
}
