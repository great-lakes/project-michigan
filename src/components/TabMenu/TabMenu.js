import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './TabMenu.css'

const populateTab = (title, route, currentRouterPath, dispatch) => {
  if (currentRouterPath === ('/' + route)) {
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
    const { currentRouterPath, updateRouteDispatch } = this.props
    return (
      <div className='TabMenu-container'>
        <div>
          {populateTab('Questions', 'questions', currentRouterPath, updateRouteDispatch)}
          {populateTab('Projects', 'projects', currentRouterPath, updateRouteDispatch)}
          {populateTab('Azure Codes', 'azureCodes', currentRouterPath, updateRouteDispatch)}
          {populateTab('Mentors', 'mentors', currentRouterPath, updateRouteDispatch)}
        </div>
      </div>
    )
  }
}

export default TabMenu
