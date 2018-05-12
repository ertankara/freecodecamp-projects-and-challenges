/**
 * Sum all the numbers in the given range
 * range is provided by the array's first and second elements
 */

function sumAll(arr) {
  const max = Math.max(...arr),
    min = Math.min(...arr);

  let result = 0;
  for (let i = min; i <= max; i++) {
    result += i;
  }

  return result;
}

console.log(sumAll([1, 4]));