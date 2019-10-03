/**
 * Write a function that divides the main array which is first argument
 * second argument decides the length of sub arrays
 */

function chunkArrayInGroups(arr, size) {
  const containerArr = [];

  let index = 0;
  while (index < arr.length) {
    containerArr.push(arr.slice(index, index + size))
    index += size;
  }

  return containerArr;
}

//console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));