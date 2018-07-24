/**
* Task: An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7]
* using various element assignment.
*/
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  // s = [2, 5, 7]; <- this is invalid
  s.splice(0,0,s.pop());
  // change code above this line
}
editInPlace();
