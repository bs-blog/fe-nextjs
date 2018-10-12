import * as React from 'react'
import css from './Breadcrumb.css'

export default class BreadcrumbComponent extends React.Component {
  render() {
    const { config } = this.props
    const lastCategoryObj = config[config.length - 1]
    return (
      <div className={css.breadcrumbWrapper}>
        <ol itemScope itemType="http://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
            <a
              itemType="http://schema.org/Thing"
              itemProp="item"
              href="/"
              className={css.firstBreadcrumb}
            >
              <span itemProp="name">{config.slice(0, -1).map(({ title }) => title)}</span>
            </a>
            <meta itemProp="position" content="1" />
          </li>
          <span className={css.divider}> / </span>
          <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
            <a
              itemType="http://schema.org/Thing"
              itemProp="item"
              href={`/categorys/${lastCategoryObj.id}`}
              className={css.otherBreadcrumb}
            >
              <span itemProp="name">{lastCategoryObj.title}</span>
            </a>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
      </div>
    )
  }
}
