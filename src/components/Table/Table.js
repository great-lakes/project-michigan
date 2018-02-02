import React, { Component } from 'react'
import './Table.css'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

const data = [{ // fake data for example. will delete
  resolved: false,
  mentor: null,
  mentorStatus: false,
  skill: 'IoT',
  question: 'how do i make an event hub?',
  student: 'Billy Bob',
  project: 'IoT Cloud',
  contact: 'bb@live.com'
}, {
  resolved: false,
  mentor: 'Kevin L',
  mentorStatus: true,
  skill: 'CaaP',
  question: 'where are the bot framework docs?',
  student: 'Billy Joe Bob',
  project: 'Da Big Bot',
  contact: 'bb@outlook.com'
}, {
  resolved: true,
  mentor: 'Gabby C',
  mentorStatus: true,
  skill: 'Azure search',
  question: 'how do i import docs from Cosmos DB?',
  student: 'Bob Guy',
  project: 'Search IT!',
  contact: 'bg@live.com'
}]

function chooseColor (mentorStatus, resolvedStatus) {
  if (mentorStatus && resolvedStatus) {
    return { color: '#57d500'}
  } else if (mentorStatus && !resolvedStatus) {
    return { color: '#fffe00' }
  } else {
    return { color: '#ff0000' }
  }
}

// Next fix mentor field to update status field
class Table extends Component {
  handleClick (e, mentorStatus, resolvedStatus) {
    if (mentorStatus && !resolvedStatus) {
      resolvedStatus =
      console.log('change from green to yellow')
      // dispactch to change resolveStatus
    }
  }
  renderEditable (cellInfo) {
    return (
      <div
        contentEditable
        onBlur={e => {
          // run a dispatch
          // update mentorStatus to true
        }}
      />
    )
  }
  render () {
    const columns = [{ // change to button. on click: if red do nothing. if yellow turn green
      Header: '',
      accessor: 'mentorStatus',
      Cell: d => (
        <button onClick={(e) => this.handleClick(e, d.value, d.original.resolved)}>
          <span style={chooseColor(d.value, d.original.resolved)}>
            &#x25cf;
          </span>
        </button>
      )
    }, {
      Header: 'Mentor',
      id: 'name',
      accessor: d => d.mentor,
      Cell: this.renderEditable
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
        data={data}
        columns={columns}
        />
    )
  }
}

export default Table
