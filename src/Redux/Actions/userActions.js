const API_KEY = process.env.API_KEY;
const axios = require("axios");

//  move action types into constants object

const actions = {
  FETCH_USER_BEGIN: "FETCH_USER_BEGIN",
  FETCH_USER_SUCCESS: "FETCH_USER_SUCCESS",
  FETCH_USER_FAILURE: "FETCH_USER_FAILURE"
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
        `https://api.github.com/users/${username}`,
        {
          auth: {
            username: "tylereikenberg",
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
