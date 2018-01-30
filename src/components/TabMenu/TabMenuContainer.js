import { connect } from 'react-redux'
import TabMenu from './TabMenu'

const mapStateToProps = (state) => {
  return {
    currentView: state.currentView
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeCurrentViewDispatch: (view) => () => {
    dispatch({ type: 'CHANGE_VIEW', targetView: view })
  }
})

const TabMenuContainer = connect(mapStateToProps, mapDispatchToProps)(TabMenu)

export default TabMenuContainer
