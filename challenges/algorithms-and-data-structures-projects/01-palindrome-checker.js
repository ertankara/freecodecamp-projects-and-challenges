/**
 * Palindrome is when a word is equal to itself when reversed too
 */

String.prototype.reverse = function() {
  return String(this.split('').reverse().join(''));
}

function palindrome(str) {
  const rawString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  console.log(rawString, rawString.reverse());

  if (rawString === rawString.reverse()) {
    return true;
  }

  return false;
}


console.log(palindrome("1 eye for of 1 eye."));