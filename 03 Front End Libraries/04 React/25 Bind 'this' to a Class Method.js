/**
* Task: The code editor has a component with a state that keeps track of an item
* count. It also has a method which allows you to increment this item count.
* However, the method doesn't work because it's using the this keyword that is
* undefined. Fix it by explicitly binding this to the addItem() method in the
* component's constructor.
*
* Next, add a click handler to the button element in the render method. It
* should trigger the addItem() method when the button receives a click event.
* Remember that the method you pass to the onClick handler needs curly braces
* because it should be interpreted directly as JavaScript.
*
* Once you complete the above steps you should be able to click the button and
* see the item count increment in the HTML.
*/
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0
    };
    // change code below this line
    this.addItem = this.addItem.bind(this);
    // change code above this line
  }
  addItem() {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
        <button onClick={this.addItem}>Click Me</button>
        { /* change code above this line */ }
        <h1>Current Item Count: {this.state.itemCount}</h1>
      </div>
    );
  }
};
