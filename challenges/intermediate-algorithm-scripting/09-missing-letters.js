/**
 * Return missing letter from the given input
 * if every letter is in the right order return undefined
 */


function fearNotLetter(str) {
  const eachLetter = str.toLowerCase().split('');
  const correspondingCode = eachLetter.map(letter => letter.codePointAt(0));

  for (let i = 0; i < correspondingCode.length; i++) {
    if (correspondingCode[i + 1] && correspondingCode[i + 1] - correspondingCode[i] !== 1) {
      return String.fromCodePoint(correspondingCode[i] + 1);
    }
  }
  return undefined;
}

console.log(fearNotLetter('abce')); // 'd'
console.log(fearNotLetter('abcdefghjklmno')); // 'i'
console.log(fearNotLetter("yz")); // undefined