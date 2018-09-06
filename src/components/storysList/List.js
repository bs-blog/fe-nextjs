import * as React from 'react'
import Card from './Card'
import css from './List.css'

// const { Header, Footer, Sider, Content } = Layout;

export default class List extends React.Component {
  state = {
    loading: true
  }
  render() {
    const { storyList } = this.props
    const { loading } = this.state
    return (
      <div>
        {storyList.map((item, index) => {
          const { author, name } = item
          return <Card story={item} key={index} />
          // return (<div className='storyItemWrapper'>
          //     <div>author: {author}</div>
          //     <div>name:: {name}</div>
          //   </div>
          // )
        })}
      </div>
    )
  }
}
