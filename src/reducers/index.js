import { combineReducers } from 'redux'
import api from './api'
import fetchStatus from './fetchStatus'
import inquiries from './inquiries'
import mentors from './mentors'
import {routerReducer} from 'react-router-redux'
import skills from './skills'
import students from './students'
import hackathon from './hackathon'
import projects from './projects'
import azureCodes from './azureCodes'

const rootReducer = combineReducers({
  api,
  fetchStatus,
  inquiries,
  mentors,
  router: routerReducer,
  skills,
  students,
  projects,
  hackathon,
  azureCodes
})

export default rootReducer
