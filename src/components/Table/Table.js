import React, { Component } from 'react'
import './Table.css'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

const UNASSIGNED = 'unassigned'
const ASSIGNED = 'assigned'
const RESOLVED = 'resolved'

function determineStatus (mentorStatus, resolvedStatus) {
  if (mentorStatus && resolvedStatus) return RESOLVED
  if (mentorStatus && !resolvedStatus) return ASSIGNED
  return UNASSIGNED
}

function getStatusColor (status) {
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
    const {questions, mentors, setMentor, setStatus} = this.props
    const mentorOptions = mentors.map((mentor) => {
      return {
        label: mentor.first_name + ' ' + mentor.last_name,
        value: mentor.id
      }
    })
    const columns = [{ // change to button. on click: if red do nothing. if yellow turn green
      Header: 'Status',
      id: 'question-status',
      accessor: d => d.mentorStatus,
      Cell: d => {
        const status = determineStatus(d.value, d.original.resolved) // TODO: disable button on red & green
        return (<button disabled={(status === UNASSIGNED)} onClick={(e) => setStatus(e, status, d.original.id)} title={status}>
          <span style={getStatusColor(status)}>
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
          value={d.original.mentor}
          onChange={(value) => { setMentor(value, d.original.id) }}
          options={mentorOptions}
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
      Header: 'Contact',
      id: 'contact',
      accessor: d => d.contact
    }, {
      Header: 'Project',
      id: 'project',
      accessor: d => d.project
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
        data={questions}
        columns={columns}
        />
    )
  }
}

export default Table
