/*
 * Write a function that converts string of binary
 * numbers in to English words
 *
 */

function binaryAgent(str) {
  const eachBinary = str.split(' ');

  const decimalVal = eachBinary.map(el => {
    const eachChar = el.split('');
    let total = 0;
    for (let i = eachChar.length - 1, j = 0; i >= 0; i--, j++) {
      if (eachChar[i] === '1') {
        total += Math.pow(2, j);
      }
    }
    return total;
  });

  return getStrEquivalent = decimalVal.map(el => String.fromCodePoint(el)).join('');
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
//console.log(binaryAgent('01000001'));
console.log(binaryAgent('01000001'));
