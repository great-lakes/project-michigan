import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './TabMenu.css'

const populateTab = (title, route, currentRouterPath, dispatch) => {
  if (currentRouterPath === ('/' + route)) {
    return (
      <button className='TabMenu-button selected' onClick={dispatch(route)}>
        <Link className='TabMenu-link' to={('/' + route)}>{title}</Link>
      </button>
    )
  }
  return (
    <button className='TabMenu-button unselected' onClick={dispatch(route)}>
      <Link className='TabMenu-link' to={('/' + route)}>{title}</Link>
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
        {populateTab('Questions', 'questions', currentRouterPath, updateRouteDispatch)}
        {populateTab('Projects', 'projects', currentRouterPath, updateRouteDispatch)}
        {populateTab('Azure Codes', 'azureCodes', currentRouterPath, updateRouteDispatch)}
        {populateTab('Mentors', 'mentors', currentRouterPath, updateRouteDispatch)}
      </div>
    )
  }
}

export default TabMenu
