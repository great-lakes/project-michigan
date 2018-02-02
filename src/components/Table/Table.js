import React, { Component } from 'react'
import './Table.css'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

const data = [{ // fake data for example. will delete
  resolved: false,
  mentor: null,
  mentorStatus: false,
  skill: 'IoT',
  question: 'how do i make an event hub?',
  student: 'Billy Bob',
  project: 'IoT Cloud',
  contact: 'bb@live.com'
}]

const UNASSIGNED = 'unassigned'
const ASSIGNED = 'assigned'
const RESOLVED = 'resolved'

function determineStatus (mentorStatus, resolvedStatus) {
  if (mentorStatus && resolvedStatus) return RESOLVED
  if (mentorStatus && !resolvedStatus) return ASSIGNED
  return UNASSIGNED
}

function chooseStatusColor (status) {
  if (status === RESOLVED) return { color: '#57d500' }
  if (status === ASSIGNED) return { color: '#fffe00' }
  return { color: '#ff0000' }
}

// Next fix mentor field to update status field
class Table extends Component {
  handleClick (e, mentorStatus, resolvedStatus) {
    if (mentorStatus && !resolvedStatus) {
      // TODO: dispatch to change resolveStatus
      console.log('change from green to yellow')
    }
  }
  // TODO: replace with dropdown of mentors
  // renderEditable (cellInfo) {
  //   return (
  //     <div
  //       contentEditable
  //       onBlur={e => {
  //         // run a dispatch
  //         // update mentorStatus to true
  //       }}
  //     />
  //   )
  // }
  render () {
    const columns = [{ // change to button. on click: if red do nothing. if yellow turn green
      Header: 'Status',
      id: 'question-status',
      accessor: d => d.mentorStatus,
      Cell: d => {
        const status = determineStatus(d.value, d.original.resolved) // TODO: disable button on red & green
        return (<button onClick={(e) => this.handleClick(e, d.value, d.original.resolved)} title={status}>
          <span style={chooseStatusColor(status)}>
            &#x25cf;
          </span>
        </button>)
      }
    }, {
      Header: 'Mentor',
      id: 'mentor',
      accessor: d => d.mentor,
      Cell: d => {
        return (<Select
          name='mentor-name'
          value='one'
          onChange={this.handleChange}
          options={[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' }
          ]}
      />)
      } // TODO: change based on dropdown function
    }, {
      Header: 'Skill',
      id: 'skill',
      accessor: d => d.skill
    }, {
      Header: 'Question',
      id: 'question',
      accessor: d => d.question
    }, {
      Header: 'Student',
      id: 'student',
      accessor: d => d.student
    }, {
      Header: 'Project',
      id: 'project',
      accessor: d => d.project
    }, {
      Header: 'Contact',
      id: 'contact',
      accessor: d => d.contact
    }]
    return (
      <ReactTable
        getTdProps={(state, rowInfo, column) => {
          return {
            style: {
              whiteSpace: 'normal',
              overflow: 'visible'
            }
          }
        }}
        data={data}
        columns={columns}
        />
    )
  }
}

export default Table
