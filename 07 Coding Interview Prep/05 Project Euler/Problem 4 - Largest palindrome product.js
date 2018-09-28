/**
* Task: A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is
9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
*/

/*
 Version 4: Place the outer loop into the recursive function
 ... but stack exceed.. with n=4..
*/
function largestPalindromeProduct(n) {
  /* define the two numbers based on n */
  let num1 = [];
  let num2 = [];

  for (let i = 0; i < n; i++) {
    num1.push(9);
    num2.push(9);
  }

  num1 = num1.join('');
  num2 = num2.join('');

  /* function to check if a number is a palindrome */
  const isPalindrome = (num) => Number(String(num).split('').reverse().join('')) === num;

  let maxPal;

  /* the recursion.. */
  function findPalindrome(numA, numB) {
    if (numB === 1) {
      return;
    } else if (numA === 1 || numA * numB < maxPal) {
      numA = --numB;
      findPalindrome(numA, numB);
    } else if (isPalindrome(numA * numB)) {
      maxPal = numA * numB;
      numA = --numB;
      findPalindrome(numA, numB);
    } else {
      findPalindrome(--numA, numB);
    }

    return maxPal;
  }

  return findPalindrome(num1, num2);
}

largestPalindromeProduct(3);

/*
  Version 3: Replace the for loops with recursive functions
*/
function largestPalindromeProduct(n) {

  /* Function to evaluate if a number is a palindrome */
  const isPalindrome = (num) => Number(String(num).split('').reverse().join('')) === num;

  /* define the two numbers based on n */
  let numA = [];
  let numB = [];

  for (let i = 0; i < n; i++) {
    numA.push(9);
    numB.push(9);
  }

  numA = numA.join('');
  numB = numB.join('');

  /* loop through to find the palindromes */
  let result = [];

  function findPalindrome(num1, num2) {
    if (num1 === 1) {
      return;
    } else if (isPalindrome(num1 * num2)) {
      result.push(num1 * num2);
      return;
    } else {
      findPalindrome(num1 - 1, num2);
    }
  }

  for (let j = numB; j > 1; j--) {
    findPalindrome(numA, j);
  }

  console.log(result.length);
  return result.sort((a, b) => b - a)[0];
}

largestPalindromeProduct(3);

/*
  Version 2: https://repl.it/repls/InstructiveAlertDriver
  - Fill the max palindrome while reducing numA into an array.
  - Add an outer loop to reduce numB and when numA has reached a palindrome,
    reduce numB by 1 and go into the next round of numA
*/
function largestPalindromeProduct(n) {
  const isPalindrome = (num) => Number(String(num).split('').reverse().join('')) === num;

  let numA = [];
  let numB = [];

  for (let i = 0; i < n; i++) {
    numA.push(9);
    numB.push(9);
  }

  numA = numA.join('');
  numB = numB.join('');

  let res = [];
  let counter = 0;

  for (let j = numB; j > 1; j--) {
    //console.log(j);
    counter = 0;
    for (let i = 0; i < numA; i++) {
      let numAReduced = numA - i;
      if (isPalindrome(numAReduced * j)) {
        //console.log(numAReduced + ' * ' + j);
        //console.log(numAReduced * j);
        res.push(numAReduced * j);
        counter = 1;
      }

      if (counter === 1) {

        break;
      }
    }
  }

  return res.sort((a, b) => b - a)[0];
}

/* Version 1: Works for n = 2
      Issue: n = 3 returns */
function largestPalindromeProduct(n) {

  // Checks if an input number is a palindrome
  const isPalindrome = (num) => Number(String(num)
                                        .split('')
                                        .reverse()
                                        .join('')) === num;

  let numA = [];
  let numB = [];

  for (let i = 0; i < n; i++) {
    numA.push(9);
    numB.push(9);
  }

  numA = numA.join('');
  numB = numB.join('');

  let res;

  for (let i = 1; i < numA; i++) {
    if (isPalindrome((numA - i) * numB)) {
      return res = (numA - i) * numB;
    }
  }

  return res;
}

largestPalindromeProduct(3);
