import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './TabMenu.css'

const populateTab = (title, route, currentView, dispatch) => {
  if (currentView === route) {
    return (
      <button className='TabMenu-tabs selected' onClick={dispatch(route)}>
        <Link to={('/' + route)}>{title}</Link>
      </button>
    )
  }
  return (
    <button className='TabMenu-tabs unselected' onClick={dispatch(route)}>
      <Link to={('/' + route)}>{title}</Link>
    </button>
  )
}

/**
 * Display a tabbed menu for different dashboard views
 */
class TabMenu extends Component {
  render () {
    const { currentView, changeCurrentViewDispatch } = this.props
    return (
      <div className='TabMenu-container'>
        <div>
          {populateTab('Questions', 'questions', currentView, changeCurrentViewDispatch)}
          {populateTab('Projects', 'projects', currentView, changeCurrentViewDispatch)}
          {populateTab('Azure Codes', 'azureCodes', currentView, changeCurrentViewDispatch)}
          {populateTab('Mentor Info', 'mentors', currentView, changeCurrentViewDispatch)}
        </div>
        <p>Current View is: {currentView}</p>
      </div>
    )
  }
}

export default TabMenu
