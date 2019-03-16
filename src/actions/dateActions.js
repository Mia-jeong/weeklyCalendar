import { FETCH_DAY } from "./type";
import * as DateUtill from "../utils/date";

export const fetchDay = (fullDateDash, value, flag) => {
  const day = DateUtill.getDateInfo(fullDateDash, value, flag);
  return { type: FETCH_DAY, payload: day };
};
