import * as React from 'react'
import css from './Basic.css'
import { Link } from '../../src/routes/pages'
const LOGO_URL = '/static/logoBlack.jpg'

export default class LogoWrapper extends React.Component {
  render() {
    return (
      <div className={css.header}>
        <Link route="storys">
          <img alt={'LOGO'} src={LOGO_URL} />
        </Link>
      </div>
    )
  }
}
