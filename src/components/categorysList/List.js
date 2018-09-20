import * as React from 'react'
import Card from './Card'
import Banner from './Banner'
import { Row, Col } from 'antd'

const gridConfig = {
  0: { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
  1: { xs: 24, sm: 12, md: 6, lg: 8, xl: 8 },
  2: { xs: 24, sm: 12, md: 6, lg: 8, xl: 8 },
  3: { xs: 24, sm: 12, md: 6, lg: 8, xl: 8 },
  default: { xs: 24, sm: 12, md: 6, lg: 4, xl: 4 }
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
          <Col {...gridConfig[0]}>
            <Banner story={storyList[0]} height={heightConfig[0] || heightConfig['default']} />
          </Col>
        </Row>
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
