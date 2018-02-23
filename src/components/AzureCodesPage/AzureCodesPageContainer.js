import { connect } from 'react-redux'
import AzureCodesPage from './AzureCodesPage'
import { fetchTakeAzureCodeStart } from '../../actions/fetchers'

const mapStateToProps = (state) => {
  const azureCodes = Object.keys(state.hackathon.azurecodes || {})
    .map((id) => {
      const azureCode = state.azureCodes[id]
      if (azureCode && azureCode.student) {
        azureCode.student = state.students[azureCode.student]
      }
      return azureCode
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
