import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './HackathonDropdown.css'

class HackathonDropdown extends Component {
  render () {
    const { className } = this.props

    return (
      <div className={classNames([styles.base, className])}>
        Change me (HackathonDropdown)
      </div>
    )
  }
}

HackathonDropdown.propTypes = {
  className: PropTypes.string
}

export default HackathonDropdown
