import { combineReducers } from "redux";
import { dayReducer, incrementReducer } from "./dateReducer";

export default combineReducers({
  day: dayReducer,
  increment: incrementReducer
});
