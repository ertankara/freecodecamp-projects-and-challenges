/**
 * Sum all the prime numbers up to and including the provided number
 *
 * The provided number may not be a prime number
 */

function sumPrimes(num) {
  if (num <= 1 || !Number.isInteger(num)) {
    return;
  }

  let isPrime,
    result = num > 2 ? 2 : 0;

  for (let i = 3; i <= num; i++) {
    isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      result += i;
    }
  }

  return result;
}

//console.log(sumPrimes(5));
console.log(sumPrimes(5));