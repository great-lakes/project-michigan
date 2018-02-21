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

// socket io
import io from 'socket.io-client'

// action creator for initial load
import {fetchInitialHackathonDataStart} from './actions/fetchers'

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

if (store.getState().api.enableRealtime) {
  const {endpoint} = store.getState().api

  const socket = io(endpoint)
  socket.on('connect', () => {
    console.log('connected to websocket server')
  })

  socket.on('inquiry-created', (data) => {
    console.log('inquiry-created...', data)
    store.dispatch(fetchInitialHackathonDataStart())
  })

  socket.on('inquiry-updated', (data) => {
    console.log('inquiry-updated...', data)
    store.dispatch(fetchInitialHackathonDataStart())
  })

  socket.on('azurecode-updated', (data) => {
    console.log('azurecode-updated...', data)
    store.dispatch(fetchInitialHackathonDataStart())
  })
}

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'))
