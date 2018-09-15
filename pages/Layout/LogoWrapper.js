import * as React from 'react'
import css from './Basic.css'
const LOGO_URL = '/static/logoBlack.jpg'

export default class LogoWrapper extends React.Component {
  render() {
    return (
      <div className={css.header}>
        <a href="/">
          <img alt={'LOGO'} src={LOGO_URL} />
        </a>
      </div>
    )
  }
}
