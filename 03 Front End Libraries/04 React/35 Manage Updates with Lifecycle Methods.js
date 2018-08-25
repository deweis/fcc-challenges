/**
* Task: The child component Dialog receives message props from its parent, the
* Controller component. Write the componentWillReceiveProps() method in the
* Dialog component and have it log this.props and nextProps to the console.
* You'll need to pass nextProps as an argument to this method and although
* it's possible to name it anything, name it nextProps here.
*
* Next, add componentDidUpdate() in the Dialog component, and log a statement
* that says the component has updated. This method works similar to
* componentWillUpdate(), which is provided for you. Now click the button to
* change the message and watch your browser console. The order of the console
* statements show the order the methods are called.
*
* Note: You'll need to write the lifecycle methods as normal functions and not
* as arrow functions to pass the tests (there is also no advantage to writing
* lifecycle methods as arrow functions).
*/
class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillUpdate() {
    console.log('Component is about to update...');
  }
  // change code below this line
  componentWillReceiveProps(nextProps) {
    console.log(this.props);
    console.log(nextProps);
  }

  componentDidUpdate() {
    console.log('the component has updated');
  }
  // change code above this line
  render() {
    return <h1>{this.props.message}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'First Message'
    };
    this.changeMessage = this.changeMessage.bind(this);
  }
  changeMessage() {
    this.setState({
      message: 'Second Message'
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.changeMessage}>Update</button>
        <Dialog message={this.state.message}/>
      </div>
    );
  }
};
