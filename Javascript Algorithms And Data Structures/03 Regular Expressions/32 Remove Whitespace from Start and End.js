/**
* Task: Write a regex and use the appropriate string methods to remove whitespace
* at the beginning and end of strings.
*
* Note
* The .trim() method would work here, but you'll need to complete this challenge
* using regular expressions.
*/
let hello = "   Hello, World!  ";
let wsRegex1 = /(^\s+)/;
let wsRegex2 = /(\s+$)/;
let replaceText = '';
let result = hello.replace(wsRegex1, replaceText).replace(wsRegex2, replaceText);
