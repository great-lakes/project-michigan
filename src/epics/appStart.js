import {APP_START} from '../actions/app'
import {fetchInitialHackathonDataStart} from '../actions/fetchers'
import { Observable } from 'rxjs/Observable'
export default (action$, store) =>
  action$.ofType(APP_START)
    .mergeMap(action => {
      return Observable.of(fetchInitialHackathonDataStart())
    })
