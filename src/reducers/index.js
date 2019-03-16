import { combineReducers } from "redux";
import { dayReducer } from "./dateReducer";

export default combineReducers({
  day: dayReducer
});
