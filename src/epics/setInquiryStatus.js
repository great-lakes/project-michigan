import {FETCH_SET_INQUIRY_STATUS_START, fetchSetInquiryStatusSuccess} from '../actions/fetchers'
import {setResolveStatusToInquiry} from '../api/client'
import { Observable } from 'rxjs/Observable'
import { setInquiry } from '../actions/setters'

export default (action$, store) =>
  action$.ofType(FETCH_SET_INQUIRY_STATUS_START)
    .mergeMap(action => {
      const {api} = store.getState()
      const {status, inquiryId} = action.data
      return setResolveStatusToInquiry(api, inquiryId, status)
        .flatMap(data => {
          return Observable.concat(
            Observable.of(fetchSetInquiryStatusSuccess()),
            Observable.of(setInquiry({
              id: data.id,
              payload: data
            }))
          )
        })
    })
