const API_KEY = process.env.API_KEY;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const axios = require('axios');

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
        `https://api.github.com/users/${username}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
        {
          auth: {
            username: 'tylereikenberg',
            password: API_KEY
          }
        }
      );
      dispatch(fetchUserDataSuccess(data));
    } catch (error) {
      if (error.response) {
        dispatch(fetchUserDataFailure(error.response.data));
      }
    }
  };
};
