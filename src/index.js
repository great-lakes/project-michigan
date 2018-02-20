// React
import React from 'react'
import ReactDOM from 'react-dom'
import 'rxjs'

// Redux
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

// Router and History
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

// Component and Reducer
import App from './components/App'
import rootReducer from './reducers'
import getInitialState from './store/getInitialState'

// Redux Observable
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from './epics'
import {appStart} from './actions/app'
const epicMiddleware = createEpicMiddleware(rootEpic)

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()
// Build the middleware for intercepting and dispatching navigation actions
const routerMw = routerMiddleware(history)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  getInitialState(),
  composeEnhancers(applyMiddleware(epicMiddleware, routerMw))
)

store.dispatch(appStart())

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'))
