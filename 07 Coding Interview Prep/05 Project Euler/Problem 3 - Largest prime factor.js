/**
* Task: The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?
*/

/*
Version 1:
--> Hanging at largestPrimeFactor(600851475143);
*/

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

/*
Version 2: Try filling an array with all prime numbers and then get the max
--> tbd
*/

/*
Version 3: Make the function recursive
--> Works fine for 13195 but getting "Potential infinite loop" error on 600851475143
*/

/* Recursive isPrime
   divisor to be added is 2 in the beginning
   I.e. isPrimeRec(16,2); */
function isPrimeRec(num, divisor) {
  if (num === divisor) {
    return num;
  } else if (num % divisor === 0) {
    return false;
  } else {
    return isPrimeRec(num, divisor + 1);
  }
}

function largestPrimeFactor(number) {
  if (isPrimeRec(number, 2)) {
    return number;
  }

  let result;
  const half = number / 2;
  for (let i = 2; i <= half; i++) {
    if (isPrimeRec(i, 2) && number % i === 0) {
      result = isPrimeRec(i, 2);
    }
  }

  return result;
}

largestPrimeFactor(600851475143);

/*
Version 3: Make the largestPrimeFactor recursive as well
--> 
*/
