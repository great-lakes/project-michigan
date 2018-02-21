import {SET_AZURE_CODES, SET_AZURE_CODE} from '../actions/setters'

export default (prevState = {}, action) => {
// Add your action conditionals here
  if (action.type === SET_AZURE_CODE) {
    const {id, payload} = action.data
    return {
      ...prevState,
      [id]: payload
    }
  }
  if (action.type === SET_AZURE_CODES) {
    return {
      ...prevState,
      ...action.data
    }
  }
  return prevState
}
