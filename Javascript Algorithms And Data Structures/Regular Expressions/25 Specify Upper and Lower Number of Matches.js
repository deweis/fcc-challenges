/**
* Task: Change the regex countNonWhiteSpace to look for multiple non-whitespace
* characters in a string.
*/
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);
