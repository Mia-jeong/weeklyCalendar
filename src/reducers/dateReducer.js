import { FETCH_DAY, FETCH_INCREMENT, INCREMENT_RESET } from "../actions/type";

export const dayReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DAY:
      return action.payload;
    default:
      return state;
  }
};

export const incrementReducer = (state = 0, action) => {
  switch (action.type) {
    case FETCH_INCREMENT:
      return state + action.payload;
    case INCREMENT_RESET:
      return 0;
    default:
      return state;
  }
};
