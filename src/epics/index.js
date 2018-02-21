import { combineEpics } from 'redux-observable'
import getInitialHackathonData from './getInitialHackathonData'
import setInquiryMentor from './setInquiryMentor'
import setInquiryStatus from './setInquiryStatus'
import takeAzureCode from './takeAzureCode'
import appStart from './appStart'

const rootEpic = combineEpics(
  appStart,
  getInitialHackathonData,
  setInquiryMentor,
  takeAzureCode,
  setInquiryStatus
)

export default rootEpic
