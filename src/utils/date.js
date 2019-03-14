export const getDateInfo = increment => {
  const tday = new Date();

  if (increment) tday.setDate(tday.getDate() + increment);
  const day = tday.getDay();
  const dt = tday.getDate();
  const dayNmEng = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
  const dayNmKr = ["일", "월", "화", "수", "목", "금", "토"];
  return {
    date: dt,
    day: day,
    fullYear: tday.getFullYear(),
    month: tday.getMonth(),
    colourClass: (increment === 0 && "today") || (day === 0 && "red") || "",
    increment: increment,
    dayNameEng: dayNmEng[day],
    dayNameKr: dayNmKr[day]
  };
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
