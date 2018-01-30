import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import TabMenu from '../TabMenu'
import Placeholder from '../Placeholder'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <TabMenu />
        <Switch>
          <Route path='/questions' component={Placeholder} />
          <Route path='/projects' component={Placeholder} />
          <Route path='/azureCodes' component={Placeholder} />
          <Route path='/mentors' component={Placeholder} />
        </Switch>
      </div>
    )
  }
}

export default App
