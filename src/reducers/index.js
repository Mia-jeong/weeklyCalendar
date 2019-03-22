import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { dayReducer, scheduleReducer } from "./dateReducer";

export default combineReducers({
  day: dayReducer,
  scheduleList: scheduleReducer,
  form: formReducer
});
