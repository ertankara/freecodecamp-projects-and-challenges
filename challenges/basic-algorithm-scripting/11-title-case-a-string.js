/*
  Capitalize the each words initial letter
*/

function titleCase(str) {
  const newArr = [];
  const words = str.split(' ');
  for (const word of words) {
    const eachLetter = word.toLowerCase().split('');
    eachLetter[0] = eachLetter[0].toUpperCase();
    newArr.push(eachLetter.join(''));
  }
  return newArr.join(' ');
}


console.log(titleCase('I\'m a little tea pot'));