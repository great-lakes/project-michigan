import React, { Component } from 'react'

class Placeholder extends Component {
  constructor (props) {
    super()
  }
  render () {
    return (
      <div>
        <h3>View: {this.props.name}</h3>
      </div>
    )
  }
}

export default Placeholder
