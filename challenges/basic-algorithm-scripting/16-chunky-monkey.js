/**
 * Write a function that divides the main array which is first argument
 * second argument decides the length of sub arrays
 */

function chunkArrayInGroups(mainArray, arrayLength) {
  const newArr = [];
  for (let i = 0; i < mainArray.length; i += arrayLength) {
    const subArray = [];
    for (let j = i; j < i + arrayLength; j++) {
      if (mainArray[j] !== undefined) {
        subArray.push(mainArray[j]);
      }
    }
    newArr.push(subArray);
  }
  return newArr;
}

//console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));