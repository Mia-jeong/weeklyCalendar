import moment from "moment";
import "moment-timezone";

export const getDateInfo = (fullDateDash, value, flag) => {
  let tday = timeZone();

  if (flag) {
    tday = dateMove(fullDateDash || tday.format("YYYY-MM-DD"), value, flag);
  }
  const day = tday.format("d");
  const date = tday.format("DD");
  const fullYear = tday.format("YYYY");
  const month = tday.format("M");
  const dayNmKr = ["일", "월", "화", "수", "목", "금", "토"];

  let colourClass = "";
  if (day === "0") colourClass = "red"; //sunday
  if (day === "6") colourClass = "blue"; //saturday
  if (tday.isSame(moment(), "day")) colourClass = "today";

  return {
    date: date,
    day: day,
    fullYear: fullYear,
    month: month,
    colourClass: colourClass,
    dayNameEng: tday.format("ddd"),
    dayNameKr: dayNmKr[day],
    fullDate: tday.format("YYYYMMDD"),
    fullDateDash: tday.format("YYYY-MM-DD"),
    firstDayOfMonth: tday.startOf("month").format("d"),
    lastDayOfMonth: tday.daysInMonth()
  };
};

export const getCalendarConfig = {
  weekdays: moment.weekdays(),
  weekdaysShort: moment.weekdaysShort(),
  weedaysKr: ["일", "월", "화", "수", "목", "금", "토"],
  months: moment.months()
};

export const getCalendarInfo = move => {
  const day = timeZone();

  return {
    start: day.startOf("month"),
    end: day.endOf("month")
  };
};

export const timeZone = (date, timeZone = "Asia/Seoul") => {
  var nowDate = moment(date)
    .tz(timeZone)
    .format();

  nowDate = moment(nowDate);

  return nowDate;
};

export const weekList = (fullDateDash, day) => {
  const weekDays = [];
  for (let index = day; index >= 0; index--) {
    weekDays.push(getDateInfo(fullDateDash, index * -1, "D"));
  }
  for (let index = 1; index < 7 - day; index++) {
    weekDays.push(getDateInfo(fullDateDash, index, "D"));
  }
  return weekDays;
};

export const dateMove = (fullDateDash, value, flag) => {
  // console.log("dateMove", fullDateDash, value, flag);
  const temp = timeZone(fullDateDash);
  if (flag === "M") {
    return temp.add(value, "month").startOf("month");
  } else if (flag === "Y") {
    return temp.add(value, "year").startOf("year");
  } else if (flag === "D") {
    return temp.add(value, "day");
  } else {
    return temp;
  }
};

export const dateDiff = (day, day2, value, flag) => {
  const temp = timeZone(day2.fullDateDash);
  if (flag === "M") {
    day = timeZone(day2.fullDateDash)
      .add(value, "month")
      .startOf("month");
  } else if (flag === "Y") {
    day = timeZone(day2.fullDateDash)
      .add(value, "year")
      .startOf("year");
  } else {
    day = new timeZone();
  }
  return day.diff(temp, "days");
};

export const dateFormat = (str, date) => {
  if (date) {
    return (
      date.substr(0, 4) + str + date.substr(4, 2) + str + date.substr(6, 8)
    );
  } else return null;
};

export const timeRender = (time, str) => {
  let timeTemp = time;

  if (timeTemp % 1 === 0.5) {
    timeTemp = timeTemp - 0.5 + ":30";
  }
  if (time >= 12) {
    timeTemp += ` ${str}`;
  }

  return timeTemp;
};
