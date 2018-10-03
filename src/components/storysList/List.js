import * as React from 'react'
import Card from './Card'
import { Row, Col } from 'antd'

const gridConfig = {
  0: { xs: 24, sm: 12, md: 18, lg: 16, xl: 16 },
  1: { xs: 24, sm: 12, md: 6, lg: 8, xl: 8 },
  2: { xs: 24, sm: 12, md: 6, lg: 8, xl: 8 },
  3: { xs: 24, sm: 12, md: 6, lg: 8, xl: 8 },
  default: { xs: 24, sm: 12, md: 6, lg: 6, xl: 6 }
}

const heightConfig = {
  0: 400,
  1: 400,
  default: 200
}

export default class List extends React.Component {
  render() {
    const { storyList = [] } = this.props
    return (
      <div>
        <Row type="flex" justify="start">
          {storyList.map((item, index) => {
            const config = gridConfig[index] || gridConfig['default']
            return (
              <Col {...config} key={index}>
                <Card
                  story={item}
                  index={index}
                  height={heightConfig[index] || heightConfig['default']}
                />
              </Col>
            )
          })}
        </Row>
      </div>
    )
  }
}
