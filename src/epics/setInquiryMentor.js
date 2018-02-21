import {FETCH_SET_INQUIRY_MENTOR_START, fetchSetInquiryMentorSuccess} from '../actions/fetchers'
import {assignMentorToInquiry} from '../api/client'
import { Observable } from 'rxjs/Observable'
import { setInquiry } from '../actions/setters'

export default (action$, store) =>
  action$.ofType(FETCH_SET_INQUIRY_MENTOR_START)
    .mergeMap(action => {
      const {api} = store.getState()
      const {mentorId, inquiryId} = action.data
      return assignMentorToInquiry(api, inquiryId, mentorId)
        .flatMap(data => {
          return Observable.concat(
            Observable.of(fetchSetInquiryMentorSuccess()),
            Observable.of(setInquiry({
              id: data.id,
              payload: data
            }))
          )
        })
    })
