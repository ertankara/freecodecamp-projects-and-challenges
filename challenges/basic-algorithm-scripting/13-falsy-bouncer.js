/**
 * Remove all the falsy values from the array
 */

function bouncer(arr) {
  return arr.filter(el => el);
}

console.log(bouncer([7, "ate", "", false, 9]));