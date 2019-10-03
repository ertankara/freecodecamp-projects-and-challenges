/**
 *  Find the longest word length from the given string
 */

function findLongestWord(str) {
  let strWithMaxLength = "";
  str.split(" ").forEach(s => {
    if (s.length > strWithMaxLength) {
      strWithMaxLength = s;
    }
  });

  return strWithMaxLength.length;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // jumped