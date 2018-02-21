export const FETCH_INITIAL_HACKATHON_DATA_START = 'FETCH_INITIAL_HACKATHON_DATA_START'
export const FETCH_INITIAL_HACKATHON_DATA_SUCCESS = 'FETCH_INITIAL_HACKATHON_DATA_SUCCESS'
export const FETCH_SET_INQUIRY_MENTOR_START = 'FETCH_SET_INQUIRY_MENTOR_START'
export const FETCH_SET_INQUIRY_MENTOR_SUCCESS = 'FETCH_SET_INQUIRY_MENTOR_SUCCESS'
export const FETCH_TAKE_AZURE_CODE_START = 'FETCH_TAKE_AZURE_CODE_START'
export const FETCH_TAKE_AZURE_CODE_SUCCESS = 'FETCH_TAKE_AZURE_CODE_SUCCESS'
export const FETCH_SET_INQUIRY_STATUS_START = 'FETCH_SET_INQUIRY_STATUS_START'
export const FETCH_SET_INQUIRY_STATUS_SUCCESS = 'FETCH_SET_INQUIRY_STATUS_SUCCESS'
export const FETCH_GET_INQUIRY_BY_ID_START = 'FETCH_GET_INQUIRY_BY_ID_START'
export const FETCH_GET_INQUIRY_BY_ID_SUCCESS = 'FETCH_GET_INQUIRY_BY_ID_SUCCESS'
export const FETCH_INITIAL_HACKATHON_DATA_FAIL = 'FETCH_INITIAL_HACKATHON_DATA_FAIL'
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

export const fetchTakeAzureCodeStart = (data) => ({
  type: FETCH_TAKE_AZURE_CODE_START,
  data
})

export const fetchTakeAzureCodeSuccess = (data) => ({
  type: FETCH_TAKE_AZURE_CODE_SUCCESS,
  data
})

export const fetchSetInquiryStatusStart = (data) => ({
  type: FETCH_SET_INQUIRY_STATUS_START,
  data
})

export const fetchSetInquiryStatusSuccess = (data) => ({
  type: FETCH_SET_INQUIRY_STATUS_SUCCESS,
  data
})

// export const fetchGetInquiryByIdStart = (data) => ({
//   type: FETCH_GET_INQUIRY_BY_ID_START,
//   data
// })

// export const fetchGetInquiryByIdSuccess = (data) => ({
//   type: FETCH_GET_INQUIRY_BY_ID_SUCCESS,
//   data
// })

export const fetchInitialHackathonDataFail = (data) => ({
  type: FETCH_INITIAL_HACKATHON_DATA_FAIL,
  data
})

// Add Action Creator Here (do not delete this line)
