/**
* Task: MyComponent has a visibility property which is initialized to false.
* The render method returns one view if the value of visibility is true, and a
* different view if it is false.
*
* Currently, there is no way of updating the visibility property in the
* component's state. The value should toggle back and forth between true and
* false. There is a click handler on the button which triggers a class method
* called toggleVisibility(). Define this method so the state of visibility
* toggles to the opposite value when the method is called. If visibility is
* false, the method sets it to true, and vice versa.
*
* Finally, click the button to see the conditional rendering of the component
* based on its state.
*
* Hint: Don't forget to bind the this keyword to the method in the constructor!
*/
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // change code above this line
  }
  // change code below this line
  toggleVisibility() {
    this.setState({
      visibility: !this.state.visibility,
    });
  }

  // change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
};
