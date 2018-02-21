import { connect } from 'react-redux'
import Table from './Table'
import {fetchSetInquiryMentorStart, fetchSetInquiryStatusStart} from '../../actions/fetchers'

const mapStateToProps = (state) => {
  const inquiryKeys = state.hackathon.inquiries || []
  const mentorKeys = state.hackathon.mentors || []
  const questions = inquiryKeys.map((inqId) => {
    const inquiry = state.inquiries[inqId]
    if (!inquiry) return inquiry
    const student = state.students[inquiry.student] || {email: null, name: null, project: null}
    const project = student.project ? state.projects[student.project] : {name: 'N/A'}

    return {
      id: inquiry.id,
      resolved: inquiry.is_resolved,
      mentor: inquiry.mentor || null,
      mentorStatus: !!inquiry.mentor,
      skill: '',
      question: inquiry.question,
      project: project.name,
      contact: student.email,
      student: student.name
    }
  }).filter(item => item)

  const mentors = mentorKeys.map(id => {
    return state.mentors[id]
  }).filter(item => item)

  return {
    questions,
    mentors
  }
}

const mapDispatchToProps = (dispatch) => ({
  setMentor: function (mentorId, inquiryId) {
    if (!mentorId) {
      return
    }
    dispatch(fetchSetInquiryMentorStart({mentorId: mentorId.value, inquiryId}))
  },
  setStatus: function (e, currentStatus, inquiryId) {
    let status = 'RESOLVED'
    if (currentStatus === 'resolved') {
      status = 'UNRESOLVED'
    }
    dispatch(fetchSetInquiryStatusStart({inquiryId, status}))
  }
})

const TableContainer = connect(mapStateToProps, mapDispatchToProps)(Table)

export default TableContainer
