export const FETCH_INITIAL_HACKATHON_DATA_START = 'FETCH_INITIAL_HACKATHON_DATA_START'
export const FETCH_INITIAL_HACKATHON_DATA_SUCCESS = 'FETCH_INITIAL_HACKATHON_DATA_SUCCESS'
export const FETCH_SET_INQUIRY_MENTOR_START = 'FETCH_SET_INQUIRY_MENTOR_START'
export const FETCH_SET_INQUIRY_MENTOR_SUCCESS = 'FETCH_SET_INQUIRY_MENTOR_SUCCESS'
// Add Action String Constant Here (do not delete this line)

export const fetchInitialHackathonDataStart = (data) => ({
  type: FETCH_INITIAL_HACKATHON_DATA_START,
  data
})

export const fetchInitialHackathonDataSuccess = (data) => ({
  type: FETCH_INITIAL_HACKATHON_DATA_SUCCESS,
  data
})

export const fetchSetInquiryMentorStart = (data) => ({
  type: FETCH_SET_INQUIRY_MENTOR_START,
  data
})

export const fetchSetInquiryMentorSuccess = (data) => ({
  type: FETCH_SET_INQUIRY_MENTOR_SUCCESS,
  data
})

// Add Action Creator Here (do not delete this line)
