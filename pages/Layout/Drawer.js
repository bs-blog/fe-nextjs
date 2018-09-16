import * as React from 'react'
import css from './Drawer.css'

import { Icon } from 'antd'
import LogoWrapper from './LogoWrapper'

const Drawer = props => {
  // const {title} = props
  const title = '分類'
  const { onClose, categoryList } = props

  return (
    <div className={css.drawerPanel}>
      <LogoWrapper />

      <div className={css.titleWrapper}>
        <span className={css.panelTitle}>{title}</span>
      </div>
      <div className={css.tableWrapper}>
        {categoryList.map(item => {
          return (
            <div className={css.tableItem} key={item.id}>
              <a href={`/categorys/${item.id}`}>{item.name}</a>
            </div>
          )
        })}
        {categoryList.length % 2 === 1 && <div className={css.tableItem} key={99} />}
      </div>

      <div onClick={onClose} className={css.closeButton}>
        <Icon type="close" style={{ fontSize: '24px' }} />
      </div>
    </div>
  )
}

export default class DrawerComponent extends React.Component {
  // state = { visible: true }
  state = { visible: false }

  showDrawer = () => {
    this.setState((prevState, props) => ({
      visible: !prevState.visible
    }))
  }

  onClose = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <React.Fragment>
        {!this.state.visible && (
          <div onClick={this.showDrawer} className={css.drawerButton}>
            <Icon type={'menu'} />
            <span>分類</span>
          </div>
        )}

        {this.state.visible && <Drawer {...this.props} onClose={this.onClose} />}
      </React.Fragment>
    )
  }
}
