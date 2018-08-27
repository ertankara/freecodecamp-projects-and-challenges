/**
 * spinalCase function needs to return input as spinal-tap-case
 *
 * input can be in following formats
 *
 * asCamelCase, Best_Input_Ever, Teletubbies say Eh-Oh, AllThe-small Things
 */

function spinalCase(str) {
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
}

console.log(spinalCase('This_is_Spinal_Case'));
console.log(spinalCase('The_Andy_Griffith_Show'));
