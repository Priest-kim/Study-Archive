/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  nums.sort((a, b) => b - a); // 내림 차순으로 정렬

  const total = nums.reduce((sum, num) => sum + num, 0); // nums의 총합
  const half = total / 2; // 과반수

  let sum = 0;
  for (const num of nums) {
    sum += num; // 인덱스 0부터 (가장 큰 값부터) 합

    if (sum > half) {
      /**
       * 지금까지의 합이 과반수를 넘었다면;
       * 인덱스 0 부터 지금까지의 인덱스를 잘라서 반환하는데,
       *  i + 1을 한 이유는 slice의 두번째 파라미터는 해당 인덱스 까지 ( 인덱스는 제외하고 앞 )
       * 잘라서 반환 하기 떄문에
       */
      return nums.slice(0, i + 1);
    }
  }
};
