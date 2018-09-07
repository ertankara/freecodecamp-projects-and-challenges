/**
 * Return a new array that transforms the elements' average altitude
 * into their orbital periods (in seconds)
 */

function orbitalPeriod(arr) {
  const GM = 398600.4418,
        earthRadius = 6367.4447;

  return arr.map(el => {
    let { name, avgAlt } = el;

    let orbitalPeriod = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + avgAlt, 3) / GM)
    );

    return { name, orbitalPeriod };
  });
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));