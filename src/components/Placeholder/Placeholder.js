import React, { Component } from 'react'

class Placeholder extends Component {
  render () {
    const { currentRouterPath } = this.props
    return (
      <div>
        <h3>View: {currentRouterPath}</h3>
      </div>
    )
  }
}

export default Placeholder
