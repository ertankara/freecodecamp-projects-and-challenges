/**
 * Write a function that looks through an array of objects (first arg)
 * and returns an array of all objects that have matching property and value pairs
 * each prop and value pair of the source object has to be present in
 * the object from the collection if it's to be included in the returned array
 */

function whatIsInAName(collection, source) {
  const keys = Object.keys(source),
        result = [];
  let bool;
  for (const obj of collection) {
    bool = true;
    const keysOfObj = Object.keys(obj);
    // First make sure all the keys are present in the object
    for (const key of keys) {
      if (!keysOfObj.includes(key) || source[key] !== obj[key]) {
        bool = false;
        break;
      }
    }


    if (bool) {
      result.push(obj);
    }
  }

  return result;
}
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
//console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));