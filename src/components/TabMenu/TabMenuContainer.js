import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import TabMenu from './TabMenu'

const mapStateToProps = (state) => {
  return {
    currentRouterPath: state.router.location.pathname
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateRouteDispatch: (view) => () => {
    // update route
    dispatch(push('/' + view))
  }
})

const TabMenuContainer = connect(mapStateToProps, mapDispatchToProps)(TabMenu)

export default TabMenuContainer
