/**
 * Return if the provided input is actually primitive boolean
 * falsy or truthy values don't count
 */

function booWho(bool) {
  const boolArr = [true, false];
  if (bool === boolArr[0] || bool === boolArr[1]) {
    return true;
  }
  return false;
}

console.log(booWho(true));