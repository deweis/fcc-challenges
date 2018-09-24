/**
* Task: The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?
*/

// Try making it recursive

function isPrime(num) {
  if (num < 2) return false;
  const half = num / 2;
  for (let i = 2; i <= half; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return num;
}

function largestPrimeFactor(number) {
  if (isPrime(number)) {
    return number;
  }

  let result;
  const half = number / 2;
  for (let i = 2; i <= half; i++) {
    if (isPrime(i) && number % i === 0) {
      result = isPrime(i);
    }
  }

  return result;
}
