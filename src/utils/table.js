import _ from "lodash";
/*
테이블의 각각 cell높이에 맞게 카드 시작 포인트와 높이를 계산해주는 함수 
param 
range from 9 to 20

ex)startCnt
9/0.5(divider) = 18 - 18(num) = 0(startCnt)
9.5/0.5(divider) = 19 - 18(num) = 1(startCnt)
..
20 / 0.5(divider) = 40 -18(num) = 22(startCnt)

start: start time
end : end time
colour: card colour
divider : the number to divide start and (end-start) by
num : for substraction 
topheight: the height of th 
cellheight : the height of each cell
*/
export const coloursList = [
  { colourId: "01", colour: "orange", match: "#ED553B" },
  { colourId: "02", colour: "yellow", match: "#F2B134" },
  { colourId: "03", colour: "green", match: "#47AB6C" },
  { colourId: "04", colour: "blue", match: "#0894A1" },
  { colourId: "05", colour: "indigo", match: "#112F41" }
];

export const cellHeightCaculator = (
  { start, end, colour },
  divider,
  num,
  topHeight,
  cellHeight
) => {
  const heightCnt = (end - start) / divider + 1;
  const startCnt = start / divider - num;
  const colourObject = _.chain(coloursList)
    .keyBy("colourId")
    .value();

  return {
    startPoint: topHeight + cellHeight * startCnt,
    height: cellHeight * heightCnt,
    colour: colourObject[colour]["match"] || "#ddd"
  };
};

// export const cellHeightCaculator = (
//   { start, end, colour },
//   divider,
//   num,
//   topHeight,
//   cellHeight
// ) => {
//   const d = (1.0 / 60) * 100;
//   let tempStart = start % 1;
//   tempStart = start - tempStart + tempStart * d;
//   let tempEnd = end % 1;
//   tempEnd = end - tempEnd + tempEnd * d;
//   const heightCnt = Math.floor((tempEnd - tempStart) / divider + 1);
//   const startCnt = Math.floor(tempStart / divider - num);
//   return {
//     startPoint: topHeight + cellHeight * startCnt,
//     height: cellHeight * heightCnt,
//     colour: colour || "#ddd"
//   };
// };
