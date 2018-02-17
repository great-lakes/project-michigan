import { connect } from 'react-redux'
import ConfigPage from './ConfigPage'
import {setAccessToken} from '../../actions/config'

const mapStateToProps = (state) => ({
  accessToken: state.accessToken
})

const mapDispatchToProps = (dispatch) => ({
  setAccessToken: (e) => {
    const token = e.target.value
    dispatch(setAccessToken(token))
  }
})

const ConfigPageContainer = connect(mapStateToProps, mapDispatchToProps)(ConfigPage)

export default ConfigPageContainer
