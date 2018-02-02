import React, { Component } from 'react'

/**
 * Placeholder component to render until dashboard is complete
 */
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
