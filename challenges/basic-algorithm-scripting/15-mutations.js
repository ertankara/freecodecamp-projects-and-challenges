/**
 * Return true if the first string in the first element of the array
 * contains all the letters of the string in the second element in the array
 *
 * ['hello', 'Hello'] should return true
 *
 * ['hello', 'hey'] should return false because y isn't common
 *
 * ['Alien', 'line'] should return true because all the 'Alien' contains
 * all the letters of 'line'
 */

function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(letter =>
        arr[0]
        .toLowerCase()
        .includes(letter)
      );
}

console.log(mutation(["hello", "Hello"]));
console.log(mutation(["hello", "hey"]));
console.log(mutation(["Alien", "line"]));
console.log(mutation(["Mary", "Aarmy"]));
console.log(mutation(["floor", "for"]));
