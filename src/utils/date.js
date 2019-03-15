export const getDateInfo = increment => {
  const tday = new Date();

  if (increment) tday.setDate(tday.getDate() + increment);
  const day = tday.getDay();
  const date = tday.getDate();
  const fullYear = tday.getFullYear();
  const month = tday.getMonth();
  const dayNmEng = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
  const dayNmKr = ["일", "월", "화", "수", "목", "금", "토"];
  return {
    date: date,
    day: day,
    fullYear: fullYear,
    month: month,
    colourClass: (increment === 0 && "today") || (day === 0 && "red") || "",
    increment: increment,
    dayNameEng: dayNmEng[day],
    dayNameKr: dayNmKr[day],
    fullDate:
      fullYear +
      "" +
      numberRender(month + 1, true) +
      "" +
      numberRender(date, true)
  };
};

export const numberRender = (number, flag = false) => {
  if (flag) {
    return number < 10 ? "0" + number : number;
  } else {
    return parseInt(number);
  }
};

export const weekList = (today, increment) => {
  const weekDays = [];
  for (let index = today - 1; index >= 0; index--) {
    weekDays.push(getDateInfo(increment + index * -1));
  }
  for (let index = 1; index <= 7 - today; index++) {
    weekDays.push(getDateInfo(increment + index));
  }
  return weekDays;
};

export const dateDiff = (day, day2, flag, value) => {
  const tempDay = new Date(day2.fullYear, day2.month, day2.date);

  let currDay = 24 * 60 * 60 * 1000;

  //현재날짜와 전달 1일과 다음달 1일의 차이 구하기
  if (!day) {
    if (flag === "before") {
      day = new Date(day2.fullYear, day2.month + value, 1);

      return (tempDay - day) / currDay;
    } else if (flag === "after") {
      day = new Date(day2.fullYear, day2.month + value, 1);

      return (day - tempDay) / currDay;
    } else {
      return tempDay;
    }
  }

  return (day - tempDay) / currDay;
};
