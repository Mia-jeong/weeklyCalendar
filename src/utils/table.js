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
export const cellHeightCaculator = (
  { start, end, colour },
  divider,
  num,
  topHeight,
  cellHeight
) => {
  const heightCnt = (end - start) / divider + 1;
  const startCnt = start / divider - num;

  return {
    startPoint: topHeight + cellHeight * startCnt,
    height: cellHeight * heightCnt,
    colour: colour || "#ddd"
  };
};
