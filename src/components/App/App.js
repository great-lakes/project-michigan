import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import Placeholder from '../Placeholder'
import TabMenu from '../TabMenu'
import './App.css'
import ConfigPage from '../ConfigPage'
import QuestionsPage from '../QuestionsPage'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <TabMenu />
        <Switch>
          <Route path='/questions' component={QuestionsPage} />
          <Route path='/projects' component={Placeholder} />
          <Route path='/azureCodes' component={Placeholder} />
          <Route path='/mentors' component={Placeholder} />
          <Route path='/config' component={ConfigPage} />
        </Switch>
      </div>
    )
  }
}

export default App
