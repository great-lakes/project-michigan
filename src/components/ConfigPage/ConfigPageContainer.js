import { connect } from 'react-redux'
import ConfigPage from './ConfigPage'
import {setAccessToken, setApiEndpoint, setEnableRealtime} from '../../actions/config'

const mapStateToProps = (state) => ({
  accessToken: state.api.accessToken,
  endpoint: state.api.endpoint,
  enableRealtime: state.api.enableRealtime
})

const mapDispatchToProps = (dispatch) => ({
  setAccessToken: (e) => {
    const token = e.target.value
    dispatch(setAccessToken(token))
  },
  setApiEndpoint: (e) => {
    const endpoint = e.target.value
    dispatch(setApiEndpoint(endpoint))
  },
  setEnableRealtime: (e) => {
    const enableRealtime = e.target.value
    dispatch(setEnableRealtime(enableRealtime))
  }
})

const ConfigPageContainer = connect(mapStateToProps, mapDispatchToProps)(ConfigPage)

export default ConfigPageContainer
