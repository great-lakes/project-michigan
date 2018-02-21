import { combineEpics } from 'redux-observable'
import getInitialHackathonData from './getInitialHackathonData'
import setInquiryMentor from './setInquiryMentor'
import takeAzureCode from './takeAzureCode'
import appStart from './appStart'

const rootEpic = combineEpics(
  appStart,
  getInitialHackathonData,
  setInquiryMentor,
  takeAzureCode
)

export default rootEpic
