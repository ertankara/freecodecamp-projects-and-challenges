/**
 * Sum all the numbers in the given range
 * range is provided by the array's first and second elements
 */

function sumAll(arr) {
  let total = 0;

  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    total += i;
  }

  return total;
}

console.log(sumAll([1, 4]));