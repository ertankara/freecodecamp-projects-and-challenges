/**
 * You are given two arrays and an index
 * Begin inserting elements at index n of the second array
 * Return the resulting array. The input arrays should remain the same
 * after the function runs
 */

function frankenSplice(arr1, arr2, n) {
  const tempArray = [...arr1];
  const resultArray = [...arr2];

  for (let i = n; tempArray.length > 0; i++) {
    resultArray.splice(i, 0, tempArray.splice(0, 1)[0]);
  }

  return resultArray;
}