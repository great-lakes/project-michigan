import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './AzureCodesPage.css'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

const AzureCodesPage = ({ className, azureCodes, takeAzureCode }) => (
  <div className={classNames([styles.base, className])}>
    <ReactTable
      data={azureCodes}
      columns={[
        {
          Header: 'Code',
          accessor: 'code'
        },
        {
          Header: 'Already Taken',
          accessor: 'is_taken',
          Cell: d => {
            console.log(d)
            return <span>{d.value ? 'Taken!' : 'Free'}</span>
          }
        },
        {
          Header: 'Actions',
          Cell: d => {
            return <button onClick={() => { takeAzureCode(d.original.id) }} > Take </button>
          }
        },
        {
          Header: 'Student',
          accessor: 'student'
        }
      ]}
      defaultPageSize={10}
      className='-striped -highlight'
        />
    <p>Stateless AzureCodesPage Component (change me) </p>
  </div>
)

AzureCodesPage.propTypes = {
  className: PropTypes.string
}

export default AzureCodesPage
