/**
* Task: A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is
9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
*/

/*
  Version 2: https://repl.it/repls/InstructiveAlertDriver
  - Fill the max palindrome while reducing numA into an array.
  - Add an outer loop to reduce numB and when numA has reached a palindrome,
    reduce numB by 1 and go into the next round of numA
*/

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
