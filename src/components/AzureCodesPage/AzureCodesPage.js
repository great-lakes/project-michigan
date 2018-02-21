import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './AzureCodesPage.css'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import PasswordMask from 'react-password-mask'

const AzureCodesPage = ({ className, azureCodes, takeAzureCode }) => (
  <div className={classNames([styles.base, className])}>
    <h3>Azure Codes</h3>
    <ReactTable
      data={azureCodes}
      columns={[
        {
          Header: 'Code',
          accessor: 'code',
          Cell: d => {
            const taken = d.original.is_taken
            if (!taken) {
              return <input value={d.value} type='password' />
            }
            return <PasswordMask value={d.value} style={{font: 'monospace'}} />
          }
        },
        {
          Header: 'Already Taken',
          accessor: 'is_taken',
          Cell: d => {
            return <span>{d.value ? 'Taken!' : 'Free'}</span>
          }
        },
        {
          Header: 'Actions',
          Cell: d => {
            const taken = d.original.is_taken
            if (taken) {
              return ''
            }

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
  </div>
)

AzureCodesPage.propTypes = {
  className: PropTypes.string
}

export default AzureCodesPage
