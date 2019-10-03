/**
 * An array with four subarrays will be provided and the function
 * must return a new array consisting of max values from each sub array
 */

function largestOfFour(arr) {
  return arr.map(sub => Math.max(...sub));
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));