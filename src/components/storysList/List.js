import * as React from 'react'
import Card from './Card'

export default class List extends React.Component {
  render() {
    const { storyList } = this.props
    return (
      <div>
        {storyList.map((item, index) => {
          return <Card story={item} key={index} />
        })}
      </div>
    )
  }
}
