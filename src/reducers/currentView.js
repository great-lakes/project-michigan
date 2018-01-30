const defaultCurrentView = 'questions'

const currentView = (prevState = defaultCurrentView, action) => {
  // Action conditional
  if (action.type === 'CHANGE_VIEW') {
    return action.targetView
  }
  return prevState
}

export default currentView
