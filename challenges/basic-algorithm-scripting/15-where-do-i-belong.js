/**
 * Find the proper position for the second argument in first argument
 * which is an array
 */

function getIndexToIns(arr, num) {
  let index;
  arr = arr.sort((a, b) => a - b);
  for (index = 0; index < arr.length; index++) {
    if (arr[index] >= num)
      break;
  }
  return index;
}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([2, 5, 10], 15));