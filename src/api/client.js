import {Observable} from 'rxjs/Observable'
import {queryGraphql} from './helpers'
import * as queries from './queries'
import {normalize} from 'normalizr'
import {hackathon} from './normalizrSchema'

export const queryInitialHackathonData = (apiConfig) => {
  const {initialHackathonData} = queries
  const variables = {
    hackathonId: 1
  }
  const requestPromise = queryGraphql(apiConfig, initialHackathonData, variables)
    .then(result => result.data)
    .then(data => {
      const normalizedData = normalize(data.hackathon, hackathon)
      return normalizedData
    })
    .catch(console.error.bind(console))

  return Observable.from(requestPromise)
}
