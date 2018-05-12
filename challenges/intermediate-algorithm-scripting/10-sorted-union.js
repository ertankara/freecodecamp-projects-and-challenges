/**
 * Return unique elements from the provided arrays the order must stay same
 * The number of arrays are unknown and each of them are given seperately
 */

function uniteUnique(...arr) {
  const mainArray = [...arr];
  const resultArray = [];

  for (let i = 0; i < mainArray.length; i++) {
    for (let j = 0; j < mainArray[i].length; j++) {
      if (!resultArray.includes(mainArray[i][j])) {
        resultArray.push(mainArray[i][j]);
      }
    }
  }
  return resultArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [1, 3 ,2, 5, 4]
