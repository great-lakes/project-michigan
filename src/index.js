import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import rootReducer from './reducers'

const defaultState = {
  currentView: 'questions'
}

const store = createStore(
  rootReducer,
  defaultState
)

ReactDOM.render((
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
), document.getElementById('root'))
