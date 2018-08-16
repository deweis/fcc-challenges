/**
* Task: There is a button element in the code editor which has an onClick()
* handler. This handler is triggered when the button receives a click event in
* the browser, and runs the handleClick method defined on MyComponent. Within
* the handleClick method, update the component state using this.setState().
* Set the name property in state to equal the string React Rocks!.
*
* Click the button and watch the rendered state update. Don't worry if you don't
* fully understand how the click handler code works at this point. It's covered
* in upcoming challenges.
*/
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // change code below this line

    // change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
