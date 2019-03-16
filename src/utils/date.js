import moment from "moment";

// export const getDateInfo = increment => {
//   let tday = moment();

//   if (increment) tday = tday.add(increment, "day");
//   const day = tday.format("d");
//   const date = tday.format("DD");
//   const fullYear = tday.format("YYYY");
//   const month = tday.format("M");
//   const dayNmKr = ["일", "월", "화", "수", "목", "금", "토"];

//   return {
//     date: date,
//     day: day,
//     fullYear: fullYear,
//     month: month,
//     colourClass: (increment === 0 && "today") || (day === "0" && "red") || "",
//     increment: increment,
//     dayNameEng: tday.format("ddd"),
//     dayNameKr: dayNmKr[day],
//     fullDate: tday.format("YYYYMMDD"),
//     fullDateDash: tday.format("YYYY-MM-DD")
//   };
// };

export const getDateInfo = (fullDateDash, value, flag) => {
  let tday = moment();

  if (flag) {
    tday = dateMove(fullDateDash || tday.format("YYYY-MM-DD"), value, flag);
  }
  const day = tday.format("d");
  const date = tday.format("DD");
  const fullYear = tday.format("YYYY");
  const month = tday.format("M");
  const dayNmKr = ["일", "월", "화", "수", "목", "금", "토"];

  let colourClass = "";
  if (day === "0") colourClass = "red";
  if (day === "6") colourClass = "blue";
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
    fullDateDash: tday.format("YYYY-MM-DD")
  };
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
  const temp = moment(fullDateDash);
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
  const temp = moment(day2.fullDateDash);
  if (flag === "M") {
    day = moment(day2.fullDateDash)
      .add(value, "month")
      .startOf("month");
  } else if (flag === "Y") {
    day = moment(day2.fullDateDash)
      .add(value, "year")
      .startOf("year");
  } else {
    day = new moment();
  }
  return day.diff(temp, "days");
};
