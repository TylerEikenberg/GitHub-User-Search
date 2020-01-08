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
          password: "ae2dcc321d1dae0f2ff6c1d23920fa2aff3c1df2"
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
