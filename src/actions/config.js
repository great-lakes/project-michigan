/* global localStorage */

export const setAccessToken = (token) => {
  localStorage.setItem('accessToken', token)
  return {
    type: 'SET_ACCESS_TOKEN',
    data: token
  }
}
