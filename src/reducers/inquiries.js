import {SET_INQUIRIES, SET_INQUIRY} from '../actions/setters'

export default (prevState = {}, action) => {
// Add your action conditionals here
  if (action.type === SET_INQUIRY) {
    const {id, payload} = action.data
    return {
      ...prevState,
      [id]: payload
    }
  }
  if (action.type === SET_INQUIRIES) {
    return {
      ...prevState,
      ...action.data
    }
  }
  return prevState
}
