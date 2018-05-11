/**
 * First argument is an array and any number of parameters may be given
 * the arguments that is given after the first one will be the elements
 * that you need to eliminiate from the first argument which was an array
 */

// Using ES6 spread operator
function destroyer(arr, ...rest) {
  const newArr = [];
  const destroyers = [...rest];

  for (let i = 0; i < arr.length; i++) {
    if (!destroyers.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// Using deprecated arguments object
function destroyer_2() {
  const arr = arguments[0];
  const args = [];
  const newArr = [];

  for (let i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (!args.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(destroyer_2([1, 2, 3, 1, 2, 3], 2, 3));
