import { combineReducers } from 'redux'
import currentViewReducer from './currentView'

const rootReducer = combineReducers({
  currentView: currentViewReducer
})

export default rootReducer
