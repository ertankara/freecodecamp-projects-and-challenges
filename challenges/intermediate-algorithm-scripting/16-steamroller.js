/**
 * Flatten given array, means get one dimension array out of varying
 * dimensions
 */

function steamrollArray(arr) {
  const result = [];

  function flatten(array) {
    for (const el of array) {
      if (Array.isArray(el)) {
        flatten(el);
      }
      else {
        result.push(el);
      }
    }
    return result;
  }

  return flatten(arr);
}


console.log(steamrollArray([[1],[2]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));