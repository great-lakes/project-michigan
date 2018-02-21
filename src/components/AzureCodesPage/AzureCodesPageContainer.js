import { connect } from 'react-redux'
import AzureCodesPage from './AzureCodesPage'
import { fetchTakeAzureCodeStart } from '../../actions/fetchers'

const mapStateToProps = (state) => {
  const azureCodes = Object.keys(state.hackathon.azurecodes || {})
    .map((id) => {
      return state.azureCodes[id]
    })
    .filter(_ => _)

  return {
    azureCodes
  }
}

const mapDispatchToProps = (dispatch) => ({
  takeAzureCode: (id) => {
    dispatch(fetchTakeAzureCodeStart({id}))
  }
})

const AzureCodesPageContainer = connect(mapStateToProps, mapDispatchToProps)(AzureCodesPage)

export default AzureCodesPageContainer
