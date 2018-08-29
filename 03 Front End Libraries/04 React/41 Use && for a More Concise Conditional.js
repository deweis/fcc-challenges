/**
* Task: Solve the previous example again, so the h1 only renders if display is
* true, but use the && logical operator instead of an if/else statement.
*/
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    // change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display === true && <h1>Displayed!</h1>}
       </div>
    );
  }
};
