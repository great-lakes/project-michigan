import { connect } from 'react-redux'
import ConfigPage from './ConfigPage'
import {setAccessToken, setApiEndpoint} from '../../actions/config'

const mapStateToProps = (state) => ({
  accessToken: state.api.accessToken,
  endpoint: state.api.endpoint
})

const mapDispatchToProps = (dispatch) => ({
  setAccessToken: (e) => {
    const token = e.target.value
    dispatch(setAccessToken(token))
  },
  setApiEndpoint: (e) => {
    const endpoint = e.target.value
    dispatch(setApiEndpoint(endpoint))
  }
})

const ConfigPageContainer = connect(mapStateToProps, mapDispatchToProps)(ConfigPage)

export default ConfigPageContainer
