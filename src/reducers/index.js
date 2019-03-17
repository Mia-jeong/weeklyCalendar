import { combineReducers } from "redux";
import { dayReducer, scheduleReducer } from "./dateReducer";

export default combineReducers({
  day: dayReducer,
  scheduleList: scheduleReducer
});
