const API_KEY = process.env.REACT_APP_API_KEY;
const axios = require('axios');
axios.defaults.headers.common = { Authorization: `bearer ${API_KEY}` };

const actions = {
  FETCH_USER_BEGIN: 'FETCH_USER_BEGIN',
  FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
  FETCH_USER_FAILURE: 'FETCH_USER_FAILURE'
};

export const fetchUserData = () => {
  return { type: actions.FETCH_USER_BEGIN };
};
export const fetchUserDataSuccess = userData => {
  return { type: actions.FETCH_USER_SUCCESS, payload: userData };
};
export const fetchUserDataFailure = error => {
  return { type: actions.FETCH_USER_FAILURE, payload: error };
};

export const fetchUserDataAsync = username => {
  return async dispatch => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}`
      );
      dispatch(fetchUserDataSuccess(data));
    } catch (error) {
      if (error.response) {
        dispatch(fetchUserDataFailure(error.response.data));
      }
    }
  };
};
