import * as React from 'react'
import Card from './Card'
import { Row, Col } from 'antd'

export default class List extends React.Component {
  render() {
    const { storyList } = this.props
    return (
      <div>
        <Row type="flex" justify="start">
          {storyList.map((item, index) => {
            return (
              <Col xs={24} sm={12} md={6} lg={8} xl={8} key={index}>
                <Card story={item} />
              </Col>
            )
          })}
        </Row>
      </div>
    )
  }
}
