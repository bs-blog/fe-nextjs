import * as React from 'react'
import css from './Drawer.css'

import { Icon, Drawer } from 'antd'
const DEFAULT_TITLE = '分類'

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
    const { categoryList } = this.props
    return (
      <React.Fragment>
        {!this.state.visible && (
          <div onClick={this.showDrawer} className={css.drawerButton}>
            <Icon type={'menu'} />
            <span>分類</span>
          </div>
        )}

        <Drawer
          title={<span className={css.titleWrapper}>{DEFAULT_TITLE}</span>}
          placement="left"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
          width={'90%'}
        >
          <div className={''}>
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
          </div>
        </Drawer>
      </React.Fragment>
    )
  }
}
