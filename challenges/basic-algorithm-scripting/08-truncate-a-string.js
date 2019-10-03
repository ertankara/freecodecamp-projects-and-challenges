/**
 * Second argument is maximum returnable string length
 * truncate first argument if its length is longer than the max length
 * which is second argument, then add three dots to represented non-returned
 * characters but if str length is less than or equal to 3 three dots are
 * not included in the total length that is going to be returned
 */

function truncateString(str, num) {
  if (str.length <= num) return str;

  let newStr = "";
  let letterIndex = 0;

  while (newStr.length < num) {
    newStr += str[letterIndex];
    letterIndex ++;
  }

  return newStr + "...";
  // if (str.length <= num) {
  //   return str;
  // }

  // let result = '';

  // if (str.length > num && str.length <= 3) {
  //   result = str.slice(0, num) + '...';
  // }
  // else if (str.length > num) {
  //   let until = num - 3 < 0 ? num : num - 3;
  //   result = str.slice(0, until) + '...';
  // }

  // return result;
}


console.log(truncateString('abc', 1));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
console.log(truncateString("Absolutely Longer", 2));