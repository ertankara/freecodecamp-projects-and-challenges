/**
 * Compare two different arrays and and return a new array that contains
 * unique elements of each array, (symmetric difference)
 */

function diffArray(arr1, arr2) {
  const newArr = [];
  const maxArray = arr1.length > arr2.length ? arr1 : arr2;
  const minArray = arr1.length > arr2.length ? arr2 : arr1;

  for (let i = 0; i < maxArray.length; i++) {
    if (!minArray.includes(maxArray[i])) {
      newArr.push(maxArray[i]);
    }
  }

  for (let i = 0; i < minArray.length; i++) {
    if (!maxArray.includes(minArray[i])) {
      newArr.push(minArray[i]);
    }
  }
  return newArr;
}

console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"])); // [1, "calf", 3, "piglet", 7, "filly"]