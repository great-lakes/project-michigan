import { connect } from 'react-redux'
import Table from './Table'

const mapStateToProps = (state) => {
  return {
    status: 'mentor needed'
  }
}

const mapDispatchToProps = (dispatch) => {}

const TableContainer = connect(mapStateToProps, mapDispatchToProps)(Table)

export default TableContainer
