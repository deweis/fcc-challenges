/**
* Task: We've defined a function, countOnline; use a for...in statement within
* this function to loop through the users in the users object and return the number of users whose online property is set to true.
*/
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  // change code below this line
  let sum = 0;
  for (let user in obj) {
    if (obj[user].online === true) {
      sum += 1;
    }
  }
  return sum;
  // change code above this line
}

console.log(countOnline(users));
