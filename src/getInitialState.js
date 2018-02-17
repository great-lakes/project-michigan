/* global localStorage */

export default () => {
  const accessToken = localStorage.getItem('accessToken') || ''
  return {
    accessToken,
    fetchStatus: {},
    inquiries: [],
    mentors: [],
    router: {}
  }
}
