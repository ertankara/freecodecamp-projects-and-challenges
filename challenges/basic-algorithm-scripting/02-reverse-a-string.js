/**
 *  Write a function that reverses the give string parameter
 */

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('Hello'));