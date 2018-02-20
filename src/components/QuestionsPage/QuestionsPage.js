import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './QuestionsPage.css'
import Table from '../Table'

const QuestionsPage = ({ className }) => (
  <div className={classNames([styles.base, className])}>
    <p>Stateless QuestionsPage Component (change me) </p>
    <Table />
  </div>
)

QuestionsPage.propTypes = {
  className: PropTypes.string
}

export default QuestionsPage
