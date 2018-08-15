/**
* Task: In the MyComponent render method, define a const called name and set it
* equal to the name value in the component's state. Because you can write
* JavaScript directly in this part of the code, you don't have to enclose this
* reference in curly braces.
*
* Next, in the return statement, render this value in an h1 tag using the
* variable name. Remember, you need to use the JSX syntax (curly braces for
* JavaScript) in the return statement.
*/
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // change code below this line

    // change code above this line
    return (
      <div>
        { /* change code below this line */ }

        { /* change code above this line */ }
      </div>
    );
  }
};
