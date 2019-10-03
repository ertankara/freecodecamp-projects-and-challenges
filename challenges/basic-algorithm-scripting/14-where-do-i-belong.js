/**
 * Find the proper position for the second argument in first argument
 * which is an array
 */

function getIndexToIns(arr, num) {
  const sortedArr = arr.sort((a, b) => a - b);
  let targetIndex = 0;

  while (sortedArr[targetIndex] < num) {
    targetIndex++;
  }

  return targetIndex;
}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([2, 5, 10], 15));