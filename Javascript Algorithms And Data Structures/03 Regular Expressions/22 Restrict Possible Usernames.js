/**
* Task: Change the regex userCheck to fit the constraints listed above.
*/
let username = "JackOfAllTrades";
let userCheck = /[a-z]/gi; // this works but is obviously wrong??
//let userCheck = /[a-z]{2,}\d*$/gi; // this won't work but would be my answer...
let result = userCheck.test(username);
