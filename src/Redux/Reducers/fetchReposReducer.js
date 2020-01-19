const initState = {
  repos: [],
  loading: false,
  error: null
};

const fetchReposReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_REPOS_BEGIN":
      return { ...state, loading: true, error: null };
    case "FETCH_REPOS_SUCCESS":
      return { ...state, repos: action.payload, loading: false, error: null };
    case "FETCH_REPOS_FAILURE":
      return { ...state, repos: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export default fetchReposReducer;
