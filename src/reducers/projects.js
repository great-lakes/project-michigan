import {SET_PROJECTS} from '../actions/setters'
export default (prevState = {}, action) => {
  // Add your action conditionals here
  if (action.type === SET_PROJECTS) {
    return {
      ...prevState,
      ...action.data
    }
  }
  return prevState
}
