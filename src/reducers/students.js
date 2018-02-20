import {SET_STUDENTS} from '../actions/setters'
export default (prevState = {}, action) => {
  // Add your action conditionals here
  if (action.type === SET_STUDENTS) {
    return {
      ...prevState,
      ...action.data
    }
  }

  return prevState
}
