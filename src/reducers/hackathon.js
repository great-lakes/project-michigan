import {SET_HACKATHON} from '../actions/setters'

export default (prevState = {}, action) => {
  // Add your action conditionals here
  if (action.type === SET_HACKATHON) {
    return action.data
  }
  return prevState
}
