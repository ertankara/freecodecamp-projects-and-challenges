/**
 *  Find the longest word length from the given string
 */

function findLongestWord(str) {
  let max = 0;
  const wordArray = str.split(' ');
  for (let i = 0; i < wordArray.length; i++) {
    if (max < wordArray[i].length) {
      max = wordArray[i].length;
    }
  }
  return max;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // jumped