import { combineEpics } from 'redux-observable'
import getInitialHackathonData from './getInitialHackathonData'
import appStart from './appStart'

const rootEpic = combineEpics(
  appStart,
  getInitialHackathonData,
)

export default rootEpic
