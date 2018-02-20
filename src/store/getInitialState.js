/* global localStorage */

export default () => {
  const accessToken = localStorage.getItem('hannaAccessToken') || ''
  const endpoint = localStorage.getItem('hannaApiEndpoint') || ''
  return {
    api: {
      endpoint,
      accessToken
    },
    fetchStatus: {},
    skills: {},
    inquiries: {},
    mentors: {},
    projects: {},
    router: {},
    hackathon: {}
  }
}
