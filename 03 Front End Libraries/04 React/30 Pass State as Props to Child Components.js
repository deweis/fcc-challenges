/**
* Task: The MyApp component is stateful and renders a Navbar component as a
* child. Pass the name property in its state down to the child component, then
* show the name in the h1 tag that's part of the Navbar render method.
*/
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         <Navbar /* your code here */ />
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h1>Hello, my name is: /* your code here */ </h1>
    </div>
    );
  }
};
