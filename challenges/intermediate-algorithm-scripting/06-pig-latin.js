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

  if (vowels.includes(str[0]))
    return str + 'way';

  const eachLetter = str.split('');
  const firstLetter = eachLetter.splice(0, 1)[0];
  eachLetter.push(firstLetter, 'ay');

  return eachLetter.join('');
}

//console.log(translatePigLatin('consonant'));
console.log(translatePigLatin("glove"));