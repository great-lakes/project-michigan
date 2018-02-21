/* global localStorage */

export default () => {
  const accessToken = localStorage.getItem('hannaAccessToken') || ''
  const endpoint = localStorage.getItem('hannaApiEndpoint') || ''
  const enableRealtime = localStorage.getItem('hannaRealtime') || 0
  return {
    api: {
      endpoint,
      accessToken,
      enableRealtime
    },
    fetchStatus: {},
    skills: {},
    inquiries: {},
    mentors: {},
    projects: {},
    router: {},
    hackathon: {},
    azureCodes: {}
  }
}
