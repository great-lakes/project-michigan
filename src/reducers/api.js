export default (prevState = '', action) => {
  // Add your action conditionals here
  if (action.type === 'SET_ACCESS_TOKEN') {
    return {
      ...prevState,
      accessToken: action.data
    }
  }

  if (action.type === 'SET_API_ENDPOINT') {
    return {
      ...prevState,
      endpoint: action.data
    }
  }

  return prevState
}
