/**
 * Create a function that sums two arguments together. If only one arg
 * is provided, then return a function that expects one arg and returns
 * the sum
 */

function addTogether(a, b) {
  if (typeof a !== 'number')
    return undefined;

  if (b !== void 0) {
    if (typeof b !== 'number')
      return undefined;
    return a + b;
  }

  return function (c) {
    if (typeof c !== 'number')
      return undefined;

    return a + c;
  }
}

//console.log(addTogether(2, 3));
//console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));