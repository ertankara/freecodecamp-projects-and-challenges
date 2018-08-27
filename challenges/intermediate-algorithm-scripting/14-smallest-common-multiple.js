/**
 * Write a function that finds smallest common multiple of a given range
 *
 * Array with two elements will be given as parameter
 * the number not guranteed to be ordered
 */

function smallestCommons(arr) {
  const small = Math.min(...arr),
        big = Math.max(...arr);

  if (small === 0 || big === 0) throw new Error('Dividing with 0 creates black holes');

  let bool,
      calc = big * small;

  for (let i = calc; true; i += calc) {
    bool = true;

    for (let j = big; j >= small; j--) {
      if (i % j !== 0) {
        bool = false;
        break;
      }
    }

    if (bool) {
      return i;
    }
  }
}



console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));
