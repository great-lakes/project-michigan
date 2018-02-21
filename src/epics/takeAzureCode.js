import {FETCH_TAKE_AZURE_CODE_START, fetchTakeAzureCodeSuccess} from '../actions/fetchers'
import {takeAzurecode} from '../api/client'
import { Observable } from 'rxjs/Observable'
import { setAzureCode } from '../actions/setters'

export default (action$, store) =>
  action$.ofType(FETCH_TAKE_AZURE_CODE_START)
    .mergeMap(action => {
      const {api} = store.getState()
      const {id} = action.data
      return takeAzurecode(api, id)
        .flatMap(data => {
          return Observable.concat(
            Observable.of(fetchTakeAzureCodeSuccess()),
            Observable.of(setAzureCode({
              id: data.id,
              payload: data
            }))
          )
        })
    })
