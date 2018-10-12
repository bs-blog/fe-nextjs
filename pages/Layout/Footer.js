import * as React from 'react'
import css from './Footer.css'
import { Layout, Icon } from 'antd'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
const {
  PRODUCT_NAME_ZH = '',
  PRODUCT_DESCRIPTION = '',
  YOUTUBE_LINK = '',
  FACEBOOK_LINK = '',
  EMAIL_LINK = ''
} = publicRuntimeConfig

const { Footer } = Layout

export default class FooterComponent extends React.Component {
  render() {
    return (
      <Footer className={css.footerWrapper} style={{ background: 'rgba(0, 29, 29,1)' }}>
        <div className={css.contentWrapper}>
          <span>Copyright © 2018 {PRODUCT_NAME_ZH}. </span>
          <span>{PRODUCT_DESCRIPTION} </span>
        </div>
        <div className={css.iconWrapper}>
          <a href={EMAIL_LINK}>
            <Icon type="mail" theme="outlined" className={css.icon} />
          </a>
          <a href={FACEBOOK_LINK}>
            <Icon type="facebook" theme="outlined" className={css.icon} />
          </a>
          <a href={YOUTUBE_LINK}>
            <Icon type="youtube" theme="outlined" className={css.icon} />
          </a>
        </div>
      </Footer>
    )
  }
}
