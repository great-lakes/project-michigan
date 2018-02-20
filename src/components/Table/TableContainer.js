import { connect } from 'react-redux'
import Table from './Table'
import {get} from 'lodash'
import {fetchSetInquiryMentorStart} from '../../actions/fetchers'

const mapStateToProps = (state) => {
  const inquiryKeys = Object.keys(state.hackathon.inquiries ? state.hackathon.inquiries : {})
  const mentorKeys = Object.keys(state.hackathon.mentors ? state.hackathon.inquiries : {})
  const questions = inquiryKeys.map((inqId) => {
    const inquiry = state.inquiries[inqId]
    if (!inquiry) return inquiry
    inquiry.student = state.students[inquiry.student] || null
    if (inquiry.student) {
      inquiry.student.project = state.projects[inquiry.student.project]
    }
    return {
      id: inquiry.id,
      resolved: inquiry.is_resolved,
      mentor: inquiry.mentor || null,
      mentorStatus: !!inquiry.mentor,
      skill: '',
      question: inquiry.question,
      project: get(inquiry, 'student.project.name', 'Unknown Project'),
      contact: get(inquiry, 'student.email', null),
      student: get(inquiry, 'student.name', null)
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
    dispatch(fetchSetInquiryMentorStart({mentorId: mentorId.value, inquiryId}))
  }
})

const TableContainer = connect(mapStateToProps, mapDispatchToProps)(Table)

export default TableContainer
