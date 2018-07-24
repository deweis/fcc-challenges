/**
* Task: Fill in the body of the add function so it uses currying to add
* parameters x, y, and z.
*/
function add(x) {
  // Add your code below this line
  return function(y) {
    return function(z) {
      return x + y + z;
    }
  }

  // Add your code above this line
}
add(10)(20)(30);
