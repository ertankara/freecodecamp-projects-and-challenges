/**
 * First element will be an array
 * and second parameter is a test function
 * first element that passes test function
 * should be returned
 *
 */

function findElement(arr, func) {
  for (const element of arr) {
    if (func(element)) {
      return element;
    }
  }
  return;
}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });