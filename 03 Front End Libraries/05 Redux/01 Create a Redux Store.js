/**
* Task: The Redux store is an object which holds and manages application state.
* There is a method called createStore() on the Redux object, which you use to
* create the Redux store. This method takes a reducer function as a required
* argument. The reducer function is covered in a later challenge, and is already
* defined for you in the code editor. It simply takes state as an argument and
* returns state.
*
* Declare a store variable and assign it to the createStore() method, passing
* in the reducer as an argument.
*
* Note: The code in the editor uses ES6 default argument syntax to initialize
* this state to hold a value of 5. If you're not familiar with default
* arguments, you can refer to the ES6 section in the Curriculum which covers
* this topic.
*/
const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
