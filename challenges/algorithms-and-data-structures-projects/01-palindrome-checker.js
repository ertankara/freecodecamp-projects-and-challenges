/**
 * Palindrome is when a word is equal to itself when reversed too
 */

function palindrome(str) {
  str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/gi, '').toLowerCase();
  const reversed = str.split('').reverse().join('');
  console.log(str);
  if (str === reversed) {
    return true;
  }
  return false;
}

console.log(palindrome("eye!!"));
