import { FETCH_DAY, FETCH_INCREMENT, INCREMENT_RESET } from "./type";
import * as DateUtill from "../utils/date";

export const fetchDay = increment => {
  const day = DateUtill.getDateInfo(increment || 0);
  return { type: FETCH_DAY, payload: day };
};

export const fetchIncrement = (increment, flag = false) => {
  if (flag) {
    return { type: INCREMENT_RESET };
  }
  return { type: FETCH_INCREMENT, payload: increment };
};

export const fetchDayAndIncrement = (increment, flag = false) => (
  dispatch,
  getState
) => {
  dispatch(fetchIncrement(increment, flag));
  dispatch(fetchDay(getState().increment));
};
