/**
 * Repeat a string second argument times
 */

function repeatStringNumTimes(str, num) {
  if (num < 0) return '';
  return str.repeat(num);
}

console.log(repeatStringNumTimes("abc", 3));