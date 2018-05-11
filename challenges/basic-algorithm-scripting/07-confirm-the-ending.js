/**
 * Confirm that second argument is contained in the first argument
 */

function confirmEnding(str, target) {
  return str.substr(-target.length) === target ? true : false;
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("He has to give me a new name", "name"));