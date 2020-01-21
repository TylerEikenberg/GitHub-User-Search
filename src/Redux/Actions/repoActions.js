const API_KEY = process.env.API_KEY;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const axios = require('axios');

const actions = {
  FETCH_REPOS_BEGIN: 'FETCH_REPOS_BEGIN',
  FETCH_REPOS_SUCCESS: 'FETCH_REPOS_SUCCESS',
  FETCH_REPOS_FAILURE: 'FETCH_REPOS_FAILURE'
};

export const fetchReposData = () => {
  return { type: actions.FETCH_REPOS_BEGIN };
};
export const fetchReposDataSuccess = repoData => {
  return { type: actions.FETCH_REPOS_SUCCESS, payload: repoData };
};
export const fetchReposDataFailure = error => {
  return { type: actions.FETCH_REPOS_FAILURE, payload: error };
};

export const fetchReposDataAsync = username => {
  return async dispatch => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}/repos?sort=updated?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
        {
          auth: {
            username: 'tylereikenberg',
            password: API_KEY
          }
        }
      );
      dispatch(fetchReposDataSuccess(data));
    } catch (error) {
      if (error.response) {
        dispatch(fetchReposDataFailure(error.response.data));
      }
    }
  };
};
