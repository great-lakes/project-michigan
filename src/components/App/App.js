import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import TabMenuContainer from '../TabMenu/TabMenuContainer'
import PlaceholderContainer from '../Placeholder/PlaceholderContainer'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <TabMenuContainer />
        <Switch>
          <Route path='/questions' component={PlaceholderContainer} />
          <Route path='/projects' component={PlaceholderContainer} />
          <Route path='/azureCodes' component={PlaceholderContainer} />
          <Route path='/mentors' component={PlaceholderContainer} />
        </Switch>
      </div>
    )
  }
}

export default App
