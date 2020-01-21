const API_KEY = process.env.REACT_APP_API_KEY;
const axios = require('axios');
axios.defaults.headers.common = { Authorization: `bearer ${API_KEY}` };

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
        `https://api.github.com/users/${username}/repos?sort=updated`
      );
      dispatch(fetchReposDataSuccess(data));
    } catch (error) {
      if (error.response) {
        dispatch(fetchReposDataFailure(error.response.data));
      }
    }
  };
};
