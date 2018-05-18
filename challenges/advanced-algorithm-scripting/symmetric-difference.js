function sym(...args) {
  const arrays = [...args];
  const allElements = [];
  const newArr = [];

  for (const array of arrays) {
    allElements.push(...array);
  }

  let encountered = 0;
  for (const array of arrays) {
    for (let i = 0; i < allElements.length; i++) {

    }
  }

  return newArr;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
//console.log(sym([1, 2, 3], [5, 2, 1, 4]));