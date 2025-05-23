/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
  let even = 0; // 짝수 카운트
  let odd = 0; // 홀수 카운트

  for (const pos of position) {
    if (pos % 2 === 0) {
      // 짝수 면
      even++;
    }
    // 홀수 면
    else {
      odd++;
    }
  }

  return Math.min(even, odd);
};
