import * as React from 'react'
import css from './Footer.css'
import { Layout, Icon } from 'antd'

const { Footer } = Layout

export default class FooterComponent extends React.Component {
  render() {
    const { system } = this.props
    const { productNameEng, contactEmail, facebookUrl, youtubeUrl, productDescription } = system
    const {} = system
    return (
      <Footer className={css.footerWrapper} style={{ background: 'rgba(0, 29, 29,1)' }}>
        <div className={css.contentWrapper}>
          <span>Copyright © 2018 {productNameEng}. </span>
          <span>{productDescription} </span>
        </div>
        <div className={css.iconWrapper}>
          <a href={contactEmail}>
            <Icon type="mail" theme="outlined" className={css.icon} />
          </a>
          <a href={facebookUrl}>
            <Icon type="facebook" theme="outlined" className={css.icon} />
          </a>
          <a href={youtubeUrl}>
            <Icon type="youtube" theme="outlined" className={css.icon} />
          </a>
        </div>
      </Footer>
    )
  }
}
