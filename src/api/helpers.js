/* global fetch */

export const queryGraphql = (apiConfig, query, variables) => {
  const {endpoint, accessToken} = apiConfig

  return fetch(`${endpoint}?access_token=${accessToken}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables
    })
  })
  .then((res) => res.json())
}
