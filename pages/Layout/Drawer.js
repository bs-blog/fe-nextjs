import * as React from 'react'
import css from './Drawer.css'

import { Icon, Drawer } from 'antd'

export default class DrawerComponent extends React.Component {
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
    const { categoryList = [] } = this.props

    return (
      <React.Fragment>
        {!this.state.visible && (
          <a onClick={this.showDrawer} className={css.drawerButton}>
            <Icon type={'menu'} />
          </a>
        )}
        {this.state.visible && (
          <Drawer
            title="Basic Drawer"
            placement="left"
            closable={true}
            onClose={this.onClose}
            visible={this.state.visible}
            className={css.drawerPanel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        )}
      </React.Fragment>
    )
  }
}
