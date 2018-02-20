export const FETCH_INITIAL_HACKATHON_DATA_START = 'FETCH_INITIAL_HACKATHON_DATA_START'
export const FETCH_INITIAL_HACKATHON_DATA_SUCCESS = 'FETCH_INITIAL_HACKATHON_DATA_SUCCESS'
// Add Action String Constant Here (do not delete this line)

export const fetchInitialHackathonDataStart = (data) => ({
  type: FETCH_INITIAL_HACKATHON_DATA_START,
  data
})

export const fetchInitialHackathonDataSuccess = (data) => ({
  type: FETCH_INITIAL_HACKATHON_DATA_SUCCESS,
  data
})

// Add Action Creator Here (do not delete this line)
