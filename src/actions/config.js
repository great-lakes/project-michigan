/* global localStorage */

export const setAccessToken = (token) => {
  localStorage.setItem('hannaAccessToken', token)
  return {
    type: 'SET_ACCESS_TOKEN',
    data: token
  }
}

export const setApiEndpoint = (url) => {
  localStorage.setItem('hannaApiEndpoint', url)
  return {
    type: 'SET_API_ENDPOINT',
    data: url
  }
}
