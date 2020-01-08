const axios = require("axios");

export const fetchUserData = () => {
  return { type: "FETCH_USER_BEGIN" };
};
export const fetchUserDataSuccess = userData => {
  return { type: "FETCH_USER_SUCCESS", payload: userData };
};
export const fetchUserDataFailure = error => {
  return { type: "FETCH_USER_FAILURE", payload: error };
};
// https://api.github.com/users/tylereikenberg

export const fetchUserDataAsync = username => {
  return dispatch => {
    return axios
      .get(`https://api.github.com/users/${username}`, {
        auth: {
          username: "tylereikenberg",
          password: "507a66f827dfc20e1e3e71041f8b162a3c21125e"
        }
      })
      .then(({ data }) => {
        dispatch(fetchUserDataSuccess(data));
      })
      .catch(error => {
        if (error.response) {
          dispatch(fetchUserDataFailure(error.response.data));
        }
      });
  };
};
