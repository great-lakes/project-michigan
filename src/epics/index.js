import { combineEpics } from 'redux-observable'
import getInitialHackathonData from './getInitialHackathonData'
import startSetInquiryMentor from './startSetInquiryMentor'
import appStart from './appStart'

const rootEpic = combineEpics(
  appStart,
  getInitialHackathonData,
  startSetInquiryMentor
)

export default rootEpic
