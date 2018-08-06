/**
 * Check if predicate (second arg) is truthy on all elements of a collection
 * return true, else return false
 *
 */

function truthCheck(collection, pre) {
  const checkObjects = collection.map(obj => {
    for (const prop in obj) {
      if (pre === prop && obj[prop]) {
        return true;
      }
    }
    return false;
  });

  return !checkObjects.includes(false);
}


console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));