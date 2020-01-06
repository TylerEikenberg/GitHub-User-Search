import { combineReducers } from "redux";
import fetchUserReducer from "./fetchUserReducer";

const rootReducer = combineReducers({
  fetchUserReducer
});

export default rootReducer;
