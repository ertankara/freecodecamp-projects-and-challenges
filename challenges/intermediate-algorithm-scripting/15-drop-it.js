/**
 * Drop the elements of the array starting from the front, until the
 * second arg is true
 */

function dropElements(arr, func) {
  console.log(arr);
  let removeThisMany = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      break;
    }
    removeThisMany++;
  }

  for (let i = 0; i < removeThisMany; i++)
    arr.shift();

  return arr;
}

console.log(dropElements([1, 2, 3], function(n) {console.log(n < 3); return n < 3; }));
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));
console.log(dropElements([0, 1, 0, 1], function(n) { return n === 1; })); // [1, 0, 1]
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}));