import { connect } from 'react-redux'
import Placeholder from './Placeholder'

const mapStateToProps = (state) => {
  return {
    currentRouterPath: state.router.location.pathname
  }
}

const mapDispatchToProps = (dispatch) => ({
})

const PlaceholderContainer = connect(mapStateToProps, mapDispatchToProps)(Placeholder)

export default PlaceholderContainer
