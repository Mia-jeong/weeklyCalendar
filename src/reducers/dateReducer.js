import { FETCH_DAY } from "../actions/type";

export const dayReducer = (state = {}, action) => {
  console.log("sd", action.payload);
  switch (action.type) {
    case FETCH_DAY:
      return action.payload;
    default:
      return state;
  }
};
