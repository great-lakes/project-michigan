// React
import React from 'react'
import ReactDOM from 'react-dom'

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

// Router and History
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

// Component and Reducer
import App from './components/App'
import rootReducer from './reducers'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    ...rootReducer,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'))
