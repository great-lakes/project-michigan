import {Observable} from 'rxjs/Observable'
import {queryGraphql} from './helpers'
import * as queries from './queries'
import {normalize} from 'normalizr'
import {hackathon} from './normalizrSchema'

export const queryInitialHackathonData = (apiConfig) => {
  const {initialHackathonData} = queries
  const variables = {
    hackathonId: 1
  }
  const requestPromise = queryGraphql(apiConfig, initialHackathonData, variables)
    .then(result => result.data)
    .then(data => {
      const normalizedData = normalize(data.hackathon, hackathon)
      return normalizedData
    })
    .catch(console.error.bind(console))

  return Observable.from(requestPromise)
}

export const setResolveStatusToInquiry = (apiConfig, inquiryId, status) => {
  const {setInquiryStatus} = queries
  const variables = {
    inquiryId,
    status
  }
  const requestPromise = queryGraphql(apiConfig, setInquiryStatus, variables)
    .then(result => {
      console.error(result.errors)
      return result.data
    })
    .then(data => {
      const inquiry = data.setInquiryStatus
      return {
        ...inquiry,
        mentor: inquiry.mentor.id || null,
        student: inquiry.student.id || null
      }
    })

  return Observable.from(requestPromise)
}

export const assignMentorToInquiry = (apiConfig, inquiryId, mentorId) => {
  const {assignMentorToInquiry} = queries
  const variables = {
    inquiryId,
    mentorId
  }
  const requestPromise = queryGraphql(apiConfig, assignMentorToInquiry, variables)
    .then(result => {
      console.error(result.errors)
      return result.data
    })
    .then(data => {
      const inquiry = data.setInquiryMentor
      return {
        ...inquiry,
        mentor: inquiry.mentor.id || null,
        student: inquiry.student.id || null
      }
    })

  return Observable.from(requestPromise)
}

export const takeAzurecode = (apiConfig, azurecodeId) => {
  const {takeAzurecode} = queries
  const variables = {
    azurecodeId
  }
  const requestPromise = queryGraphql(apiConfig, takeAzurecode, variables)
    .then(result => {
      console.error(result.errors)
      return result.data
    })
    .then(data => {
      return data.issueAzurecodeById
    })

  return Observable.from(requestPromise)
}
