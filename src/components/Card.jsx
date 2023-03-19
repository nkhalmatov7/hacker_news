import React from 'react'

class Card extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { item } = this.props
    return (
      <a href={item.url} className="card" target="bl ank">
        {item.title}
      </a>
    )
  }
}

export default Card
