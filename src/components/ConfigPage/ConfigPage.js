import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './ConfigPage.css'

const ConfigPage = ({ className, setAccessToken, accessToken }) => (
  <div className={classNames([styles.base, className])}>
    <label htmlFor='access-token-input'>Access Token</label>
    <input id='access-token-input' type='password' onChange={setAccessToken} value={accessToken} />
  </div>
)

ConfigPage.propTypes = {
  className: PropTypes.string
}

export default ConfigPage
