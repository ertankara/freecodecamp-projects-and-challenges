/**
 * Sum all of the fibonacci numbers that are less than or equal to
 * given input integer
 */

function sumFibs(num) {
  let first = 1,
    second = 1,
    temp = 0,
    total = 0;
  const arr = [1, 1];
  while (second <= num) {
    temp = second;
    second += first;
    first = temp;
    arr.push(second);
  }

  //console.log('here: ', arr);
  for (const el of arr) {
    if (el <= num && el % 2 !== 0) {
      total += el;
    }
  }

  return total;
}

console.log(sumFibs(75025));