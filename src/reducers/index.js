import { combineReducers } from 'redux'
import accessToken from './accessToken'
import fetchStatus from './fetchStatus'
import inquiries from './inquiries'
import mentors from './mentors'
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
  accessToken,
  fetchStatus,
  inquiries,
  mentors,
  router: routerReducer
})

export default rootReducer
