import {SET_SKILLS} from '../actions/setters'
export default (prevState = {}, action) => {
  // Add your action conditionals here
  // Add your action conditionals here
  if (action.type === SET_SKILLS) {
    return {
      ...prevState,
      ...action.data
    }
  }
  return prevState
}
