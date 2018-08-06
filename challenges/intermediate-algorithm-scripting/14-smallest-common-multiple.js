/**
 * Write a function that finds smallest common multiple of a given range
 *
 * Array with two elements will be given as parameter
 * the number not guranteed to be ordered
 */

function smallestCommons(arr) {
  const
    max = Math.max(...arr),
    min = Math.min(...arr);

  let isDivisible;
  for (let i = 1; true; i++) {
    isDivisible = true;
    for (let j = min; j <= max; j++) {
      if (i % j !== 0) {
        isDivisible = false;
        break;
      }
    }
  if (isDivisible)
    return i.toString();
  }
}

//console.log(smallestCommons([1,5]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));

console.log(smallestCommons([23, 18]) === 6056820);