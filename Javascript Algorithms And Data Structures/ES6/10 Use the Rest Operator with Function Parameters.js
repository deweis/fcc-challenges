/**
* Task: Modify the function sum so that it uses the rest operator and it works
* in the same way with any number of parameters.
*/
const sum = (function() {
  "use strict";
  return function sum(x, y, z) {
    const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();

console.log(sum(1, 2, 3)); // 6
