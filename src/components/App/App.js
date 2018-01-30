import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import TabMenuContainer from '../TabMenu/TabMenuContainer'
import Placeholder from '../Placeholder'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TabMenuContainer />
        <Switch>
          <Route path='/questions' render={(props) => (
            <Placeholder name='Questions' />
          )} />
          <Route path='/projects' render={(props) => (
            <Placeholder name='Projects' />
          )} />
          <Route path='/azureCodes' render={(props) => (
            <Placeholder name='Azure Codes' />
          )} />
          <Route path='/mentors' render={(props) => (
            <Placeholder name='Mentors' />
          )} />
        </Switch>
      </div>
    )
  }
}

export default App
