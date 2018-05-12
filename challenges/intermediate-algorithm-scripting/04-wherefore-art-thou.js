/**
 * Write a function that looks through an array of objects (first arg)
 * and returns an array of all objects that have matching property and value pairs
 * each prop and value pair of the source object has to be present in
 * the object from the collection if it's to be included in the returned array
 */

function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);
  const validObjects = collection.filter(obj => {
    let bool;
    for (let i = 0; i < sourceKeys.length; i++) {
      bool = true;
      if (
        !(Object.keys(obj).includes(sourceKeys[i]) &&
          obj[sourceKeys[i]] === source[sourceKeys[i]])
      ) {
        bool = false;
      }
    }

    if (bool)
      return obj;
  });

  return validObjects;
}

// [ { "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 } ]
console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));
// [{ "a": 1, "b": 2, "c": 2 }]
console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }));