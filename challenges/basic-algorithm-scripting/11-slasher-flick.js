/**
 * Chop second argument times element from the head of the array
 */

function slasher(arr, howMany) {
  for (let i = 0; i < howMany; i++) {
    if (arr.length === 0)
      break;
    arr.shift();
  }

  return arr;
}

console.log(slasher([1, 2, 3], 2));
console.log(slasher([1, 2, 3], 9));