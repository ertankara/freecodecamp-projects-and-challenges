/*
  Capitalize the each words initial letter
*/

function titleCase(str) {
  return str
    .split(" ")
    .map(s => s[0].toUpperCase() + s.slice(1).toLowerCase())
    .join(" ");
}


console.log(titleCase('I\'m a little tea pot'));