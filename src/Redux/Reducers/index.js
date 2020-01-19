import { combineReducers } from "redux";
import fetchUserReducer from "./fetchUserReducer";
import fetchReposReducer from "./fetchReposReducer";

const rootReducer = combineReducers({
  fetchUserReducer,
  fetchReposReducer
});

export default rootReducer;
