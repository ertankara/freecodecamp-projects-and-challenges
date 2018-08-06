/**
 * Perform a search and replace on the sentence using the arguments provided
 * and return the new sentence
 *
 * First arg is sentence operate on
 *
 * Second arg is the word that you need to replace
 *
 * Third arg is the target to insert into new sentence
 *
 * You also need to preserve the case if the 'before' arg is a capital
 * letter in the 'str' then 'after' must also be a capital letter
 */

function myReplace(str, before, after) {
  const wordArray = str.split(' ');
  const targetIndex = wordArray.indexOf(before);

  if (before[0].toUpperCase() === before[0]) {
    const eachLetter = after.split('');
    eachLetter[0] = eachLetter[0].toUpperCase();
    after = eachLetter.join('');
  }

  wordArray.splice(targetIndex, 1, after);

  return wordArray.join(' ');
}

// console.log(myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped'));
console.log(myReplace("His name is Tom", "Tom", "john")); // 'His name is John'