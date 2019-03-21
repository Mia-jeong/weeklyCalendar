import {
  FETCH_DAY,
  FETCH_DAY_SCHEDULE,
  CREATE_SCHEDULE,
  EDIT_SCHEDULE
} from "./type";
import * as DateUtill from "../utils/date";

export const fetchDay = (fullDateDash, value, flag) => {
  const day = DateUtill.getDateInfo(fullDateDash, value, flag);
  return { type: FETCH_DAY, payload: day };
};

export const fetchDaySchedule = fullDate => {
  return { type: FETCH_DAY_SCHEDULE, payload: fullDate };
};

export const createSchedule = formValues => {
  return { type: CREATE_SCHEDULE, payload: formValues };
};

export const editSchedule = formValues => {
  return { type: EDIT_SCHEDULE, payload: formValues };
};
