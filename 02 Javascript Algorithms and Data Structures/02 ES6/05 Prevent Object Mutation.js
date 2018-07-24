/**
* Task: In this challenge you are going to use Object.freeze to prevent
* mathematical constants from changing. You need to freeze MATH_CONSTANTS
* object so that noone is able alter the value of PI or add any more properties
* to it.
*/
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line
  Object.freeze(MATH_CONSTANTS);

  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
