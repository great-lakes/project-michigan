import {SET_INQUIRIES} from '../actions/setters'

export default (prevState = {}, action) => {
// Add your action conditionals here
  if (action.type === SET_INQUIRIES) {
    return {
      ...prevState,
      ...action.data
    }
  }
  return prevState
}
