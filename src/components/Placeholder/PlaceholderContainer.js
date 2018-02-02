import { connect } from 'react-redux'
import Placeholder from './Placeholder'

const mapStateToProps = (state) => {
  return {
    currentRouterPath: state.router.location.pathname
  }
}

const PlaceholderContainer = connect(mapStateToProps, null)(Placeholder)

export default PlaceholderContainer
