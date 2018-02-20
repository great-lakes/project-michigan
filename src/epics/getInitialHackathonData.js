import {FETCH_INITIAL_HACKATHON_DATA_START, fetchInitialHackathonDataSuccess} from '../actions/fetchers'
import {queryInitialHackathonData} from '../api/client'
import { Observable } from 'rxjs/Observable'
import {setHackathon, setSkills, setMentors, setStudents, setInquiries, setProjects} from '../actions/setters'

export default (action$, store) =>
  action$.ofType(FETCH_INITIAL_HACKATHON_DATA_START)
    .mergeMap(action => {
      const {api} = store.getState()
      return queryInitialHackathonData(api)
        .flatMap(data => {
          return Observable.concat(
            Observable.of(fetchInitialHackathonDataSuccess()),
            Observable.of(setHackathon(data.entities.hackathon[data.result])),
            Observable.of(setSkills(data.entities.skill)),
            Observable.of(setMentors(data.entities.mentor)),
            Observable.of(setStudents(data.entities.student)),
            Observable.of(setInquiries(data.entities.inquiry)),
            Observable.of(setProjects(data.entities.projects))
          )
        })
    })
