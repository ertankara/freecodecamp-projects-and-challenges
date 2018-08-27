/**
 * Take the first letter and append it to the end of the word and also
 * add 'ay' to the end
 *
 * 'consonant' > 'onsonantcay'
 *
 * if the letter starts with a vowel then just appen 'way' to the end
 */

function translatePigLatin(str) {
  const vowels = 'aeiou'.split('');

  if (vowels.includes(str[0])) {
    return str + 'way';
  }

  const letters = str.split(''),
        copyArray = [...letters],
        resultArray = [];

  // glove -> oveglay

  for (let i = 0; i < letters.length; i++) {
    if (!vowels.includes(letters[i])) {
      resultArray.push(copyArray.shift());
    }
    else {
      break;
    }
  }

  console.log('current state: ', resultArray);
  console.log('the copy array: ', copyArray);

  return (copyArray.concat(resultArray)).join('') + 'ay';
}

console.log(translatePigLatin("glove"));