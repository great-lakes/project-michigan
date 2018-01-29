import React, { Component } from 'react'
import './Table.css'

import ReactTable from 'react-table'
import 'react-table/react-table.css'

class Table extends Component {
  render () {
    const data = [{
      status: 'mentor needed',
      mentor: null,
      skill: 'IoT',
      question: 'how do i make an event hub?',
      student: 'Billy Bob',
      project: 'IoT Cloud',
      contact: 'bb@live.com'
    }, {
      status: 'mentor assigned',
      mentor: 'Kevin L',
      skill: 'CaaP',
      question: 'where are the bot framework docs?',
      student: 'Billy Joe Bob',
      project: 'Da Big Bot',
      contact: 'bb@outlook.com'
    }, {
      status: 'resolved',
      mentor: 'Gabby C',
      skill: 'Azure search',
      question: 'how do i import docs from Cosmos DB?',
      student: 'Bob Guy',
      project: 'Search IT!',
      contact: 'bg@live.com'
    }]
    const columns = [{
      Header: '',
      accessor: 'status',
      Cell: row => (
        <span style={{
          color: row.value === 'mentor needed' ? '#ff0000'
            : row.value === 'mentor assigned' ? '#fffe00'
              : '#57d500'
        }}>
          &#x25cf;
            </span>
      )
    }, {
      Header: 'Mentor',
      id: 'name',
      accessor: d => d.mentor
    }, {
      Header: 'Skill',
      id: 'skill',
      accessor: d => d.skill // Custom value accessors!
    }, {
      Header: 'Question',
      id: 'question', // Custom header components!
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
