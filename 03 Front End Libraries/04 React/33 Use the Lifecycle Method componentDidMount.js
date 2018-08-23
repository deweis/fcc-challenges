/**
* Task: There is a mock API call in componentDidMount(). It sets state after
* 2.5 seconds to simulate calling a server to retrieve data. This example
* requests the current total active users for a site. In the render method,
* render the value of activeUsers in the h1. Watch what happens in the preview,
* and feel free to change the timeout to see the different effects.
*/
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout( () => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: { /* change code here */ }</h1>
      </div>
    );
  }
};
