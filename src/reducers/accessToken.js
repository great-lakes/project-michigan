export default (prevState = '', action) => {
  // Add your action conditionals here
  if (action.type === 'SET_ACCESS_TOKEN') {
    return action.data
  }

  return prevState
}
